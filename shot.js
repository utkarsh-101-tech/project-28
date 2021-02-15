class Shot{
    constructor(bodyA, pointB){ 
        var option={ 
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.01, 
            length: 5 } 


            this.pointB = pointB; 
            this.body = Constraint.create(option);
             World.add(world, this.body);
    
    };

    display(){
        
        
  stroke(0);
  strokeWeight(10);
  
var pointA=this.body.bodyA.position;
    var pintB=this.body.pointB.position;
    line(pointA.x+this.offsetX,pointA.y+this.offsetY,pintB.x,pintB.y)
    }}





 
