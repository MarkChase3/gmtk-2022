let canvas = document.getElementById('screen');
let ctx = canvas.getContext('2d');

//config the keys obj for always has the current keys pressed (fail for multiple DOMs)
let keys = {};
let mouse = {x:0,y:0};
window.addEventListener("keydown",
    function(e) {
        keys[e.key] = true;
    },
    false);

window.addEventListener('keyup',
    function(e) {
        keys[e.key] = false;
    },
    false);
window.addEventListener('mousedown', () => {
  keys['lmouse'] = true;
})
window.addEventListener('mouseup', () => {
  keys['lmouse'] = false;
})
canvas.addEventListener('mousemove',(e) => {
   var rect = e.target.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left)*180/window.innerHeight; //x position within the element.
      mouse.y = (e.clientY - rect.top)*180/window.innerHeight;  //y position within the element.
})
canvas.addEventListener('contextmenu', (e) => {
	e.preventDefault();
})
let nImages = 0, nImagesLoaded = 0;
function loadImage(path) {
  nImages++;
  let buffer = new Image();
  buffer.onload = () => {
    nImagesLoaded++;
  }
  buffer.src = path;
  return buffer;
}

//aabb collision
function aabbCollision(ax,ay,aw,ah,bx,by,bw,bh){
    return (ax + aw > bx ) && (bx + bw > ax) && (ay + ah > by) && (by + bh > ay);
}

let deathScreen, winned = false, menu = true;
let timeToTheRoll = 45000 
