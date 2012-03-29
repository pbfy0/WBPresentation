/**
 * HTML5 K3D demo
 * 
 * Copyright (C) Kevin Roast 2010
 * http://www.kevs3d.co.uk/dev
 * email: kevtoast at yahoo.com
 * twitter: @kevinroast
 * 
 * I place this code in the public domain - because it's not rocket science
 * and it won't make me any money, so do whatever you want with it, go crazy
 */

// bind to window onload handler
window.addEventListener('load', onloadHandler, false);
var ambientspeed = 1.8;
var spinspeed = 0.02;
var interval = 0;
/**
 * Window onload handler
 */
function onloadHandler()
{
   var canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', onDocumentMouseDown, false);
    canvas.addEventListener('touchstart', onDocumentTouchStart, false);
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
   var k3dmain = new K3D.Controller(canvas, true);
   
   // generate 3D objects
   
   var obj1 = new K3D.K3DObject();
   with (obj1)
   {
      drawmode = "solid";
      shademode = "lightsource";
      sortmode = "unsorted";
      addphi = -0.5;
      abouty = -90;
      perslevel = 1000;
      init(
         [{x:-80,y:180,z:0},{x:0,y:180,z:-80},{x:0,y:0,z:-80},{x:-80,y:20,z:0},{x:-50,y:150,z:-30},{x:0,y:150,z:-80},{x:0,y:130,z:-80},{x:-30,y:130,z:-50},{x:-28,y:110,z:-52},{x:0,y:110,z:-80},{x:0,y:90,z:-80},{x:-45,y:90,z:-35},{x:-44,y:80,z:-36},{x:-25,y:80,z:-55},{x:-22,y:66,z:-58},{x:0,y:60,z:-80},{x:0,y:40,z:-80},{x:-40,y:50,z:-40}],
         [],
         [{color:[227,76,38],vertices:[0,1,2,3,0]},{color:[235,235,235],vertices:[4,5,6,7,8,9,10,11,4]},{color:[235,235,235],vertices:[12,13,14,15,16,17,12]}]
      );
   }
   k3dmain.addK3DObject(obj1);
   
   var obj2 = new K3D.K3DObject();
   with (obj2)
   {
      drawmode = "solid";
      shademode = "lightsource";
      sortmode = "unsorted";
      addphi = -0.5;
      abouty = -90;
      perslevel = 1000;
      init(
         [{x:0,y:180,z:-80},{x:80,y:180,z:0},{x:80,y:20,z:0},{x:0,y:0,z:-80},{x:0,y:165,z:-80},{x:68,y:165,z:-12},{x:55,y:35,z:-25},{x:0,y:20,z:-80},{x:0,y:150,z:-80},{x:50,y:150,z:-30},{x:47,y:130,z:-33},{x:0,y:130,z:-80},{x:0,y:110,z:-80},{x:45,y:110,z:-35},{x:40,y:50,z:-40},{x:0,y:40,z:-80},{x:0,y:60,z:-80},{x:20,y:66,z:-60},{x:23,y:90,z:-57},{x:0,y:90,z:-80}],
         [],
         [{color:[227,76,38],vertices:[0,1,2,3,0]},{color:[240,101,41],vertices:[4,5,6,7,4]},{color:[235,235,235],vertices:[8,9,10,11,8]},{color:[235,235,235],vertices:[12,13,14,15,16,17,18,19,12]}]
      );
   }
   k3dmain.addK3DObject(obj2);
   
   var obj3 = new K3D.K3DObject();
   with (obj3)
   {
      drawmode = "solid";
      shademode = "lightsource";
      sortmode = "unsorted";
      addphi = -0.5;
      abouty = -90;
      perslevel = 1000;
      init(
         [{x:80,y:180,z:0},{x:0,y:180,z:80},{x:0,y:0,z:80},{x:80,y:20,z:0},{x:50,y:150,z:30},{x:0,y:150,z:80},{x:0,y:130,z:80},{x:30,y:130,z:50},{x:28,y:110,z:52},{x:0,y:110,z:80},{x:0,y:90,z:80},{x:45,y:90,z:35},{x:44,y:80,z:36},{x:25,y:80,z:55},{x:22,y:66,z:58},{x:0,y:60,z:80},{x:0,y:40,z:80},{x:40,y:50,z:40}],
         [],
         [{color:[227,76,38],vertices:[0,1,2,3,0]},{color:[235,235,235],vertices:[4,5,6,7,8,9,10,11,4]},{color:[235,235,235],vertices:[12,13,14,15,16,17,12]}]
      );
   }
   k3dmain.addK3DObject(obj3);
   
   var obj4 = new K3D.K3DObject();
   with (obj4)
   {
      drawmode = "solid";
      shademode = "lightsource";
      sortmode = "unsorted";
      addphi = -0.5;
      abouty = -90;
      perslevel = 1000;
      init(
         [{x:0,y:180,z:80},{x:-80,y:180,z:0},{x:-80,y:20,z:0},{x:0,y:0,z:80},{x:0,y:165,z:80},{x:-68,y:165,z:12},{x:-55,y:35,z:25},{x:0,y:20,z:80},{x:0,y:150,z:80},{x:-50,y:150,z:30},{x:-47,y:130,z:33},{x:0,y:130,z:80},{x:0,y:110,z:80},{x:-45,y:110,z:35},{x:-40,y:50,z:40},{x:0,y:40,z:80},{x:0,y:60,z:80},{x:-20,y:66,z:60},{x:-23,y:90,z:57},{x:0,y:90,z:80}],
         [],
         [{color:[227,76,38],vertices:[0,1,2,3,0]},{color:[240,101,41],vertices:[4,5,6,7,4]},{color:[235,235,235],vertices:[8,9,10,11,8]},{color:[235,235,235],vertices:[12,13,14,15,16,17,18,19,12]}]
      );
   }
   k3dmain.addK3DObject(obj4);
   
   var objBase = new K3D.K3DObject();
   with (objBase)
   {
      drawmode = "solid";
      shademode = "lightsource";
      sortmode = "unsorted";
      addphi = -0.5;
      abouty = -90;
      perslevel = 1000;
      init(
         [{x:0,y:0,z:-80},{x:-80,y:20,z:0},{x:0,y:0,z:80},{x:80,y:20,z:0}],
         [],
         [{color:[227,76,38],vertices:[0,2,1,0]},{color:[227,76,38],vertices:[0,3,2,0]}]
      );
   }
   k3dmain.addK3DObject(objBase);
   
   var objHtml = new K3D.K3DObject();
   with (objHtml)
   {
      drawmode = "solid";
      shademode = "lightsource";
      //sortmode = "unsorted";
      color = [64,64,64];
      doublesided = true;
      addphi = -0.5;
      abouty = 100;
      scale = 0.75;
      perslevel = 1000;
      init(
         [{x:-80,y:40,z:0},{x:-70,y:40,z:0},{x:-70,y:30,z:0},{x:-60,y:30,z:0},{x:-60,y:40,z:0},{x:-50,y:40,z:0},{x:-50,y:10,z:0},{x:-60,y:10,z:0},{x:-60,y:20,z:0},{x:-70,y:20,z:0},{x:-70,y:10,z:0},{x:-80,y:10,z:0},{x:-40,y:40,z:0},{x:-10,y:40,z:0},{x:-10,y:30,z:0},{x:-20,y:30,z:0},{x:-20,y:10,z:0},{x:-30,y:10,z:0},{x:-30,y:30,z:0},{x:-40,y:30,z:0},{x:0,y:40,z:0},{x:10,y:40,z:0},{x:20,y:30,z:0},{x:30,y:40,z:0},{x:40,y:40,z:0},{x:40,y:10,z:0},{x:30,y:10,z:0},{x:30,y:30,z:0},{x:20,y:20,z:0},{x:10,y:30,z:0},{x:10,y:10,z:0},{x:0,y:10,z:0},{x:50,y:40,z:0},{x:60,y:40,z:0},{x:60,y:20,z:0},{x:80,y:20,z:0},{x:80,y:10,z:0},{x:50,y:10,z:0}],
         [],
         [{vertices:[0,1,2,3,4,5,6,7,8,9,10,11,0]},{vertices:[12,13,14,15,16,17,18,19,12]},{vertices:[20,21,22,23,24,25,26,27,28,29,30,31,20]},{vertices:[32,33,34,35,36,37,32]}]
      );
   }
   k3dmain.addK3DObject(objHtml);
   
   // add render loop callback
   var ctx = canvas.getContext('2d');
   var rotationOffset = 0;
   var len = (canvas.height > canvas.width ? canvas.height : canvas.width) * 2.1;
   k3dmain.clearBackground = false;
   k3dmain.callback = function()
   {
      // manually clear bg - as we want to render some extra goodies
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // draw bg effect before K3D does its 3D rendering
      ctx.save();
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(rotationOffset);
      
      var RAYCOUNT = 32;
      for (var i=0; i<RAYCOUNT; i++)
      {
         // rotate context
         ctx.rotate(TWOPI / RAYCOUNT);
         ctx.fillStyle = "#ddd";
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(-16, len);
         ctx.lineTo(-12, len);
         ctx.closePath();
         ctx.fill();
         ctx.fillStyle = "#fff";
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(-12, len);
         ctx.lineTo(12, len);
         ctx.closePath();
         ctx.fill();
         ctx.fillStyle = "#ddd";
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(12, len);
         ctx.lineTo(16, len);
         ctx.closePath();
         ctx.fill();
      }
      ctx.restore();
      rotationOffset += (spin+ambientspeed)/500;
      
      // apply user interaction to rotation
      for (var i=0, objs=k3dmain.objects; i<objs.length; i++)
      {
         objs[i].ophi += spin + ambientspeed;
      }
        spin *= 0.98;
	if(Math.abs(spin) < 0.01) spin = 0;
   };
   
   // start demo loop
   k3dmain.paused = true;
   interval = setInterval(function(){k3dmain.tick()}, 1000/60);

}

// nifty drag/touch event capture code borrowed from Mr Doob http://mrdoob.com/
var spin = 0;
var mouseX = 0;
var targetRotationY = 0;
var mouseY = 0;
var lastX = 0;
var lastY = 0;
var mouseDown = false;


var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener('touchmove', onDocumentTouchMove, false);
document.addEventListener('mousemove', onDocumentMouseMove, false);
document.addEventListener('mouseup', onDocumentMouseUp, false);

function onDocumentMouseDown( event ) {

	event.preventDefault();
	mouseDown = true;
	
//	document.addEventListener('mousemove', onDocumentMouseMove, false);
//	document.addEventListener('mouseup', onDocumentMouseUp, false);
//	document.addEventListener('mouseout', onDocumentMouseOut, false);
	
	lastX = event.clientX - windowHalfX;
	lastY = event.clientY - windowHalfY;
	return false;
}

function onDocumentMouseMove( event )
{
	if(!mouseDown)return;
	event.preventDefault();
	mouseX = event.clientX - windowHalfX;
	spin += (mouseX - lastX) * spinspeed;
	mouseY = event.clientY - windowHalfY;
	targetRotationY += (mouseY - lastY) * spinspeed;
	lastX = mouseX;
	lastY = mouseY;
	return false;
}

function onDocumentMouseUp( event )
{
	mouseDown = false;
}

function onDocumentTouchStart( event )
{
	if (event.touches.length == 1)
	{
		event.preventDefault();

		lastX = event.touches[0].pageX - windowHalfX;
		lastY = event.touches[0].pageY - windowHalfY;
	}
}

function onDocumentTouchMove( event )
{
	if (event.touches.length == 1)
	{
		event.preventDefault();
		
		mouseX = event.touches[0].pageX - windowHalfX;
		spin += (mouseX - lastX) * spinspeed;
		mouseY = event.touches[0].pageY - windowHalfY;
		targetRotationY += (mouseY - lastY) * spinspeed;
		lastX = mouseX;
		lastY = mouseY;
	}
}
