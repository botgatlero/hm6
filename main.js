// условия

// 1-2

// let score = 55;
// if (score >= 90) {
//     console.log ("Отлично");
// } else if (score >= 70) {
//     console.log ("Хорошо");
// } else if (score >= 50) {
//     console.log ("Удовлетворительно");
// } else {
//     console.log ("Неудовлетворительно");
// }

// 3

// let number = 29; 
// let isEven;
// isEven = (number % 2 === 0) ? "Чётное" : "Нечетное";
// console.log (isEven);

// 4

// let userInput = +prompt ("Введите число");
// switch (userInput) {
//     case 1:
//         alert ("Один");
//         break;
//     case 2:
//         alert ("Два");
//         break;
//     case 3:
//         alert ("Три");
//         break;
//     case 4:
//         alert ("Четыре");
//         break;
//     case 5:
//         alert ("Пять");
//         break;
//     default:
//         alert ( "Неизвестное число")
//         break;
// }

// 5

// let a = undefined;
// let b = a ?? 100;
// console.log (b);

// массивы

// 1-4

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log (numbers [2]);
// numbers [4] = 11;
// console.log (numbers);
// numbers [10] = 12;
// console.log (numbers.length);

// 5-6

// let matrix = [
//     ["a", 6, "c"],
//     [0, "e", 10],
//     ["g", 1, 8],
// ];
// console.log (matrix [1][2]);

// 7-8 unshift push ?

// let fruits = ["Яблоко", "Банан", "Киви"];
// fruits.unshift ("Груша");
// fruits.push ("Апельсин");
// console.log (fruits);
// console.log (fruits[fruits.length-1]);

// циклы

// 1

// let i = 1;
// while (i<=10) {
//     console.log (i);
//     i++;
// }

// 2

// let i = 5; 
// do {
//     console.log (i);
//     i++;
// } while (i<=15);

// 3

// let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// for (let i = 0; i<months.length; i++) {
//     console.log (months[i]);
// }

// 4

// for (let month of months) {
//     console.log (month)
// }

//5

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let number of numbers) {
//     if (number % 2 === 0) {
//         console.log (number);
//     } 
// } 

// 6

// while (true) {
//     let a = +prompt ("Введите число");
//     if (a==0) {
//         break;
//     }
// }

// 7

// for (let i=1; i <=10; i++) {
//     // if (i==3) continue;
//     // if (i==7) continue;
//     // console.log (i);
//     if (i==3 || i==7) {
//         continue;
//     }
//     console.log (i);
// }