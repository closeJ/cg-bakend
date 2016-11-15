window.onload = function() {
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene,{
		calibrateX : true,
		scalarX : 10,
	});
};