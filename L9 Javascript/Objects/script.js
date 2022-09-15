// let user1 = ["erkan", "özcanoğlu", 20];
// let user2 = ["erol emre", "akyıldız", 19];

// dict, json

let user = {
    "name": "erkan",
    "last": "özcanoğlu",
    "age": 20,
    "address": "ankara gölbaşı"
}

let final;
final = user.name;
final = user.last;
final = user["age"];

console.log(final);