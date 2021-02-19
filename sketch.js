var canvas;
var music;
var box1,box2,box3,box4,box5;
function preload(){
    music = loadSound("music.mp3");





}


function setup(){
    canvas = createCanvas(500,600);
    box1=createSprite(450,250,20,20)
    box2=createSprite(350,350,100,50)
    box3=createSprite(350,350,100,50)
    box4=createSprite(250,350,100,50)
    box5=createSprite(150,350,100,50)
    
    
    
    //create 4 different surfaces
   
   


    
function draw() {
    background(rgb(169,169,169));
    background(255,255,255);  
    box1.x=mouseX
   box1.y=mouseY
    if (isTouching(box1,box2)){
   box1.shapeColor="red"
   box2.shapeColor="red"
    }else if(isTouching(box1,box3)){
   box1.shapeColor="yellow"
   box3.shapeColor="yellow"
   
    }
    else if(isTouching(box1,box4)){
     box1.shapeColor="green"
     box4.shapeColor="green"
     
      }
      else if(isTouching(box1,box5)){
       box1.shapeColor="pink"
       box5.shapeColor="pink"
       
        }
     else {
       box1.shapeColor="blue"
   box2.shapeColor="blue"
   box3.shapeColor="blue"
   box4.shapeColor="blue"
   box5.shapeColor="blue"
     }
     drawSprites();
   }
   
   function isTouching(p1,p2){
   
     if(p1.x-p2.x<p1.width/2+p2.width/2
       &&p2.x-p1.x<p1.width/2+p2.width/2
       &&p1.y-p2.y<p1.height/2+p2.height/2
       &&p2.y-p1.y<p1.height/2+p2.height/2
       ){
        return true;
   
        
       }else{
        
     return false;
       }  

