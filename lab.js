function greetUser() 
{ 
    let firstName = 'Harry' 
document.getElementById('output').innerText = "Hello, " + firstName;
}
greetUser() 

function UpdateChanges(){
    document.getElementById('message').innerText = "Hello, World!"
}

function addNumbers(){
    let a = document.getElementById('firstValue').value;
    let b = document.getElementById('lastValue').value;
    document.getElementById('result').innerText = (a+b);
}
document.getElementById('btn1').addEventListener('click', addNumbers)
 

function updateHeading(){
    let userValue = document.getElementById('userInput').value;
    document.getElementById('title').innerText = userValue;
}
document.getElementById('btn2').addEventListener('click', updateHeading) 

function combineText(){
    let str1 = document.getElementById('inputValue1').value;
    let str2 = document.getElementById('inputValue2').value;
    document.getElementById('combinedText').innerText = str1 + str2;
}

document.getElementById('btn3').addEventListener('click', combineText)