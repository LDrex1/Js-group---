//page start
//alert("Assignment Week 2");

//Week 1, 4-10
//number 4
console.log("week 1".toLocaleUpperCase());
let x1, x2, x3, x4;
x1 = "abcd";
x2 = true;
x3 = undefined;
x4 = null;

/* number 5, let's just assume this is
also datatypes.js file instead of  
creating too many files.
*/
console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);
console.log(typeof x4);

//number 6
let a1, a2, a3, a4;

//number 7 and 8
const firstName = "Damilare",
  lastName = "Abiola",
  maritalStatus = "single",
  countr = "Nigeria",
  age = 22;

//number 9
const fN = "Damilare";
const lN = "Abiola";
const mS = "single";
const Co = "Nigeria";
const howOld = 22;

//number 10
let myAge;
let yourAge;

myAge = 5;
yourAge = 10;

console.log("My age is " + myAge + " and your age is " + yourAge);

//Week 2
// Exercise 1
//1-10
console.log("week 2".toLocaleUpperCase());
var challenge;
challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("of"));
console.log(challenge.split());
console.log(challenge.split(" "));

//11-16
var companies = "Facebook, Google, Microsoft, Apple, \
IBM, Oracle, Amazon";
console.log(companies.split(","));
console.log(challenge.replace("JavaScript", "Phyton"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));

//17-23
var sentence =
  "You cannot end a sentence with because because \
because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));
console.log(sentence.trim(" "));
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
console.log(challenge.match("a"));

//24-25
var chal = "30 Days of";
console.log(chal.concat(" JavaScript"));
console.log(chal.repeat(2));

//Exercise 2
//1-12
console.log(
  "'There is no exercise better than for the heart than \
reaching down and lifting people up.' by John Holmes teaches us to \
help one another."
);
console.log(
  '"Love is not patronizing and charity isnt about pity, it \
is about love. Charity and love are the same -- with charity you give \
love, so dont\'t just give money but reach out your hand instead."'
);
console.log(typeof 10 == typeof "10");

var accGrav = parseFloat(9.8);
console.log(Math.round(accGrav) == 10);

console.log("Phython".includes("on"));
console.log("Jargon".includes("on"));
console.log("I hope this course is not full of Jargon".includes("Jargon"));

console.log(Math.floor(Math.random() * (100 - 1 + 1) + 1));
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
console.log(Math.floor(Math.random() * (225 + 1)));
console.log(
  "Javarscript".charAt(Math.floor(Math.random() * ("Javascript".length + 1)))
);
console.log(
  "1\t1\t1\t1\t1\
            \n2\t1\t2\t4\t8\
            \n3\t1\t3\t9\t27\
            \n4\t1\t4\t16\t64\
            \n5\t1\t5\t25\t125"
);
console.log(sentence.substring(31, 54));

//Exercise 3
//1-4
var sentence2 =
  "Love is the best thing in this world. Some found their\
 love and some are still looking for their love";
let ag = sentence2.split(" ");

console.log(ag);
console.log(sentence2.match(/love/gi));
console.log(sentence.match(/because/gi));

const sentence3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;." +
  " The@re $is no@th@ing; &as& mo@re rewarding as educa@ting" +
  "&and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re" +
  "interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate" +
  "yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is" +
  "al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence3.replace(/[%$@;&#!]/g, ""));

var problem =
  "He earns 5000 euro from salary per month, 10000 euro annual " +
  "bonus, 15000";
var parmeters = problem.match(/\d+/g);
let salary = Number(parmeters[0]),
  bonus = Number(parmeters[1]),
  onlineCourses = Number(parmeters[2]);
var annualIncome = 12 * (salary + onlineCourses) + bonus + " " + "euros";
console.log(annualIncome);

//Week 3
//Exercise 1
console.log("WEEK 3");
let city = "Lagos",
  isMarried = false,
  year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof countr);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == typeof 10);
console.log(parseInt(9, 8) == 10);

5 + 7 - 9;
firstName + lastName;
4 > 3;

let zero = null;
5 / firstName;
age * 0;

4 > 3;
console.log("phyton" == "jargon");

//7
let calender = new Date();
console.log(calender.getFullYear());
console.log(calender.getMonth());
console.log(calender.getHours());
console.log(calender.getMinutes());
console.log(calender.getTime());

//Execise 2

function triangle() {
  var base = prompt("base for triangle");
  var height = prompt("height of triangle");
  var area = 0.5 * base * height;
  alert(`area = ${area}`);

  var sideA = Number(prompt("side a"));
  var sideB = Number(prompt("side b"));
  var sideC = Number(prompt("side c"));
  perimeter = sideA + sideB + sideC;
  alert(`perimeter = ${perimeter}`);
}

function rectangle() {
  lengthR = Number(prompt("length of rectangle"));
  width = Number(prompt("width of rectangle"));
  perimeterR = 2 * (lengthR * width);
  alert(`perimeter = ${perimeterR}`);
}

function circle() {
  const pi = 3.14;
  var radius = prompt("radius of circle");
  var areaC = pi * Math.pow(radius, 2);
  var circumference = 2 * pi * radius;
  alert(`area of circle = ${areaC}`);
  alert(`circumference = ${circumference}`);
}

(x1 = 2), (y1 = 2), (x2 = 6), (y2 = 10);
slope = (y2 - y1) / (x2 - x1);

var ex;
var why;
function quad() {
  function calculation() {
    while (why != 0) {
      ex = Math.floor(Math.random() * 20) - 20;
      why = Math.pow(ex, 2) + 6 * ex + 9;
    }
  }

  calculation();
}

quad();
console.log(`y equals zero when x equals ${ex}`);

//
function earning() {
  var hours = prompt("Enter hours");
  var hourlyRate = prompt("Enter rate per hour");
  var weeklyEarning = hours * hourlyRate;
  alert(`your weekly warning is ${weeklyEarning}`);
}

function nameLength() {
  var nameLength = prompt("enter your name");
  if (nameLength.length > 7) {
    alert("name is too long");
  } else if (nameLength.length < 7) {
    alert("name is too short");
  }
}

if (firstName > lastName) {
  console.log(`your first name. ${firstName} is longer than your last name, 
     ${lastName}`);
} else {
  console.log(`your last name. ${lastName} is longer than your first name, 
     ${firstName}`);
}

function birthYear() {
  let birthyear = prompt("In what year were you born");
  let yearA = 2022 - birthyear;
  if (yearA >= 18) {
    alert(`your are ${yearA} years old, your are old enough to drive`);
  } else {
    alert(`you are ${yearA} years old. you will be allowed to drive after 
 ${18 - yearA} years`);
  }
}

dateYear = calender.getFullYear();
dateMonth = calender.getMonth();
dateDays = calender.getDay();
dateHours = calender.getHours();
dateMinutes = calender.getMinutes();
dateTime = calender.getTime();

console.log(`${dateYear}-${dateMonth}-${dateDays} ${dateHours}:${dateMinutes}`);
console.log(`${dateDays}-${dateMonth}-${dateYear} ${dateHours}:${dateMinutes}`);
console.log(`${dateDays}/${dateMonth}/${dateYear} ${dateHours}:${dateMinutes}`);

if (dateHours < 10) {
  dateHours = "0" + dateHours;
}

if (dateMinutes < 10) {
  dateMinutes = "0" + dateMinutes;
}

console.log(`${dateYear}-${dateMonth}-${dateDays} ${dateHours}:${dateMinutes}`);

/* Week 4 Conditionals
Exercises form no 4 */
//no 4
console.log(`WEEK 4`);
var giveAway;
let ash = "#";
for (let i = 0; i < 7; i++) {
  space = "\n";
  console.log(ash + space);
  ash += "#";
}

//no 6
let i = 0;
console.log(`i\t\ti^2\t\ti^3`);
while (i < 10) {
  console.log(`${i} \t\t${i ** 2} \t\t${i ** 3}`);
  i += 1;
}

//no 9
let num = 0;
const prime = [];
while (num < 100) {
  num++;
  let primenum = 1;
  if (num < 4) {
    continue;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      primenum = 0;
      break;
    }
  }

  if (primenum == 1) {
    prime.push(num);
  }
}
console.log(prime);

//10
let sum = 0;
num = 0;
while (num <= 100) {
  sum = sum + num;
  num++;
}
console.log(sum);

//no 12
num = 0;
let sumEven = 0;
sumOdd = 0;

while (num < 100) {
  num++;
  if (num % 2 == 0) {
    sumEven += num;
  } else {
    sumOdd += num;
  }
}
const sums = [sumEven, sumOdd];
console.log(sums);

//14
num = 0;
let rand;
let randnu = [];
while (num < 5) {
  rand = Math.floor(Math.random() * 5 + 1);
  if (randnu.includes(rand)) {
    num--;
  } else {
    randnu.push(rand);
  }
  num++;
}
console.log(randnu);

//Exercise 2
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
//no 1
let arrayNum = "0123456789".split("");
console.log(arrayNum);
let arrayAlph = "abcdefghijklmnopqrstuvwxyz".split("");
let figure;
let letter;
let charNum;
let arrRandomId = [];
let randomId;
for (i = 0; i < Math.floor(Math.random() * 20 + 3); i++) {
  charNum = Math.floor(Math.random() * 2);
  figure = arrayNum[Math.floor(Math.random() * 10)];
  letter = arrayAlph[Math.floor(Math.random() * 26)];
  if (charNum == 0) {
    arrRandomId.push(figure);
  } else {
    arrRandomId.push(letter);
  }
}
randomId = arrRandomId.join("");
console.log(randomId);

//no 6
let countriesLength = [];

for (num = 0; num < countries.length; num++) {
  countriesLength.push(countries[num].length);
}
console.log(countriesLength);
let gr3Country = [];
let grCountry = [];
for (i = 0; i < countries.length; i++) {
  gr3Country = [
    countries[i],
    countries[i].substring(0, 3).toUpperCase(),
    countries[i].length,
  ];
  grCountry.push(gr3Country);
}
console.log(grCountry);

//no 7
let landArray = [];
i = 0;
while (i < countries.length) {
  if (countries[i].includes("land")) {
    landArray.push(countries[i]);
  }
  i++;
}
console.log(landArray);

//Exercise 3
const countriesFull = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
//no 2
let sortedCountries;
let sortedWebTechs;
let sortedMernStack;
sortedCountries = countriesFull.sort();
sortedWebTechs = webTechs.sort();
sortedMernStack = mernStack.sort();

//no 7
i = 0;
let countries4 = [];
while (i < countriesFull.length) {
  if (countriesFull[i].length == 4) {
    countries4.push(countriesFull[i]);
  }
  i++;
}
console.log(countries4);

//no 9
let upperCountries;
upperCountries = countriesFull.map((upper) => {
  return upper.toUpperCase();
});
console.log(upperCountries);

/*Arrays
Week 5
Exercise 1 */
console.log("WEEK 5");

// no 6-9
let Itcompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle and Amazon",
];
console.log(Itcompanies);
console.log(Itcompanies[0]);
console.log(Itcompanies[Itcompanies.length / 2]);
console.log(Itcompanies[Itcompanies.length - 1]);
//Exercise 2
//no 3
console.log(Itcompanies.join() + " are big it companies");
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.splice(shoppingCart.length, 0, "Sugar");
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);
//Exercise 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(ages[ages.length - 1]);
let median;
if (ages.length % 2 == 0) {
  median = (ages[ages.length / 2] + (ages[ages.length / 2] + 1)) / 2;
} else {
  median = Math.round(ages.length / 2);
}
console.log(`The median is ${median}`);
let range;
range = ages[ages.length - 1] - ages[0];
console.log(`The range is ${range}`);

/*Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
Write a function which calculates value or values of a quadratic equation,
 solveQuadEquation.
*/

function quadE(ax, bx, cc) {
  let formula1 = (-bx + Math.sqrt(bx * bx - 4 * ax * cc)) / (2 * ax);
  let formula2 = (-bx - Math.sqrt(bx * bx - 4 * ax * cc)) / (2 * ax);
  return `the roots are ${formula1} and ${formula2}`;
}

console.log(quadE(1, 4, 4));
let emptArr;
function reverseArray(arr) {
  emptArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emptArr.push(arr[i]);
  }
  return emptArr;
}
console.log(reverseArray([1, 2, 3, 4]));

function isAPrime(anyNum) {
  let iAmPrime = 1;
  for (i = 2; i < anyNum; i++) {
    if (anyNum % i == 0) {
      iAmPrime = 0;
      break;
    }
  }
  if (iAmPrime == 0) {
    console.log(`${anyNum} is not prime number`);
  } else {
    console.log(`${anyNum} is a prime number`);
  }
}
let firstone;
let two;
let three;

const rgbColour = () => {
  let emtarr1 = [];
  let emptArr2 = [];
  let emptArr3 = [];
  for (i = 0; i <= 2; i++) {
    let firstone = Math.floor(Math.random() * 3);
    let secondone = Math.floor(Math.random() * 6);
    let thirdone = Math.floor(Math.random() * 6);
    emtarr1.push(firstone);
    emptArr2.push(secondone);
    emptArr3.push(thirdone);
  }
  let one = emtarr1.join("");
  let two = emptArr2.join("");
  let three = emptArr3.join("");
  return console.log(`rgb(${one}, ${two},${three})`);
};

function sevenRandomNumbers() {
  let emptArr4 = [];
  num = 0;
  while (num < 9) {
    let randomaa = Math.floor(Math.random() * 10);
    if (emptArr4.includes(randomaa)) {
      console.log("jdj");
      num--;
    } else {
      emptArr4.push(randomaa);
    }
    num++;
  }
  console.log(emptArr4);
}
sevenRandomNumbers();

/*Write a function called modifyArray takes array as parameter 
and modifies the fifth item of the array and return the array. 
If the array length is less than five it return 'item not found'.*/
const modifyArray = (modifyMe) => {
  if (modifyMe.length < 5) {
    console.log("Item not found");
  } else {
    let modi = modifyMe[4].toUpperCase();
    modifyMe.splice(4, 1, modi);
    return modifyMe;
  }
};

console.log(modifyArray(["mango", "dndf", "djf", "ueh", "apple", "ieue"]));

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
i = 1;

let element0 = Object.keys(users);
//let element = Object.keys(users);
console.log(countLoggedInUsers(users));
//console.log(users[element[1]]["isLoggedIn"]);
function countLoggedInUsers(jg) {
  i = 0;
  let usersmore50 = 0;
  let online = 0;
  let element = Object.keys(jg);
  while (i < element.length - 1) {
    if (jg[element[i]]["isLoggedIn"]) {
      online++;
    }
    if (jg[element[i]]["points"] >= 50) {
      usersmore50++;
    }
    i++;
  }
  return { loggedInUsers: online, usersWithMoreThan50: usersmore50 };
}
function countUsers(jg) {
  i = 0;
  for (var prop in jg) {
    if (jg.hasOwnProperty(prop)) i++;
  }
  return i;
}
console.log(countUsers(users));

const usersWithMyName = { ...users, Dami: { points: 50 } };
console.log(usersWithMyName);

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

console.log(Object.values(users2).includes("Alex"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

class newUser {
  constructor(_id, username, email, password, createdAt, isLoggedIn) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.isLoggedIn = isLoggedIn;
  }
}

let newSignUp = new newUser(
  "were3",
  "Dami",
  "code@den.com",
  "335e",
  "02/10/2034",
  true
);

function signUpMongo() {
  let usernameUnique = true;
  let newUser = {};
  i = 0;
  while (i < users2.length) {
    if (Object.values(users2[i]).includes(newSignUp.username)) {
      usernameUnique = false;
      return console.log("username already exists, try a new one");
    }
    i++;
  }
  if (usernameUnique) {
    newUser = { ...newSignUp };
    users2.push(newUser);
    return users2;
  }
}
console.log(signUpMongo());
const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  const callBack = function (element) {
    sum += element;
  };
  numbers.forEach(callBack);
  return sum;
};
console.log(sumArray(numbers));

let element = Object.keys(users);
function myFunction(value) {
  let skillsLengths = users[value].skills.length;
  return skillsLengths;
}
let aaa = element.map(myFunction);
bbb = aaa.indexOf(Math.max(...aaa));
console.log(element[bbb]);

function findUserMostSkills(kk) {
  i = 1;
  let j = 1;
  let l = 0;
  let usersMostSkills;
  let element = Object.keys(kk);
  usersMostSkills = kk[element[l]];
  let firstUser = kk[element[j]];

  while (i < element.length - 2) {
    if (usersMostSkills.skills.length > firstUser.skills.length) {
      j++;
      i++;
    } else {
      usersMostSkills = firstUser;
      i++;
      j++;
    }
  }
  return usersMostSkills;
}

function countUsers(jg) {
  i = 0;
  for (var prop in jg) {
    if (jg.hasOwnProperty(prop)) i++;
  }
  return i;
}

console.log("WEEK 9");
const ages1 = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  data: [],
  count: function () {
    return `${this["data"].length}`;
  },
  sum: function () {
    sum = 0;
    this["data"].forEach((num) => (sum += num));
    return sum;
  },
  min: function () {
    return `${Math.min(...this.data)}`;
  },
  max: function () {
    return `${Math.max(...this.data)}`;
  },
  range: function () {
    return statistics.max() - statistics.min();
  },
  mean: function () {
    return statistics.sum() / statistics.count();
  },
  median: function () {
    if (statistics.count() % 2 != 0) {
      return this["data"][(statistics.count() - 1) / 2];
    } else {
      return (
        (this["data"][statistics.count() / 2] +
          this["data"][statistics.count() / 2 - 1]) /
        2
      );
    }
  },
  mode: function () {},
};

var frequency = [];
var maxFreq = 0;

/*for (var prop in ages1) {
  frequency[ages1[prop]] = (frequency[ages1[prop]] || 0) + 1;
  if (frequency[ages1[prop]] > maxFreq) {
    maxFreq = frequency[ages1[prop]];
  }
}

for (var prop2 in frequency) {
  if (frequency[prop2] == maxFreq) {
    modes.push(prop2);
  }
}
console.log(frequency);
console.log(modes);*/
let socks = [2, 5, 3, 2, 5, 10, 9, 5, 10];
let mode = [];
let modalCount = [];
let dataSet = new Set(socks);

for (const iterator of dataSet) {
  const filteredNum = ages1.filter((num) => iterator === num);
  modalCount.push({
    mode: iterator,
    count: filteredNum.length,
  });
}

modalCount.sort((a, b) => {
  return b.count - a.count;
});

modalCount.forEach((value) => {
  if (value.count === modalCount[0].count) {
    mode.push(value);
  }
});
console.log(mode);
ages1.forEach((num) => statistics.data.push(num));
console.log(statistics.median());
let languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
//console.log(isarr languages);

let sock = [2, 5, 3, 2, 5, 10, 9, 5, 10];
let dataSett = new Set(sock);
let modalCountt = [];
let countPair = [];

for (const iterator of dataSett) {
  const filteredNum = sock.filter((num) => iterator === num);
  modalCountt.push({
    modee: iterator,
    countt: filteredNum.length,
  });
  countPair.push(Math.floor(filteredNum.length / 2));
}
sum = 0;
countPair.forEach((num) => (sum += num));
console.log(sum);
console.log(countPair);
//console.log(modalCountt)
i = 0;
let objj = {};
const sam = (ling, lang) => {
  for (const damn of ling) {
    objj[damn] = lang[i];
    i++;
  }
  return objj;
};

console.log(sam([123, 3, 1, 745, 4, "555"], [2, 4, 6, 7, 1, "nfi"]));
i = 0;
function hh(a, b) {
  return a.reduce((acc, curr, l) => ({ ...acc, [curr]: b[l] }), {});
}
console.log(hh([2, 1, 5], [3, 2, 5]));

//create an array an calculate the sum of the values in the array
arr8 = [3, 4, 6, 7, 8, 9, 9];
console.log(arr8.length);

function sumArr(arr) {
  let sum3 = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    sum3 += arr[i];
  }
  return sum3;
}

sumArr(arr8);

//create a function that converts an object to an array
/*function objToArr() {
  let obj10 = {};
  let arr10 = [];

}*/

let objAmos = { firstNamea: "Amos", lastNamee: "Oma" };
Object.entries(objAmos);
Object.keys(objAmos);
Object.values(objAmos);

function objToArr(arr) {
  return Object.entries(arr);
}
let arrobj = objToArr(objAmos);
arrobj[0];
Object.assign({}, [2, 3, 4]);
const arr = ["foo", "boo", "zoo"];
const obj = { ...arr };
console.log(obj);

//Given a string, reverse each word in the sentence.
sentence0 = "someone should give me a sentence";
let splitSentence = sentence0.split(" ");
let newSentence = [];

for (i = splitSentence.length - 1; i >= 0; i--) {
  newSentence.push(splitSentence[i]);
}
console.log(newSentence);
reversedSentence = newSentence.join(" ");

reversedSentence.split(" ").reverse().join(" ");

let sum2 = 0;
const numbers2 = [1, 2, 3, 4, 5];
let goat = numbers2.forEach((num) => {
  sum2 += num;
});

console.log(goat);

//Filter countries containing land
const countriesContainingLand = countriesFull.filter((country) =>
  country.endsWith("land")
);
console.log(countriesContainingLand);

const countries3 = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names3 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products3 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: " " },
  { product: "chai", price: 10 },
];

/*Find the total price of products by chaining two or more
 array iterators(eg. arr.map(callback).filter(callback).reduce(callback))*/
//products3.filter((p) => (typeof p["price"] === "number" ? p.price : null));
// let llkl = products3
//   .filter((p) => !isNaN(p["price"]))
//   .reduce((a, cv) => Number(a) + Number(cv.price), 0);
// console.log(llkl);

let price = products3
  .filter((p) => typeof p.price === "number")
  .reduce((a, cv) => a + cv.price, 0);
console.log(price);

// let price = products3
//   .filter((p) => (p.price !== " " ? p.price : null))
//   .reduce((a, cv) => a + cv.price, 0);

// let price = products3
// .reduce((p,a,cv) => {p.price !== " " ? p.price : null a + cv.price};

products3
  .map((a) => {
    return a.price;
  })
  .filter((s) => {
    return typeof s === "number";
  })
  .reduce((t, r) => {
    return t + r;
  }, 0);

/*Try to develop a program which calculate measure of central
 tendency of a sample(mean, median, mode) and measure of 
 variability(range, variance, standard deviation). In addition
  to those measures find the min, max, count, percentile, 
  and frequency distribution of the sample. You can create
   an object called statistics and create all the functions which 
   do statistical calculations as method for the statistics object. 
   Check the output below.*/

let statistics1 = {
  firstName: "Ebuka",
  lastName: "Okafor",
  fullName() {
    return `${this.firstName}  ${this.lastName}`;
  },
  count() {
    return ages1.length;
  },
  sum() {
    return ages1.reduce((a, r) => a + r);
  },
  min() {
    return Math.min(...ages1);
  },
  max() {
    return Math.max(...ages1);
  },
  range() {
    let df = statistics1.max() - statistics1.min();
    return df;
  },
  mean() {
    return statistics1.sum() / statistics1.count();
  },
  mode() {},
};
statistics1.count();
statistics1.sum();
statistics1.mean();

let wordA1 = "army";
let wordA2 = "maiy";

let ii = wordA1.split("").sort().join("");
let iii = wordA2.split("").sort().join("");
let jj;
if (ii === iii) {
  jj = true;
}

let arryu = [7, 5, 3, 4, 1, 8, 2, 2, 6, 1];
// function sortMe(arr) {
//   let arrClone = [];
//   for (const each of arr) {
//     arrClone.push(each);
//   }
//   let doMe = 1;
//   while (doMe) {
//     ii = 0;
//     doMe = 0;
//     while (ii < arr.length) {
//       if (arrClone[ii + 1] < arrClone[ii]) {
//         let high = arrClone[ii];
//         arrClone[ii] = arrClone[ii + 1];
//         arrClone[ii + 1] = high;
//         doMe = 1;
//       }
//       ii++;
//     }
//   }

//   return arrClone;
// }

// sortMe(arryu);
// console.log(sortMe(arryu));
function sortMe(arr) {
  for (const each of arr) {
  }
  let doMe = 1;
  while (doMe) {
    ii = 0;
    doMe = 0;
    while (ii < arr.length) {
      if (arr[ii + 1] < arr[ii]) {
        let high = arr[ii];
        arr[ii] = arr[ii + 1];
        arr[ii + 1] = high;
        doMe = 1;
      }
      ii++;
    }
  }

  return arr;
}

sortMe(arryu);
console.log(sortMe(arryu));
arryu;
