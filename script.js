function showMessage(){
document.getElementById("secret").style.display="block";
}

const countdown = document.getElementById("countdown");

const targetDate = new Date("March 25, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();
const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

countdown.innerHTML =
days + " days " + hours + " hours " + minutes + " minutes";

},1000);
