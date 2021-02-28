class Ambulance{
constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.siren=loadSound("Siren.m4a");
    this.image = loadImage("images/amb.png");
}


display(){
    push();
    translate(this.x,this.y)
    //rect(this.x,this.y,this.width,this.height);
    
    image(this.image,-50,-50,150,175);
   
    pop();


}



}