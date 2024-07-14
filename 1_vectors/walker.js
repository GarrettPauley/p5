class Walker{ 
    constructor(x,y){ 
        this.pos = createVector(x,y);
        this.vel = createVector(1,-1);
    }

    update() { 
        this.pos.add(this.vel);
        //this.pos.x = this.pos.x + this.vel.x;
        //this.pos.y = this.pos.y + this.vel.y;
    }

    show(){ 
        stroke(255);
        strokeWeight(2);
        fill(255,100);
        ellipse(this.pos.x, this.pos.y, 32);
    }

    checkEdges(){ 
        if(this.pos.x > width){ 
            this.pos.x = 0;
        }
        if(this.pos.x < 0){ 
            this.pos.x = width; 
        }
        if(this.pos.y > height){ 
            this.pos.y = 0;
        }
        if(this.pos.y < 0){ 
            this.pos.y = height; 
        }


    }

}