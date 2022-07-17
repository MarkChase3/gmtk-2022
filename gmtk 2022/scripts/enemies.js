let enemies = [];
function createEnemie(x,y,dmg,hp,spd,sprite,frames) {
  let thisEnemie = {};
  thisEnemie.x = x;
  thisEnemie.y = y;
  thisEnemie.dmg = dmg;
  thisEnemie.spd = spd;
  thisEnemie.hp = hp;
  thisEnemie.sprite =  sprite;
  thisEnemie.touch = false;
  thisEnemie.side = -1;
  thisEnemie.frames = frames; 
  thisEnemie.delay = Math.random()*3000;
  thisEnemie.start = Date.now();
  thisEnemie.lastHurted = Date.now();
  return thisEnemie;
}
function drawEnemie(enemie){
	    ctx.save();
    ctx.scale(enemie.side, 1);
        ctx.drawImage(
            enemie.sprite,
            enemie.frames[0][0],
            enemie.frames[0][1],
            enemie.frames[0][2],
            enemie.frames[0][3],
            enemie.side==-1 ? -16-enemie.x : enemie.x,
            enemie.y,
            16,
            16
        );
    ctx.restore();

}
function updateEnemies(){
  enemies.forEach((enemie,i) => {
    if(enemie.hp<=0){
    	if(Math.floor(Math.random() * 5) == 2){
    		hearts.push(createHeart(enemie.x,enemie.y))
		} else if(Math.floor(Math.random() * 2) == 1){
			carcasses.push(createCarcass(enemie.x,enemie.y));
		}
      enemies.splice(i,1);
    }
    drawEnemie(enemie);
    if(Date.now() - enemie.start > enemie.delay){
    if(enemie.x%16==0 && enemie.y%16==0){
      enemie.x = Math.ceil(enemie.x/16)*16
      enemie.y = Math.ceil(enemie.y/16)*16
      enemie.dir = findPath(enemie);
    }
     if(enemie.dir==LEFT){
      enemie.x-=enemie.spd;
       enemie.side = -1;
    }
    else if(enemie.dir==RIGHT){
      enemie.x+=enemie.spd;
      enemie.side = 1;
    }
    else if(enemie.dir==UP){
      enemie.y-=enemie.spd;
    }
     else if(enemie.dir==DOWN){
      enemie.y+=enemie.spd;
    } else {
       
    }
  if(aabbCollision(player.x+2,player.y+2,16-4,16-4,enemie.x,enemie.y,16,16) && !enemie.touch && Date.now()%5 == 0){
      player.hp-=enemie.dmg;
      enemie.touch = true;
      player.knockbackAngle = Math.atan2((enemie.y-player.y),(enemie.x-player.x));
            player.knockbackAlreadyDid = 0;
        player.knockbackStart = Date.now();
    }
    if(!aabbCollision(player.x,player.y,16,16,enemie.x,enemie.y,16,16)) {
    enemie.touch=false;
  }
}
if(aabbCollision(player.x,player.y,16,16,enemie.x,enemie.y,16,16) && player.attacking && Date.now() - enemie.lastHurted > 500){
    	enemie.hp -= player.weapons[player.currWeapon].dmg
    	enemie.lastHurted = Date.now();
  }
  });
}
let hearts = [];
function createHeart(x,y){
	return {x:x, y:y, create: Date.now()};
}
function updateHearts(){
	hearts.forEach( (heart,i) => {
		ctx.drawImage(tileset, 18, 86, 16, 16, heart.x , heart.y, 16, 16);
		if(aabbCollision(player.x,player.y,16,16,heart.x,heart.y,16,16) && Date.now() - heart.create > 3000){
			player.hp++;
			hearts.splice(i,1);
		}
	})
}
let carcasses = [];
function createCarcass(x,y){
	return {x:x, y:y, create: Date.now()};
}
function updateCarcasses(){
	carcasses.forEach( (carcass,i) => {
		ctx.drawImage(tileset, 1, 86, 16, 16, carcass.x , carcass.y, 16, 16);
		if(aabbCollision(player.x,player.y,16,16,carcass.x,carcass.y,16,16) && Date.now() - carcass.create > 3000){
			player.carcasses++;
			carcasses.splice(i,1);
		}
	})
}
