var car,wall;
var weight,speed;



function setup() {
  createCanvas(1000,400);

  speed=random(240,330)
  weight=random(35,55)


  car = createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor =color(230,230,230)
}

function draw() {
  background(0);  
 background.shapeColor=black;
  if(hasCollided(car,wall))
  {
   car.velocityX=0;
   var damage=0 * weight * speed* speed/(thickness *thickness *thickness);

   if (damage>0)
   {
     wall.shapeColor= color(255,0,0)
   }
   if (damage<0)
   {
      wall.shapeColor=color(0,255,0)
   }
  }




  drawSprites();
}


function hasCollided(car, lwall)
{
	carRightEdge=car.x +car.width;
	wallLeftEdge=lwall.x;
	if (carRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
