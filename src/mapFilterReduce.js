let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "K wlem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];
// Map
//map arrayı tek tek dolaşmaya yarıyo.
console.log("<ul>")
cart.map(product=>{
  console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>")
});
console.log("</ul>")

// Reduce 
// acc : accumulator : Başlangıç için ilk değer
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)  // acc ilk değeri 0
console.log(total)

// Filter
// filter : filtrelemeye yarıyor.
let quantityOver2 = cart.filter(product=product.quantity>2)
console.log(quantityOver2)

function addToCart(sepet) {
  cart.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}


addToCart(cart);

console.log(cart);

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}
sayiTopla(sayi);
console.log(sayi);

//SPA : tek sayfa : single page app.
