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
const firstName = "Damilare", lastName = "Abiola", maritalStatus = "single", countr = "Nigeria", age = 22;

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

console.log("My age is "+ myAge +" and your age is "+ yourAge);

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
console.log(challenge.substring(3,7));
console.log(challenge.substring(3,21));
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
var sentence = "You cannot end a sentence with because because \
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
console.log("\'There is no exercise better than for the heart than \
reaching down and lifting people up.\' by John Holmes teaches us to \
help one another.");
console.log("\"Love is not patronizing and charity isnt about pity, it \
is about love. Charity and love are the same -- with charity you give \
love, so dont't just give money but reach out your hand instead.\"");
console.log(typeof 10 == typeof "10");

var accGrav = parseFloat(9.8);
console.log (Math.round(accGrav) == 10);

console.log("Phython".includes("on"));
console.log("Jargon".includes("on"));
console.log("I hope this course is not full of Jargon".includes("Jargon"));

console.log(Math.floor((Math.random() * (100 - 1 + 1) + 1)));
console.log(Math.floor((Math.random() * (100 - 50 + 1) + 50)));
console.log(Math.floor((Math.random() * (225 + 1))));
console.log("Javarscript".charAt(Math.floor(Math.random() * 
("Javascript".length +1))));
console.log("1\t1\t1\t1\t1\
            \n2\t1\t2\t4\t8\
            \n3\t1\t3\t9\t27\
            \n4\t1\t4\t16\t64\
            \n5\t1\t5\t25\t125");
console.log(sentence.substring(31, 54));

//Exercise 3
//1-4
var sentence2 = "Love is the best thing in this world. Some found their \
                love and some are still looking for their love"
console.log((sentence2.match(/love/gi)));
console.log((sentence.match(/because/gi)));

const sentence3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;." +
                  " The@re $is no@th@ing; &as& mo@re rewarding as educa@ting" +
                  "&and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re" +
                  "interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate"+ 
                  "yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is" +
                  "al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence3.replace(/[%$@;&#!]/g, ""));

var problem = "He earns 5000 euro from salary per month, 10000 euro annual " +
              "bonus, 15000";
var parmeters = problem.match(/\d+/g);
let salary = Number(parmeters[0]), bonus = Number(parmeters[1]),
             onlineCourses = Number(parmeters[2]);
var annualIncome = (12 * (salary + onlineCourses) + bonus) + " " + "euros";
console.log(annualIncome);

//Week 3
//Exercise 1
console.log("WEEK 3");
let city = "Lagos", isMarried = false, year = 2022;
 
console.log(typeof firstName); console.log(typeof lastName);
console.log(typeof countr); console.log(typeof city);
console.log(typeof age); console.log(typeof isMarried)
console.log(typeof year);

console.log((typeof "10") == (typeof 10) );
console.log((parseInt(9,8)) == 10 );

5 + 7 - 9;
firstName + lastName;
4 > 3;

let zero = null;
5/firstName;
age * 0;

4 > 3;
console.log("phyton" == "jargon");

//7
let calender = new Date;
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

 x1 = 2, y1 = 2, x2 = 6, y2 = 10;
slope = (y2 - y1)/ (x2-x1);

var ex;
var why;
function quad() {

    function calculation() {
        while (why != 0) {
        ex = Math.floor(Math.random()* 20) - 20;
        why = Math.pow(ex, 2) + 6*ex + 9;
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
alert (`your weekly warning is ${weeklyEarning}`);
}

function nameLength() {
 var nameLength = prompt("enter your name");
    if (nameLength.length > 7) {
                    alert ("name is too long"); }
    else if (nameLength.length < 7) { 
                    alert ("name is too short");
            }
    }



if (firstName > lastName) {
    console.log (`your first name. ${firstName} is longer than your last name, 
     ${lastName}`);
}  
else {
    console.log (`your last name. ${lastName} is longer than your first name, 
     ${firstName}`);
}

function birthYear() {
let birthyear = prompt("In what year were you born");
    let yearA = 2022 - birthyear;
    if (yearA >= 18) {
    alert (`your are ${yearA} years old, your are old enough to drive`);
}  
else {
 alert (`you are ${yearA} years old. you will be allowed to drive after 
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

if (dateHours <10){
   dateHours = ('0' +dateHours);
}

if (dateMinutes < 10){
   dateMinutes = ('0' +dateMinutes);
}

console.log(`${dateYear}-${dateMonth}-${dateDays} ${dateHours}:${dateMinutes}`);


/* Week 4 Conditionals
Exercises form no 4 */
//no 4
console.log(`WEEK 4`);
var giveAway;
let ash = ("#");
for( let i = 0; i < 7; i++){
    space = ("\n");
    console.log (ash + space);
    ash += "#";
}

//no 6
let i = 0;
console.log(`i\t\ti^2\t\ti^3`);
while (i < 10) {
    console.log(`${i} \t\t${i**2} \t\t${i**3}`);
    i+=1;
}

//no 9
let num = 0;
const prime = [];
while (num < 100) {
    num++;
    let primenum = 1;
    if (num < 4){
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
let sumEven = 0; sumOdd = 0;

while (num < 100) {
    num++;
        if (num % 2 == 0) {
            sumEven +=num;
        }    
        else {
            sumOdd +=num;
        }
}
const sums = [sumEven, sumOdd]
console.log(sums);

//14
num = 0;
let rand;
let randnu = [];
while (num < 5) {
    rand = Math.floor(Math.random()*5 + 1);
    if (randnu.includes(rand)) {
        num--;
    }
    else {
        randnu.push(rand);}
    num++;
}
console.log(randnu);


//Exercise 2
const countries = [
    'Albania','Bolivia','Canada','Denmark','Ethiopia',
    'Finland','Germany','Hungary','Ireland','Japan','Kenya'
  ]
  
  const webTechs = [
    'HTML','CSS','JavaScript',
    'React','Redux','Node','MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//no 1
let arrayNum = "0123456789".split("");
console.log(arrayNum);
let arrayAlph = "abcdefghijklmnopqrstuvwxyz".split("");
let figure;
let letter;
let charNum;
let arrRandomId = [];
let randomId;
for (i = 0; i< Math.floor(Math.random()*20 + 3); i++) {
    charNum = Math.floor(Math.random()*2);
    figure = arrayNum[Math.floor(Math.random()*10 )];
    letter = arrayAlph[Math.floor(Math.random()*26 )];
    if (charNum == 0) {
        arrRandomId.push(figure)
    }
    else {
        arrRandomId.push(letter)
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
for (i = 0; i< countries.length; i++) {
    gr3Country =
    [countries[i], countries[i].substring(0,3).toUpperCase(), countries[i].length];
    grCountry.push(gr3Country);
}
console.log(grCountry);

//no 7
let landArray = [];
i = 0;
while (i < countries.length) {
    if (countries[i].includes("land")){
        landArray.push(countries[i]);
    }
    i++;
}
console.log(landArray);

//Exercise 3
const countriesFull = [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda',
    'Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
    'Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia',
    'Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso',
    'Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic',
    'Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo','Costa Rica',
    "Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
    'Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea',
    'Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia, The','Georgia',
    'Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti',
    'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
    'Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kuwait',
    'Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania',
    'Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands',
    'Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique',
    'Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria',
    'Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines',
    'Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia',
    'Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal',
    'Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands',
    'Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland',
    'Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia',
    'Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom',
    'United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam',
    'Yemen','Zambia','Zimbabwe'
  ]
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
    if (countriesFull[i].length == 4){
        countries4.push(countriesFull[i]);
    }
    i++;
}
console.log(countries4);

//no 9
let upperCountries;
upperCountries = countriesFull.map(upper => {return upper.toUpperCase()});
console.log(upperCountries);









