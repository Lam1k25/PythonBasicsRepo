// part 1

let text = "TEXT";
let a = 10;
let c = null;
const b = 5;
let sum = a * b;
console.log(sum);
console.error(sum);
console.warn(sum);
console.table(sum);

console.log(c);

let str = "3.14"
let str2 = "3.14px"
let num = parseInt(str);
let num2 = parseFloat(str2);

// part 2

let str = "123";
let num = +str;
if(isNaN(num)){
    console.log("0")
} else{
    console.log("success", num);
}

// part 3

let input = prompt("введите строку");
let convertedNumber =  Number(input);
if(isNaN(convertedNumber)){
    console.log("error")
} else{
    console.log("chislo" + convertedNumber);
}

//part 4

let a = 10;
let b = 3;
console.log(a == b);

let first = true;
let second = true;
let a = 10;
console.log(first && second);
console.log(first || second);
console.log(!second);

//++a(инкремент)
//--a(дикремент)

console.log(++a); //префиксная
console.log(a++); //постфиксная
console.log(a);

//part 5

let first = true;
let second = true;
let a = 10;
console.log(first && second);
console.log(first || second);
console.log(!second);

//++a(инкремент)
//--a(дикремент)

console.log(++a); //префиксная
console.log(a++); //постфиксная
console.log(a);

let day = 5;
switch(day){
    case 1:
    case 2:
    case 5:
        console.log("founded!")
        break;
    default:
        console.log("not found");
}

//part 6

let day = 5
let mes = day > 5 ? "да больше" : " нет не больше";
console.log(mes)

if(day > 5){
    let mes = "yes";
} 
else{
    let mes = "no";
}

// lots errors
//1)
let result = 10 / 0;
console.log(result);
if (result === 0){
    console.error("error");
}
// 1 = присвоение 2 = сравнение 3= сравнение с уётом пер
//2)
console.log(x)
let x = 0;

//part 7
let number = "100";
let right_number = Number(number);
if(isNaN(right_number)){
    console.log("это не число");
}
else{
    console.log("это число");
        if(right_number % 2 == 0){
            console.log("оно чётное");
        }
        else{
            console.log("оно не чётное");}
}

//part 8
let month = 1;
let day = 31;
if((month == 1 && day < 19) || (month == 12 && day > 23)){
    console.log("козерог")
}
else if((month == 1 && day >= 20) || (month == 2 && day < 20)){
    console.log("водолей")
}
else if((month == 2 && day >= 21) || (month == 3 && day < 20)){
    console.log("рыбы")
}
else if((month == 3 && day >= 21) || (month == 4 && day < 20)){
    console.log("овен")
}
else if((month == 4 && day >= 21) || (month == 5 && day < 20)){
    console.log("телец")
}
else if((month == 5 && day >= 21) || (month == 6 && day < 21)){
    console.log("близнецы")
}
else if((month == 6 && day >= 22) || (month == 7 && day < 22)){
    console.log("рак")
}
else if((month == 7 && day >= 23) || (month == 8 && day < 23)){
    console.log("лев")
}
else if((month == 8 && day >= 24) || (month == 9 && day < 23)){
    console.log("дева")
}
else if((month == 9 && day >= 24) || (month == 10 && day < 23)){
    console.log("весы")
}
else if((month == 10 && day >= 23) || (month == 11 && day < 22)){
    console.log("скорпион")
}
else if((month == 11 && day >= 23) || (month == 12 && day < 22)){
    console.log("стрелец")
}

// 11.03.26

// let - global, let  in {} - local,

//part 1

function myFunc(){
    let text = "hello"; // вместо let можно const(область видимости внутри скобок)
    console.log(text); //hello
}
console.log(text); //Ошибка
//!!! внутри функции
while(true){
    let x = 10;
    console.log(x); // 10
}
console.log(x); //ошибка
//!!! внутри блока(любых фигурных скобок)

for(var i = 0; i < 5; i++){
    console.log(i)
}
// var - принимает как локальную, так и глобальню область

//part 2

let n = "3"
n = Number(n);
if(!isNaN (n) && n >= 0){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(sum);

}

// part 3
let n = 4
let day = 5;
let day_1 = 3;
let day_2 = 4;
let day_3 = 0;
let day_4 = 2;
let day_5 = 4;
const hours = 24;
const duration = 1.5;
const travel = 1;
const time = hours - duration - travel;
let totalTraveltime = 2 * travel;
let totalClassTime1 = duration * day_1;
let totalClassTime2 = duration * day_2;
let totalClassTime3 = duration * day_3;
let totalClassTime4 = duration * day_4;
let totalClassTime5= duration * day_5;
let array = [totalClassTime1, totalClassTime2, totalClassTime3, totalClassTime4, totalClassTime5];


if (array[day_1] < 0 || n > 5){
    console.log("ошибка")

}
for(let days = 0; days < array.length; days++){
    availebelTimeToSleep = hours - array[days] - totalTraveltime;
    console.log(availebelTimeToSleep)
}

// part 4

function sum(a = 0 , b = 0){
    return a + b;
}

console.log(sum(5))


function showmyname(){
    console.log(this.name)
}

const person = {
    name: "Bob",
    showmyname: showmyname
}

person.showmyname()

const sum = (a, b) => a + b;
console.log(sum(3, 3))

// part 5

function findMax(a,b){
    if (a > b){
        return a;
    }
    else if (a == b){
        return "числа равны"
    }
    else{
        return b
    }
}


console.log(findMax(3,5))

//part 6

function number(a){
    if (a % 2 == 0){
        console.log("число чётное")
    }
    else{
        console.log("число нечётное")
    }
}

console.log(number(6))

let pred = 1
let pred2 = 1
let next = 2
function Fibonachi(n){
    if(n > 10){
        console.log("ошибка")
    }

    for(i = 3; i < n; i++){
        next = pred + pred2;
        pred2 = pred;
        pred = next;
    }

    return next
}
console.log(Fibonachi(10))

// 16.03.26

//part 1

// синхронная функция
function grett(callback){
    callback();
}

grett(() => {
    console.log('всем привет')
})

// асинхронная функция
setTimeout(() => {
    console.log("wait 1 second");
}, 1000)

console.log("Этот код ждать не будет")

// part 2

function fetchDataFunc(callback){
    setTimeout(() => {
        console.log("данные долго загружаются")
        callback("вот ваши данные");    
}, 2000)
}


function display(data){
    console.log(data);
}

fetchDataFunc(display); 

// part 3

function calc(a, b, oper){
    return oper(a,b)
}

function add(x,y){
    return x + y
}

function mult(x,y){
    return x * y
}

console.log(calc(5, 3, add));
console.log(calc(5,3,  mult))

// part 4

asyncFunc1(function(result1){
    asyncFunc2(result1, function(result2){
        asyncFunc3(result2, function(result3){
            console.log("Final res:" + result3);
        });
    });
});

// part 5

let name = "Alice";

function greet(a, b, oper){
    return oper(a, b)
}

function add(name_3, name_4){
    return name_3 + name_4;
}

// greet(function(){
//     console.log(name) // Alice
// })
console.log(greet("Artem", "Dima", add));


// part 6

function calculate(x, y, z, oper){
    return oper(x,y,z)
}

function sum(x,y,z){
    return x + y + z
}

function volume(x1,y1,z1){
    return x1 * y1 * z1
}

console.log(calculate(11, 22, 33, sum));
console.log(calculate(10, 20, 30, volume))

// part 7

(function(){
    let x = 10;
    console.log("Я выполнюсь сразу!");
})();

function print(){
    console.log("вывод");
}
 print()

// part 8

function countdown(n){
    if(n <= 0){
        console.log("Start");
        return;
    }
    console.log(n);
    countdown(n - 1);

}

countdown(10);


function counter(){
    let count = 0
    return function(){
        count++
        return count;
    }
}

const count = counter()
console.log(count())
console.log(count())
console.log(count())


function memory(fn){
    const cash = {};

    return function(arg){
        if(cash[arg] !== undefined){
            console.log("Fetch from crash:" + cash[arg]);
            return cash[arg];
        }

        const result = fn(arg);
        cash[arg] = result;
        console.log("computing process result:" + arg);
        return arg;
    }
}
function square(x){
    return x * x;
}

const memoraizied = memory(square);

console.log(memory(4))
console.log(memory(4))

// 18.03.26
// part 1
function pow(base, exp){
    if(exp === 0) return 1;
    return base * pow(base, exp - 1);
}
console.log(pow(2, 0))

// part 2

function factorial(n){
    if(n === 1) return 1; // можно и 0)
    return n * factorial(n - 1)
}
console.log(factorial(5))

// part 3

function fib(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6))

// part 4
function creatUser(name){
    let password = "qwerty"

    return{
        getName: function(){
            return name;
        },
        checkPassword: function(input){
            return input === password;
        },
        getPassword: function(){
            return password
        }
    };
}

const user = creatUser("Bob");
console.log(user.getName());
console.log(user.checkPassword('123'));
console.log(user.password);

// part 5

function creatUser(name){
    let password = "qwerty"

    return{
        getName: function(){
            return name;
        },
        checkPassword: function(input){
            return input === password;
        },
        getPasseord: function(){
            return password
        }
    };
}

const user = creatUser("Bob");
console.log(user.getName());
console.log(user.checkPassword('123'));
console.log(user.password);

// part 6

function memory(fn){
    const cash = {};

    return function(arg){
        if(cash[arg] !== undefined){
            console.log("Fetch from crash:" + cash[arg]);
            return cash[arg];
        }

        const result = fn(arg);
        cash[arg] = result;
        console.log("computing process result:" + arg);
        return arg;
    }
}
function factorial(n){
    if(n === 1) return 1; 
    return n * factorial(n - 1)
}
const memoraizied = memory(factorial);

console.log(memoraizied(4))
console.log(memoraizied(4))



// part 7

function cashedSumDigits(fn){
    const cash = {};

    return function(arg){
        if(cash[arg] !== undefined){
            console.log("нет такого числа" + n)
            return;
        }

        console.log("такое число" + cash[arg])
        const result = fn(arg);
        cash[arg] = result;
        console.log("computing process result:" + arg);
        return arg;
    }
}
function sumDigits(n){
    if(n < 10){
        return n;
    }
    return (n % 10) + sumDigits((Math.floor(n / 10)))
}

const x = cashedSumDigits(sumDigits);
console.log(x(12345))
console.log(sumDigits(12345))



