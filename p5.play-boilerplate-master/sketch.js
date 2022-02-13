var backgroundImg;
var Hero, Hero1Img, Hero2Img;
var Ogre, OgreImg;
var OgreCount = 0;


function preload()
{
  backgroundImg = loadImage("./Images/Forest Scary png.png ");
  Hero1Img = loadImage("./Images/Hero-1.png");
  Hero2Img = loadImage("./Images/Hero Without Bg.png");
  OgreImg = loadImage("./Images/Ogre wo bg.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  Hero = createSprite(displayWidth -1200, displayHeight-300, 50,50);
  Hero.addImage(Hero2Img);
 

  
}

function draw() {
  background(backgroundImg);  
  
  if(frameCount% 200 === 0)
  {
    if(OgreCount <=20)
  {
    OgreCount++;
    Ogre = createSprite(displayWidth -50,random(300,500),50,50);
    Ogre.addImage(OgreImg);
    Ogre.velocityX = -5;
    Ogre.scale = 0.5
  }

  }

  if(keyDown("space"))
  {
    Hero.VelocityY = -10;
  }


  heroControls();

  drawSprites();
}

function heroControls()
{
}