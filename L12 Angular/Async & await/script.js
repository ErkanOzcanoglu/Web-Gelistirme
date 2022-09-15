
// async function fn() {
//     return "hello";
// }

// fn().then(res => console.log(res));

function getCategory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('phone');
        }, 1000);
    });
}

// function getProducts(category) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`5 products in ${category}`);
//         }, 1000)
//     });
// }

// getCategory().then(getProducts).then(res => console.log(res));

async function getProducts() {

    let category = await getCategory();

    let result = await getProducts(category);
    console.log(res);

}


getProducts();