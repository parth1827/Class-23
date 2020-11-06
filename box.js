class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width,
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle+20);
        console.log(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}