const withAssetsPath = (src) => `./assets/${src}`; //Iren
const audioMonster = new Audio(withAssetsPath('monster.mp3'));

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
    return Math.floor(Math.random() * num);
}

const heroImgs = new Array(8).fill({}).map((_, i) => {
    const heroImg = new Image();
    heroImg.src = withAssetsPath(`${i + 1}.png`);
    return heroImg;
});

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

    hero: { //Tiko
        pic: heroImgs,
        x: 0,
        y: floorY,
        xDelta: 0,
        yDelta: 0,
        w: 350,
        h: 250
    },
    
    monsters: { //Knarik

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

    exam: { //Anna
        pic: examImg,
        x1: 5500,
        x2: 11800,
        x3: 17800,
        x4: 32000,
        y: 0,
        xDelta: 2,
        yDelta: 5,
        w: 700,
        h: 600,
    },

    ninja: { //Anna
        pic: [ninjaImg, ninjahookImg],
        x: 14000,
        y: floorYm - 65,
        xDelta: 2,
        yDelta: 5,

        w: [100, 200],
        h: 250
    },

    background: { //Tiko
        pic1: background1,
        pic2: background2,
        pic3: background3,
        pic4: background4,
        x: 0,
        w: 1500
    },

    score: { //Tiko
        score: 0,
        APoint: 0,
        FPoint: 0,
        lvlCountA: [10, 9, 8, 7],
        lvlCountF: [4, 6, 8, 10]
    },

    cloud: { //Anna
        x: 14000,
        y: floorYm - 265,
        w: 300,
        h: 100,
        xDelta: 2,
        pic: cloudImg
    }

};

const hero = gameData.hero; //Tiko
const multimouth = gameData.monsters.multimouth; //Knarik
const octopus = gameData.monsters.octopus;
const devil = gameData.monsters.devil;
const exam = gameData.exam; //Anna
const ninja = gameData.ninja;
const monsters = [multimouth, octopus, devil]; //Knarik
const score = gameData.score; //Tiko
const background = gameData.background;
const cloud = gameData.cloud; //Anna
const arrayA = []; //Tiko
const arrayF = [];
let isJumping = false;
let isFalling = false;
let imgNum = 0;
let isMoving = false;
let level = 1;
let Death = false;
let whichLevel = Math.floor(gameData.hero.x / gameData.background.w * 5);
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

const createPoints = function(level,extra) { //Tiko

    const pointsLoop = function(count, arr, pic, point, yVal) {

        if (count <= 0) {
            return;
        }
        point[arr] = {
            img: pic,
            x: rand(5*background.w-1000) + extra,
            y: rand(200) + yVal
        }
        console.log(point[arr].x)

        return pointsLoop(count - 1, arr + 1, pic, point, yVal);
    }

    pointsLoop(score.lvlCountA[level - 1], 0, APointImg, arrayA, 300);
    pointsLoop(score.lvlCountF[level - 1], 0, FPointImg, arrayF, 400);
}

const drawPoints = function() { //Tiko

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

    for (i = 0; i < 5; i++) { //Tiko
        context.drawImage(background.pic1, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 5; i < 10; i++) {
        context.drawImage(background.pic2, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 10; i < 15; i++) {
        context.drawImage(background.pic3, background.x + i * background.w, 0, background.w, canvas.height);
    }
    for (i = 15; i < 20; i++) {
        context.drawImage(background.pic4, background.x + i * background.w, 0, background.w, canvas.height);
    }

    context.font = '20px Arial'; //Tiko
    context.drawImage(APointImg, 0, 0, 30, 30);

    context.fillStyle = '#ffff00';
    context.fillText('X', 40, 21);
    context.fillText(score.APoint, 65, 21);

    if(Death) { //Knarik
        isFalling = true;
        context.drawImage(replay, 500, 200, 200, 200);
    }

    forEach(monsters, function(monsters) { //Knarik
        context.drawImage(monsters.pic, monsters.x1, monsters.y, monsters.w, monsters.h);
        context.drawImage(monsters.pic, monsters.x2, monsters.y, monsters.w, monsters.h);
    })

    context.drawImage(hero.pic[imgNum], hero.x - hero.w / 3, hero.y, hero.w, hero.h); //Tiko
    context.drawImage(exam.pic, exam.x1, exam.y, exam.w, exam.h); //Anna
    context.drawImage(exam.pic, exam.x2, exam.y, exam.w, exam.h);
    context.drawImage(exam.pic, exam.x3, exam.y, exam.w, exam.h);
    context.drawImage(exam.pic, exam.x4, exam.y, exam.w, exam.h);
    move();

    if (ninja.x - hero.x < 600) { //Anna
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
};

const move = function() {

    if (isMoving === true && !Death) { //Iren

        if (imgNum <= 6) { //Iren
            imgNum++;
        } else {
            imgNum = 0;
        }
    }

    if (isMoving === true) {

        if (Death) { //Tiko
            return;
        }

        background.x -= 5; //Tiko

        for (let i = 0; i <= arrayA.length - 1; i++) { //Tiko
            arrayA[i].x -= 5;
        }
        for (let i = 0; i <= arrayF.length - 1; i++) {
            arrayF[i].x -= 5;
        }

        forEach(monsters, function(monsters) { //Knarik,Anna
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

    hero.y += hero.yDelta; //Tiko

    for (let i = 0; i <= arrayA.length - 1; i++) {
        if (arrayA[i].x <= hero.x + hero.w / 3 && arrayA[i].x + 30 >= hero.x &&
            arrayA[i].y <= hero.y + hero.h && arrayA[i].y + 30 >= hero.h) {
            arrayA[i].y = 1000;
            score.APoint++;
        }
    }

    for (let i = 0; i <= arrayF.length - 1; i++) {
        if (arrayF[i].x <= hero.x + hero.w / 3 && arrayF[i].x + 30 >= hero.x &&
            arrayF[i].y <= hero.y + hero.h && arrayF[i].y + 30 >= hero.h) {
            arrayF[i].y = 1000;
            if (score.APoint >= 5) {
                score.APoint = score.APoint - 5;
            } else {
                Death = true;
            }
        }
    };

    const collision = function(a) { //Knarik
        forEach(monsters, function(monsters) {
            if (hero.x + (hero.w / 3) >= a + 80 && hero.x <= a + monsters.w - 80 && hero.y + hero.h >= monsters.y + 80) {
                Death = true;
            }
        })
    }

    forEach(monsters, function(monsters) { //Knarik
        collision(monsters.x1);
        collision(monsters.x2);
    })

    const examCollision = function(b) { //Anna

        if (hero.x + (hero.w / 3) + 1000 >= b && hero.x <= b) {

            const play = document.getElementById('track');

            const oldSrc = play.src;
            play.src = "";
            audioMonster.addEventListener('ended', function() {
                this.currentTime = 10;
                this.play();
            }, false);
            audioMonster.play();
        }
    }

    examCollision(gameData.exam.x1);
    examCollision(gameData.exam.x2);
    examCollision(gameData.exam.x3);
    examCollision(gameData.exam.x4);

    const devilx = [devil.x1, devil.x2]; //Knarik
    forEach(devilx, function(devilx) {
        if (devilx - hero.x <= 1000) {
            devil.xDelta = 10;
        } else if (devilx <= 0) {
            devil.xDelta = 8;
        }
    });

    const octopusx = [octopus.x1, octopus.x2]; //Knarik
    forEach(octopusx, function(octopusx) {
        if (octopusx - hero.x <= 1000) {
            octopus.xDelta = 8;
        }
        if (octopusx <= 0) {
            octopus.xDelta = 9;
        }
    });

    const multimouthx = [multimouth.x1, multimouth.x2]; //Knarik
    forEach(multimouthx, function(multimouthx) {
        if (multimouthx - hero.x <= 1000) {
            multimouth.xDelta = 8;
        }
        if (multimouthx <= 0) {
            multimouth.xDelta = 8;
        }
    });

    if(background.x <= -6500 && level === 1){ //Tiko
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
}

const jump = function() { //Tiko

    if (isJumping === true) {
        imgNum = 4;
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
                imgNum = 0;
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

const monsterPos = function() { //Knarik

    const position = [1500]
    const createPositions = function(num) {
        const helper = function(index) {
            if (index >= num) {
                return;
            }
            position[position.length] = position[position.length - 1] + 2000;
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
        while (Math.abs(monsters.x2 - monsters.x1) < 2000) {
            monsters.x2 = position[rand(position.length)];
        }
        deletePos(monsters.x2);
    })
}

const runAnimation = () => { //Anna
    createPoints(level,0);
    monsterPos();
    loop();
}
runAnimation();

document.addEventListener('keydown', function(event) { //Iren

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
        imgNum = 0;
        isMoving = false;
        level = 1;
        Death = false;
        runAnimation();
    }
}, false);

document.addEventListener('keyup', function(event) { //Iren
    if (event.keyCode === rightKey) {
        isMoving = false;
        imgNum = 0;
    }
}, false)

canvas.addEventListener('click', function(e) { //Iren
    if (Death) {
        if (Math.sqrt((e.offsetX - 500) ** 2 + (e.offsetY - 300) ** 2) < 100) {
            document.location.reload();
        }
    }
})
