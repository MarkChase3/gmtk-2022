let tileset = loadImage('images/tileset.png');
function drawMap(){
	map[0].forEach((line, y) => {
		line.forEach((tile, x) => {
			if(tile=='gra'){
				if((x+y)%3==0)
					ctx.drawImage(tileset, 1, 1, 16, 16, x * 16, y * 16, 16, 16);
				if((x+y)%3==1)
					ctx.drawImage(tileset, 18, 1, 16, 16, x * 16, y * 16, 16, 16);
				if((x+y)%3==2)
					ctx.drawImage(tileset, 35, 1, 16, 16, x * 16, y * 16, 16, 16);
			}
			if(tile=='san'){
				if((x+y)%2==0)
					ctx.drawImage(tileset, 35, 69, 16, 16, x * 16, y * 16, 16, 16);
				if((x+y)%2==1)
					ctx.drawImage(tileset, 52, 69, 16, 16, x * 16, y * 16, 16, 16);
			}
		})
	})
	map[1].forEach((line, y) => {
		line.forEach((tile, x) => {
			switch(tile){
				case 'pa1':
					ctx.drawImage(tileset, 1, 18, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa2':
					ctx.drawImage(tileset, 18, 18, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa3':
					ctx.drawImage(tileset, 1, 35, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa4':
					ctx.drawImage(tileset, 18, 35, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa5':
					ctx.drawImage(tileset, 1, 52, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa6':
					ctx.drawImage(tileset, 86, 69, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa7':
					ctx.drawImage(tileset, 18, 35, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa8':
					ctx.drawImage(tileset, 1, 52, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'pa9':
					ctx.drawImage(tileset, 103, 86, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'tre':
					ctx.drawImage(tileset, 35, 52, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'cac':
					ctx.drawImage(tileset, 69, 69, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'wat':
					ctx.drawImage(tileset, 52, 1, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'stu':
					ctx.drawImage(tileset, 120, 69, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'iro':
					ctx.drawImage(tileset, 137, 69, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'roc':
					ctx.drawImage(tileset, 103, 1, 16, 16, x * 16, y * 16, 16, 16);
				break;
				case 'bo1':
ctx.drawImage(tileset, 52, 1, 16, 16, x * 16, y * 16, 16, 16);
					ctx.drawImage(tileset, 52, 103, 16, 16, x * 16, y * 16, 16, 16)
				break;
				case 'bo2':
					ctx.drawImage(tileset, 52, 1, 16, 16, x * 16, y * 16, 16, 16);
					ctx.drawImage(tileset, 69, 103, 16, 16, x * 16, y * 16, 16, 16)
					if(aabbCollision(player.x-2, player.y-2, 20, 20, x * 16, y *16, 16, 16) && keys['lmouse'] && player.woods >= 50 && player.irons >= 15 && player.carcasses >=5){
						winned = true;
					}
				break;
			}
		})
	})
	if(xScreens == 0 && yScreens == 3){
		ctx.fillStyle = 'white'
		ctx.font = '0.5em "Lucida Sans Typewriter"'
		ctx.fillText('fix the', 34, 96);
		ctx.fillText('boat to', 34, 105);
		ctx.fillText('scape the island!', 34, 114);
		ctx.fillText('You will need 50 woods,', 34, 123);
		ctx.fillText('15 irons and 5 carcasses', 34, 132);
		ctx.fillText('Every 45 ', 34, 12);
		ctx.fillText('seconds you get', 34, 21);
		ctx.fillText('other items.', 34, 30);
		ctx.fillText('with a picaxe, get iron', 34, 39);
		ctx.fillText('with an axe, ', 144, 48);
		ctx.fillText('get wood', 144, 57);
		ctx.fillText('and kill enemies to', 144, 66);
		ctx.fillText('get their carcasses', 144, 75);
	}
}
