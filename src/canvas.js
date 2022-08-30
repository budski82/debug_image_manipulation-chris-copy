
import {Dot} from './Dot.js'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const img = document.querySelector('img');
console.log(gsap);
canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.drawImage(img, 0, 0);

	const imageData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
  const dots   = [];
  const pixels = [];

 for (let i = 0; i < imageData.length; i += 4) {
   if(imageData[i] === 0) continue;

	const x = (i /4) % img.naturalWidth;
	const y = Math.floor(Math.floor(i / img.naturalWidth) / 4); 

 if(x % 5 === 0 && y % 5 === 0){
  pixels.push({
		x,
		y,
		r: imageData[i],
		g: imageData[i + 1],
		b: imageData[i + 2]
	});
 };
};

pixels.forEach((pixel, i) =>{
  // const x = pixel.x + canvas.width  *.5 - img.naturalWidth   * .5;
  // const y = pixel.y + canvas.height *.5 - img.naturalHeight  * .5;
  let rand = Math.random() * Math.PI * 2;
	const x = Math.sin(rand) * 100 + canvas.width / 2;
	const y = Math.cos(rand) * 100 + canvas.height / 2;
  dots.push(new Dot(x, y, pixel.r, pixel.g, pixel.b, 0, 0));
  rand =  Math.random() * Math.PI * 2;

 gsap.to(dots[i], {
	duration: 5,
	x: Math.sin(rand) *100 + canvas.width / 2,
	y: Math.cos(rand) *100 + canvas.height / 2,
 })
});

function animate() {
	requestAnimationFrame(animate)
	ctx.clearRect(0, 0, innerWidth,innerHeight);
  dots.forEach(dot =>{
	dot.draw(ctx);
	//dot.x++
	});
};
animate();
