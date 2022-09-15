
// var p = new Promise(function (resolve, reject) {
//     if (false) {
//         resolve("Success!");
//     } else {
//         reject("Failure!");
//     }
// });

// p.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// });


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 1000);
// }).then(function (data) {
//     console.log(data);
//     return data * data;
// }
// ).then(function (data) {
//     console.log(data);
//     return data * data;
// }).then(function (data) {
//     console.log(data);
// });


const isMomHappy = false;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'iphone X',
            price: 999,
            color: "silver"
        }
        resolve(phone);
    } else {
        const error = new Error('mom is not happy');
        reject(error);
    }
});
const showToFriend = function (phone) {
    const message = "Hey friend, I got a new phone for you. " + phone.name;
    return Promise.resolve(message);
}



const askMom = function () {
    willGetNewPhone.then(showToFriend)
        .then(message => console.log(message))
        .catch(error => {
            console.log(error);

        });
}
askMom();