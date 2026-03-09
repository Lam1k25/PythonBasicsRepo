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









