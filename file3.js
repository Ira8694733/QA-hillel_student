// 1. Задача: Конвертер валют
//// Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) і код валюти, в яку потрібно конвертувати
// ('EUR', 'UAH', 'GBP'). Функція повинна повертати суму у вказаній валюті, використовуючи фіксовані курси валют
// (наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). Якщо код валюти не підтримується, функція повинна повертати
// рядок з помилкою.

function convertCurrency(amountInUSD, currencyCode) {
    let result;
    if (currencyCode === "EUR") {
        result = amountInUSD * 0.9;
    } else if (currencyCode === "UAH") {
        result = amountInUSD * 35;
    } else if (currencyCode === "GBP") {
        result = amountInUSD * 0.8;
    } else {
        return "Unsupported currency code";
    }
    return result;
}
console.log(convertCurrency(1, "EUR"));

function convertCurrency1(amountInUSD, currencyCode) {
    let currencyRates = {
        'EUR': 0.9,
        'UAH': 35,
        'GBP': 0.8
    };

    let result1;

    if (currencyCode === "EUR") {
        result1 = amountInUSD * currencyRates['EUR'];
    } else if (currencyCode === "UAH") {
        result1 = amountInUSD * currencyRates['UAH'];
    } else if (currencyCode === "GBP") {
        result1 = amountInUSD * currencyRates['GBP'];
    } else {
        return "Unsupported currency code";
    }

    return result1;
}

console.log(convertCurrency1(1, 'UAH'));

//2. Задача: Визначення дня тижня
//Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня, де 1 - це понеділок,
// а 7 - неділя. Якщо введене число не відповідає жодному дню тижня, функція має повертати рядок з помилкою.

function getDayOfWeek(a) {
    if (a === 1) {
        return "Понеділок";
    }
    else if (a === 2) {
        return "Вівторок"
    }
    else if (a === 3) {
        return "Середа"
    }
    else if (a === 4) {
        return "Четверг"
    }
    else if (a === 5) {
        return "П'ятниця"
    }
    else if (a ===6) {
        return "Субота"
    }
    else if (a === 7) {
        return "Неділя"
    }
    else {
        return "Mistake. Put correct number from 1 to 7"
    }
    return
}

console.log(getDayOfWeek(8));

function getDayOfWeek1(a) {
    const daysOfWeek = {
        1: "Понеділок",
        2: "Вівторок",
        3: "Середа",
        4: "Четверг",
        5: "П'ятниця",
        6: "Субота",
        7: "Неділя"
    };

    if (daysOfWeek[a]) {
        return daysOfWeek[a];
    } else {
        return "Mistake. Put correct number from 1 to 7";
    }
}

console.log(getDayOfWeek1(7));

// 3.Задача: Знайти число Фібоначчі
// Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число з послідовності Фібоначчі.
// Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент), а кожне наступне число є сумою двох попередніх чисел.

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

console.log( fibonacci(0) );
console.log( fibonacci(4) );
