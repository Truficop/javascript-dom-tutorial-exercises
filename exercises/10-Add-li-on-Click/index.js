let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let li = document.createElement("li");
	li.innerHTML = "New li"
	document.getElementById("myList").appendChild(li);
});
