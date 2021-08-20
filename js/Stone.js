class Stone{


    constructor(x,y,r){
        this.r = r
        this.body = Bodies.ellipse(x,y,30)
        World.add(world,this.body)
    }

    show(){
        var pos = this.body.position;
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r)

    }
}