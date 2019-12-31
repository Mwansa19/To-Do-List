var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul =document.querySelector('ul');
var item = document.getElementsByTagName('li');

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement('li');
    // creates an element li

    li.appendChild(document.createTextNode(input.value));
    // makes text from input field the li text
    ul.appendChild(li);
    input.value="";

    // Star Strikethrough
    // because it's inthe function, it only adds it for 
    // new items
    function crossOut() {
        li.classList.toggle('done');
    }
    li.addEventListener('click',crossOut);
    // End Strikethrough

    // Start Add Delete Button

    var dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('x'));
    li.appendChild(dBtn);
    dBtn.addEventListener('click', deleteListItem);
    // End  Add Delete Button

    // Add Class Delete(Display:none)
    function deleteListItem() {
        li.classList.add('delete')
    }
    // End Add Class Delete
}

function addLIstAfteClick() {
    if (inputLength () > 0 ){
        // makes sure that an empty input field 
        // doesn't create a li
        createListElement();
    }
}


function addLIstAfterKeypress(event) {
    if (inputLength() > 0 && event.which===13) {
        // this now looks to see f you hit 'enter'/'return'
        // the 13 is the enter key's keycode, this could
        // als be displayed by event.keycode===13
        createListElement();
    }
}
enterButton.addEventListener('click', addLIstAfteClick);
input.addEventListener('keypress', addLIstAfterKeypress)

