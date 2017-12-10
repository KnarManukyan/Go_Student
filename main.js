<!DOCTYPE html>
<html>

<body>
    <canvas id="canvas" width="1000" height="600">
    </canvas>
    <script>
        const canvas = docu<html>

<head>
    <title>Go student Go!</title>
</head>

<body>
    <canvas id="canvas" width="2000" height="800" style="border:1px solid #000000;"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const heroimg = new Image();
        heroimg.src = "hero.png";
        const multimouthimg = new Image();
        multimouthimg.src = "multimouth.png";
        const devilimg = new Image();
        devilimg.src = "devil.png";
        const octopusimg = new Image();
        octopusimg.src = "octopus.png";
        const ninjaimg = new Image();
        ninjaimg.src = "ninja.png";
        const backgroundImg = new Image();
        backgroundImg.src = "cafeteria.jpg";

        const floorY = canvas.height - 280;
        const gamedata = {
            hero: {
                pic: heroimg,
                x: 0,
                y: floorY,
                xDelta: 20,
                yDelta: 0,
                h: 250,
                w: 150,
            },
            monsters: {
                multimouth: {
                    pic: multimouthimg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                },
                devil: {
                    pic: devilimg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                },
                octopus: {
                    pic: octopusimg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                }
                /*,
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
                pic: ninjaimg,
                x: 0,
                y: 0,
                xDelta: 0,
                yDelta: 0,
                h: 0,
                w: 0,
            }
        }

        const score = {
            score: 0,
            //  A-point: 0,
            //  F-point: 0
        }
        const hero = gamedata.hero;
        const multimouth = gamedata.monsters.multimouth;
        const octopus = gamedata.monsters.octopus;
        const devil = gamedata.monsters.devil;
        const exam = gamedata.monsters.exam;
        const ninja = gamedata.ninja;
        const monsters = [multimouth, octopus, devil /*, exam*/ ];

        const forEach = function(arr, func) {
            const helper = function(index) {
                if (index === arr.length) {
                    return;
                }
                func(arr[index]);
                helper(index + 1);
            }
            helper(0);
        }
        const rand = function(num) {
            return Math.floor(Math.random() * num);
        }
       

        const draw = function() {

            ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

            forEach(monsters, function(monsters) {
                ctx.drawImage(monsters.pic, monsters.x, monsters.y, monsters.h, monsters.w);
            })
            ctx.drawImage(hero.pic, hero.x, hero.y, hero.w, hero.h);
            ctx.drawImage(ninja.pic, ninja.x, ninja.y, ninja.h, ninja.w);
        }

        addEventListener('keydown', function(event) {
                const leftKey = 37;
                const upKey = 38;
                const rightKey = 39;
                if (event.keyCode === leftKey) {
                    hero.x -= hero.xDelta;
                    if (hero.x <= 0) {
                        hero.x = canvas.width - hero.w;
                    }
                } else if (event.keyCode === rightKey) {
                    hero.x += hero.xDelta;
                    if (hero.x >= canvas.width - hero.w) {
                        hero.x = 0;
                    }
                } 
            }, false);


        const update = function() {
            
        };

        const loop = function() {
            //ctx.clearRect(0, 0, 1200, 600);
            update();
            draw();
            requestAnimationFrame(loop);
        }
        loop();
    </script>
</body>

</html>ent.getElementById('canvas');
        const context = canvas.getContext('2d');

        const rand = function(num) {
            return Math.floor(Math.random() * num);
        }

        const heroImg = new Image();
        heroImg.src = "js/images/hero.png";
        const multimouthImg = new Image();
        multimouthImg.src = "js/images/multimouth.png";
        const devilImg = new Image();
        devilImg.src = "js/images/devil.png";
        const octopusImg = new Image();
        octopusImg.src = "js/images/octopus.png";
        const ninjaImg = new Image();
        ninjaImg.src = "js/images/ninja.png";

        const leftKey = 37;
        const upKey = 38;
        const rightKey = 39;

        const gameData = {

            hero: {
                pic: heroImg,
                x: 1,
                y: 250,
                xDelta: 0,
                yDelta: 0,
                h: 180,
                w: 100,
            },
            monsters: {
                multimouth: {
                    pic: multimouthImg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                },
                devil: {
                    pic: devilImg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                },
                octopus: {
                    pic: octopusImg,
                    x: 0,
                    y: 0,
                    xDelta: 0,
                    yDelta: 0,
                    h: 0,
                    w: 0,
                }
                /*,
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
                h: 0,
                w: 0,
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
        const monsters = [multimouth, octopus, devil /*, exam*/ ];
        var isJumping = false;

        const forEach = function(arr, func) {
            const helper = function(index) {
                if (index === arr.length) {
                    return;
                }
                func(arr[index]);
                helper(index + 1);
            }
            helper(0);

        }

        const draw = function() {

            forEach(monsters, function(monsters) {
                context.drawImage(monsters.pic, monsters.x, monsters.y, monsters.h, monsters.w);
            })

            context.drawImage(hero.pic, hero.x, hero.y, hero.w, hero.h);
            context.drawImage(ninja.pic, ninja.x, ninja.y, ninja.h, ninja.w);
            move();
        }

        const move = function() {

            hero.x += hero.xDelta;

            if (hero.x >= canvas.width - hero.w) {
                hero.x = canvas.width - hero.w;
            }
            if (hero.x <= 0) {
                hero.x = 0;
            }
        }

        const update = function() {
            //collision and movement
            hero.x += hero.xDelta;
            hero.y += hero.yDelta;
        }

        const stopJump = function() {
            hero.yDelta = 0;
            isJumping = false;
        }
        const fall = function() {
            hero.yDelta = 5;
            setTimeout(stopJump, 500);
        }
        const jump = function() {
            hero.yDelta = -5;
            setTimeout(fall, 500);
        }

        const loop = function() {

            context.clearRect(0, 0, 1200, 600);
            update();
            draw();
            requestAnimationFrame(loop);
        }

        loop();

        document.addEventListener('keydown', function(event) {

            if (event.keyCode === leftKey) {
                hero.xDelta = -5;
            }
            if (event.keyCode === rightKey) {
                hero.xDelta = 5;
            }
            if (event.keyCode === upKey && isJumping === false) {
                jump();
                isJumping = true;
            }
        }, false);
        document.addEventListener('keyup', function(event) {

                if (event.keyCode === leftKey) {
                    hero.xDelta = 0;
                }
                if (event.keyCode === rightKey) {
                    hero.xDelta = 0;
                }
            }, false)


           
    </script>
 
  </body>
</html>
