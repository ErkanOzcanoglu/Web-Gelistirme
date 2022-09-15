// let meyveler = ["elma", "armut", "Muz", "Çilek"]; // Dizi oluşturduk.

// console.log(meyveler.length); // Dizinin uzunluğunu ekrana yazdırdık.

// console.log(meyveler[0]); // Dizinin 0. indeksine sahip elemanı ekrana yazdırdık.
// console.log(meyveler.length - 1); // Dizinin son elemanını ekrana yazdırdık.

// console.log(meyveler.includes("elma")); // Dizide elma var mı yok mu kontrolü yapıldı.
// console.log(meyveler.index0f("elma")); // Dizide elma var mı yok mu kontrolü yapıldı.

// meyveler.push("Kiraz"); // Diziye bir eleman ekledik.

// console.log(meyveler);

// meyveler.pop();
// meyveler.pop();

// console.log(meyveler); // 2 eleman silindi.


// ----------------------------------- // 

let ogr1 = [
    "Ali",
    "Kılıç",
    2010,
    [70, 60, 80]
];

let ogr2 = [
    "Veli",
    "Kılıç",
    2012,
    [80, 80, 90]
];

let ogr3 = [
    "Ayşe",
    "Kılıç",
    2014,
    [60, 60, 70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let ali_yas = new Date().getFullYear() - ogrenciler[0][2];
let veli_yas = new Date().getFullYear() - ogrenciler[1][2];
let ayşe_yas = new Date().getFullYear() - ogrenciler[2][2];

let ali_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let veli_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ayşe_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(ali_yas, veli_yas, ayşe_yas);
console.log(ali_not.toFixed(1), veli_not.toFixed(1), ayşe_not.toFixed(1));