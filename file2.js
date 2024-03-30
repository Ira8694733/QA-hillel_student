// Задача 1: Класифікація оцінок (вирішується за допомогою if-else)
// Завдання: У вас є оцінка від 1 до 100. Напишіть блок коду, який класифікує оцінку: "відмінно" для оцінок від 90 до 100,
// "добре" для оцінок від 70 до 89, "задовільно" для оцінок від 50 до 69, та "незадовільно" для оцінок менше 50.
let grade = 85;

if (grade >= 90 && grade <= 100) {
    console.log("Відмінно");
} else if (grade >= 70 && grade <= 89) {
    console.log("Добре");
} else if (grade >= 50 && grade <= 69) {
    console.log("Задовільно");
} else if (grade < 50) {
    console.log("Незадовільно");
} else {
    console.log("Неправильно введена оцінка");
}

// Задача 2: Вибір дії (вирішується за допомогою switch-case)
// Завдання: У вас є рядок з дією ("додати", "відняти", "помножити", "поділити") і два числа. Напишіть блок коду,
// який виконує обрану дію з цими числами та виводить результат.
let action = "додати";
let num1 = 27;
let num2 = 5;
let result1;

switch (action) {
    case "додати":
        result1 = num1 + num2;
        break;
    case "відняти":
        result1 = num1 - num2;
        break;
    case "помножити":
        result1 = num1 * num2;
        break;
    case "поділити":
        result1 = num1 / num2;
        break;
    default:
        result1 = "Інша дія";
}

console.log("Результат: " + result1);

//  Задача 3: Перевірка на парність (вирішується за допомогою тернарного оператора)
//  Завдання: У вас є число. Використовуйте тернарний оператор для перевірки числа на парність. Виведіть "парне",
//  якщо число парне, і "непарне" в іншому випадку.

let num = 89;
let result2 = (num % 2 === 0) ? "парне" : "непарне";

console.log(result2);
