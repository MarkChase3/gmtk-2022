function updateUI(){
	Array.from({length: player.hp}).forEach((v,i) => {
	ctx.drawImage(tileset, 18, 86, 16, 16, 5 + i * 8, 5, 8, 8);
	ctx.fillStyle = 'white';
	ctx.textBaseline = "top";
	ctx.font = '1em "Lucida Sans Typewriter"';
	ctx.fillText(player.woods + ' ', 0, 12);
	ctx.drawImage(tileset, 36, 35, 15, 16, Math.floor(ctx.measureText(player.woods).width ) + 2, 12, 16,16)
	let metrics  = ctx.measureText(player.woods);
	ctx.fillText(player.irons + ' ', 0, 12 + Math.floor(  metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent ) + 2);
	ctx.drawImage(tileset, 138, 69, 15, 16, Math.floor(ctx.measureText(player.irons).width ) + 2, 12 + Math.floor(  metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent ) + 2, 16,16)
	let metrics2  = ctx.measureText(player.irons);
	let height2 = 12 + Math.floor(  metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent ) + 2 +  Math.floor(  metrics2.fontBoundingBoxAscent + metrics2.fontBoundingBoxDescent )
	ctx.fillText(player.carcasses, 0, height2);
	ctx.drawImage(tileset, 2, 86, 15, 16, Math.floor(ctx.measureText(player.carcasses).width ) + 2, height2, 16,16)
	ctx.fillText(Math.floor(timeToTheRoll/1000)+1 + ' SECONDS TO THE ROLL', canvas.width - ctx.measureText(Math.floor(timeToTheRoll/1000)+1 + ' SECONDS TO THE ROLL'	).width, 12);
	})
}
