// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		//write a code to check the type of key pressed
		document.getElementById("d1").innerHTML="You have pressed alphabet key";
		aplhabetkey();
		}
		if((keyPressed >=48 && keyPressed<=57)){
	
			document.getElementById("d1").innerHTML="You have pressed number key";
			numberkey();
			}
			if((keyPressed >=37 && keyPressed<=40)){
	
				document.getElementById("d1").innerHTML="You have pressed arrow key";
				arrowkey();
				}
				if((keyPressed >=17 && keyPressed<=18)){
	
					document.getElementById("d1").innerHTML="You have pressed special key";
					specialkey();
					}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	img_image = "Alpkey.png";
	add();

}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
