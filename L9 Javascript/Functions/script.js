function yasHesapla(birthday) {
    return 2018 - birthday;
}

let ageAda = yasHesapla(1983);
let ageYigit = yasHesapla(2010);
let ageCem = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCem);

function Emeklilik(birthday, name) {
    let yas = yasHesapla(birthday);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(name + " " + emeklilik + " yasindan emeklilik var.");
    }
    else {
        console.log("zaten emekli oldunuz.");
    }
}

Emeklilik(2012, "Ada");
Emeklilik("Yiğit", 2010);
Emeklilik(2010, "Yigit");
Emeklilik(2017, "Cem");
