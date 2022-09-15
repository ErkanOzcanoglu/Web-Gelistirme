let ogrenciAd1 = "Ada";
let ogrenciSoyad1 = "Bilgi";

let Dt1 = 2012;
let ogr_1_mat1 = 70;
let ogr_1_mat2 = 70;
let ogr_1_mat3 = 80;
let ogr1_ort = (ogr_1_mat1 + ogr_1_mat2 + ogr_1_mat3) / 3;


let ogrenciAd2 = "Yiğit";
let ogrenciSoyad2 = "Bilgi";
let Dt2 = 2010;
let ogr_2_mat1 = 40;
let ogr_2_mat2 = 40;
let ogr_2_mat3 = 50;
let ogr2_ort = (ogr_2_mat1 + ogr_2_mat2 + ogr_2_mat3) / 3;

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(Dt1);
console.log(ogr1_yas);

let ogr2_yas = suankiYil - parseInt(Dt2);
console.log(ogr2_yas);


//! öğrencilerin not ortalamaları
console.log(parseInt(ogr1_ort));
console.log(typeof ogr1_ort);

console.log(parseFloat(ogr2_ort));
console.log(typeof ogr2_ort);

// *--------------------------------* //


//! öğrencilerin 50 ya göre geçme durumları
console.log(ogr1_ort >= 50);


console.log(ogr2_ort >= 50);







