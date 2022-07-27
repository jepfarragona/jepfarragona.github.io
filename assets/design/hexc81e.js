var display = document.getElementById("hex");
var width = display.firstChild.offsetWidth;
var height = display.firstChild.offsetHeight;
display.innerHTML = null;

function resize()
{
	let screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	let screen_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let blocks_count = Math.max(Math.floor(screen_width / width) - 1,0);
	let lines_count = Math.max(Math.floor(screen_height / height) - 1,0);
	
	// Lines
	while (display.childNodes.length < lines_count) display.appendChild(document.createElement('div'));
	while (display.childNodes.length > lines_count) display.lastChild.remove();
	
	// Blocks
	for (let blocks of display.childNodes)
	{
		while (blocks.childNodes.length < blocks_count) blocks.appendChild(document.createElement('span'));
		while (blocks.childNodes.length > blocks_count) blocks.lastChild.remove();
	}
}

function update()
{
	for (let blocks of display.childNodes)
	{
		for (let block of blocks.childNodes)
		{
			if (block.className != "") continue;
			let value = hex(2);
			block.innerText = value;
			if (parseInt(value,16) == 0) flash(block);
		}
	}
}

function flash(e)
{
	e.className = "flash";
	setTimeout(function(){
		e.className = "wait";
	},20);
	setTimeout(function(){
		e.className = "";
	},666);
}

function hex(count)
{
	let data = "";
	for (let i=0; i<count; i++) data += Math.floor(Math.random()*16).toString(16);
	return data.toUpperCase();
}

resize();
window.addEventListener('resize', resize);

update();
setInterval(update, 120);
