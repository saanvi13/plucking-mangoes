class Ground{
    constructor(x,y,width,height){

        var boxop = {
            isStatic : true
        }
    

    this.body = Bodies.rectangle(x,y,width,height,boxop);
    this.width = width;
    this.height = height;
    World.add(myWorld,this.body);
    }

    display(){
    var pos = this.body.position
    
    fill("#054005");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    }
}
