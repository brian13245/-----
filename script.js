let started = false;

let fireworks = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    let btn = document.getElementById("startBtn");

    btn.addEventListener("click", function(){

        document.getElementById("landing").style.display = "none";

        started = true;
    });
}

function draw() {

    if(!started){
        return;
    }

    background(0,30);

    for(let i=fireworks.length-1;i>=0;i--){

        fireworks[i].update();
        fireworks[i].show();

        if(fireworks[i].life <= 0){
            fireworks.splice(i,1);
        }
    }
}

function mousePressed(){

    if(!started) return;

    for(let i=0;i<50;i++){

        fireworks.push(
            new Firework(mouseX,mouseY)
        );
    }
}

function keyPressed(){

    if(key === ' '){

        fireworks = [];
        background(0);
    }
}

class Firework{

    constructor(x,y){

        this.x = x;
        this.y = y;

        this.vx = random(-4,4);
        this.vy = random(-4,4);

        this.life = 255;
    }

    update(){

        this.x += this.vx;
        this.y += this.vy;

        this.life -= 4;
    }

    show(){

        noStroke();

        fill(
            random(255),
            random(255),
            random(255),
            this.life
        );

        circle(
            this.x,
            this.y,
            8
        );
    }
}

function windowResized(){

    resizeCanvas(
        windowWidth,
        windowHeight
    );
}