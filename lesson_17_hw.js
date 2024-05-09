// Завдання 1
// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд
function textSmth(text, milliseconds) {
    console.log(`${text}! ${milliseconds}`);
}

setTimeout(textSmth, 4000, 'Hello', 4000);

// Завдання 2

const todoURL = 'https://jsonplaceholder.typicode.com/todos/1';
const userURL = 'https://jsonplaceholder.typicode.com/users/1';

function fetchTodo() {
    return fetch(todoURL)
        .then(response => response.json()
        )
        .catch(error => {
            console.error('Error:', error);
        });
}

function fetchUser() {
    return fetch(userURL)
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

const promiseTodo = fetchTodo();
const promiseUser = fetchUser();
const promisesCollection = Promise.all([promiseTodo, promiseUser]);

   promisesCollection
     .then(console.log)
     .catch(console.log);

// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchTodo1() {
    try {
        const response = await fetch(todoURL);
        return await response.json();
    }
    catch (error) {
        console.error('Error:', error);
    }
}

async function fetchUser1() {
    try {
        const response = await fetch(userURL);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const promiseTodo1 = fetchTodo1();
const promiseUser1 = fetchUser1();
const promisesCollection1 = Promise.all([promiseTodo1, promiseUser1]);

promisesCollection1
    .then(console.log)
    .catch(console.log);

// Завдання 4 (Опціонально)
// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.


const usersAllURL = 'https://jsonplaceholder.typicode.com/users';

// GET запит
fetch(usersAllURL)
    .then(response => response.json())
    .then(data => {
        const userWithId1 = data.find(user => user.id === 3);
        console.log('User with ID 1:', userWithId1);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// POST запит
const newUser = {
    name: 'Test',
    email: 'test@example.com'
};

fetch(`${usersAllURL}/9`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then(response => response.json())
    .then(data => {
        console.log('New user created:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });