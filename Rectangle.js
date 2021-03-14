class Rectangle{

  constructor(x,y,width,height) {

    var options = {
    restitution:0.2,
    isStatic:false,
    friction:1.1,
    density:1.2
    }  

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("Yellow");
    rect(0,0,this.width,this.height);
    pop();
  }
}