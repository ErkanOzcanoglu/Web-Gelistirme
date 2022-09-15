var name = "John";
function myFunc() {
    var name = "Jane";
    var age = 30;
    console.log(name, age);
}

if (true) {
    var name = "Ali";
    console.log(name);
}

console.log(name);
myFunc();
// console.log(age);