// Ödev1
// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findNumberPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let number = 0;
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        number++;
      }
    }

    if (number == 2) {
      console.log(numbers[i] + " --> This number is a prime number.");
    } else {
      console.log(numbers[i] + " --> This number is not a prime number.");
    }
  }
}

findNumberPrime(12, 19, 25, 31);

// Ödev2
// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function isNumbersFriend(number1, number2) {
  let total1 = 0,
    total2 = 0;

  for (let i = 0; i < number1; i++) {
    if (number1 % i == 0) {
      total1 += i;
    }
  }
  for (let j = 0; j < number2; j++) {
    if (number2 % j == 0) {
      total2 += j;
    }
  }

  if (total1 == number2 && total2 == number1) {
    console.log(number1, number2, " --> Friend number");
  } else {
    console.log(number1, number2, " --> They are not a friends number");
  }
}

isNumbersFriend(220, 284);

//Ödev3
// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function isPerfectNumber() {
  for (let i = 1; i <= 1000; i++) {
    let total = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        total += j;
      }
    }
    if (total == i) {
      console.log(i + " --> This number is a perfect number.");
    }
  }
}
isPerfectNumber();

//Ödev4
//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function isPrimeNumber() {
  for (let i = 1; i <= 1000; i++) {
    let total = 0;
    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        total += j;
      }
    }
    if (total == 1) {
      console.log(i + " --> This number is a prime number.");
    }
  }
}
isPrimeNumber();
