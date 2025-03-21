console.log("Arithmetic Operators:");

let a = 10,
b = 5;

console.log("a + b is", a + b);
console.log("a - b is", a - b);
console.log("a * b is", a * b);
console.log("a / b is", a / b);
console.log("a % b is", a % b);
console.log("a ** b is", a ** b);
console.log("++a is", ++a);
console.log("a++ is", a++);
console.log("Value of a after a++ is", a);
console.log("--b is", --b);
console.log("b-- is", b--);
console.log("Value of b after b-- is", b);

console.log("\nAssignment Operators:");

let x = 20;
console.log("x =", x);
x += 5;
console.log("x += 5 ->", x);
x -= 3;
console.log("x -= 3 ->", x);
x *= 2;
console.log("x *= 2 ->", x);
x /= 4;
console.log("x /= 4 ->", x);
x %= 3;
console.log("x %= 3 ->", x);
x **= 2;
console.log("x **= 2 ->", x);

console.log("\nComparison Operators:");

let p = 15,
q = 10;

console.log("p == q:", p == q);
console.log("p === q:", p === q);
console.log("p != q:", p != q);
console.log("p !== q:", p !== q);
console.log("p > q:", p > q);
console.log("p < q:", p < q);
console.log("p >= q:", p >= q);
console.log("p <= q:", p <= q);

console.log("\nLogical Operators:");

let bool1 = true,
bool2 = false;

console.log("bool1 && bool2:", bool1 && bool2);
console.log("bool1 || bool2:", bool1 || bool2);
console.log("!bool1:", !bool1);
console.log("!bool2:", !bool2);
console.log("(p > q) && (p !== q):", p > q && p !== q);
console.log("(p < q) || (p == 15):", p < q || p == 15);

console.log("\nBitwise Operators:");

let num1 = 5,
num2 = 3;

console.log("num1 & num2:", num1 & num2);
console.log("num1 | num2:", num1 | num2);
console.log("num1 ^ num2:", num1 ^ num2);
console.log("~num1:", ~num1);
console.log("num1 << 1:", num1 << 1);
console.log("num1 >> 1:", num1 >> 1);
console.log("num1 >>> 1:", num1 >>> 1);

console.log("\nTernary Operator:");

let age = 18;
console.log("Can vote:", age >= 18 ? "Yes" : "No");

let score = 75;
console.log("Pass or Fail:", score >= 40 ? "Pass" : "Fail");

let temperature = 30;
console.log("Weather:", temperature > 25 ? "Hot" : "Cold");

console.log("\nMiscellaneous:");

console.log("Type of num1:", typeof num1);
console.log("Is num1 NaN:", isNaN(num1));
console.log("num1.toString():", num1.toString());
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean('Hello'):", Boolean("Hello"));
console.log("Boolean(''):", Boolean(""));

console.log("\nString Operators:");

let str1 = "Hello",
str2 = "World";

console.log("Concatenation:", str1 + " " + str2);
console.log("str1.length:", str1.length);
console.log("str1[0]:", str1[0]);
console.log("str1.toUpperCase():", str1.toUpperCase());
console.log("str2.toLowerCase():", str2.toLowerCase());
console.log("str1.includes('H'):", str1.includes("H"));
console.log("str2.startsWith('W'):", str2.startsWith("W"));
console.log("str1.endsWith('o'):", str1.endsWith("o"));
console.log("str1.repeat(3):", str1.repeat(3));
console.log("str1.replace('H', 'J'):", str1.replace("H", "J"));