//! Bir sayının 10-50 arasında olup olmadığını kontrol et
//! Bir sayının pozitif tek sayı olup olmadığını kontrol et
//! x,y,z sayılarının büyüklük karşılaştırmalasnıı yapınız
//! 2 vize ve 1 final notuna göre hesaplanan ortalama için;
//* a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı
//* b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalı
//* c- Finalde 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin


let sayı1 = 20;
let sayı2 = 30;
let sayı3 = 40;


if (sayı1 > 10 && sayı1 < 50) {
    console.log("Sayı 10-50 arasında");
}
else {
    console.log("Sayı 10-50 arasında değil");
}

if (sayı1 > 0 && sayı1 % 2 == 1) {
    console.log("Pozitif tek sayı");
}
else {
    console.log("Pozitif çift sayı");
}

if (sayı1 > sayı2 && sayı1 > sayı3) {
    console.log("Sayı 1 en büyük");
}

let x = 50, y = 50, z = 70;

let ortalama = (((x + y) / 2) * 0.4) + ((z * 0.6));

console.log("ortalama: " + ortalama);

if (ortalama >= 50) {
    console.log("Geçti");

} else {
    console.log("Dersten geçemedin");
}


if (ortalama >= 50 && z >= 50) {
    console.log("Dersten geçtin")
}
else {
    console.log("Geçemedin");
}

if (z == 70 && ortalama >= 50) {
    console.log("Dersten geçtin");
}
else {
    console.log("Dersten geçemedin");
}
