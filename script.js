window.addEventListener("load",function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var enemies = [];
    
	var mouseX,mouseY;
    
    var a = Object.create(Enemy);
    
	
	/*
    addEventListener("mousedown",function(e){
		mouseX = e.clientX - canvas.offsetLeft;
		mouseY = e.clientY - canvas.offsetTop;
		shot.currentTime = 0;
		shot.play();
		enemies.forEach(function(enemy){
			if(mouseX > enemy.x && mouseX < enemy.x+enemy.width && mouseY > enemy.y && mouseY< enemy.y + enemy.height){
				scream.currentTime = 0;
				scream.play();
				enemies.splice(enemies.indexOf(enemy),1);
			}
		})
	});
	
	*/
	//
	
	function loop(){
        if(Math.random() < 0.01){
            var newEnemy = Object.create(Enemy);
            newEnemy.x = Math.random()*800;
            enemies.push(newEnemy);
        }
        context.clearRect(0,0,800,450);
        enemies.forEach(function(a){
            a.update();
            a.draw(context);
            if(a.y>430){
                a.sound.play();
                enemies.splice(a.indexOf,1);
            }
        });
	}
    
    setInterval(loop,10);
	
});

var Enemy = {
	x : 0,
	y : 0,
	speed:1,
	update : function(){
		this.y += 2;
	},
	draw:function(context){
		context.fillRect(this.x,this.y,20,20);
	},
    sound: new Audio("plop.mp3")
}