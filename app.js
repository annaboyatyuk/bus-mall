'use strict';

var allpictures = [];

function Pictures(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allpictures.push(this);
}

new Pictures('Bag', 'img/bag.jpg');
new Pictures('Banana Slicer', 'img/banana.jpg');
new Pictures('Bathroom', 'img/bathroom.jpg');
new Pictures('Boots', 'img/boots.jpg');
new Pictures('Breakfast', 'img/breakfast.jpg');
new Pictures('Meatball Gum', 'img/bubblegum.jpg');
new Pictures('Chair', 'img/chair.jpg');
new Pictures('Cthulhu', 'img/cthulhu.jpg');
new Pictures('Dog-Duck', 'img/dog-duck.jpg');
new Pictures('Dragon Meat', 'img/dragon.jpg');
new Pictures('Pen', 'img/pen.jpg');
new Pictures('Pet Sweeper', 'img/pet-sweep.jpg');
new Pictures('Tauntaun', 'img/tauntaun.jpg');
new Pictures('Unicorn Meat', 'img/unicorn.jpg');
new Pictures('Usb', 'img/usb.gif');
new Pictures('Water Can', 'img/water-can.jpg');
new Pictures('Wine Glass', 'img/wine-glass.jpg');




var generateRandom = function() {
  return Math.floor(Math.random() * Pictures.allpictures.length);
};

var firstProduct;
var secondProduct;
var thirdProduct;

var randomPic = function() {
  var firstimg =document.getElementById('firstimg');
  var secondimg =document.getElementById('secondimg');
  var thirdimg =document.getElementById('thirdimg');
  firstimg = generateRandom();
  secondimg = generateRandom();
  thirdimg = generateRandom();
};
randomPic();



// var randomIndex = Math.floor(Math.random() * Pictures.allpictures.length);
// firstimg.src = Pictures.allpictures[randomIndex].filepath;
// secondimg.src = Pictures.allpictures[randomIndex].filepath;
// thirdimg.src = Pictures.allpictures[randomIndex].filepath;
// }



firstimg.addEventListener('click', randomPic);
secondimg.addEventListener('click', radomPic);
thirdimg.addEventListener('click', radomPic);



