// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let newHeight = document.getElementById('inputHeight');
let newWeight = document.getElementById('inputWeight');
let sizePicker = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');

function makeGrid() {

	canvas.innerHTML = "";
	let row, col;
	for (let i = 0; i < newHeight.value; i++) {
		row =document.createElement('tr');
		canvas.appendChild(row);
		for (let e = 0; e < newWeight.value; e++) {
			col =document.createElement('td');
			row.appendChild(col);	
		};	
	};

};

sizePicker.addEventListener('submit',function(evt){
	//method prevent default action from occurring
	evt.preventDefault();
	makeGrid();	
});

function colorMyGrid(evt){
	if (evt.target.nodeName==="TD"){
		evt.target.style.backgroundColor = color.value;
		console.log(color.value);
	}
}

canvas.addEventListener('click', colorMyGrid);
