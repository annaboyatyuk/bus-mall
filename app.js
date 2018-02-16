'use strict';

Pictures.allpictures = [];
Pictures.recentlyViewed = [];
Pictures.totalClicks = 0;
var itemNames = [];
var totalVotes = [];


function Pictures(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.voteCount = 0;
  this.viewCount = 0;
  itemNames.push(this.name);
  Pictures.allpictures.push(this);
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


function threeRandom(input) {
  if (input === Pictures.recentlyViewed[0] || input === Pictures.recentlyViewed[1] || input === Pictures.recentlyViewed[2]) {
    return true;
  }
}


var randomIndexOne;
var randomIndexTwo;
var randomIndexThree;


function displayImg() {
  do {
    randomIndexOne = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (threeRandom(randomIndexOne));

  do {
    randomIndexTwo = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (randomIndexOne === randomIndexTwo || threeRandom(randomIndexTwo));

  do {
    randomIndexThree = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree || threeRandom(randomIndexThree));

  firstImg.src = Pictures.allpictures[randomIndexOne].filepath;
  secondImg.src = Pictures.allpictures[randomIndexTwo].filepath;
  thirdImg.src = Pictures.allpictures[randomIndexThree].filepath;
  firstImg.alt = Pictures.allpictures[randomIndexOne].name;
  secondImg.alt = Pictures.allpictures[randomIndexTwo].name;
  thirdImg.alt = Pictures.allpictures[randomIndexThree].name;

  Pictures.allpictures[randomIndexOne].viewCount++;
  Pictures.allpictures[randomIndexTwo].viewCount++;
  Pictures.allpictures[randomIndexThree].viewCount++;


  Pictures.recentlyViewed.push(randomIndexOne, randomIndexTwo, randomIndexThree);
  if (Pictures.recentlyViewed.length > 3) {
    Pictures.recentlyViewed = Pictures.recentlyViewed.slice(3);
  }
}


var firstImg = document.getElementById('firstimg');
var secondImg = document.getElementById('secondimg');
var thirdImg = document.getElementById('thirdimg');


function onClick(event) {
  for (var i = 0; i < Pictures.allpictures.length; i++) {
    console.log(Pictures.allpictures[i].voteCount + 'vote count');
    if (event.target.alt === Pictures.allpictures[i].name) {
      Pictures.allpictures[i].voteCount++;
      totalVotes.push(Pictures.allpictures[i].voteCount);
    }
  }

  if (Pictures.totalClicks < 24) {
    Pictures.totalClicks++;
  }else {
    displayResults();
    firstImg.removeEventListener('click', onClick);
    secondImg.removeEventListener('click', onClick);
    thirdImg.removeEventListener('click', onClick);
  }
  displayImg();
}


firstImg.addEventListener('click', onClick);
secondImg.addEventListener('click', onClick);
thirdImg.addEventListener('click', onClick);


displayImg();


function displayResults() {

  var ctx = document.getElementById('chart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: 'Number of Votes',
        data: totalVotes,
        backgroundColor: [
          'rgb(173, 52, 78)',
          'rgb(168, 183, 55)',
          'rgb(110, 39, 123)',
          'rgb(89, 163, 49)',
          'rgb(122, 0, 26)',
          'rgb(114, 129, 0)',
          'rgb(74, 2, 87)',
          'rgb(40, 115, 0)',
          'rgb(245, 166, 183)',
          'rgb(242, 252, 171)',
          'rgb(200, 144, 210)',
          'rgb(188, 238, 161)',
          'rgb(195, 38, 72)',
          'rgb(186, 205, 40)',
          'rgb(122, 30, 138)',
          'rgb(87, 183, 36)',
          'rgb(124, 65, 78)'
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}




