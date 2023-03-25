let name = prompt("Lütfen Bir İsim Giriniz..","");
let myName = document.getElementById("myName")
myName.innerHTML= name;

function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR'); // tarih saati al
    document.getElementById("myClock").innerHTML = date; // zaman id'li elemente yazdır.
}
setInterval(tarihSaat, 1000);