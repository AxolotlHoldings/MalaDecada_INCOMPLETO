//Variables

var virusLeft, VirusRight, virusGroup , virus_anim;
var misil, misl_img, misilGroup;
var player
var lives = 5;
var heart1, heart2, heart3, heart4, heart5, heart_img;

var lab_bg;
var wheel, wheel_Img;
var Y2020, Y2021,Y2022, Y2023, Y2024, Y2025, Y2026, Y2027, Y2028, Y2029;
var I2020, I2021,I2022, I2023, I2024, I2025, I2026, I2027, I2028, I2029;
var slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12;
var slot_img;

var valor = [Y2020, Y2022];

function preload() {
  virus_anim = loadAnimation("Assets/Virus1.png", "Assets/Virus2.png");
  
  lab_bg = loadImage("Assets/Escenario.png");
  wheel_Img = loadImage("Assets/Vacia.png");
  I2020 = loadImage("Assets/2020.png");
  I2021 = loadImage("Assets/2021.png");
  I2022 = loadImage("Assets/2022.png");
  I2023 = loadImage("Assets/2023.png");
  I2024 = loadImage("Assets/2024.png");
  I2025 = loadImage("Assets/2025.png");
  I2026 = loadImage("Assets/2026.png");
  I2027 = loadImage("Assets/2027.png");
  I2028 = loadImage("Assets/2028.png");
  I2029 = loadImage("Assets/2029.png");
  heart_img = loadImage("Assets/Vida.png");
  misil_img = loadImage("Assets/Misil.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2, height/2, 50, 50);
  
  heart1 = createSprite(width/2 -200, height-800);
  heart1.addImage(heart_img);
  heart1.scale = 0.1;

  heart2 = createSprite(width/2 -150, height-800);
  heart2.addImage(heart_img);
  heart2.scale = 0.1;

  heart3 = createSprite(width/2 -100, height-800);
  heart3.addImage(heart_img);
  heart3.scale = 0.1;

  heart4 = createSprite(width/2 -50, height-800);
  heart4.addImage(heart_img);
  heart4.scale = 0.1;

  heart5 = createSprite(width/2, height-800);
  heart5.addImage(heart_img);
  heart5.scale = 0.1;

  virusGroup = new Group();
  misilGroup = new Group();



}

function draw() {
    background(lab_bg);
    console.log(lives);
    //player.collide(virusGroup);

    if(keyIsDown(LEFT_ARROW)){
      player.x -= 5;
    }

    if(keyIsDown(RIGHT_ARROW)){
      player.x += 5;
    }

    if(keyIsDown(UP_ARROW)){
      player.y -= 5;
    }

    if(keyIsDown(DOWN_ARROW)){
      player.y += 5;
    }


  if(lives === 0){
    textSize(100);
    text("FIN DE LA PARTIDA", width/2, height/2,);
  }

  if(lives === 5){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    heart5.visible = true;
  }

  if(lives === 4){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    heart5.visible = false;
  }

  if(lives === 3){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 2){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 1){
    heart1.visible = true;
    heart2.visible = false;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 0){
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }
  eventHandler();
  //event2020();
  createWheel();
  drawSprites();
}

function eventHandler() {

}

function createWheel() { 

  var randAngle = Math.round(random(1, 360));

  var randYear = Math.round(random(1, 24));




/*if(wheel.mousePressedOver){
wheel.rotation = randAngle;
}*/

wheel = createSprite(width/2, height/2, 50, 50); 
wheel.addImage(wheel_Img);
wheel.scale = 1.5;

slot1 = createSprite(wheel.x, wheel.y, 50, 50);
//slot1.addImage(I2020);
slot1.scale = 0.775;
slot1.setCollider("rectangle", -5, -400, 175, 50);
slot1.rotation = wheel.rotation;


slot2 = createSprite(wheel.x, wheel.y, 50, 50);
//slot2.addImage(I2021);
slot2.scale = 0.775;
slot2.setCollider("rectangle", -5, -400, 175, 50);
slot2.rotation = wheel.rotation+30;

slot3 = createSprite(wheel.x, wheel.y, 50, 50);
//slot3.addImage(I2022);
slot3.scale = 0.775;
slot3.setCollider("rectangle", -5, -400, 175, 50);
slot3.rotation = wheel.rotation+60;

slot4 = createSprite(wheel.x, wheel.y, 50, 50);
//slot4.addImage(I2023);
slot4.scale = 0.775;
slot4.setCollider("rectangle", -5, -400, 175, 50);
slot4.rotation = wheel.rotation+90;

slot5 = createSprite(wheel.x, wheel.y, 50, 50);
//slot5.addImage(I2024);
slot5.scale = 0.775;
slot5.setCollider("rectangle", -5, -400, 175, 50);
slot5.rotation = wheel.rotation+120;

slot6 = createSprite(wheel.x, wheel.y, 50, 50);
//slot6.addImage(I2025);
slot6.scale = 0.775;
slot6.setCollider("rectangle", -5, -400, 175, 50);
slot6.rotation = wheel.rotation+150;

slot7 = createSprite(wheel.x, wheel.y, 50, 50);
//slot7.addImage(I2026);
slot7.scale = 0.775;
slot7.setCollider("rectangle", -5, -400, 175, 50);
slot7.rotation = wheel.rotation+180;

slot8 = createSprite(wheel.x, wheel.y, 50, 50);
//slot8.addImage(I2027);
slot8.scale = 0.775;
slot8.setCollider("rectangle", -5, -400, 175, 50);
slot8.rotation = wheel.rotation+210;

slot9 = createSprite(wheel.x, wheel.y, 50, 50);
//slot9.addImage(I2028);
slot9.scale = 0.775;
slot9.setCollider("rectangle", -5, -400, 175, 50);
slot9.rotation = wheel.rotation+240;

slot10 = createSprite(wheel.x, wheel.y, 50, 50);
//slot10.addImage(I2029);
slot10.scale = 0.775;
slot10.setCollider("rectangle", -5, -400, 175, 50);
slot10.rotation = wheel.rotation+270;

slot11 = createSprite(wheel.x, wheel.y, 50, 50);
//slot11.addImage(I2021);
slot11.scale = 0.775;
slot11.setCollider("rectangle", -5, -400, 175, 50);
slot11.rotation = wheel.rotation+300;

slot12 = createSprite(wheel.x, wheel.y, 50, 50);
//slot12.addImage(I2021);
slot12.scale = 0.775;
slot12.setCollider("rectangle", -5, -400, 175, 50);
slot12.rotation = wheel.rotation+330;

switch(randYear){
  case 1: 
  slot1 = event2020();
  slot1.addImage(I2020);
  break;

  case 2: 
  slot1 = event2022();
  slot1.addImage(I2022);
  break;

  case 3: 
  slot2 = event2020();
  slot2.addImage(I2020);
  break;

  case 4: 
  slot2 = event2022();
  slot2.addImage(I2022);
  break;

  case 5: 
  slot3 = event2020();
  slot3.addImage(I2020);
  break;
 
  case 6: 
  slot3 = event2022();
  slot3.addImage(I2022);
  break;
 
  case 7: 
  slot4 = event2020();
  slot4.addImage(I2020);
  break;
 
  case 8: 
  slot4 = event2022();
  slot4.addImage(I2022);
  break;
 
  case 9: 
  slot5 = event2020();
  slot5.addImage(I2020);
  break;

  case 10: 
  slot5 = event2022();
  slot5.addImage(I2022);
  break;

  case 11: 
  slot6 = event2020();
  slot6.addImage(I2020);
  break;

  case 12: 
  slot6 = event2022();
  slot6.addImage(I2022);
  break;

  case 13: 
  slot7 = event2020();
  slot7.addImage(I2020);
  break;

  case 14: 
  slot7 = event2022();
  slot7.addImage(I2022);
  break;

  case 15: 
  slot8 = event2020();
  slot8.addImage(I2020);
  break;

  case 16: 
  slot8 = event2022();
  slot8.addImage(I2022);
  break;

  case 17: 
  slot9 = event2020();
  slot9.addImage(I2020);
  break;

  case 18: 
  slot9 = event2022();
  slot9.addImage(I2022);
  break;

  case 19: 
  slot10 = event2020();
  slot10.addImage(I2020);
  break;

  case 20: 
  slot10 = event2022();
  slot10.addImage(I2022);
  break;

  case 21: 
  slot11 = event2020();
  slot11.addImage(I2020);
  break;

  case 22: 
  slot11 = event2022();
  slot11.addImage(I2022);
  break;

  case 23: 
  slot12 = event2020();
  slot12.addImage(I2020);
  break;

  case 24: 
  slot12 = event2022();
  slot12.addImage(I2022);
  break;

  default: break;
}

}

function spriteRotate(slot){
  slot.rotation = slot.rotation+10;
}

function event2020() {

  if(frameCount%125 === 0){
    virusLeft = createSprite(width-2000, height, 50, 50);
    virusRight = createSprite(width+50, height, 50, 50);

    virusLeft.y = Math.round(random(height-50, height-1000));
    virusLeft.addAnimation("virus", virus_anim);
    virusLeft.scale = 0.3;
    virusLeft.velocityX = +2.5;
    virusLeft.lifetime = 1000;
    virusLeft.debug = false;
    virusGroup.add(virusLeft);

    virusRight.y = Math.round(random(height-50, height-1000));
    virusRight.addAnimation("virus", virus_anim);
    virusRight.scale = 0.3;
    virusRight.velocityX = -2.5;
    virusRight.lifetime = 1000;
    virusRight.debug = false;
    virusGroup.add(virusRight);

    if(virusGroup.isTouching(player)){
      console.log("Jugador infectado");
      lives -= 1;
      player.x = player.x+50;
    }
  }
}

function event2021() {

}

function event2022(){

  if(frameCount%125 === 0){
    Misil = createSprite(width-2000, height, 50, 50);


    virusLeft.x = Math.round(random(width-50, width-1000));
    Misil.addImage(misil_img);
    Misil.scale = 0.3;
    Misil.velocityY = +10;
    Misil.lifetime = 1000;
    Misil.debug = false;
    misilGroup.add(Misil);


    if(misilGroup.isTouching(player)){
      console.log("Jugador golpeado por el misil");
      lives -= 1;
      player.x = player.x+250;
    }
  }
}

function event2023() {

}

function event2024() {

}

function event2025(){

}

function event2026() {

}

function event2027(){

}

function event2028(){

}

function event2029(){

}