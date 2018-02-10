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



var firstimg =document.getElementById('firstimg');
var secondimg =document.getElementById('secondimg');
var thirdimg =document.getElementById('thirdimg');


function randomPic() {
  var randomIndex = Math.floor(Math.random() * allpictures.length);
  
  firstimg.src = allpictures[randomIndex].filepath;
  firstimg.addEventListener('click', randomPic);
  
  for (var i = 0; i < allpictures.length; i++) {
    if (secondimg === firstimg)
      secondimg = randomPic();
  }
  secondimg.addEventListener('click', randomPic);
  secondimg.src = allpictures[randomIndex].filepath;
  
  for (var j = 0; j < allpictures.length; j++) {
    if (firstimg === secondimg || firstimg === thirdimg || secondimg ===thirdimg) 
      thirdimg = randomPic();
  }
  thirdimg.src = allpictures[randomIndex].filepath;
  thirdimg.addEventListener('click', randomPic);
}
randomPic();
console.log(allpictures);






// var generateRandom = function() {
//   return Math.floor(Math.random() * allpictures.length);
// };


// var randomPic = function() {
//   var firstimg =document.getElementById('firstimg');
//   firstimg = generateRandom();
//   firstimg.src = allpictures[firstimg].filepath;

//   var secondimg =document.getElementById('secondimg');
//   secondimg = generateRandom();
//   secondimg.src = allpictures[secondimg].filepath;
  
//   var thirdimg =document.getElementById('thirdimg');
//   thirdimg = generateRandom();
//   thirdimg.src = allpictures[thirdimg].filepath;
// };
// randomPic();



// var randomIndex = Math.floor(Math.random() * Pictures.allpictures.length);
// firstimg.src = Pictures.allpictures[randomIndex].filepath;
// secondimg.src = Pictures.allpictures[randomIndex].filepath;
// thirdimg.src = Pictures.allpictures[randomIndex].filepath;
// }



// randomPic.firstimg.addEventListener('click', randomPic);
// randomPic.secondimg.addEventListener('click', radomPic);
// randomPic.thirdimg.addEventListener('click', radomPic);



