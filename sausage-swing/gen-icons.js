/* Generates the PWA icons (a happy swinging sausage) as PNGs — no deps beyond
   node's zlib. Renders at 4x supersample then box-downsamples for smooth edges. */
const zlib = require('zlib');
const fs = require('fs');

function makeIcon(size){
  const ss = 4, W = size * ss, H = size * ss;
  const buf = new Float32Array(W * H * 4); // rgba 0..255

  const px = (x, y, r, g, b, a) => {
    x |= 0; y |= 0; if (x < 0 || y < 0 || x >= W || y >= H) return;
    const i = (y * W + x) * 4, ia = a / 255, na = 1 - ia;
    buf[i]   = buf[i]   * na + r * ia;
    buf[i+1] = buf[i+1] * na + g * ia;
    buf[i+2] = buf[i+2] * na + b * ia;
    buf[i+3] = Math.max(buf[i+3], a);
  };
  const disc = (cx, cy, rad, r, g, b, a=255) => {
    for (let y = cy-rad; y <= cy+rad; y++)
      for (let x = cx-rad; x <= cx+rad; x++){
        const d = Math.hypot(x-cx, y-cy);
        if (d <= rad) px(x, y, r, g, b, a);
      }
  };
  const capsule = (cx, cy, rad, halfLen, r, g, b, a=255) => {
    for (let y = cy-halfLen-rad; y <= cy+halfLen+rad; y++)
      for (let x = cx-rad; x <= cx+rad; x++){
        let dy = 0;
        if (y < cy-halfLen) dy = (cy-halfLen) - y;
        else if (y > cy+halfLen) dy = y - (cy+halfLen);
        if (Math.hypot(x-cx, dy) <= rad) px(x, y, r, g, b, a);
      }
  };
  const line = (x1,y1,x2,y2,w,r,g,b) => {
    const n = Math.hypot(x2-x1,y2-y1)|0;
    for (let t=0;t<=n;t++){ const x=x1+(x2-x1)*t/n, y=y1+(y2-y1)*t/n; disc(x|0,y|0,w,r,g,b); }
  };

  // Background: sky gradient over grass, rounded-square.
  for (let y=0;y<H;y++) for (let x=0;x<W;x++){
    const f = y/H;
    let r,g,b;
    if (f < 0.72){ const t=f/0.72; r=0x79+(0xbf-0x79)*t; g=0xc6+(0xe9-0xc6)*t; b=0xe8+(0xf5-0xe8)*t; }
    else { r=0x57; g=0xb9; b=0x4f; }
    const i=(y*W+x)*4; buf[i]=r; buf[i+1]=g; buf[i+2]=b; buf[i+3]=255;
  }
  // Sun.
  disc(W*0.80, H*0.20, W*0.10, 0xff, 0xf4, 0xbe);
  // A vine the sausage hangs from.
  line(W*0.5, -2, W*0.62, H*0.30, W*0.012, 0xef, 0xe6, 0xc8);

  // Sausage body — tilted like a swing.
  const cx = W*0.5, cy = H*0.52, rad = W*0.135, half = W*0.16;
  const ox = Math.cos(-0.35), oy = Math.sin(-0.35);
  // (draw upright then it's fine at small size; keep simple & bold)
  // Stick arms reaching up to the vine.
  line(cx-rad*0.4, cy-half*0.6, cx+W*0.10, cy-half-W*0.05, W*0.018, 0xc7,0x6b,0x39);
  line(cx+rad*0.4, cy-half*0.6, cx+W*0.10, cy-half-W*0.05, W*0.018, 0xc7,0x6b,0x39);
  // Stick legs.
  line(cx-rad*0.3, cy+half*0.7, cx-rad*0.6, cy+half+W*0.06, W*0.018, 0xc7,0x6b,0x39);
  line(cx+rad*0.3, cy+half*0.7, cx+rad*0.7, cy+half+W*0.06, W*0.018, 0xc7,0x6b,0x39);
  // Outline + body.
  capsule(cx, cy, rad+W*0.014, half, 0xa4,0x53,0x1f);
  capsule(cx, cy, rad, half, 0xe0,0x82,0x4a);
  // A link pinch highlight.
  capsule(cx-rad*0.45, cy, rad*0.18, half*0.8, 0xea,0x93,0x5c);

  // Face near the top.
  const fy = cy - half*0.35;
  disc(cx-rad*0.42, fy, rad*0.30, 255,255,255);
  disc(cx+rad*0.42, fy, rad*0.30, 255,255,255);
  disc(cx-rad*0.42, fy+rad*0.05, rad*0.15, 0x22,0x22,0x22);
  disc(cx+rad*0.42, fy+rad*0.05, rad*0.15, 0x22,0x22,0x22);
  // Smile (arc of dots).
  for (let a=0.2; a<=Math.PI-0.2; a+=0.08){
    const sx = cx + Math.cos(a)*rad*0.55, sy = fy+rad*0.55 + Math.sin(a)*rad*0.35;
    disc(sx, sy, W*0.010, 0x3a,0x1e,0x0d);
  }
  // Rosy cheeks.
  disc(cx-rad*0.75, fy+rad*0.4, rad*0.16, 0xff,0x8a,0x6a, 120);
  disc(cx+rad*0.75, fy+rad*0.4, rad*0.16, 0xff,0x8a,0x6a, 120);

  // Downsample ss*ss -> size.
  const out = Buffer.alloc(size*size*4);
  for (let y=0;y<size;y++) for (let x=0;x<size;x++){
    let r=0,g=0,b=0,a=0;
    for (let sy=0;sy<ss;sy++) for (let sx=0;sx<ss;sx++){
      const i=((y*ss+sy)*W + (x*ss+sx))*4; r+=buf[i]; g+=buf[i+1]; b+=buf[i+2]; a+=buf[i+3];
    }
    const n=ss*ss, o=(y*size+x)*4;
    out[o]=r/n|0; out[o+1]=g/n|0; out[o+2]=b/n|0; out[o+3]=a/n|0;
  }
  return out;
}

/* ---- Minimal PNG encoder (RGBA, no interlace) ---- */
function crc32(buf){
  let c=~0;
  for (let i=0;i<buf.length;i++){ c^=buf[i]; for(let k=0;k<8;k++) c=(c>>>1)^(0xEDB88320 & -(c&1)); }
  return (~c)>>>0;
}
function chunk(type, data){
  const len=Buffer.alloc(4); len.writeUInt32BE(data.length,0);
  const t=Buffer.from(type,'ascii');
  const crc=Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t,data])),0);
  return Buffer.concat([len,t,data,crc]);
}
function encodePNG(rgba, size){
  const sig=Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr=Buffer.alloc(13);
  ihdr.writeUInt32BE(size,0); ihdr.writeUInt32BE(size,4);
  ihdr[8]=8; ihdr[9]=6; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  const raw=Buffer.alloc(size*(size*4+1));
  for (let y=0;y<size;y++){ raw[y*(size*4+1)]=0; rgba.copy(raw, y*(size*4+1)+1, y*size*4, (y+1)*size*4); }
  const idat=zlib.deflateSync(raw,{level:9});
  return Buffer.concat([sig, chunk('IHDR',ihdr), chunk('IDAT',idat), chunk('IEND',Buffer.alloc(0))]);
}

for (const [name,size] of [['icon-512.png',512],['icon-192.png',192],['apple-touch-icon.png',180]]){
  fs.writeFileSync(__dirname+'/'+name, encodePNG(makeIcon(size), size));
  console.log('wrote', name, size);
}
