function authenticate() {
    const correctLogin = "admin";
    const correctPassword = "1234";

    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");

    if (login === correctLogin && password === correctPassword) {
        alert("Добро пожаловать!");
    } else {
        alert("Неверный логин или пароль");
    }
}

authenticate();

function loginUser() {
    const correctLogin = "admin";
    const correctPassword = "1234";

    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");

    if (login === correctLogin && password === correctPassword) {
        let userId = Math.floor(Math.random() * 1000000);
        alert("Вход выполнен! Ваш ID: " + userId);
    } else {
        alert("Ошибка входа!");
    }
}

loginUser();

function authorize() {
    const correctLogin = "admin";
    const correctPassword = "1234";

    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");

    if (login === correctLogin && password === correctPassword) {
        // авторизация (доступ разрешён)
        let isAuthorized = true;
        alert("Вы авторизованы!");
        console.log("Доступ:", isAuthorized);
    } else {
        alert("Доступ запрещён!");
    }
}

authorize();
