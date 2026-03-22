const name = prompt("Введите ваше имя:");
let ageInput = prompt("Введите ваш возраст:");
let age = Number(ageInput);
if (isNaN(age) || ageInput.trim() === "") {
    console.log("Ошибка: возраст должен быть числом!");
} else {
    console.log('Привет,', name, 'Тебе,', age, 'лет.');
}