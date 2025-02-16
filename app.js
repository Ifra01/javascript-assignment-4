// ASSIGNMENT - 4
// CHAPTER - ARRAYS AND LOOP

// Question 1 Declare and initialize an empty multidimensional array.
// (Array of arrays)
// answer: let array = [];

// Question 2 Declare and initialize a multidimensional array
// representing the following matrix:
// answer:
// let matrix = [[0, 1, 2, 3],
// [1, 0, 1, 2],
// [2, 1, 0, 1]];
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         document.write(matrix[i][j] + " ")
//     }
//     document.write('<br>')
// }

// Question 3 Write a program to print numeric counting from 1 to 10.
// answer:
// for(i=1; i<=10; i++){
//     document.write(i + ("<br />"));
// }

// Question 4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// answer:
// let tableNum = +prompt("enter any number to show a multiplication table");
// let length = +prompt("enter length of multiplication table in numbers");

// for (i = 1; i <= length; i++) {
//     document.write(tableNum + " X " + i + "= " + tableNum * i + "<br />");
// }

// Question 5 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// answer:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i <= (fruits.length - 1); i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />")
// }

// Question 6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// answer:
// document.write("<h1>Counting:</h1>")
// for (i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br />");
// document.write("<h1>Reverse counting:</h1>")
// for (i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br />");
// document.write("<h1>Even:</h1>")
// for (i = 0; i <= 10; i++) {
//     document.write(i * 2 + ", ");
// }
// document.write("<br />");
// document.write("<h1>Odd:</h1>")
// for (i = 1; i <= 20; i = i + 2) {
//     document.write(i + ", ");
// }
// document.write("<br />");
// document.write("<h1>Series:</h1>")
// for (i = 1; i <= 10; i++) {
//     document.write(i * 2 + "k, ");
// }

// Question 7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// answer:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("welcome to ABC bakery! what do you want to order sir/ma'am");
// userInput = userInput.toLowerCase();
// var figureOut = false;
// for (var i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         document.write(A[i] + " is available at index " + i + " in our bakery")
//         figureOut = true;
//     }
// }
// if (figureOut === false) {
//     document.write("We are sorry! " + userInput + " is not available in our bakery")
// }

// Question 8 Write a program to identify the largest number in the
// given array.
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// answer:
// let array = [24, 53, 78, 91, 12];
// let largest = array[0];
// for (i = 0; i <= array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i];
//     }
// }
// document.write("Array items : " + array + "<br />" + "The largest number is " + largest);

// Question 9 Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// answer: 
// let array = [24, 53, 78, 91, 12];
// let smallest = array[0];
// for (i = 0; i <= array.length; i++) {
//     if (array[i] < smallest){
//         smallest = array[i];
//     }
// }
// document.write("Array items : " + array + "<br />" + "The smallest number is " + smallest);

// Question 10 Write a program to print multiples of 5 ranging 1 to
// 100.
// answer:
// for (i = 1; i <= 20; i++) {
//     document.write( 5 * i + ", ");
// }