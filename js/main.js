alert("Xush Kelibsiz");
alert("Galareyaga ruxsat berasizmi ?");
alert("Locationdi olishga ruxsat berasizmi ?");

var ism = prompt("Ismingiz");
var tel = prompt("Telefon raqamingiz");
var yosh = prompt("Yoshingiz");

console.log(ism);
console.log(tel);
console.log(yosh);

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show')
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
})