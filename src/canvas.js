import {Dot} from './Dot.js'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const img = document.querySelector('img');

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.drawImage(img, 0, 0);
	const imageData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
  const dots = [];
  const pixels = [];

 for (let i = 0; i < imageData.length; i += 4) {
   if(imageData[i] === 0) continue;

	const x = (i /4) % img.naturalWidth;
	const y = Math.floor(Math.floor(i / img.naturalWidth) / 4);

  pixels.push({
		x,
		y,
		r: imageData[i],
		g: imageData[i + 1],
		b: imageData[i + 2]
	});
 };

pixels.forEach(pixel =>{
	dots.push(new Dot(pixel.x, pixel.y, pixel.r, pixel.g, pixel.b, 0, 0));
});

ctx.clearRect(0, 0, innerWidth,innerHeight);
dots.forEach(dot =>{
	dot.draw(ctx);
});

console.log(dots);
