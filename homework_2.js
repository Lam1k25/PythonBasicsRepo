let xInput = prompt("Введите первое число:");
let yInput = prompt("Введите второе число:");


let x = Number(xInput);
let y = Number(yInput);


if (isNaN(x) || isNaN(y) || xInput.trim() === "" || yInput.trim() === "") {
    console.log("Ошибка: нужно ввести числа!");
} 

else if (y === 0) {
    console.log("Ошибка: деление на ноль невозможно!");
} 

else {
    let remainder = x % y;
}