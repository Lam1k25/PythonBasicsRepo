
function askMood(mood, callback) {
    callback(mood);
}

let userMood = prompt("Введите ваше настроение:");


function handleMood(mood) {
    if (!mood || mood.trim() === "") {
        console.log("Ошибка: введите настроение!");
        return;
    }

    let normalized = mood.toLowerCase();

    if (normalized === "весёлое") {
        console.log("Послушай музыку или позвони другу!");
    } else if (normalized === "грустное") {
        console.log("Соверши небольшую прогулку или посмотри комедию");
    } else if (normalized === "подавленное") {
        console.log("Отдохни! Можно просто поспать или принять ванну");
    } else {
        console.log("Сделай что-то приятное для себя");
    }
}


askMood(userMood, handleMood);
function askMood(mood, callback) {
    callback(mood);
}


