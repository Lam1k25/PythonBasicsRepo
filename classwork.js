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

// 25.03.26
// part 1
function process(arr){
    resultArr = []
    let filerder = arr.filter(num => num % 2 !== 0);
    filerder.sort((a, b) => a - b);
    let sum = filerder.reduce((acc, num) => acc+ num,0)
    for(let i = 0; item.length; i++){
        if( num % 2 !== 0){
            resultArr.push(itens[i])
        }
    }
    filerder[2] = sum
    return filerder;
}
console.log(process(10,15,2,3,7,8))

// part 2

let str = 'hello';
let str_2 = str.toUpperCase();
console.log(str_2);

let string = 'Пример строки';
let string_2 = "Это тоже строка";
let nameW = "Мир";
let string_3 = `Привет, ${nameW}`;
console.log(string)
console.log(string_2)
console.log(string_3)

// part 3

let text = "I have 2 apples and 10 bananas.";
let numbers = text.match(/\d+/g);
let sum_2 = numbers.reduce((acc,val) => acc + Number(val), 0)
let sum = 0;
console.log(sum_2)
for(let number of numbers) {
    sum += Number(number);
}
console.log(sum);

// part 4

let amdate = '12/25/2025';
let date = amdate.split('/');
console.log(date)
let eudate = `${date[1]}/${date[0]}/2025`
console.log(eudate)

// part 5

function dateline(amdate){
    let date = amdate.split('/');
    let eudate = `${date[1]}/${date[0]}/2025`;
    return eudate
}

console.log(dateline('12/25/2025'))

// part 6

// \d - поиск всех чисел
// \b - граница слова
// [abc] - ищем символ из предложенных
// [a-z] любой a - z
// [A-Z] любой A - Z
// * - ноль или один раз(совпадения)
// ^ - начало строки
// + - 1 или более раз



let text = "Apple and Cherry is amazing fruits.";
let wordsStartWithA = text.match(/\bA[a-z]+\b/g);
console.log(wordsStartWithA);

let text = "Apple and Cherry is amazing fruits.";
let wordsStartWithA = text.match(/\b[aA][a-z]+\b/g);
console.log(wordsStartWithA);

let text = "+7-(800)-401-54-73";
let result = text.replace(/\d/g, '')
console.log(result)

// part 7

let human = {
    name: "Bob"
}
let human2 = human;
Object.freeze(human);

// part 8

let human = {
    name: "Alice"
}
human.lastName = 'Ivanova'
human.work = 'true';
delete human.work;
console.log(human);
let car = {
    brand: "Mercedes"
};
let local_car = Object.assign({}, car);
local_car.brand = "Lada";
console.log(local_car, car);

const students = [
    {
        name: "Alice"
    },
    {
        name: "Alena"
    },
]
console.log(students[0].name)

const carNew = {
    name: "Mercedes",
    coordinates:{
        lat: 55,
        lon: 37
    }
};
console.log(carNew.coordinates.lon)
let {
    name: kolya,
    welcome: function(){console.log('hello')},
    goodbye: (text) => console.log("goodbye")
}

// 30.03.26

// part 1
const color = {
    blue: '###231'
}

console.log('blue' in color);

let arr = [1, 2, 3]
console.log(arr.includes(2));

let obj = {'3':4};
let arr_2 =[1, 2, obj]
console.log(arr_2.includes(obj));

arr.push(arr);
console.log(arr);

let cabinet = {
    topbox: "passport"
}
Object.defineProperties(cabinet, 'topbox',{
    writable: false,
})
cabinet.topbox = "Диплом";
console.log(cabinet)


// part 2

let cabinet = {
    topbox: "passport"
}

Object.defineProperties(cabinet, "topbox",{
    writable: false,
})
cabinet.topbox = ["Диплом"];
cabinet.topbox.push("INN");

Object.defineProperties("Свидетельство о рождении");

console.log(cabinet)

Object.freeze(cabinet.topbox)

// part 3


let numbers = [1, 2, 3];
let numbers_2 = [4, 5, 6];
console.log(...numbers, ...numbers_2)

const paket = {
    fruit: 'orange',
    candy: true
}
const paket_2 = {
    fruit: "apple",
    milk: true
}
allPackets = {...paket, ...paket_2}
console.log(allPackets)

function sumNumbers(first, second){
    let result = 0;
    for(let arg of arguments){
        result+=arg;
    }
    return result;
}
console.log(sumNumbers(1,2,3,4))

function mySum(...arg){
    return arg.reduce((sum, val) => sum + val, 0)
}
console.log(mySum(1,2,3,4))

let furst = 10;
let rest = [20,30,40];
let comb =[furst, ...rest];
console.log(comb)

const js = JSON.stringify(paket);
console.log(JSON.stringify(paket))

const string_to_obj = JSON.parse('{"fruit":"orange","candy":true}')
console.log(string_to_obj.fruit)

// part 3
let colors = ["Red", "Blue", "Green"];
for(let color in colors){
    console.log(color, colors[color])
}

// part 4
const grades = {
    Anna: 85,
    Boris: 70,
    Clara: 90,
    Bob: 1
};

for(let name of Object.entries(grades)){
    if (name[1] > 75){
    console.log(name)} 
}


// part 5


// 02.04.26

//part 1(new file)
let input_print = document.querySelectorAll('input');
for(let i of input_print){
    if(i.type == "checkbox" || i.type == "radio"){//a.id-true b.id-false 
        console.log(i)
    }
    if (i.id){
        console.log("success")
    }
    else{
        console.log("id not found")
    }
}
// part 2

let cam = document.querySelectorAll("a");
console.log(cam)
for(let item of cam){
    item.setAttribute("target", "_blank")
    console.log(item.target)
}

// console.log("start");
// alert("Всплывающее окошко");
//document.getElementById("Здесь будет ид нужного элемента")

//document.querySelectorAll("CSS селектор")

//document.querySelector("CSS селектор")

//console.log(form);

//let myField = document.getElementById('myname');
//console.log(myField);
//let a = document.querySelector("h1");
//console.log(a);
//let b = document.querySelectorAll("option");
//for(let item of b){
//    console.log(item);
//}

//console.log(centrallCell.parentElement.parentElement.children)

//let cam = document.querySelectorAll("a");
//console.log(cam)
//for(let item of cam){
  //  item.setAttribute("target", "_blank")
 //   console.log(item.target)
//}

//let count = 0;
//let buttons = document.querySelectorAll("button");
//for(let button of buttons){
//    count += 1
//}
//console.log(count)

//let string = document.querySelector("p");
//console.log(string)

//let divine = document.getElementById('result')
//console.log(divine)


//let inputs = document.querySelectorAll('input');
//for(let item of inputs){
//    if (!item.value){
//        console.log(item)
//    }
//}

// Ищем строку таблицы
//let item = document.querySelector('td')

//let my_button = document.createElement('button')
//document.body.appendChild(my_button)
//my_button.textContent = 'Удалялка';
//my_button.onclick  =() => item.remove()
//let b = document.getElementById("12")
//my_button.onclick = () =>  b.remove()


let button = document.createElement('button');
document.body.appendChild(button);
button.textContent = "дАБавить инфармейшн"
onclick = function(){
username.textContent = "Lam1k";
year.textContent = "2001";
first.textContent = "Плейбой";
second.textContent = "Миллиардер"
let h_3 = document.querySelectorAll("h3")
for(let item of h_3){
  if (item.id){
      item.textContent = "hahahahahahahah"
  }
  console.log(item)
}
}

/////// 080426

const parent = document.createElement("list");
const newitem = document.createElement("li");
// в начало
parent.insertBefore(newitem, parent.firstChild);

const div = document.createElement("div");
document.body.appendChild(div);
div.style.color = "red";

const parent_1 = document.getElementById("id")
const child = parent_1.firstChild;
parent_1.removeChild(child);
// child no in list - error

const button = document.createElement("button")
document.body.appendChild(button)
button.onclick = function(){
  alert("h1")
}


////

const input = document.getElementById("task-input");
const button = document.getElementById("input-btn");
const list = document.getElementById("task-list");

button.onclick = function(){
  const text = input.value
  let el = document.createElement("li");
  el.textContent = text;
  console.log(text);
  console.log(el);
  list.appendChild(el);
  console.log(list);
  text.value = "";
}
let del = document.createElement("button");
document.body.appendChild(del);
del.textContent = "УДАЛИТЬ";
del.onclick = function(){
  list.textContent = ""
}

//// sdgdgfdgdfdrg
//const button = document.createElement("button");
//button.onclick = function() {console.log("вы нажали")};

//button.addEventListener()
//const parent = document.getElementById("parent");
//const child = document.getElementById(child);
//parent.addEventListener("click", () => console.log("parent success"))
//child.addEventListener("click", function(){console.log("child success")})
        //const greenDiv = document.getElementById("div");
        //greenDiv.addEventListener("click", function(){alert("первый обработчик")

        //})
        //greenDiv.addEventListener("click", function(){
           // console.log("второй обработчик")
        //})
const arr = ['parent', 'child', 'grandson'].map(id => document.getElementById(id))
const output = document.getElementById("output");
let capturing = false;
let bubbling = "true";

function leffa(el, phase){
  output.innerHTML += '${phase}: ${el.id}<br>'
}

function setUp(){
  arr.forEach(el => {
    el.removeEventListener("click", handler, true)
    el.removeEventListener("click", handler, false)
    if (capturing) el.addEventListener("click", handler, true)
    if (bubbling) el.addEventListener("click", handler, false)
  });
}
  
function handler(e){
  const p = e.eventPhase === 1 ? 'CAPTURING': e.eventPhase === 2 ? "TARGET": "BUBBLING"
  log(this, p);
}
document.getElementById("pogruzh").addEventListener("click", () => {
  capturing = !capturing;
  setUp()
})

document.getElementById("vsplit").addEventListener("click", () => {
  bubbling = !bubbling;
  setUp()
})

setUp()

const button = document.querySelector("#clicker");
let count = 0;
button.addEventListener("click", () =>{
  count++
  console.log(count)
})



