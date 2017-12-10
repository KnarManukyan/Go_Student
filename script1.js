const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
    return Math.floor(Math.random() * num);
}

const heroImg1 = new Image();
heroImg1.src = "js/images/1.png";
const heroImg2 = new Image();
heroImg2.src = "js/images/2.png";
const heroImg3 = new Image();
heroImg3.src = "js/images/3.png";
const heroImg4 = new Image();
heroImg4.src = "js/images/4.png";
const heroImg5 = new Image();
heroImg5.src = "js/images/5.png";
const heroImg6 = new Image();
heroImg6.src = "js/images/6.png";
const heroImg7 = new Image();
heroImg7.src = "js/images/7.png";
const heroImg8 = new Image();
heroImg8.src = "js/images/8.png";

const multimouthImg = new Image();
multimouthImg.src = "js/images/multimouth.png";
const devilImg = new Image();
devilImg.src = "js/images/devil.png";
const octopusImg = new Image();
octopusImg.src = "js/images/octopus.png";
const ninjaImg = new Image();
ninjaImg.src = "js/images/ninja.png";
const background1 = new Image();
background1.src = "js/images/cafeteria.jpg";

const leftKey = 37;
const upKey = 38;
const rightKey = 39;

const gameData = {

    hero: {
        pic: [heroImg1,heroImg2,heroImg3,heroImg4,heroImg5,heroImg6,heroImg7,heroImg8],
        x: -100,
        y: 400,
        xDelta: 0,
        yDelta: 0,
        w: 300,
        h: 200
    },
    monsters: {
        multimouth: {
            pic: multimouthImg,
            x: 150,
            y: 000,
            xDelta: 0,
            yDelta: 0,
            w: 250,
            h: 250
        },
        devil: {
            pic: devilImg,
            x: 450,
            y: 000,
            xDelta: 0,
            yDelta: 0,
            w: 250,
            h: 250
        },
        octopus: {
            pic: octopusImg,
            x: 700,
            y: 000,
            xDelta: 0,
            yDelta: 0,
            w: 250,
            h: 250
        }/*,
        exam: {
            pic: ,
            x: ,
            y: ,
            xDelta: ,
            yDelta: ,
            h: ,
            w: ,			
        }*/
    },
    ninja: {
        pic: ninjaImg,
        x: 0,
        y: 0,
        xDelta: 0,
        yDelta: 0,
        w: 0,
        h: 0
    },
    score: {
        score: 0,
        APoint: 0,
        FPoint: 0
    }
} 

const hero = gameData.hero;
const multimouth = gameData.monsters.multimouth;
const octopus = gameData.monsters.octopus;
const devil = gameData.monsters.devil;
const exam = gameData.monsters.exam;
const ninja = gameData.ninja;
const monsters = [multimouth, octopus, devil/*, exam*/];
var isJumping = false;
var isFalling = false;
var imgNum = 0;
var isMoving = false;

const forEach = function(arr, func) {

    const helper = function(index) {
        if(index === arr.length){
            return;
        }
        func(arr[index]);   
        helper(index+1);    
    }

    helper(0);
}

const draw = function(){

    context.drawImage(background1,0,0,1500,600)

    forEach(monsters, function(monsters){
        context.drawImage(monsters.pic, monsters.x, monsters.y, monsters.w, monsters.h);
    }) 

    context.drawImage(hero.pic[imgNum], hero.x, hero.y, hero.w, hero.h);
    context.drawImage(ninja.pic, ninja.x, ninja.y, ninja.h, ninja.w);
    move();
}

const moveRight = function(){

    if(imgNum <= 6){
        imgNum ++;
    } else {
        imgNum = 0;
    }
}

const move = function(){
    if(isMoving === true){
        if(imgNum <= 6){
            imgNum ++;
        } else {
           imgNum = 0;
        }
    } else {
        imgNum = 0;
    }
    
}

const update = function(){
    //collision and movement
    hero.y += hero.yDelta;
}

const jump = function(){

    if(isJumping === true){
        if(isFalling === false){
            hero.yDelta = -5;
            if(hero.y === 200){
                isFalling = true;
            }
        } else {
            hero.yDelta = 5;
            if(hero.y === 400){
                isJumping = false;
                isFalling = false;
                hero.yDelta = 0;
            }
        }
    }
}

const loop = function(){

    context.clearRect(0,0,1200,600);
    update();
    draw();
    jump();
    requestAnimationFrame(loop);
}

loop();

document.addEventListener('keydown', function(event) {

    if(event.keyCode === leftKey) {
        
    }
    if(event.keyCode === rightKey) {
        isMoving = true;
    }
    if (event.keyCode === upKey && isJumping === false) {
        isJumping = true;
    }
}, false);
document.addEventListener('keyup', function(event){

    if(event.keyCode === rightKey){
        isMoving = false;
    }
}, false)
