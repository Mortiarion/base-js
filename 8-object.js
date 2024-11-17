// Об'єкти 
// Об'єкти — це основний тип даних у JavaScript, що дозволяє 
// зберігати пари ключ - значення та описувати властивості і 
// методи.Вони є фундаментом для створення складних структур, 
// таких як масиви, функції чи класи.

// 1. Створення об'єктів
// 1.1. Створення об'єкта за допомогою літерала
// Найзручніший спосіб створити об'єкт.

const person = {
  name: "Іван",
  age: 30,
  isStudent: true
};
console.log(person); // Виведе: {name: "Іван", age: 30, isStudent: true}

// 1.2. Створення через Object
const person1 = new Object();
person1.name = "Іван";
person1.age = 30;
console.log(person1); // Виведе: {name: "Іван", age: 30}

// 1.3. Використання Object.create
const prototype = { greet: "Привіт" };
const person2 = Object.create(prototype);
console.log(person2.greet); // Виведе: "Привіт"

// 2. Доступ до властивостей
// 2.1. Через крапкову нотацію
console.log(person.name); // Виведе: Іван
// 2.2. Через квадратні дужки
// Корисно, якщо ім'я властивості динамічне або містить спеціальні символи.

console.log(person["age"]); // Виведе: 30

// 3. Додавання, зміна та видалення властивостей
// Додавання або зміна властивості:
person.city = "Київ"; // Додає нову властивість
person.age = 31;      // Змінює існуючу
// Видалення властивості:
delete person.age;
console.log(person); // Виведе: {name: "Іван", isStudent: true, city: "Київ"}

// 4. Методи об'єктів
// Об'єкти можуть містити методи — це функції, які є властивостями об'єкта.

const person3 = {
  name: "Іван",
  sayHello() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
};

person3.sayHello(); // Виведе: Привіт, мене звати Іван

// 5. Ітерація по об'єктах
// 5.1. for...in
// Цикл для перебору всіх ключів об'єкта.

for (let key in person3) {
  console.log(`${key}: ${person3[key]}`);
}

// Виведе:
// name: Іван
// sayHello: function

// 5.2. Object.keys()
// Повертає масив ключів об'єкта.

const keys = Object.keys(person);
console.log(keys); // Виведе: ["name", "sayHello"]

// 5.3. Object.values()
// Повертає масив значень властивостей.

const values = Object.values(person);
console.log(values); // Виведе: ["Іван", function]

// 5.4. Object.entries()
// Повертає масив пар [ключ, значення].

const entries = Object.entries(person);
console.log(entries);
// Виведе: [["name", "Іван"], ["sayHello", function]]

// 6. Перевірка наявності властивостей
// 6.1. Оператор in
console.log("name" in person); // Виведе: true
console.log("age" in person);  // Виведе: false

// 6.2. Перевірка на undefined
console.log(person.age === undefined); // Виведе: true

// 7. Копіювання об'єктів
// 7.1. Проблема з посиланнями
// Об'єкти передаються за посиланням, тому зміна копії змінює оригінал.
const original = { name: "Іван" };
const copy = original;
copy.name = "Марія";
console.log(original.name); // Виведе: Марія

// 7.2. Поверхневе копіювання
Object.assign()
const copy = Object.assign({}, original);

// Spread оператор ...
const copy = { ...original };

// 7.3. Глибоке копіювання
// Для складних об'єктів можна використовувати JSON:

const deepCopy = JSON.parse(JSON.stringify(original));
// Або спеціальні бібліотеки, наприклад lodash.

// 8. Об'єкти як словники
// Об'єкти часто використовуються як словники, де ключі — це строки.

const dictionary = {
  яблуко: "Apple",
  банан: "Banana"
};

console.log(dictionary["яблуко"]); // Виведе: Apple

// 9. Вбудовані методи об'єктів
// Object.freeze(obj) — блокує будь-які зміни об'єкта.
const obj = { name: "Іван" };
Object.freeze(obj);
obj.name = "Марія"; // Нічого не зміниться
console.log(obj.name); // Виведе: Іван

//Object.seal(obj) — дозволяє змінювати властивості, але не додає нові чи видаляє існуючі.
const obj = { name: "Іван" };
Object.seal(obj);
obj.age = 30; // Не працює
delete obj.name; // Не працює
// Object.is(obj1, obj2) — порівнює об'єкти на строго рівність.
console.log(Object.is({ a: 1 }, { a: 1 })); // Виведе: false (різні об'єкти)
// 10. Взаємодія з this
// this в об'єктах посилається на сам об'єкт.

const car = {
  brand: "Toyota",
  start() {
    console.log(`${this.brand} запускається!`);
  }
};

car.start(); // Виведе: Toyota запускається!

// 11. Огляд прототипів
// Об'єкти в JavaScript мають прототип, який забезпечує наслідування.

const obj = { name: "Іван" };
console.log(obj.toString()); // Наслідується з Object.prototype
// Можна створювати власні прототипи через Object.create().

// 12. Особливості об'єктів
// Ключами об'єкта можуть бути строки або символи.
// Порядок властивостей:
// Числові ключі йдуть на початку.
// Далі всі інші ключі за порядком додавання.
const obj = { b: 1, 2: "два", a: 3 };
console.log(Object.keys(obj)); // Виведе: ["2", "b", "a"]
// Об'єкти — основа JavaScript, тому глибше вивчення теми, наприклад, 
// класи, прототипи, та об'єктно-орієнтоване програмування.