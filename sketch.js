//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload(){
  //load images here
  dogImg = loadImage("dogImg.png");
	
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,50,50);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 backgrund(46, 139, 87);

 if (KeyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogHappy);
 }
  drawSprites();
  //add styles here

}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



