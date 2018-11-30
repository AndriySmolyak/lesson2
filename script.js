"use strict";

let money = prompt("Ваш бюджет на місяць?", ""),
    time = prompt("Введіть дату в форматі YYYY MM DD", "");
    var c;
    var d;
let appData = {
    butget: money,
    expenses: {
        // c ,
        // d 
    },
    optionalExspenses: {},
    income: [],
    timeData: time,
    savings: false
};

    // appData.expenses.c = a;
    // appData.expenses.d = b;

   

    for(let i = 0; i < 2; i ++) {
        let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
            b = prompt("В скільки обійдеться?", "");

        if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
            console.log("done");

            appData.expenses[a] = b;

        }
    
//         else if((typeof(a))!= "string" || (typeof(a)) === null || (typeof(b)) === null || a === '' || b === '' || a.length < 50){     
//             for(let m = 0; m <  i; m ++) {
//                 let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
//                     b = prompt("В скільки обійдеться?", "");
//     }
// }
}

//Ще 2 способи циклів

                      //----1------
// let i = 0;
//     while(i < 3){
//             let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
//                 b = prompt("В скільки обійдеться?", "");
        
//         if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//             console.log("done");
//             appData.expenses[a] = b;
            
//         }
//         i++;
//     }
                    //------2
    // let i = 0;

    // do {
    //     let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", ""),
    //         b = prompt("В скільки обійдеться?", "");
                
    //             if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
    //                 console.log("done");
    //                 appData.expenses[a] = b; 
                
    //             }
    //             i++;
    //         } while (i<2); 



  appData.moneyPerDay = appData.butget / 30;
    alert("Щоденний бюджет складає: " + appData.moneyPerDay);

        if(appData.moneyPerDay < 100){
            console.log('Минимальний рівень достатку');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Середній рівень достатку');
        } else if(appData.moneyPerDay > 2000){
            console.log('Високий рівень достатку');
        } else {
            console.log('Виниклакла помилка');
        }

    // alert("Обовязкова стаття розходів в цьому місяці " + appData.expenses.c + "\n" + "Обійшлось : " + appData.expenses.d);

