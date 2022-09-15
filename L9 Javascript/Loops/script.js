// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// ...
// console.log(100);

let toplam = 0;

for (let i = 1; i < 10; i++) {
    // console.log(i);
    toplam += i;
}
console.log(toplam);

let sayılar = [1, 4, 5, 8, 4, 3];

console.log(sayılar[0] + sayılar[1] + sayılar[2] + sayılar[3] + sayılar[4] + sayılar[5]);

// for (let i = 0; i < sayılar.length; i++) {
//     console.log(sayılar[i]);
// }

// for (let sayı of sayılar) {
//     // console.log(sayı);
//     toplam += sayı;
// }

let user = {
    name: "John",
    surname: "Doe",
    age: 30,
    address: "New York",
}

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}