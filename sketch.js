var rect1;
var num=0;

function preload(){
  bgImage=loadImage("images/road.jpg");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");

  rightcarImg1 = loadImage("images/rightcar1.png");
  rightcarImg2 = loadImage("images/rightcar2.png");
  rightcarImg3 = loadImage("images/rightcar3.png");
  rightcarImg4 = loadImage("images/rightcar4.png");

  topcarImg1 = loadImage("images/topcar1.png");
  topcarImg2 = loadImage("images/topcar2.png");
  topcarImg3 = loadImage("images/topcar3.png");
  topcarImg4 = loadImage("images/topcar4.png");

  bottomcarImg1 = loadImage("images/bottomcar1.png");
  bottomcarImg2 = loadImage("images/bottomcar2.png");
  bottomcarImg3 = loadImage("images/bottomcar3.png");
  bottomcarImg4 = loadImage("images/bottomcar4.png");

  ambImage = loadImage("images/amb.png");
 
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  rect1=new TrafficLight(500,30,40,0);
  rect2=new TrafficLight(985,170,40,90); 
  rect3=new TrafficLight(850,610,40,180);
  rect4=new TrafficLight(365,470,40,270); 
  invLine=createSprite(500,displayHeight/2-70,700,300);

  invLine.visible=false;
  //invLine1=createSprite(900,displayHeight/2-70,20,300);
  leftGroup=new Group();
  leftsideGroup=new Group();
  left1sideGroup=new Group();
  left2sideGroup=new Group();

  rightGroup=new Group();
  rightsideGroup=new Group();
  right1sideGroup=new Group();
  right2sideGroup=new Group();

  topGroup=new Group();
  topsideGroup=new Group();

  bottomGroup=new Group();
  bottomsideGroup=new Group();

  ambGroup=new Group();
  


}

function draw() {
  background(bgImage);

  if(frameCount%100===0){
   
    if(num>4){
      num=1;
    }
    signal(num);
   num++;
  }
  for(var i=0;i<ambGroup.length;i++){
    if(ambGroup.get(i).isTouching(invLine)){
      num=2;
      signal(num);
      console.log(num)
      
    } 
    
   }
   
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();
 
  spawnFromLeft();
  spawnFromLeftSide();
  spawnFromLeft1Side();
  spawnFromLeft2Side();

  spawnFromRight();
  spawnFromRightSide();
  spawnFromRight1Side();
  spawnFromRight2Side();

  spawnFromTop();
  spawnFromTopSide();
  spawnFromBottom();
  spawnFromBottomSide();
  spawnAmbulance();
  drawSprites();
   
}

function signal(){
  
  switch(num){
    case 1:
      setTimeout(function(){
        rect1.color="green";
        rect2.color="red";
        rect3.color="red";
        rect4.color="red";
        bottomGroup.setVelocityYEach(-10);
        bottomsideGroup.setVelocityYEach(-10);
      },6000)
      
      
     
      
      break;

    case 2:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="green";
        rect3.color="red";
        rect4.color="red";
        leftGroup.setVelocityXEach(10)
        leftsideGroup.setVelocityXEach(10)
        left1sideGroup.setVelocityXEach(10)
        left2sideGroup.setVelocityXEach(10)
      },6000);
      
      break;

    case 3:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="red";
        rect3.color="green";
        rect4.color="red";
        topGroup.setVelocityYEach(10)
        topsideGroup.setVelocityYEach(10)
      },6000);
     
      
     
      break;
      
    case 4:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="red";
        rect3.color="red";
        rect4.color="green";
        rightGroup.setVelocityXEach(-10)
        rightsideGroup.setVelocityXEach(-10)
        right1sideGroup.setVelocityXEach(-10)
        right2sideGroup.setVelocityXEach(-10)
      },6000);
      
      
      break;

  }
 
}
function spawnAmbulance(){
  if(frameCount%500===0){
    amb=createSprite(0,displayHeight/2-110,20,20);
    amb.addImage(ambImage);
    amb.velocityX=3;
    amb.scale=0.7;
    ambGroup.add(amb);
    
    
  }
}
function spawnFromLeft(){
  if(frameCount%100===0){
    spawnAmbulance()
    leftcar=createSprite(30,displayHeight/2-110,20,20);
    leftcar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:leftcar.addImage(carImg1);
      break;
      case 2:leftcar.addImage(carImg2);
      break;
      case 3:leftcar.addImage(carImg3);
      break;
      case 4:leftcar.addImage(carImg4);
      break;
    }
    leftGroup.add(leftcar);
    //leftcar.lifetime(60)
  }
}
function spawnFromLeftSide(){
  if(frameCount%100===0){
    leftsidecar=createSprite(150,displayHeight/2-110,20,20);
    leftsidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:leftsidecar.addImage(carImg1);
      break;
      case 2:leftsidecar.addImage(carImg2);
      break;
      case 3:leftsidecar.addImage(carImg3);
      break;
      case 4:leftsidecar.addImage(carImg4);
      break;
    }
    leftsideGroup.add(leftsidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromLeft1Side(){
  if(frameCount%105===0){
    left1sidecar=createSprite(270,displayHeight/2-110,20,20);
    left1sidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:left1sidecar.addImage(carImg1);
      break;
      case 2:left1sidecar.addImage(carImg2);
      break;
      case 3:left1sidecar.addImage(carImg3);
      break;
      case 4:left1sidecar.addImage(carImg4);
      break;
    }
    left1sideGroup.add(left1sidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromLeft2Side(){
  if(frameCount%105===0){
    left2sidecar=createSprite(400,displayHeight/2-110,20,20);
    left2sidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:left2sidecar.addImage(carImg1);
      break;
      case 2:left2sidecar.addImage(carImg2);
      break;
      case 3:left2sidecar.addImage(carImg3);
      break;
      case 4:left2sidecar.addImage(carImg4);
      break;
    }
    left2sideGroup.add(left2sidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromRight(){
  if(frameCount%100===0){
    rightcar=createSprite(displayWidth-70,displayHeight/2-25,20,20);
    rightcar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:rightcar.addImage(rightcarImg1);
      break;
      case 2:rightcar.addImage(rightcarImg2);
      break;
      case 3:rightcar.addImage(rightcarImg3);
      break;
      case 4:rightcar.addImage(rightcarImg4);
      break;
    }
    rightGroup.add(rightcar);
   
  }
}
function spawnFromRightSide(){
  if(frameCount%100===0){
    rightsidecar=createSprite(displayWidth-200,displayHeight/2-25,20,20);
    rightsidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:rightsidecar.addImage(rightcarImg1);
      break;
      case 2:rightsidecar.addImage(rightcarImg2);
      break;
      case 3:rightsidecar.addImage(rightcarImg3);
      break;
      case 4:rightsidecar.addImage(rightcarImg4);
      break;
    }
    rightsideGroup.add(rightsidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromRight1Side(){
  if(frameCount%110===0){
    right1sidecar=createSprite(displayWidth-330,displayHeight/2-25,20,20);
    right1sidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:right1sidecar.addImage(rightcarImg1);
      break;
      case 2:right1sidecar.addImage(rightcarImg2);
      break;
      case 3:right1sidecar.addImage(rightcarImg3);
      break;
      case 4:right1sidecar.addImage(rightcarImg4);
      break;
    }
    right1sideGroup.add(right1sidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromRight2Side(){
  if(frameCount%110===0){
    right2sidecar=createSprite(displayWidth-460,displayHeight/2-25,20,20);
    right2sidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:right2sidecar.addImage(rightcarImg1);
      break;
      case 2:right2sidecar.addImage(rightcarImg2);
      break;
      case 3:right2sidecar.addImage(rightcarImg3);
      break;
      case 4:right2sidecar.addImage(rightcarImg4);
      break;
    }
    right2sideGroup.add(right2sidecar);
    //leftcar.lifetime(60)
  }
}
function spawnFromTop(){
  if(frameCount%100===0){
    topcar=createSprite(displayHeight/2+330,20,20,20);
    topcar.velocityY=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:topcar.addImage(topcarImg1);
      break;
      case 2:topcar.addImage(topcarImg2);
      break;
      case 3:topcar.addImage(topcarImg3);
      break;
      case 4:topcar.addImage(topcarImg4);
      break;
    }
   topGroup.add(topcar);
  }
}
function spawnFromTopSide(){
  if(frameCount%100===0){
    topsidecar=createSprite(displayHeight/2+330,130,20,20);
    topsidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:topsidecar.addImage(topcarImg1);
      break;
      case 2:topsidecar.addImage(topcarImg2);
      break;
      case 3:topsidecar.addImage(topcarImg3);
      break;
      case 4:topsidecar.addImage(topcarImg4);
      break;
    }
    topsideGroup.add(topsidecar);
    //leftcar.lifetime(60)
  }
}

function spawnFromBottom(){
  if(frameCount%100===0){
    bottomcar=createSprite(displayWidth/2-50,displayHeight-150,20,20);
    bottomcar.velocityY=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:bottomcar.addImage(bottomcarImg1);
      break;
      case 2:bottomcar.addImage(bottomcarImg2);
      break;
      case 3:bottomcar.addImage(bottomcarImg3);
      break;
      case 4:bottomcar.addImage(bottomcarImg4);
      break;
    }
    bottomGroup.add(bottomcar);
  }
}
function spawnFromBottomSide(){
  if(frameCount%100===0){
    bottomsidecar=createSprite(displayWidth/2-50,displayHeight-270,20,20);
    bottomsidecar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:bottomsidecar.addImage(bottomcarImg1);
      break;
      case 2:bottomsidecar.addImage(bottomcarImg2);
      break;
      case 3:bottomsidecar.addImage(bottomcarImg3);
      break;
      case 4:bottomsidecar.addImage(bottomcarImg4);
      break;
    }
    bottomsideGroup.add(bottomsidecar);
    //leftcar.lifetime(60)
  }
}
if(leftsideGroup.isTouching(invLine)){
  leftsideGroup.setVelocityXEach(0)
}
