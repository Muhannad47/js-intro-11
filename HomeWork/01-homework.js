console.log('\n--------TASK01--------\n');

/*
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them.
*/
console.log('I started to practice "javaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log(`"Don't limit yourself."`);
console.log('Invest in your dreams. Grind now. Shine later');
console.log(`It's not the load that breaks you down, it's the way you carry it.`);
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them.');


console.log('\n--------TASK02--------\n');
/*
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() statement (you can use escape sequences to insert line or a tab)
 
    JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.

*/

console.log(`\tJavaScript is a high-level programming language primarily used to \n build web applications. It is not limited to the web; it can also be used \n for the backend development with technologies like Node.js.
    \n\tIt is open source and has a huge community support, which means \n there are plenty of resources and support available for learning. \n It uses a syntax like other programming languages and easy to learn.`);


    console.log('\n--------TASK03--------\n');

/*
-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter
*/

let myAge = 20;
let myFavoriteNumber = 4; 
let myHeight = '5.11';
let myWeight = 135;
let myFavoriteLetter = 'M'; 

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);


console.log('\n--------TASK04--------\n');

/*
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. Then, output the sum of the numbers with a proper message as given below.

Test Data: 25, 35

Expected output: 
The sum of the numbers = 60
*/

let num1 = 25;
let num2 = 35; 

console.log(`The sum of the numbers = ${num1 + num2}`);


console.log('\n--------TASK05--------\n');

/*
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively. Then, output the product of the numbers with a proper message as given below.

Test Data: 5, 7

Expected output: 
The product of the numbers = 35
*/

let n1 = 5;
let n2 = 7;

console.log(`The product of the numbers = ${n1 * n2}`);


console.log('\n--------TASK06--------\n');

/*
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively. Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

let number1 = 24;
let number2 = 10;

console.log(`The sum of the numbers is = ${number1 + number2}`);
console.log(`The product of the numbers is = ${number1 * number2}`);
console.log(`The subtraction of the numbers is = ${number1 - number2}`);
console.log(`The division of the numbers is = ${number1 / number2}`);
console.log(`The remainder of the numbers is = ${number1 % number2}`);

console.log('\n--------TASK07--------\n');

/*
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers.
Test Data: 7, 11

Expected Output:The average of the numbers is: 9
*/

let i1 = 7;
let i2 = 11;

console.log(`The average of the numbers is = ${(i1 + i2) / 2}`);

console.log('\n--------TASK08--------\n');

/*
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively. Then, output the average of the numbers.
Test Data: 6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12
*/

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log(`The average of the numbers is = ${(a1 + a2 + a3 + a4 + a5) / 5}`);

console.log('\n--------TASK09--------\n');

/*
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data: 5, 6, 10

Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100
*/
let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log(`The 5 multiplied with 5 is = ${(b1) ** 2}`);
console.log(`The 6 multiplied with 6 is = ${(b2) ** 2}`);
console.log(`The 10 multiplied with 10 is = ${(b3) ** 2}`);

console.log('\n--------TASK10--------\n');

/*
Requirement:
- Create a variable called as side to be assumed as one side of a square and store value of 7 in that variable. Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
            perimeter of a square = 4 * side
 
Test Data: 7
Expected Output:
The perimeter of the square = 28 
The area of the square = 49
*/

let side = 7;

console.log(`The perimeter of the square = ${4 * side}`);
console.log(`The area of the square = ${side * side}`);

console.log('\n--------TASK011--------\n');

/*
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log(`The favorite book is ${favBook} \nThe favorite color is ${favColor} \nThe favorite number is ${favNumber}`);

console.log('\n--------TASK012--------\n');
/*
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)

*/

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

console.log(`\tUser who joined this program is ${firstName}. John's age is ${age}. \nJohn's email address is ${emailAddress}, phone number is \n${phoneNumber}, and address is ${address}.`);