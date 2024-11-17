// Число (number)

// У JavaScript всі числа — це 64-бітні числа з плаваючою комою.

// Цілі числа: 10, -5.
// Дробові: 3.14, -0.5.

// Спеціальні значення:
// Infinity (результат ділення на 0).
// -Infinity.
// NaN (Not-a-Number).

let age = 2543252346.3450964508673;
console.log(age.valueOf());
console.log(age.toString());
console.log(age.toPrecision(2)); // форматування не цілого числа до чилсла який предається аргумент
console.log(age.toExponential()); // Якщо параметр не передано, число буде перетворене на експоненційну форму з максимальною точністю.
console.log(age.toFixed(6)); // digits (опціональний) — кількість цифр після десяткової крапки (від 0 до 100). Якщо параметр не вказано, за замовчуванням буде використано 0.
console.log(age.toLocaleString());
// number.toLocaleString(locales?, options?)
// locales (опціональний) — рядок або масив рядків, що визначає мову
// та регіон(наприклад, 'en-US', 'uk-UA', 'fr-FR').
console.log(
    age.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // "$1,234,567.89"
console.log(
    age.toLocaleString("uk-UA", { style: "currency", currency: "UAH" })
); // "1 234 567,89 ₴"

// Округлення до 1 знака після десяткової крапки
console.log(
    age.toLocaleString("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    })
); // "1,234,567.9"

// Без десяткових частин
console.log(age.toLocaleString("uk-UA", { maximumFractionDigits: 0 })); // "1 234 568"

let nameString = "string is very long  short  and very short";

console.log(nameString.at(0)); // шукаєм за індексом і підтримує негаивні значення -1 
// знгачення -1 буд указувати спочатку
console.log(nameString[5])
console.log(nameString)

console.log(nameString.charAt(10));
console.log(nameString.charCodeAt());
console.log(nameString.codePointAt());
// console.log(nameString.concat(' df +')); // повертає новий рядок не змінюючи старий
console.log(nameString.endsWith('short', 50));
console.log(nameString.includes());
// у JavaScript використовується для перевірки, чи містить 
// рядок вказаний підрядок.Він повертає значення true, якщо 
// підрядок є частиною рядка, і false — якщо його немає.

console.log(nameString.indexOf('s', 9));
console.log(nameString.lastIndexOf('', 122));
console.log(nameString.length);
console.log(nameString.localeCompare());
// console.log(nameString.localeCompare());
console.log(nameString.match(/s/g));
console.log(nameString.normalize("NFD"));
console.log(nameString.toLocaleUpperCase()); // важливо для мов різних
console.log(nameString.slice())

// інтерполяція 
let stringInterpolation = 'Interpolation';
console.log(stringInterpolation);

let fullInterpolation = `Hi ${stringInterpolation}`;
console.log(fullInterpolation);


// boolean(логічний тип) — це простий тип даних, який
//  може мати лише два значення: true(істина) або
// false(хибність).Логічні значення зазвичай використовуються
// для умовного виконання коду, перевірки істинності
// виразів або керування логікою програми.
const isActive = true;  // Логічне значення "істина"
const isAvailable = false; // Логічне значення "хибність"

console.log(5 > 3);  // true
console.log(10 === "10"); // false
console.log("hello" !== "world"); // true

// Логічні оператори
// && (і):
console.log(true && false);  // false
console.log(true && true);   // true
// || (або):
console.log(false || true);  // true
console.log(false || false); // false
// ! (не):
console.log(!true);  // false
console.log(!false); // true

let empty = null;
console.log(empty); // null


let notDefined;
console.log(notDefined); // undefined


// Унікальні ідентифікатори, які ніколи не збігаються.

let symbol1 = Symbol("опис");
let symbol2 = Symbol("опис");
console.log(symbol1 === symbol2); // false

// BigInt
// Для чисел, які виходять за межі звичайного number.

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber + 10n); // Додавання з BigInt

// Оператор typeof
// Для перевірки типу змінної:

console.log(typeof "Привіт");   // "string"
console.log(typeof 123);        // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (це баг у JS, але варто знати)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 10n);        // "bigint"