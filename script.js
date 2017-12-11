//if you want to change something tell that in chat then do that. or just upload a seperate file, then we will edit it and add to main one.
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
    return Math.floor(Math.random() * num);
}

const heroImg1 = new Image();
heroImg1.src = "1.png";
const heroImg2 = new Image();
heroImg2.src = "2.png";
const heroImg3 = new Image();
heroImg3.src = "3.png";
const heroImg4 = new Image();
heroImg4.src = "4.png";
const heroImg5 = new Image();
heroImg5.src = "5.png";
const heroImg6 = new Image();
heroImg6.src = "6.png";
const heroImg7 = new Image();
heroImg7.src = "7.png";
const heroImg8 = new Image();
heroImg8.src = "8.png";

const multimouthImg = new Image();
multimouthImg.src = "multimouth.png";
const devilImg = new Image();
devilImg.src = "devil.png";
const octopusImg = new Image();
octopusImg.src = "octopus.png";
const ninjaImg = new Image();
ninjaImg.src = "ninja.png";
const background1 = new Image();
background1.src = "cafeteria.jpg";
const APointImg = new Image();
APointImg.src = "A-Point.png";
const FPointImg = new Image();
FPointImg.src = "F-Point.png";

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const floorY=350;
const gameData = {
    hero: {
        pic: [heroImg1,heroImg2,heroImg3,heroImg4,heroImg5,heroImg6,heroImg7,heroImg8],
        x: 0,
        y: floorY,
        xDelta: 0,
        yDelta: 0,
        w: 350,
        h: 250
    },
    monsters: {
        multimouth: {
            pic: multimouthImg,
            x1: 1000,
            x2: 4000,
            y: floorY,
            xDelta: 5,
            yDelta: 0,
            w: 250,
            h: 250
        },
        devil: {
            pic: devilImg,
            x1: 1500,
            x2: 5000,
            y: floorY,
            xDelta: 5,
            yDelta: 0,
            w: 250,
            h: 250
        },
        octopus: {
            pic: octopusImg,
            x1: 1600,
            x2: 7000,
            y: floorY,
            xDelta: 5,
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
    background: {
        pic: background1,
        x: 0,
        w: 1500
    },
    score: {
        score: 0,
        APoint: 0,
        FPoint: 0,
        lvlCountA: [10,15,15,20],
        lvlCountF: [3,4,4,6]
    }
} 

const hero = gameData.hero;
const multimouth = gameData.monsters.multimouth;
const octopus = gameData.monsters.octopus;
const devil = gameData.monsters.devil;
const exam = gameData.monsters.exam;
const ninja = gameData.ninja;
const monsters = [multimouth, octopus, devil/*, exam*/];
const score = gameData.score;
const background = gameData.background;
const arrayA = [];
const arrayF = [];
var isJumping = false;
var isFalling = false;
var imgNum = 0;
var isMoving = false;
var level = 1;
var Death = false;

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

const createPoints = function(level){

	const pointsLoop = function(count, arr, pic, point, yVal){

		if(count<=0){
			return;
		}

		point[arr] = {
            img: pic,
            x: rand(19*background.w),
            y: rand(200)+yVal
        }

		return pointsLoop(count-1,arr+1, pic, point, yVal);
	}

    pointsLoop(score.lvlCountA[level-1], 0, APointImg, arrayA, 300);
    pointsLoop(score.lvlCountF[level-1], 0, FPointImg, arrayF, 400);
}
createPoints(1);

const drawPoints = function(){
    
    const makePoints = function(arr,point,img){

        if(arr === point.length){
            return;
        }

        context.drawImage(img,point[arr].x,point[arr].y,30,30);
        makePoints(arr+1,point,img);
    }

    makePoints(0,arrayA,APointImg);
    makePoints(0,arrayF,FPointImg);
}

const draw = function(){

    for(i=0; i<=19; i++){
        context.drawImage(background.pic,background.x + i*background.w,0,background.w,canvas.height);
    }
    
    context.font = '20px Arial'
    context.drawImage(APointImg,0,0,30,30);
    
    context.fillStyle = '#ffff00';
    context.fillText('X',40,21);
    context.fillText(score.APoint,65,21)
       
     
    
	
    if(Death){
       	alert("Game is over");
        document.location.reload();
    }

    forEach(monsters, function(monsters){
        context.drawImage(monsters.pic, monsters.x1, monsters.y, monsters.w, monsters.h);
        context.drawImage(monsters.pic, monsters.x2, monsters.y, monsters.w, monsters.h);
    })
    context.drawImage(hero.pic[imgNum], hero.x-hero.w/3, hero.y, hero.w, hero.h);
    context.drawImage(ninja.pic, ninja.x, ninja.y, ninja.h, ninja.w);
    move();
}

const move = function(){

    if(isMoving === true){
        if(imgNum <= 6){
            imgNum ++;
        } else {
           imgNum = 0;
        }
    } 

    if(isMoving === true){
        background.x -= 5;
        for(i=0;i<=arrayA.length-1;i++){
            arrayA[i].x -= 5;
        }
        for(i=0;i<=arrayF.length-1;i++){
            arrayF[i].x -= 5;
        }
    forEach(monsters, function (monsters) {
        monsters.x1 -= monsters.xDelta;
        monsters.x2 -= monsters.xDelta;
        }) 
    }
    
}

const update = function(){
	
    hero.y += hero.yDelta;

    for(i=0;i<=arrayA.length-1;i++){
        if(arrayA[i].x <= hero.x + hero.w/3 && arrayA[i].x + 30 >= hero.x &&
           arrayA[i].y <= hero.y + hero.h && arrayA[i].y + 30 >= hero.h){
               arrayA[i].y = 1000;
               score.APoint++;
           }
    }
    for(i=0;i<=arrayF.length-1;i++){
        if(arrayF[i].x <= hero.x + hero.w/3 && arrayF[i].x + 30 >= hero.x &&
           arrayF[i].y <= hero.y + hero.h && arrayF[i].y + 30 >= hero.h){
               arrayF[i].y = 1000;
           if(score.APoint >= 5) {
               score.APoint = score.APoint - 5;
           }  else {

            alert("Game is over"); //if the A's are less than 5 then he has no life (
            document.location.reload(); //reloads the page
              }
        }
    }

   const collision = function(a){
    forEach(monsters, function(monsters){
        if(hero.x+(hero.w/3)>=a && hero.x<=a && hero.y+hero.h>=monsters.y){
           if(score.APoint===0){
            Death = true;
           }
           else{
            score.APoint = 0;
           }
        }
    })
    }
    forEach(monsters, function (monsters) {
        collision(monsters.x1);
        collision(monsters.x2);
        })
    forEach(monsters, function (monsters) {
        monsters.x1 -= monsters.xDelta;
        monsters.x2 -= monsters.xDelta;
        })    
     /*const multix = [multimouth.x1,multimouth.x2];
    forEach(multix, function (multix) {
        if(multix - hero.x >= 350){
        if(multix===400){
            multimouth.xDelta = -multimouth.xDelta;
        }
        if(multix===800){
            if(multimouth.xDelta<0){
            multimouth.xDelta = -multimouth.xDelta;
         }
        }
        }
        })*/
    const devilx = [devil.x1,devil.x2];
    forEach(devilx, function (devilx) {
        if(devilx - hero.x <= 700){
            devil.xDelta = 7;
        }if(devilx <= 0){
        devil.xDelta = 5;
    }
    })
}

const jump = function(){

    if(isJumping === true){
        imgNum = 4;
        if(isFalling === false){
            hero.yDelta = -7.5;

            if(hero.y === 50){
                isFalling = true;
            }
        } else {
            hero.yDelta = 7.5;
            if(hero.y === floorY){
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
    drawPoints();
    requestAnimationFrame(loop);
}

const position = [2000]
const monsterpos = function(){
    const createPositions = function(num){
        const helper = function(index){
        if(index >= num){
            return;
        }
        position[position.length]=position[position.length-1]+2000;
        helper (index+1);
        }
        helper(1);
    }
    createPositions(6);
    const deletepos = function(x){
        for(let i=0; i<position.length; i++){
            if(x===position[i]){
                position.splice(i, 1);
            }
        }
    }
    forEach(monsters, function(monsters){
        monsters.x1 = position[rand(position.length)-1];
        deletepos(monsters.x1);
        monsters.x2 = position[rand(position.length)-1];
        deletepos(monsters.x2);
    })
}
monsterpos();
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
