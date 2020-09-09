var 	button 	= document.querySelector("#enter"),
			input 	= document.querySelector("#userinput"),
			ul 			= document.querySelector("ul");

// Returns the length of the input value
function inputLength() {
	return input.value.length;
}

// Create new List Element
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var listButton = document.querySelector("#buttons").cloneNode(true);
	listButton.childNodes[1].addEventListener('click', removeList, false); 
  listButton.childNodes[3].addEventListener('click', completeList, false); 
  li.appendChild(listButton);
	ul.appendChild(li);
	input.value = "";
}

// Remove List Item
function removeList(){
  	var li = this.parentNode.parentNode;
    li.remove();
}

// Mark the list as Complete
function completeList(){
   var li = this.parentNode.parentNode;
  li.classList.toggle("done");
  
}

// Create New List Element when Clicked on the button
function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

// Create New List Element when Keypress
function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

// Button Click Function
button.addEventListener("click", addListAfterClick);

// Keypress Function
input.addEventListener("keypress", addListAfterKeypress);
