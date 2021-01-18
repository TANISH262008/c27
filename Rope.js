class Rope {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:5 
              
        }

        this.rope= Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display () {
        //bodyA is a angry bird to whom the rope is attachted
        //bodyB is a log body to which rope is getting connected with
        strokeWeight(2);
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        line(point1.x,point1.y,point2.x,point2.y);
    }
   
}