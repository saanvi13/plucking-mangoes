class Slingshot{
    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.08,
            length : 10
           }
           this.sling= Constraint.create(con);
           World.add(myWorld,this.sling);
       }
   
         fly(){
             this.sling.bodyA=null;
             
         }
         
         attach(body){
             this.sling.bodyA=body;
         }
          
      display(){
        if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        }
    }


}
