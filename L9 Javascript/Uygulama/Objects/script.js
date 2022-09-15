let order_1 = {
    "order_id": 101,
    "order_date": "20.12.2022",
    "order_status": "credit card",
    "cargo address": {
        "street": "yahya kaptan",
        "city": "ankara",
        "country": "turkey"
    },
    "products": {
        "6": {
            "product_id": "IPhone 13 Pro",
            "product_url": "http://www.apple.com/iphone-13-pro",
            "product_price": "22000",
        },
        "6": {
            "product_id": "IPhone 13 Pro Max",
            "product_url": "http://www.apple.com/iphone-13-pro",
            "product_price": "25000",
        }
    }
};
let order_2 = {
    "order_id": 101,
    "order_date": "20.12.2022",
    "order_status": "credit card",
    "cargo address": {
        "street": "yahya kaptan",
        "city": "ankara",
        "country": "turkey"
    },
    "products": {
        "6": {
            "product_id": "IPhone 13 Pro",
            "product_url": "http://www.apple.com/iphone-13-pro",
            "product_price": "22000",
        }
    }
};

let order1_toplam = (order_1.products[0].product_price + order_1.products[1].product_price) * 1.18;
let order2_toplam = (order_1.products[0].product_price) * 1.18;

let total_price = order1_toplam + order2_toplam;
console.log("sipariş 1:" + order1_toplam);
console.log("sipariş 2:" + order2_toplam);

console.log("toplam:" + total_price);

let order = [order_1, order_2];
