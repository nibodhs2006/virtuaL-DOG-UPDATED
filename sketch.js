//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happydogImage=loadImage("images/dogImg.png")
}

function setup() {
 database=firebase.database()
  createCanvas(500, 500);
  foodStock=database.ref('food')
foodStock.on("value",readStock)

  dog=createSprite(250,250,30,30)
  dog.addImage(dogImage)
  dog.scale=0.2



}


function draw() {  
background(46,139,87)
  if(foodS==undefined){
    textSize(20)
    fill('white')
     text("note:press UP_ARROW key to feed drago milk",10,100)
    text("food Remaining:",150,150)

  }
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happydogImage)

}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImage)
}
if(foodS===0){
  foodS=20
}
drawSprites();
}
function readStock(data){
foodS=data.val()
}

function writeStock(x){
if(x<=0){
x=0
}else{
x=x-1

}


database.ref('/').update({
  food:x
})
}