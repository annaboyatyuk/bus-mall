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



var firstImg =document.getElementById('firstimg');
var secondImg =document.getElementById('secondimg');
var thirdImg =document.getElementById('thirdimg');
console.log(firstImg);
console.log(secondImg);
console.log(thirdImg);


function randomPic() {
  var randomIndexOne = Math.floor(Math.random() * allpictures.length);
  firstImg.src = allpictures[randomIndexOne].filepath;
  firstImg.addEventListener('click', randomPic);
  console.log(randomIndexOne);

  var randomIndexTwo = Math.floor(Math.random() * allpictures.length);
  secondImg.src = allpictures[randomIndexTwo].filepath;
  secondImg.addEventListener('click', randomPic);
  console.log(randomIndexTwo);

  var randomIndexThree = Math.floor(Math.random() * allpictures.length);
  thirdImg.src = allpictures[randomIndexThree].filepath;
  if (randomIndexOne === randomIndexTwo || randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree) {
    randomIndexThree = randomPic();
  }
  thirdImg.addEventListener('click', randomPic);
  console.log(randomIndexThree);
}
randomPic();
console.log(allpictures.name);






