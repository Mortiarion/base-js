// 1. Арифметичні оператори
// Використовуються для математичних обчислень.

// Оператор	    Опис	                Приклад	    Результат
// +	        Додавання	            5 + 3	    8
// -	        Віднімання	            5 - 3	    2
// *	        Множення	            5 * 3	    15
// /	        Ділення	                6 / 3	    2
// %	        Остача від ділення	    5 % 2	    1
// **	        Піднесення до степеня	2 ** 3	    8
console.log(10 + 5); // 15
console.log(10 % 3); // 1 (остача від ділення)
console.log(2 ** 4); // 16 (2 в степені 4)
// 2. Оператори порівняння
// Використовуються для порівняння двох значень, результатом завжди є true або false.

// Оператор	    Опис	                                Приклад	           Результат
// ==	        Рівність (без перевірки типу)	        5 == "5"	        true
// ===	        Строга рівність (з перевіркою типу)	    5 === "5"	        false
// !=	        Нерівність	                            5 != "5"	        false
// !==	        Строга нерівність	                    5 !== "5"	        true
// <	        Менше	                                3 < 5	            true
// >	        Більше	                                3 > 5	            false
// <=	        Менше або дорівнює	                    5 <= 5	            true
// >=	        Більше або дорівнює	                    5 >= 6	            false
console.log(10 > 5); // true
console.log(10 === "10"); // false (типи не співпадають)
// 3. Логічні оператори
// Використовуються для об'єднання логічних виразів.

// Оператор	                Опис                Приклад	            Результат
// &&	                Логічне "І"	            true && false	     false
// `		                                            `	      Логічне "АБО"
// !	                Логічне "НЕ"	            !true	            false
let a = 10;
let b = 5;

console.log(a > 5 && b < 10); // true (обидві умови виконуються)
console.log(a > 5 || b > 10); // true (одна з умов виконується)
console.log(!(a > 5)); // false (заперечення умови)
// 4. Оператори присвоєння
// Використовуються для присвоєння значень змінним.

// Оператор	    Опис	                             Приклад
// =	        Присвоєння	                        x = 5
// +=	        Додавання і присвоєння	            x += 3
// -=	        Віднімання і присвоєння	            x -= 2
// *=	        Множення і присвоєння	            x *= 4
// /=	        Ділення і присвоєння	            x /= 2
// %=	        Остача від ділення і присвоєння	    x %= 3
let h = 10;
h += 5; // x = x + 5
console.log(x); // 15
// 5. Оператори рядків
// Для роботи з рядками.

// Оператор	                            Опис	                Приклад	                        Результат
// +	                    Конкатенація (з'єднання)	    "Привіт, " + "світе!"	            "Привіт, світе!"
// +=	                    Додавання до рядка	            text += " світа!"	                        "Привіт, світа!"
let greeting = "Привіт";
greeting += ", світе!";
console.log(greeting); // "Привіт, світе!"
// 6. Тернарний оператор
// Коротка форма для умовного оператора if-else.

let age = 20;
let isAdult = age >= 18 ? "Дорослий" : "Дитина";
console.log(isAdult); // "Дорослий"

// 7. Інкремент і декремент
// Використовуються для збільшення або зменшення значення змінної.

// Оператор	        Опис	                        Приклад	                Результат
// ++	            Інкремент (збільшення на 1)	    x++	                    x = x + 1
// --	            Декремент (зменшення на 1)	    x--	                    x = x - 1
let x = 5;
x++; // x = 6
console.log(x);
