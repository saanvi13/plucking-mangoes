class Tree
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.treeWidth = 450;
		this.treeThickness = 10;
        this.treeHeight = 600;
        
	this.image=loadImage("tree.png");
	this.bottomBody = Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
	this.leftWallBody = Bodies.rectangle(0, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false});
	this.rightWallBody = Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false});
		
		World.add(myWorld, this.bottomBody)
		World.add(myWorld, this.leftWallBody)
		World.add(myWorld, this.rightWallBody);

	}
	display()
	{
			var pos = this.bottomBody.position;
			push()
			translate(pos.x, pos.y+10);
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight);
			pop()
			
	}

}