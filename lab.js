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
