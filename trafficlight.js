class TrafficLight{

    constructor(x,y,radius,angle){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.angle=angle
        this.color="red";
        //this.height=height;
    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        fill("white");
        strokeWeight(4);
        stroke("black");
        rect(-23,-23,this.radius+5,3*this.radius+15);

        strokeWeight(12);
        line(0,115,0,180);
        
        ellipseMode(CENTER);
        strokeWeight(5);
        fill(255);
        
        stroke("red");
        if(this.color==="red"){
            fill("red")
        }
        else{
            noFill();
        }
        ellipse(0,0,this.radius);
        
        if(this.color==="orange"){
          fill("orange")
        }
        else{
            noFill();
        }
        stroke("orange");

        ellipse(0,45,this.radius);
        
        if(this.color==="green"){
            fill("green")
          }
          else{
            noFill();
        }
        stroke("green");
        ellipse(0,90,this.radius);
        pop();
    }
}