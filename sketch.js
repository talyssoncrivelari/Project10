var ceu,nuvem1,nuvem2,terra,moita1,moita2,brick1,brick2,brick3,goomba1,mario;
var ceuImg,nuvem1Img,nuvem2Img,terraImg,moitaImg1,moitaImg2,brickImg1,goombaImg1,brickImg2,marioImg1,marioImg2;////music
var gameState = "serve";

function preload(){
  ceuImg = loadImage("marioceu.png");
  terraImg = loadImage("marioterra.png");
  moitaImg1 = loadImage("moita1.png");
  moitaImg2 = loadImage("moita2.png");
  nuvem1Img = loadImage("marionuvens1.png");
  nuvem2Img = loadImage("marionuvens2.png");
  brickImg = loadImage("brick.png");
  goombaImg1 = loadAnimation("goomba1.png","goomba2.png");
  marioImg1 = loadAnimation("marioandano.png","marioparado.png","marioandano.png");
  marioImg2 = loadImage("mariodeath.png");
  ////marioImg2 = loadImage("marioparado.png");
  ////music = loadSound("SuperMarioWorldTheme.mp3");
}
function setup(){
  createCanvas(400,400);
  background("blue");
  leftEdge = createEdgeSprites();
  ceu = createSprite(200,200,400,20);
  ceu.addImage(ceuImg);
  terra = createSprite(500,360,400,20);
  terra.addImage(terraImg);
  moita1 = createSprite(300,292);
  moita1.addImage(moitaImg1);
  moita1.scale = 0.4;
  moita2 = createSprite(420,296);
  moita2.addImage(moitaImg2);
  moita2.scale = 0.4;
  nuvem1 = createSprite(600,175,400,20);
  nuvem1.addImage(nuvem1Img);
  nuvem1.scale = 0.3;
  nuvem2 = createSprite(800,75,400,20);
  nuvem2.addImage(nuvem2Img);
  nuvem2.scale = 0.2;
  brick1 = createSprite(500,200);
  brick1.addImage(brickImg);
  brick1.scale = 0.08;
  brick2 = createSprite(537,200);
  brick2.addImage(brickImg);
  brick2.scale = 0.08;
  goomba1 = createSprite(1000,300);
  goomba1.addAnimation("movinggoomba",goombaImg1);
  goomba1.scale = 0.05;
  mario = createSprite(-20,285);
  mario.addAnimation("movingmario",marioImg1);
  mario.scale = 0.11;
}
function draw() {
  
  background("blue");
  if(gameState == "serve"){
    mario.velocityX = 2;
    if(mario.x > 75){
      mario.velocityX = 0;
      gameState = "play";
    }
  }
  if(gameState == "play"){
    terra.velocityX = -4;
    if(terra.x < 0){
    terra.x = terra.width/3.55;
    }
    moita1.velocityX = -4;
    if(moita1.x < -100){
    moita1.x = 500;
    }
    moita2.velocityX = -4;
    if(moita2.x < -100){
    moita2.x = 500;
    }
    nuvem1.velocityX = -2.5;
    if(nuvem1.x < -100){
      nuvem1.x = 500;
    }
    nuvem2.velocityX = -2;
    if(nuvem2.x < -100){
      nuvem2.x = 500;
    }
    brick1.velocityX = -4;
    if(brick1.x < -1000){
      brick1.x = 500;
    }
    brick2.velocityX = -4;
    if(brick2.x < -1000){
      brick2.x = 500;
    }
    goomba1.velocityX = -7;
    if(goomba1.x < -1000){
      goomba1.x = 500;
    }
    if(keyDown("SPACE")){
      mario.velocityY = -15;
    }
    if(mario.isTouching(goomba1)){
      gameState = "gameOver";
    }
    if(mario.isTouching(leftEdge)){
      gameState = "gameOver";
    }
  }
  mario.velocityY = mario.velocityY + 1.5;
  mario.collide(terra);
  mario.collide(brick1);
  mario.collide(brick2);
  console.log(gameState);

  drawSprites();
  if(gameState == "gameOver"){
    ////mario.addImage(marioImg2);
    mario.velocityX = 0;
    nuvem1.velocityX = 0;
    nuvem2.velocityX = 0;
    terra.velocityX = 0;
    moita1.velocityX = 0;
    moita2.velocityX = 0;
    brick1.velocityX = 0;
    brick2.velocityX = 0;
    goomba1.velocityX = 0;
    fill("white");
    textSize(20);
    text("Game Over...",275,390);
  }
}
//Oii fessora, eu deeenovo, bom, tentei fazer um pouco mais
//legal mas, não conheço muitos comandos desse Visual Studio
//tentei resolver o gameState do Mário sabe, andar,
//morte, pulo(que não cheguei a aprender na aula do trex), gameOver,
//e queria colocar os efeitos sonoros também, mas não é como no Code
//então não sei... Mas como sempre digo, vou tentar até conseguir
//muito obrigado =D