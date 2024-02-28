
function preload () {

  Still_Spider = loadImage ("Still_Spider_Song.png");
  Left_Spider = loadImage  ("Right_Spider-Song.png");
  Right_Spider = loadImage ("Left_Spider_Song.png");
  Left_Spider_2 = loadImage  ("Right_Spider-Song_2.png");
  Right_Spider_2 = loadImage ("Left_Spider_Song_2.png");
  Left_Spider_3 = loadImage  ("Right_Spider-Song_3.png");
  Right_Spider_3 = loadImage ("Left_Spider_Song_3.png");
  Left_Spider_4 = loadImage  ("Right_Spider-Song_4.png");
  Right_Spider_4 = loadImage ("Left_Spider_Song_4.png");

  song = loadSound("Come_Way.mp3");

  //input = new p5.AudioIn();
  //input.start();

 

}



let Left_Spider;
let Right_Spider;
let Still_Spider;
let currentImage;
//let alternateTime = 800; // Time in milliseconds for each image




var isPlaying = false;

function setup() {
  createCanvas(1000, 700);

  currentImage = Still_Spider;
  //outputVolume(mouseclicks/10);


}

//let vol = input.getLevel();
//let analyze;

var mouseclicks = 0;


function draw() {
  background(240);

 // if (on) {
 //  ellapsedTime = millis
 // }
 
 var danceSpeed = 2 + mouseclicks;

 image(currentImage, 0,0,1000,700);
 frameRate (danceSpeed);
 
if (isPlaying) {
 
    if (mouseclicks > 8) {
      if (currentImage === Left_Spider_4) {
        currentImage = Right_Spider_4;
      } else {
        currentImage = Left_Spider_4;
      }
    } else if (mouseclicks > 5) {
      if (currentImage === Left_Spider_3) {
        currentImage = Right_Spider_3;
      } else {
        currentImage = Left_Spider_3;
      }
    } else if (mouseclicks > 2.5) {
      if (currentImage === Left_Spider_2) {
        currentImage = Right_Spider_2;
      } else {
        currentImage = Left_Spider_2;
      }
    } else {
      if (currentImage === Still_Spider) {
        currentImage = Left_Spider;
      } else if (currentImage === Left_Spider) {
        currentImage = Right_Spider;
      } else if (currentImage === Right_Spider) {
        currentImage = Left_Spider;
      }
    }
  }

}

function SpiderPlay() {
isPlaying = true;
}



function mousePressed() {
  if (song.isPlaying()) {
  // .isPlaying() returns a boolean
   // song.stop();
   

  } else { 
   song.play();
  }

mouseclicks = mouseclicks + .5


  SpiderPlay();



} 








//function SongPlay () {
//if (vol>.001) {
 // song.isPlaying
//} else {
 // song.stop
//}

//}

//if (isPlaying) {
  //if (currentImage === Still_Spider) {
   
   // currentImage = Right_Spider;
  //} else {
   
   // if (currentImage === Right_Spider) {
   //   currentImage = Left_Spider;
   // } else {
   //   currentImage = Right_Spider;
   // }
  //}
//}