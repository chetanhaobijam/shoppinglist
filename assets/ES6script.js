const button 			= document.querySelector("#enter"),
			input 			= document.querySelector("#userinput"),
			ul 					= document.querySelector("ul"),
			listButton 	= document.querySelector("#buttons").cloneNode(true);

const inputLength = () => input.value.length;

const createListElement = () => {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	listButton.childNodes[1].addEventListener("click", removeList, false);
	listButton.childNodes[3].addEventListener("click", completeList, false);
	li.appendChild(listButton);
	ul.appendChild(li);
	input.value = "";
}

const removeList = () => {
	const li = listButton.childNodes[1].parentNode.parentNode;
	li.remove();
}

const completeList = () => {
	const li = listButton.childNodes[3].parentNode.parentNode;
	li.classList.toggle("done");
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);