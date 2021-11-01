function addToCart(quantity, productName = "Elma") {
  console.log("Sepete eklendi: Ürün: " + productName + " Adet : " + quantity);
}

//addToCart();
addToCart(10);
//addToCart(15);

let sayHello = () => {
  console.log("Hello World");
};
sayHello();

let sayHello2 = function (params) {
  console.log("Hello World 2");
};

sayHello2();

function addToCart2(prıductName, quantity, unitPrice) {}

addToCart2("Elma", 15, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
function addToCart3(product) {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

// sayısal: değer - objeler: referans tip
// let s1 = 10;
// let s2 = 20;
// s1 = s2;
// s2 = 100;
// console.log(s1);

function addToCart4(products) {
  console.log(products);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);

//rest operatörü
function add(bisey, ...numbers) {
  // array e atiyor
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(bisey);
}

add(20, 30);
// add(20, 30, 40);
// add(20, 30, 40, 50);

//rest toparlar, spread ayrıştırır.
// spread
let numbers = [30, 10, 500, 600, 120];
// console.log(...numbers);
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
  { name: "İç Anadolu", population: "20M" },
  { name: "Marmara", population: "30M" },
  { name: "Karadeniz", population: "10M" },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Sinop", "Tabzon"],
  ],
];

// console.log(icAnadolu.name);
// console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);

let newPrıductName, newUnitPrice, newQuantity;
({
  productName: newPrıductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Elma", unitPrice: 10, quantity: 5 });

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);
