import {Dot} from './Dot.js'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const img = document.querySelector('img');

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('load', () => {
  c.drawImage(img, 0, 0);
  const imageData = c.getImageData(0, 0, img.naturalWidth, img.naturalHeight)
    .data;

  const dots = [];
  const pixels = [];

 for (let i = 0; i < imageData.length; i += 4) {
  
 }
console.log(imageData);
});