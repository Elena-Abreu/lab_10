function greetUser() 
{ 
    let firstName = 'Harry' 
document.getElementById('output').innerText = "Hello, " + firstName;
}
greetUser() 

function GreetButton() 
{    


document.getElementById('message').innerText = "Hello, World!";
} 
GreetButton() 


function AddNumbers(username, lastname)  
{
    let a = 100 ;
    let b = 50 ;
    //console.log(a+b);    only necessary if no getelementbyid
    document.getElementById('heading-two').innerText = (a + b); 
    document.getElementById('para1').innerHTML = "<h1>Para changes to H1 Heading<h1>"; } 
AddNumbers()
