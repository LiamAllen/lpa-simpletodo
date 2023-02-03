/**
 * CopyRight Liam Allen 2023
 *  All Code written by Liam Allen
 * Do not use code present without the explicit permission of Liam Allen
 */
//create the variable necessary to run the program
var x = 0;

//Create the necessary functions

//the function getTaskName() is called when the button is pressed.
function getTaskName(){

    //select the input element from index.html and assign it to a variable
    var taskName = document.getElementById("task").value;

    //in the next three lines of code a listed item is created with the same text
    //pulled from the input field and is added to the unordered list in the html document
    var node = document.createElement('li');
    node.id = x.toString();
    node.appendChild(document.createTextNode(taskName + "  "));
    document.querySelector('ul').appendChild(node);
    
    //next a button is created and an event listener is attatched that removes
    //the listed item and the button from the html document

    var button = document.createElement('button')
    button.innerText = 'Complete';
    document.getElementById(x.toString()).appendChild(button);

    x = x + 1;

    button.addEventListener('click', () => {
        button.parentNode.remove();
    });
}

