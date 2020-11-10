var firstName = prompt("Come ti chiami?");
var secondName = prompt("Qual è il tuo cognome?");
var yourColor = prompt("Qual è il tuo coolore preferito?");
var annoPassword = "19"
var password = firstName + secondName + yourColor + annoPassword;

document.getElementById('password').innerHTML = password;
