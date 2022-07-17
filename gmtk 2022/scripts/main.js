let then = Date.now();
let currSpriteAnimation = 0, startAnimationRoll = 0;
function update(){
	if(nImagesLoaded == nImages && Date.now() - then > 1/30 ){
		if(timeToTheRoll > 0 && timeToTheRoll - (Date.now() - then) <= 0 && !menu){
			startAnimationRoll = Date.now();
		}
		timeToTheRoll -= Date.now() - then;
		then = Date.now();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if(!deathScreen && timeToTheRoll > 0 && !winned){
			drawMap();
			updatePlayer();
			updateEnemies();
			updateHearts();
			updateCarcasses()
			updateUI();
		}
		else if(timeToTheRoll > 0 && !winned){
			ctx.clearRect(0,0, canvas.width, canvas.height);
			ctx.font = '1.5em "Lucida Sans Typewriter"';
			ctx.fillStyle = 'white';
			ctx.fillText('GAME OVER',0,50);
			ctx.font = '0.7em "Lucida Sans Typewriter"';
			ctx.fillText('PRESS SPACE TO RESTART', 0, 100);
			if(keys[' ']){
				xScreen = 0;
				yScreen = 3;
				createMap(0,3);
				createPlayer();
				hearts = [];
				carcasses = []
				deathScreen = false;
			}
		}
		if(timeToTheRoll <= 0 && !winned && !menu){
			drawMap()
			drawPlayer()
			enemies.forEach(drawEnemie)
			ctx.fillStyle = '#000000A0';
			ctx.fillRect(0,0,canvas.width,canvas.height);
			let sprites = [
			[86,1],
			[35,86],
			[137,52]
			]
			if(Date.now() % 7 == 0 && (Date.now() - startAnimationRoll < 5000 ||currSpriteAnimation== player.currWeapon || (currSpriteAnimation==1 && player.irons >= 15)))
			 	currSpriteAnimation = Math.floor(Math.random()*3);
			ctx.drawImage(tileset,1,103,16,16, canvas.width/2 - 8, canvas.height/2 - 8, 16, 16 )
			ctx.drawImage(tileset, sprites[currSpriteAnimation][0], sprites[currSpriteAnimation][1], 16, 16, canvas.width/2 - 5, canvas.height/2 - 5, 16, 16);
			if(Date.now() - startAnimationRoll > 5000 && currSpriteAnimation !== player.currWeapon && (currSpriteAnimation==1 && player.irons >= 15 ? false : true)){
				player.currWeapon = currSpriteAnimation;
				timeToTheRoll = 45000;
			}
		}
		if(winned && !menu){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = 'rgb(50, 190, 190)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			Array.from({length:20}).map((v,i) =>{ 
				ctx.drawImage(tileset, 86, 103, 16, 16, 16 * i, 68, 16, 16);
				Array.from({length:7}).map((v2,j) =>{ 
					ctx.fillStyle = 'rgb(43,23,210)';
					ctx.fillRect(i * 16, j * 16 + 84, 16, 16)
				})
			})
		ctx.drawImage(tileset, 52, 18, 16, 16, canvas.width/2 - 16 + 2, 53, 16, 16)		
		ctx.drawImage(tileset, 52, 103, 16, 16, canvas.width/2 - 16, 57, 16, 16)
		ctx.drawImage(tileset, 69, 103, 16, 16, canvas.width/2 , 57, 16, 16)
		ctx.fillStyle = 'white';
	ctx.font = '1em "Lucida Sans Typewriter"';
		ctx.fillText('CONGRATULATIONS!! YOU ESCAPED', canvas.width/2 - ctx.measureText('CONGRATULATIONS!! YOU ESCAPED').width/2, 20);
		ctx.font = '0.7em "Lucida Sans Typewriter"';
		ctx.fillText('SPACE TO GO TO MENU', canvas.width/2 - ctx.measureText('SPACE TO GO TO MENU').width/2, 140);
		if(keys[' ']){
			menu = true;
			winned = false;
		}
		}
		if(menu){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'rgb(50, 190, 190)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				Array.from({length:20}).map((v,i) =>{ 
					ctx.drawImage(tileset, 86, 103, 16, 16, 16 * i, 68, 16, 16);
					Array.from({length:7}).map((v2,j) =>{ 
						ctx.fillStyle = 'rgb(43,23,210)';
						ctx.fillRect(i * 16, j * 16 + 84, 16, 16)
					})
				})
					ctx.fillStyle = 'white';
		ctx.font = '1em "Lucida Sans Typewriter"';
			ctx.fillText('ESCAPE THE ISLAND', canvas.width/2 - ctx.measureText('ESCAPE THE ISLAND').width/2, 20);
			ctx.font = '0.7em "Lucida Sans Typewriter"';
			ctx.fillText('PLAY', canvas.width/2 - ctx.measureText('PLAY').width/2, 90);
			let metrics = ctx.measureText('PLAY');
			let heightPlay = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
			if(keys['lmouse'] && aabbCollision(mouse.x, mouse.y, 5, 5, canvas.width/2 - ctx.measureText('PLAY').width/2, 90, ctx.measureText('PLAY').width, heightPlay)){
				menu = false;
xScreen = 0;
				yScreen = 3;
				createMap(0,3);
				createPlayer();
				hearts = [];
				carcasses = []
				winned = false;
			}
		}
	}
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
