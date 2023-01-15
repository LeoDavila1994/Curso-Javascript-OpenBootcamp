let username = "Leonardo";

let lastname = "Dávila Martínez";

let student = username.concat(" " + lastname);

let studentMayus = student.toUpperCase();

let studentMinus = student.toLowerCase();

let numOfCharacters = student.length;

let firstLetter = username.charAt(0);

let lastLetter = lastname.charAt(lastname.length - 1);

let withoutWhiteSpaces = student.replace(/ /g, "");

let isIncluding = student.includes(username);

console.log(isIncluding);
