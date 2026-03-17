//Data Structures Coding Task
//Task 1 – Student List (Array)
//Create an array called students that stores 5 student names.
//Then perform the following operations:
//1.	Print all student names using a loop
//2.	Add a new student to the list
//3.	Remove the last student from the list
//4.	Print the updated list

let students = ["Xena", "Lu", "Charlie", "Pamela", "Lucas"];

console.log("Student names:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

students.push("Logan");
students.push("Alex");
students.push("Sofia");
students.pop();

console.log("Updated student names:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//Task 2 – Number Operations
//Create an array with the numbers:
//[10, 20, 30, 40, 50]
//Students must:
//1.	Print all numbers using a loop
//2.	Find the sum of all numbers
//3.	Find the largest number

let numbers = [10, 20, 30, 40, 50];

console.log("Numbers:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number:", largest);

//Task 3 – Search in Array
//Create an array of fruits:
//["Apple", "Banana", "Mango", "Orange"]
//Ask students to:
//1.	Check if "Mango" exists in the array
//2.	Print "Found" if it exists
//3.	Print "Not Found" if it does not

let fruits = ["Apple", "Banana", "Mango", "Orange"];

if (fruits.includes("Mango")) {
  console.log("Found");
} else {
  console.log("Not Found");
}

let fruits2 = ["Apple", "Banana", "Kiwi", "Orange"];

if (fruits2.includes("Mango")) {
  console.log("Found");
} else {
  console.log("Not Found");
}
