const withAssetsPath = (src) => `./assets/${src}`; 
const audioMonster = new Audio(withAssetsPath('monster.mp3'));
const audioLaugh = new Audio(withAssetsPath('laugh.mp3'));

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
    return Math.floor(Math.random() * num);
}

const heroImg1 = new Image();
heroImg1.src = withAssetsPath("1.png");
const heroImg2 = new Image();
heroImg2.src = withAssetsPath("2.png");
const heroImg3 = new Image();
heroImg3.src = withAssetsPath("3.png");
const heroImg4 = new Image();
heroImg4.src = withAssetsPath("4.png");
const heroImg5 = new Image();
heroImg5.src = withAssetsPath("5.png");
const heroImg6 = new Image();
heroImg6.src = withAssetsPath("6.png");
const heroImg7 = new Image();
heroImg7.src = withAssetsPath("7.png");
const heroImg8 = new Image();
heroImg8.src = withAssetsPath("8.png");
const heroImg9 = new Image();
heroImg9.src = withAssetsPath("2-1.png");
const heroImg10 = new Image();
heroImg10.src = withAssetsPath("2-2.png");
const heroImg11 = new Image();
heroImg11.src = withAssetsPath("2-3.png");
const heroImg12 = new Image();
heroImg12.src = withAssetsPath("2-4.png");
const heroImg13 = new Image();
heroImg13.src = withAssetsPath("2-5.png");
const heroImg14 = new Image();
heroImg14.src = withAssetsPath("2-6.png");
const heroImg15 = new Image();
heroImg15.src = withAssetsPath("2-7.png");
const heroImg16 = new Image();
heroImg16.src = withAssetsPath("2-8.png");
const heroImg17 = new Image();
heroImg17.src = withAssetsPath("3-1.png");
const heroImg18 = new Image();
heroImg18.src = withAssetsPath("3-2.png");
const heroImg19 = new Image();
heroImg19.src = withAssetsPath("3-3.png");
const heroImg20 = new Image();
heroImg20.src = withAssetsPath("3-4.png");
const heroImg21 = new Image();
heroImg21.src = withAssetsPath("3-5.png");
const heroImg22 = new Image();
heroImg22.src = withAssetsPath("3-6.png");
const heroImg23 = new Image();
heroImg23.src = withAssetsPath("3-7.png");
const heroImg24 = new Image();
heroImg24.src = withAssetsPath("3-8.png");
const heroImg25 = new Image();
heroImg25.src = withAssetsPath("4-1.png");
const heroImg26 = new Image();
heroImg26.src = withAssetsPath("4-2.png");
const heroImg27 = new Image();
heroImg27.src = withAssetsPath("4-3.png");
const heroImg28 = new Image();
heroImg28.src = withAssetsPath("4-4.png");
const heroImg29 = heroImg28;
const heroImg30 = new Image();
heroImg30.src = withAssetsPath("4-6.png");
const heroImg31 = new Image();
heroImg31.src = withAssetsPath("4-7.png");
const heroImg32 = new Image();
heroImg32.src = withAssetsPath("4-8.png");

const replay = new Image();
replay.src = withAssetsPath("replay.png");
const multimouthImg = new Image();
multimouthImg.src = withAssetsPath("multimouth.png");
const devilImg = new Image();
devilImg.src = withAssetsPath("devil.png");
const octopusImg = new Image();
octopusImg.src = withAssetsPath("octopus.png");
const ninjaImg = new Image();
ninjaImg.src = withAssetsPath("ninja.png");
const ninjahookImg = new Image();
ninjahookImg.src = withAssetsPath("ninjahook.png");
const examImg = new Image();
examImg.src = withAssetsPath("exam.png");
const background1 = new Image();
background1.src = withAssetsPath("cafeteria.jpg");
const background2 = new Image();
background2.src = withAssetsPath("library.jpg");
const background3 = new Image();
background3.src = withAssetsPath("success.jpg");
const background4 = new Image();
background4.src = withAssetsPath("bridge.jpg");
const APointImg = new Image();
APointImg.src = withAssetsPath("A-Point.png");
const FPointImg = new Image();
FPointImg.src = withAssetsPath("F-Point.png");
const officeImg = new Image();
officeImg.src = withAssetsPath("office.png");

const cloudImg = new Image();
cloudImg.src = withAssetsPath("cloud.png");

const enter = 13;
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const mKey = 77;
const floorY = 350;
const floorYm = 400;

const gameData = {

    hero: {
        pic: [heroImg1,heroImg2,heroImg3,heroImg4,heroImg5,heroImg6,heroImg7,heroImg8,
              heroImg9,heroImg10,heroImg11,heroImg12,heroImg13,heroImg14,heroImg15,heroImg16,
              heroImg17,heroImg18,heroImg19,heroImg20,heroImg21,heroImg22,heroImg23,heroImg24,
              heroImg25,heroImg26,heroImg27,heroImg28,heroImg29,heroImg30,heroImg31,heroImg32],
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
            y: floorYm,
            xDelta: 5,
            yDelta: 0,
            w: 200,
            h: 200
        },

        devil: {
            pic: devilImg,
            x1: 1500,
            x2: 5000,
            y: floorYm,
            xDelta: 5,
            yDelta: 0,
            w: 220,
            h: 200
        },

        octopus: {
            pic: octopusImg,
            x1: 1600,
            x2: 7000,
            y: floorYm,
            xDelta: 5,
            yDelta: 0,
            w: 250,
            h: 250
        }

    },

    exam: {
        pic: examImg,
        x1: 8000,
        x2: 17000,
        x3: 25500,
        x4: 35500,
        y: 0,
        xDelta: 2,
        yDelta: 5,
        w: 700,
        h: 600,
    },

    ninja: { 
        pic: [ninjaImg, ninjahookImg],
        x: 5000,
        y: floorYm - 65,
        xDelta: 2,
        yDelta: 5,

        w: [100, 200],
        h: 250
    },

    background: {
        pic1: background1,
        pic2: background2,
        pic3: background3,
        pic4: background4,
        x: 0,
        w: 1500
    },

    score: {
        APoint: 25,
        FPoint: 0,
        lvlCountA: [10, 9, 8, 7],
        lvlCountF: [4, 6, 8, 10]
    },

    cloud: { 
        x: 5000,
        y: floorYm - 265,
        w: 300,
        h: 100,
        xDelta: 2,
        pic: cloudImg
    }

};

const hero = gameData.hero;
const multimouth = gameData.monsters.multimouth;
const octopus = gameData.monsters.octopus;
const devil = gameData.monsters.devil;
const exam = gameData.exam; 
const ninja = gameData.ninja;
const monsters = [multimouth, octopus, devil];
const score = gameData.score;
const background = gameData.background;
const cloud = gameData.cloud; 
const arrayA = [];
const arrayF = [];
let isJumping = false;
let isFalling = false;
let imgNum = 0;
let isMoving = false;
let level = 1;
let Death = false;
let pointLose = false;
let monsterLose = false;
let whichLevel = Math.floor(gameData.hero.x / gameData.background.w * 5);
let heroCondition = 1;
gameData.hero.x = gameData.background.w * 5 * whichLevel;


const forEach = function(arr, func) {
    const helper = function(index) {
        if (index === arr.length) {
            return;
        }
        func(arr[index]);
        helper(index + 1);
    };
    helper(0);
};

const createPoints = function(level,extra) {

    const pointsLoop = function(count, arr, pic, point, yVal1, yVal2) {

        if (count <= 0) {
            return;
        }
        point[arr] = {
            img: pic,
            x: rand(5*background.w-1000) + extra,
            y: rand(yVal1) + yVal2
        }

        return pointsLoop(count - 1, arr + 1, pic, point, yVal1, yVal2);
    }

    pointsLoop(score.lvlCountA[level - 1], 0, APointImg, arrayA, 300, 200);
    pointsLoop(score.lvlCountF[level - 1], 0, FPointImg, arrayF, 150, 400);
}

const drawPoints = function() {

    const makePoints = function(arr, point, img) {

        if (arr === point.length) {
            return;
        }

        context.drawImage(img, point[arr].x, point[arr].y, 30, 30);
        makePoints(arr + 1, point, img);
    }

    makePoints(0, arrayA, APointImg);
    makePoints(0, arrayF, FPointImg);
}

const draw = function() {

    for (i = 0; i < 5; i++) {
        context.drawImage(background.pic1, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 5; i < 10; i++) {
        context.drawImage(background.pic2, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 10; i < 15; i++) {
        context.drawImage(background.pic3, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 15; i < 25; i++) {
        context.drawImage(background.pic4, background.x + i * background.w, 0, background.w, canvas.height);
    }

    context.font = '20px Arial';
    context.drawImage(APointImg, 0, 0, 30, 30);

    context.fillStyle = '#ffff00';
    context.fillText('X', 40, 21);
    context.fillText(score.APoint, 65, 21);

    if(Death) {
        isFalling = true;
        context.drawImage(replay, 500, 200, 200, 200);
    }

    forEach(monsters, function(monsters) {
        context.drawImage(monsters.pic, monsters.x1, monsters.y, monsters.w, monsters.h);
        context.drawImage(monsters.pic, monsters.x2, monsters.y, monsters.w, monsters.h);
    })

    context.drawImage(hero.pic[imgNum], hero.x - hero.w / 3, hero.y, hero.w, hero.h);
    context.drawImage(exam.pic, exam.x1, exam.y, exam.w, exam.h); 
    context.drawImage(exam.pic, exam.x2, exam.y, exam.w, exam.h);
    context.drawImage(exam.pic, exam.x3, exam.y, exam.w, exam.h);
    context.drawImage(exam.pic, exam.x4, exam.y, exam.w, exam.h);
    move();

    if (ninja.x - hero.x < 600) { 
        context.drawImage(ninja.pic[1], ninja.x, ninja.y, ninja.w[1], ninja.h);
        context.drawImage(cloud.pic, cloud.x, cloud.y, cloud.w, cloud.h);
        context.fillStyle = 'white';
        context.fillText("With me so far?!", cloud.x + 50, cloud.y + 50);

        if (hero.x + (hero.w / 3) >= ninja.x && hero.x <= ninja.x + ninja.w[0] && hero.y + hero.h >= ninja.y) {
            ninja.x = -8000;
            cloud.x = -8000;
            score.APoint = score.APoint + 10;
        }
    } else {
        context.drawImage(ninja.pic[0], ninja.x, ninja.y, ninja.w[0], ninja.h);
    }
    
    if(pointLose){
        context.font = '70px Arial';
        context.fillStyle = 'yellow';
        context.fillText('You Got Too Many Fs!',270,500)
    }
    if(monsterLose){
        context.font = '70px Arial';
        context.fillStyle = 'yellow';
        context.fillText('You Failed The Course!',250,500)
    }

    if(background.x <= -30500 && heroCondition === 4){
        heroCondition = 3;
    }
    if(background.x <= -31000 && heroCondition === 3){
        heroCondition = 2;
    }
    if(background.x <= -31500 && heroCondition === 2){
        heroCondition = 1;
    }

    if(background.x <= -30000){
        isMoving = true;
        hero.x += 2;
    }
    if(background.x <= -32000 && background.x >= -33000){
        context.font = '100px Arial';
        context.fillStyle = 'green';
        context.fillText('You Finally Did It!', 200, 300)
    }
    if(background.x <= -34000){
        context.clearRect(0,0,canvas.width,canvas.height)
    }
    if(background.x <= -34100){
        isMoving = false;
        context.clearRect(0,0,canvas.width,canvas.height)
        context.drawImage(officeImg,0,0,canvas.width,canvas.height);
        imgNum = 0;
        context.drawImage(hero.pic[imgNum],450,floorY,350,250);
        context.font = '100px Arial';
        context.fillStyle = 'yellow';
        context.fillText('You Got Hired!',280,100)
    }
};

const move = function() {

    if (isMoving === true && !Death) { 

        if(heroCondition === 1){
            if (imgNum <= 6) { 
                imgNum++;
            } else {
                imgNum = 0;
            }
        }
        if(heroCondition === 2){
            if (imgNum <= 14) { 
                imgNum++;
            } else {
                imgNum = 8;
            }
        }
        if(heroCondition === 3){
            if (imgNum <= 22) { 
                imgNum++;
            } else {
                imgNum = 16;
            }
        }
        if(heroCondition === 4){
            if (imgNum <= 30) { 
                imgNum++;
            } else {
                imgNum = 24;
            }
        }
        
    }

    if (isMoving === true) {

        if (Death) {
            return;
        }

        background.x -= 5;

        for (let i = 0; i <= arrayA.length - 1; i++) {
            arrayA[i].x -= 5;
        }
        for (let i = 0; i <= arrayF.length - 1; i++) {
            arrayF[i].x -= 5;
        }

        forEach(monsters, function(monsters) {
            monsters.x1 -= monsters.xDelta;
            monsters.x2 -= monsters.xDelta;
            ninja.x -= ninja.xDelta;
            cloud.x -= cloud.xDelta;
            exam.x1 -= exam.xDelta;
            exam.x2 -= exam.xDelta;
            exam.x3 -= exam.xDelta;
            exam.x4 -= exam.xDelta;
        })
    }
};

const update = function() {

    hero.y += hero.yDelta;

    for (let i = 0; i <= arrayA.length - 1; i++) {
        if (arrayA[i].x <= hero.x + hero.w / 3 && arrayA[i].x + 30 >= hero.x &&
            arrayA[i].y <= hero.y + hero.h && arrayA[i].y + 30 >= hero.y) {
            arrayA[i].y = 1000;
            score.APoint++;
        }
    }

    for (let i = 0; i <= arrayF.length - 1; i++) {
        if (arrayF[i].x <= hero.x + hero.w / 3 && arrayF[i].x + 30 >= hero.x &&
            arrayF[i].y <= hero.y + hero.h && arrayF[i].y + 30 >= hero.y) {
            arrayF[i].y = 1000;
            if (score.APoint >= 5) {
                score.APoint = score.APoint - 5;
            } else {
                Death = true;
                pointLose = true;
            }
        }
    };

    const collision = function(a) {
        forEach(monsters, function(monsters) {
            if (hero.x + (hero.w / 3) >= a + 80 && hero.x <= a + monsters.w - 80 && hero.y + hero.h >= monsters.y + 80) {
                Death = true;
                monsterLose = true;
            }
        })
    }

    forEach(monsters, function(monsters) {
        collision(monsters.x1);
        collision(monsters.x2);
    })
    const examCollision = function(b) {
        const play = document.getElementById('track');
        if (hero.x + (hero.w / 3) + 1000 >= b && hero.x <= b) {
            play.pause();
            audioMonster.play();
        }
        if (!audioMonster.paused) {
            play.pause()
        } else {
            play.play();
        }
    };

    if (hero.x + (hero.w / 3) - 300 >= exam.x1 && background.x >= -28000) {
        heroCondition = 2;
    }
    if (hero.x + (hero.w / 3) - 300 >= exam.x2 && background.x >= -28000) {
        heroCondition = 3;
    }
    if (hero.x + (hero.w / 3) - 300 >= exam.x3 && background.x >= -28000) {
        heroCondition = 4;
    }


    examCollision(gameData.exam.x1);
    examCollision(gameData.exam.x2);
    examCollision(gameData.exam.x3);
    examCollision(gameData.exam.x4);

    const devilx = [devil.x1, devil.x2];
    forEach(devilx, function(devilx) {
        if (devilx - hero.x <= 1000) {
            devil.xDelta = 10;
        } else if (devilx <= 0) {
            devil.xDelta = 8;
        }
    });

    const octopusx = [octopus.x1, octopus.x2];
    forEach(octopusx, function(octopusx) {
        if (octopusx - hero.x <= 1000) {
            octopus.xDelta = 8;
        }
        if (octopusx <= 0) {
            octopus.xDelta = 9;
        }
    });

    const multimouthx = [multimouth.x1, multimouth.x2];
    forEach(multimouthx, function(multimouthx) {
        if (multimouthx - hero.x <= 1000) {
            multimouth.xDelta = 8;
        }
        if (multimouthx <= 0) {
            multimouth.xDelta = 8;
        }
    });

    if(background.x <= -6500 && level === 1){
        level++;
        createPoints(level,1000);
        monsterPos();
    }
    if(background.x <= -14000 && level === 2){
        level++;
        createPoints(level,1000);
        monsterPos();
    }
    if(background.x <= -21500 && level === 3){
        level++;
        createPoints(level,1000);
        monsterPos();
    }

    if(Death){
        const play = document.getElementById('track');
        play.pause();
        audioLaugh.play();
    }
}

const jump = function() {

    if (isJumping === true) {
        if(heroCondition === 1){
            imgNum = 4;
        }
        if(heroCondition === 2){
            imgNum = 12;
        }
        if(heroCondition === 3){
            imgNum = 20;
        }
        if(heroCondition === 4){
            imgNum = 28;
        }
        if (isFalling === false) {
            hero.yDelta = -7.5;

            if (hero.y === 50) {
                isFalling = true;
            }
        } else {
            hero.yDelta = 7.5;
            if (hero.y === floorY) {
                isJumping = false;
                isFalling = false;
                hero.yDelta = 0;
                if(heroCondition === 1){
                    imgNum = 0;
                }
                if(heroCondition === 2){
                    imgNum = 8;
                }
                if(heroCondition === 3){
                    imgNum = 16;
                }
                if(heroCondition === 4){
                    imgNum = 24;
                }
            }
        }
    }
}

const loop = function() { //EVERYONE WILL SAY THIS
    context.clearRect(0, 0, 1200, 600);
    update();
    draw();
    jump();
    drawPoints();
    requestAnimationFrame(loop);
}

const monsterPos = function() {

    const position = [1500]
    const createPositions = function(num) {
        const helper = function(index) {
            if (index >= num) {
                return;
            }
            position[position.length] = position[position.length - 1] + 1000;
            helper(index + 1);
        }
        helper(1);
    }
    createPositions(6);

    const deletePos = function(x) {
        for (let i = 0; i < position.length; i++) {
            if (x === position[i]) {
                position.splice(i, 1);
            }
        }
    }
    
    forEach(monsters, function(monsters) {
        monsters.x1 = position[rand(position.length)];
        deletePos(monsters.x1);
        monsters.x2 = position[rand(position.length)];
        while (Math.abs(monsters.x2 - monsters.x1) < 1000) {
            monsters.x2 = position[rand(position.length)];
        }
        deletePos(monsters.x2);
    })
}

const runAnimation = () => { 
    createPoints(level,0);
    monsterPos();
    loop();
}
runAnimation();

document.addEventListener('keydown', function(event) { 

    if (event.keyCode === rightKey) {
        isMoving = true;
    }

    if (event.keyCode === upKey && isJumping === false) {
        isJumping = true;
    }

    if (event.keyCode === enter && Death === true) {
        document.location.reload();
        isJumping = false;
        isFalling = false;
        if(heroCondition === 1){
            imgNum = 0;
        }
        if(heroCondition === 2){
            imgNum = 8;
        }
        if(heroCondition === 3){
            imgNum = 16;
        }
        if(heroCondition === 4){
            imgNum = 24;
        }
        isMoving = false;
        level = 1;
        Death = false;
        runAnimation();
    }
}, false);

document.addEventListener('keyup', function(event) { 
    if (event.keyCode === rightKey) {
        isMoving = false;
        if(heroCondition === 1){
            imgNum = 0;
        }
        if(heroCondition === 2){
            imgNum = 8;
        }
        if(heroCondition === 3){
            imgNum = 16;
        }
        if(heroCondition === 4){
            imgNum = 24;
        }
    }
}, false)
canvas.addEventListener('click', function(e) { 
    if (Death) {
        if (Math.sqrt((e.offsetX - 500) ** 2 + (e.offsetY - 300) ** 2) < 100) {
            document.location.reload();
        }
    }
})
