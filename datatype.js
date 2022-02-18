//page start
alert("Assignment Week 2");

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
const firstName = "Damilare", lastName = "Abiola", maritalStatus = "single", country = "Nigeria", age = 22;

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


















