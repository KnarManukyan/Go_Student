<!DOCTYPE html>
<html>

<body>
    <canvas id="canvas" width="1000" height="600">
    </canvas>
    <script>
        const canvas = document.getElementById('canvas');
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


            <
            /body>
    </script>

</html>
