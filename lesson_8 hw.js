// ДЗ 1.
// написати функцію findValueByKey(companyName),
// яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    if (company.name === companyName && company.type === 'subCompany') {
        return company;
    } else {
         if (company.clients) {
            for (const client of company.clients) {
                const result = findValueByKey(companyName, client);
                if (result !== null) {
                    return result;
                }
            }
        }
        if (company.partners) {
            for (const partner of company.partners) {
                const result = findValueByKey(companyName, partner);
                if (result !== null) {
                    return result;
                }
            }
        }
    }
    return null;
}

const foundCompany = findValueByKey('Клієнт 1.1', company);
if (foundCompany) {
    console.log(foundCompany);
} else {
    console.log('Company not found');
}

// ДЗ.2 Робота з обʼєктом
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
// Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
// Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
//
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

const solarSystem = {
    namePlanet: 'Venus',
    radius: "6051.8 км",
    mass: "4.867 × 10^24 кг",
    averageTemperature: "462 °C",

    getInfo() {
        return `Інформація про планету ${this.namePlanet}: 
        Радіус: ${this.radius} 
        Маса: ${this.mass} 
        Середня температура: ${this.averageTemperature}`;
    },

    set newProperty(item) {
        this.radius = item;
    }
};

console.log(solarSystem.getInfo());

solarSystem.newProperty = 'Нова властивість!';

console.log(solarSystem.getInfo());