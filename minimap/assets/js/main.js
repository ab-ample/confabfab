let websiteElement = document.getElementById('website');
let minimapElement = document.getElementById('minimap');
let innerMinimapElement = document.getElementById('inner-minimap');

function createMinimap() {
	websiteElementClone = websiteElement.cloneNode(true);

	innerMinimapElement.style.width = websiteElement.offsetWidth + 'px';
	let minimapWidth = minimapElement.offsetWidth / websiteElement.offsetWidth;
	
	// translate(463px, 263px)
	console.log(minimapWidth);
	console.log(minimapElement.offsetWidth);
	console.log(websiteElement.offsetWidth);

	innerMinimapElement.style.transform = 'translate(0, ' + websiteElement.offsetWidth + 'px) scale(' + minimapWidth + ')';
	innerMinimapElement.appendChild(websiteElementClone);

	websiteElement.style.marginRight = '256px';
}

createMinimap();