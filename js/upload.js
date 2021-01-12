var loadFile = function(event) {
	var image = document.getElementById('upload');
	image.src = URL.createObjectURL(event.target.files[0]);
