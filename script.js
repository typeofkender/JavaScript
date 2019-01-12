// Практикум

"use strict";

function newGame() {
    function randomInteger(min, max) {
        if (min > max || isNaN(min) == true || isNaN(max) == true) {
            mistakeInput = alert("Некорректное значение!");
            return mistakeInput;
        } else {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
    }

    function guessTheNumber() {

        var gameNumber = prompt("Введите загаданное число");

        if (isNaN(gameNumber) == true) {
            alert("Некорректное значение!");
        } else {

            if (gameNumber == randomNumber) {
                alert("You win!");
                return startAll();
            } else {

                if (gameNumber < randomNumber) {
                    alert("Попробуй еще раз! Число явно больше");
                    guessTheNumber();
                } else {
                    alert("Попробуй еще раз! Число явно меньше");
                    guessTheNumber();
                }
            }
        }
    }

    var min = prompt("Ведите минимальное число");
    var max = prompt("Ведите максимальное число");
    var randomNumber = randomInteger(min, max);

    guessTheNumber();
}

function startAll() {
    var startGame = prompt("Начать новую игру? Y/N");

    if (startGame == "y" || startGame == "Y") {
        newGame();
    } else {
        alert("Пока");
    }
}
startAll();


// 1 quest
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1 Постфиксная форма записи возвращает значение бывшее до увеличения
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4 В данном случае значение b уже равняется 2, после предыдущего увеличения значения на 1
alert(a);                    // 3
alert(b);                    // 3
*/


// 2 quest
/*
var a = 2;
var x = 1 + (a *= 2); // x = 5, далее a = 4 
alert(x);
*/


// 3 quest
/*
var a = +prompt("Произвольное число");
var b = +prompt("Произвольное число");
var x = 0;
if (a >= 0 && b >= 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
} else {
    x = a + b;
    alert(x);
}
*/

// 4 quest
/*
function randomA(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

var a = randomA(0, 15);
switch (a) {
    case 0:
        alert(a++);
    case 1:
        alert(a++);
    case 2:
        alert(a++);
    case 3:
        alert(a++);
    case 4:
        alert(a++);
    case 5:
        alert(a++);
    case 6:
        alert(a++);
    case 7:
        alert(a++);
    case 8:
        alert(a++);
    case 9:
        alert(a++);
    case 10:
        alert(a++);
    case 11:
        alert(a++);
    case 12:
        alert(a++);
    case 13:
        alert(a++);
    case 14:
        alert(a++);
    case 15:
        alert(a);
        break;
}
*/


// 5 quest

var arg1 = +prompt("Произвольное число");
var arg2 = +prompt("Произвольное число");
var operation = prompt("Введите операцию");

function summa(a, b) {
    var x = a + b;
    return x;
}

function subtraction(a, b) {
    var x = a - b;
    return x;
}

function multiplication(a, b) {
    var x = a * b;
    return x;
}

function division(a, b) {
    var x = a / b;
    return x;
}


// 6 quest
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "summa":
            var a = summa(arg1, arg2);
            alert(a);
            return a;
            break;
        case "subtraction":
            var a = subtraction(arg1, arg2);
            alert(a);
            return a;
            break;
        case "multiplication":
            var a = multiplication(arg1, arg2);
            alert(a);
            return a;
            break;
        case "division":
            var a = division(arg1, arg2);
            alert(a);
            return a;
            break;
    }
}

mathOperation(arg1, arg2, operation);


// 7 quest
/*
alert(typeof null);
alert(typeof 0);
alert(typeof null == typeof 0); //2 разных значения, в которых 0 - это число, а null - несуществующий объект
*/

// 8 quest



function power(val, pow) {
    if (pow == 0) {
        var x = 1;
        return x;
    } else if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

var val = +prompt("Задайте число");
var pow = +prompt("Задайт степень");
alert(power(val, pow));
