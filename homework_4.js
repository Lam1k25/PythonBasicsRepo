const users = [];

function isValidName(name) {
    return typeof name === "string" && name.trim().length > 0;
}

function isValidAge(age) {
    return typeof age === "number" && age > 0;
}

function addUser(name, age) {
    if (!isValidName(name) || !isValidAge(age)) {
        console.log("Ошибка: некорректные данные");
        return;
    }

    const existingUser = users.find(user => user.name === name);

    if (existingUser) {
        console.log("Пользователь с таким именем уже существует");
        return;
    }

    users.push({ name, age });
    console.log(`Пользователь ${name} добавлен`);
}

// Удаление пользователя
function removeUser(name) {
    if (!isValidName(name)) {
        console.log("Ошибка: некорректное имя");
        return;
    }

    const index = users.findIndex(user => user.name === name);

    if (index === -1) {
        console.log(`Пользователь ${name} не найден`);
        return;
    }

    users.splice(index, 1);
    console.log(`Пользователь ${name} удалён`);
}

function getUserInfo(name) {
    if (!isValidName(name)) {
        console.log("Ошибка: некорректное имя");
        return;
    }

    const user = users.find(user => user.name === name);

    if (!user) {
        console.log(`Пользователь ${name} не найден`);
        return;
    }

    console.log(`Имя: ${user.name}, Возраст: ${user.age}`);
}


addUser("Анна", 25);
addUser("Иван", 30);
getUserInfo("Анна");
removeUser("Иван");
getUserInfo("Иван"); 
addUser("Анна", 28); 