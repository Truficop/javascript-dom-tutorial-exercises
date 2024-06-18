let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let div = document.createElement("div");
	div.innerHTML = "Hello World";
	div.style.background = "yellow";
	document.body.appendChild(div);
});
