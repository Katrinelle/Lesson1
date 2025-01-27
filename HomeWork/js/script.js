//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван"; // Оголосіть дві змінні: name та city.
// let city = "Kyiv"; // Оголосіть дві змінні: name та city.

// city = name; // Скопіюйте значення зі змінної name в city.

// console.log(city); // Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// console.log(Number.parseInt(a)); // 5
// console.log(Number.parseInt(b)); // 13
// console.log(Number.parseInt(c)); // 12

// // вивести в консоль тип

// console.log(typeof "a"); // string
// console.log(typeof "b"); // string
// console.log(typeof "c"); // string

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2); // 2.37217769386

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length); //19

//***8**
//вивести в консоль message  великими літерами

// let message = "message";
// console.log(message.toUpperCase()); // MESSAGE

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль

// let user = {};
// user.name = "Ivan";
// user.age = 10;
// user.city = "Kyiv";
// console.log(user); // age:10 city: "Kyiv" name: "Ivan"

// // видалити місто

// delete user.city;
// console.log(user); // age:10 name: "Ivan"

// // додати буль з ключем: like flowers

// user["likes flowers"] = true;

// // вивести результат в консоль
// console.log(user); // age:10 likes flowers: true name: "Ivan"

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// let user = {};
// user.name = "Ivan";
// user.age = "10";
// user.city = "Kyiv";
// delete user.city;
// user["likes flowers"] = true;
// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// } // name Ivan age 10 likes flowers true
