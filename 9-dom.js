// 9. DOM (Document Object Model): Взаємодія зі сторінкою
// DOM (Document Object Model) — це програмна інтерфейсна модель,
//  яка представляє HTML - документ у вигляді об'єктного дерева. 
// За допомогою DOM JavaScript може взаємодіяти зі сторінкою: 
// змінювати вміст, стилі, атрибути, додавати або видаляти елементи.

// Основні поняття DOM
// Дерево DOM: HTML-структура представлена у вигляді вузлів:

// Елементи (<div>, <p>).
// Текстові вузли (текст між тегами).
// Атрибути (наприклад, class, id).
// Кореневий елемент: document — об'єкт, що представляє всю HTML-сторінку.

// 1. Вибір елементів DOM
// 1.1. document.getElementById(id)
// Повертає елемент за унікальним id.
// Якщо елемент не знайдено, повертає null.
const header = document.getElementById("main-header");
console.log(header); // <h1 id="main-header">Привіт</h1>

// 1.2. document.querySelector(selector)
// Повертає перший елемент, що відповідає CSS-селектору.
const firstParagraph = document.querySelector("p");
const specificClass = document.querySelector(".my-class");
const nested = document.querySelector("div.container > span");
console.log(firstParagraph); // Перший <p> у документі

// 1.3. document.querySelectorAll(selector)
// Повертає NodeList усіх елементів, які відповідають селектору.
// NodeList підтримує ітерацію через forEach.
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => console.log(p.textContent));

// 1.4. Інші методи вибору
// document.getElementsByClassName(className): Масивоподібний об'єкт всіх елементів із заданим класом.
// document.getElementsByTagName(tagName): Масивоподібний об'єкт всіх елементів із заданим тегом.
const divs = document.getElementsByTagName("div");
console.log(divs[0]); // Перший <div>

// 2. Зміна тексту, вмісту та стилів
// 2.1. Зміна тексту
// textContent: Змінює або отримує текстовий вміст елемента.
header.textContent = "Новий заголовок";
// innerHTML: Вставляє HTML-код всередину елемента.
const container = document.querySelector(".container");
container.innerHTML = "<p>Це новий параграф!</p>";

// 2.2. Зміна стилів
// Через style: Дозволяє змінювати CSS-властивості напряму.
header.style.color = "blue";
header.style.fontSize = "24px";
// Додавання класів через classList:
// classList.add("class-name") — додає клас.
// classList.remove("class-name") — видаляє клас.
// classList.toggle("class-name") — додає або видаляє залежно від стану.
// classList.contains("class-name") — перевіряє наявність класу.
header.classList.add("highlight");
if (header.classList.contains("highlight")) {
  console.log("Клас додано");
}
//3. Атрибути
//Отримання/зміна атрибутів:
//getAttribute(attrName) — отримує значення атрибута.
//setAttribute(attrName, value) — задає значення.
//removeAttribute(attrName) — видаляє атрибут.
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // Отримати посилання
link.setAttribute("href", "https://example.com"); // Змінити посилання
link.removeAttribute("target"); // Видалити атрибут target

// 4. Додавання та видалення елементів
// 4.1. Додавання
// appendChild(): Додає елемент в кінець.
// append(): Додає текст або елементи.
// prepend(): Додає на початок.
const newElement = document.createElement("p");
newElement.textContent = "Новий елемент";
document.body.appendChild(newElement); // Додає в кінець body

// 4.2. Видалення
// remove(): Видаляє елемент.
// removeChild(): Видаляє дочірній елемент.
const toDelete = document.querySelector(".to-delete");
toDelete.remove();

// 5. Події DOM
// Для взаємодії зі сторінкою додаються слухачі подій:
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Кнопку натиснуто!");
});

// 6. Робота з формами
// Отримання даних із форми:
const input = document.querySelector("input");
console.log(input.value); // Поточне значення
// Відслідковування змін:
input.addEventListener("input", (event) => {
  console.log(event.target.value); // Значення при кожній зміні
});
// 7. Взаємодія зі стилями через CSS
// Можна керувати стилями сторінки за допомогою JavaScript, змінюючи CSS:

// Додавання стилів через JavaScript
const style = document.createElement("style");
style.textContent = `
  .highlight {
    background-color: yellow;
    color: red;
  }
`;
document.head.appendChild(style);
// Керування змінними CSS
document.documentElement.style.setProperty("--main-color", "blue");
// DOM — це інструмент для взаємодії JavaScript зі сторінкою. 
// Використовуючи його можливості, можна динамічно змінювати 
// контент, стилі та структуру сторінки, створювати інтерактивні 
// елементи, і це є основою для розробки сучасних веб - додатків.