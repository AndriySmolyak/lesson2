"use strict";

let money = prompt("Ваш бюджет на місяць?", ""),
    time = prompt("Введіть дату в форматі YYYY MM DD", "");

let appData = {
    butget: money,
    expenses: {},
    optionalExspenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
    a2 = prompt("В скільки обійдеться?", ""),
    a3 = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
    a4 = prompt("В скільки обійдеться?", "");

   

    // for(let i = 0; i < 2; i ++) {
    //     a = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
    //     b = prompt("В скільки обійдеться?", "");

    // }
    appData.expenses = a2;
    appData.expenses = a4;

    alert(appData.butget / 30);

// let arr = ["plumb.png", "orange.jpg", "aplle.bmp"];

// let answer = prompt ("вам є 18?", "");
// console.log((typeof(arr)));