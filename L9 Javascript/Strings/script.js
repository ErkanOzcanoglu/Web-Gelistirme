let ad = "Erkan"
let soyad = "Özcanoğlu"
let yas = 30
let sehir = "Ankara"

// let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + "'de yaşıyorum. " + ' Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

mesaj = `Benim adım  ${ad}  ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${(65 - yas)} yılım kaldı.`;


// ternary operator
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yılım kaldı." : "Zatem emeki oldum.";
mesaj = `Benim adım  ${ad}  ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`;

console.log(mesaj);

// -------------------------------------------------- //

let kursAdi = "  JavaScript alo";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 2);
sonuc = kursAdi.slice(4);
sonuc = kursAdi.replace("Java", "malerol");
// sonuc = kursAdi.trim();
sonuc = kursAdi.indexOf("alo");



console.log(sonuc);
