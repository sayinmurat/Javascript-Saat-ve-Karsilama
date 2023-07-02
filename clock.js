let getName = prompt("Adınızı yazınız.");
let isim = document.querySelector(`#myName`);
isim.innerHTML = getName;
let saat = document.querySelector(`#myClock`);

let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
saat.innerHTML = `${date} ${time}`;
