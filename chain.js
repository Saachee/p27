class slingShot {

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10

        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){

        
        strokeWeight(6);
        stroke("black");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
    } 
}
}