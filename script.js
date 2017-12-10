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