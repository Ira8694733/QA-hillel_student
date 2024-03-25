// ДЗ 1
// Написати свою реалізацію функції isNaN.
// Умови виконання ДЗ
// Не використовувати функції або інші матеріали які ми не вивчали
// Не використовувати isNaN/ Number.isNaN
// customIsNaN має бути ідентичною за логікою до isNaN

function checkIsNaN(qwerty) {
    return typeof qwerty !== 'number'
}

console.log (checkIsNaN())

// ДЗ 2
// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні
// від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення -
// чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.
//
// Умови виконання ДЗ
// // Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних:

function randomNumber(count) {
    let min = 100
    let max = 1000
    let evenCount = 0
    let oddCount = 0

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log (randomNumber)
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("count of random numbers: " + count);
    console.log("even: " + evenCount);
    console.log("odd: " + oddCount);

    const percentageEven = (evenCount / count) * 100;
    const percentageOdd = (oddCount / count) * 100;

    console.log("% odd to even: " + percentageEven.toFixed(2) + "% : " + percentageOdd.toFixed(2) + "%");
}

randomNumber(11);


// ДЗ 3 - вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.
function multipleOfTree(count) {
    let min = 1;
    let max = 100;
    let multipleCount = 0;


    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNumber % 3 === 0) {
            multipleCount++;
        }
    }

    console.log("count of random numbers: " + count);
    console.log("multiple of three: " + multipleCount);
}

multipleOfTree(100);