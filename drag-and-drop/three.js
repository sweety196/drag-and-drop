// import DragControls from 'three-dragcontrols';

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 35, aspect, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
	
scene.background = new THREE.Color( 0xf0f0f0 );
var objects = [];
camera.position.z = 1000;


var startColor;
function init() {
	var ambientLight = new THREE.AmbientLight( 0x0f0f0f );
	scene.add( ambientLight );
 
	var light = new THREE.SpotLight( 0xffffff, 1.5 );
	light.position.set( 0, 500, 2000 );
	scene.add(light);

	var geometry = new THREE.SphereGeometry( 40, 40, 40 );
 
for (var i = 0; i < 100; i++) {
	var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
 
	object.position.x = Math.random() * 1000 - 500;
	object.position.y = Math.random() * 600 - 300;
	object.position.z = Math.random() * 800 - 400;
 
	object.castShadow = true;
	object.receiveShadow = true;
 
	scene.add( object );
 
	objects.push( object );
}
	


// controls.addEventListener( 'dragstart', dragStartCallback );
// controls.addEventListener( 'dragend', dragendCallback );

// function dragStartCallback(event) {
// 	startColor = event.object.material.color.getHex();
// 	event.object.material.color.setHex(0x000000);
// }
 
// function dragendCallback(event) {
// 	event.object.material.color.setHex(startColor);
// }
THREE.DragControls = require("three-drag-controls")(THREE);

var controls = new THREE.DragControls( objects, camera, renderer.domElement );

}

function animate() {
	requestAnimationFrame( animate);
	renderer.render( scene, camera );

}

init();
animate();

