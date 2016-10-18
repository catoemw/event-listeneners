// GO!

// TASK #1

var button = document.querySelector('button');
var navMenu = document.querySelector('.nav-menu');

button.addEventListener('click', function () {
	navMenu.classList.toggle('nav-menu-hidden');
	if (button.textContent !== 'hide nav') {
		button.textContent = 'hide nav';
	} else {
		button.textContent = 'show nav';
	}
});

// TASK #2

var input = document.querySelector('input');
var list = document.querySelector('ul');

function addListItem () {
	var li = document.createElement('li');
	li.textContent = input.value;
	li.classList.add('guest');
	list.appendChild(li);
	input.value = '';
}

input.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		addListItem();
	}
});

// TASK #3

var inputTwo = document.querySelector('#add-guest-bonus input');
var listTwo = document.querySelector('#add-guest-bonus ul');

function addRemoveListItem () {
	var li = document.createElement('li');
	var button = document.createElement('button');
	button.addEventListener('click', function (event) {
		li.parentElement.removeChild(li);
	});
	button.textContent = 'X';
	li.textContent = inputTwo.value;
	li.appendChild(button);
	li.classList.add('guest');
	listTwo.appendChild(li);
	inputTwo.value = '';
}

inputTwo.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		addRemoveListItem();
	}
});







