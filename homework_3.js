let totalChars = 0;

while (true) {
    let input = prompt("Введите строку:");

    
    if (input === null) {
        console.log("Программа завершена пользователем.");
        break;
    }

    
    if (input.toLowerCase() === "стоп") {
        break;
    }

    
    let cleaned = input.replace(/\s/g, "");
    totalChars += cleaned.length;
}


console.log("Общее количество символов (без пробелов):", totalChars);