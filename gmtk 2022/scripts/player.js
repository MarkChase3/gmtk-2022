let player;
function createPlayer() {
  player = {
    img: loadImage('images/tileset.png'),
    frames: [[52, 18, 16, 16], [103, 18, 16, 16]],
    currFrame: 0,
    lastFrame: 0,
    x: canvas.width / 2 - 8,
    y: canvas.height / 2 - 8,
    lastShoot: 0,
    shootFrequency: 500,
    shootSpeed: 3,
    shootSize: 4,
    shoots: [],
    gradientSize: 20,
    gradient: ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 2, canvas.width / 2, canvas.height / 2, 20),
    spd: 2,
    hp: 20,
    side: 1,
    attacking: false,
    weapons: [{
		dmg: 2,
		frame: [86,1,16,16]
	},
	{
		dmg: 1,
		frame: [35,86,16,16]
	},
	{
		dmg: 4,
		frame: [137,52,16,16]
	}
	],
	currWeapon: 1,
	woods: 0,
	irons: 0,
	carcasses:0,
	knockbackStart: 0
  }
  player.gradient.addColorStop(0, '#ffffffff')
  player.gradient.addColorStop(1, '#ffffff00');
}
function drawPlayer() {
	/*player.gradient = ctx.createRadialGradient(player.x + 8, player.y + 8, 2, player.x + 8, player.y + 8, 20)
  player.gradient.addColorStop(0, '#ffffffff')
  player.gradient.addColorStop(1, '#ffffff00');
  ctx.beginPath();
  ctx.arc(player.x + player.frames[player.currFrame][2] / 2, player.y + player.frames[player.currFrame][3] / 2,
    player.gradientSize, 0, 2 * Math.PI);
  ctx.fillStyle = player.gradient;
  ctx.fill();*/
  ctx.save();
  ctx.scale(player.side, 1);
  ctx.drawImage(player.img,
    player.frames[player.currFrame][0],
    player.frames[player.currFrame][1],
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
    player.side==-1 ? -16-Math.floor(player.x) : Math.floor(player.x), Math.floor(player.y),
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
  );
  if(!player.attacking)
	ctx.drawImage(player.img,
		player.weapons[player.currWeapon].frame[0],
		player.weapons[player.currWeapon].frame[1],
		player.weapons[player.currWeapon].frame[2],
		player.weapons[player.currWeapon].frame[3],
		player.side==-1 ? -16-(Math.floor(player.x) + 12*player.side) : (Math.floor(player.x) + 12*player.side), Math.floor(player.y)+1,
		player.weapons[player.currWeapon].frame[2],
		player.weapons[player.currWeapon].frame[3],
	);
	else{
		ctx.translate(player.side==-1 ? -16-(player.x + 12*player.side) : (player.x + 12*player.side), player.y+1)
		ctx.rotate(Math.PI / 4);
		ctx.drawImage(player.img,
			player.weapons[player.currWeapon].frame[0]+1,
			player.weapons[player.currWeapon].frame[1]+1,
			player.weapons[player.currWeapon].frame[2]-2,
			player.weapons[player.currWeapon].frame[3]-2,
			0, 0,
			player.weapons[player.currWeapon].frame[2],
			player.weapons[player.currWeapon].frame[3],
		);
}
  ctx.restore();
}
function movePlayer() {
    let preX = player.x, preY = player.y;
	if (keys['w'] || keys['W'] || keys['ArrowUp']) {
        player.y -= player.spd;
    }
    if (keys['s'] || keys['S'] || keys['ArrowDown']) {
        player.y += player.spd;
    }
    if(player.knockbackAlreadyDid<10 && Date.now() - player.knockbackStart < 2000){
      player.y -= Math.sin(player.knockbackAngle) * 1.5;
      player.knockbackAlreadyDid += Math.abs(Math.sin(player.knockbackAngle)) * 1.5;
    }
	map[1].forEach((line, y) => {
		line.forEach((tile, x) => {
			if(tile!== 'NOT' && tile !== 'en1' && aabbCollision(player.x+1, player.y+1, 14, 14, x * 16, y * 16, 16, 16)){
				let change = (preY < player.y ? -1 : 1);
				while(player.y !== preY &&  aabbCollision(player.x+1, player.y+1, 14, 14, x * 16, y * 16, 16, 16)){
					player.y += change
				}
			}
		})
	})	
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        player.x -= player.spd;
        player.side = -1;   
    }
    if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        player.x += player.spd;
        player.side = 1;
    }
        if(player.knockbackAlreadyDid<10 && Date.now() - player.knockbackStart < 2000){
      player.x -= Math.cos(player.knockbackAngle) * 1.5;
      player.knockbackAlreadyDid += Math.abs(Math.cos(player.knockbackAngle)) * 1.5;
    }
    map[1].forEach((line, y) => {
		line.forEach((tile, x) => {
			if(tile !== 'NOT' && tile !== 'en1' && aabbCollision(player.x+1, player.y+1, 14, 14, x * 16, y * 16, 16, 16)){
				let change = (preX < player.x ? -1 : 1);
				while(player.x !== preX && aabbCollision(player.x+1, player.y+1, 14, 14, x * 16, y * 16, 16, 16)){
					player.x += change;
				}
		}
		})
	})
}
function playerBreakThings(){
	if(keys['lmouse']){
		player.attacking = true;
		player.currFrame = 1;
		window.setTimeout(() => {player.currFrame = 0; player.attacking = false},350);
	}
	map[1].forEach((line, y) => {
		line.forEach((tile, x) => {
			if(player.currWeapon == 0 && tile == 'tre' && player.attacking && aabbCollision(player.x - 2, player.y - 2, 20, 20, x * 16, y * 16, 16, 16)){
				map[1][y][x] = 'stu';
				player.woods++;
			}
			if(player.currWeapon == 1 && tile == 'iro' && player.attacking && aabbCollision(player.x - 2, player.y - 2, 20, 20, x * 16, y * 16, 16, 16)){
				map[1][y][x] = 'roc';
				player.irons++;
			}
		})
	})
}
function updatePlayer(){
	movePlayer();
	drawPlayer();
	playerBreakThings();
	if(player.hp <= 0){
		deathScreen = true;
	}
	if(player.x < 0 && xScreens > 0 && screensMap[yScreens][xScreens-1] !== 0){
		xScreens--;
		createMap(xScreens, yScreens);
		player.x = canvas.width - 16;
	}
	if(player.y < 0 && yScreens > 0 && screensMap[yScreens-1][xScreens] !== 0){
		yScreens--;
		createMap(xScreens, yScreens);
		player.y = canvas.height - 16;
	}
	if(player.x + 16 > canvas.width && xScreens < screensMap[0].length - 1 && screensMap[yScreens][xScreens+1] !== 0){
		xScreens++;
		createMap(xScreens, yScreens);
		player.x = 0;
	}
	if(player.y + 16 > canvas.height && yScreens < screensMap.length - 1 && screensMap[yScreens+1][xScreens] !== 0){
		yScreens++;
		createMap(xScreens, yScreens);
		player.y = 0;
	}
}
createPlayer();
