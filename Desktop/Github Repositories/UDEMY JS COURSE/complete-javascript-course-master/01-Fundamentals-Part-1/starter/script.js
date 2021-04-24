/////////////////////////////////////////////////////////////////////////////
////////////////////////-------NOTES IG-------///////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/* This is a comment */
//This Is another way of writing a comment
//JavaScript is executed from top to bottom
//The difference is that this one is a one-line comment
/* let firstName="pepe" This is the proper syntax to declare a variable*/
/* camelCase: Coding practice that involves writing the first word without
capital letters and the subsequent words with capital letters to differentiate variables
in a better way*/
/*Variables cannot start with a number in Js*/
/*You shouldn't start a variable with capital letter*/
/*ALL uppercase variables like constants are written that way because they are immutable*/


/////////////////////////////////////////////////////////////////////////////
/////////////////////========ASSIGNMENT 1=======/////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/*Assignment 1:Values and variables
let myCountry="Venezuela";
let myCountryPopulation="30.000.000";
let myContinent="America";
let firstName="Sebastian";

let js='amazing';
if (js === 'amazing') alert('JavaScript is Fun');
console.log(firstName);
console.log(myCountry);
console.log(myCountryPopulation);
console.log(myContinent);
Assignment 1:Values and variables*/


/////////////////////////////////////////////////////////////////////////////
//////////////////=================DATA TYPES============////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/*There are 7 primitive data types:

Number:Floating point numbers used for decimals and integers

String:Sequence of characters used for text

Boolean:Logical/ type that can only be true or false

Undefined:Value taken by a variable that is not yet defined

Null: An empty value set by the programmer

Symbol(ES6):value that is unique and cannot be changed

BigInt(ES2020): Used for larger numbers than the number data type can hold*/

//typeof:operator that gives you the value of a variable.

/*JS Best Practices are to use const as much as possible,let if you are sure
you have a fluid value and var should be avoided as much as possible.*/
//Var is the old way of declaring Variables

//2**3 means 2 to the power of three
/////////////////////////////////////////////////////////////////////////////
///////////=============OPERATORS=============///////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/*Assignment operators
const firstName='jonas';
const lastName='Schmedtmann';
console.log(firstName+' '+lastName);//This is an example of concatenation
let x= 10+5;//15
x+=10;//x= x+10
x*=4;// x= x*4
x++;//x=x+1
x--;//x=x-1

Comparison operators
console.log(ageJonas>ageSarah);//>,<,>=,<=
*/


/*

/////////////////////////////////////////////////////////////////////////////
///////////=============Coding Challenge #1============//////////////////////
/////////////////////////////////////////////////////////////////////////////

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

let markWeight= 78;
let johnWeight=92;
let markHeight=1.69;
let johnHeight=1.95;

let markBMI=markWeight/markHeight **2;
let johnBMI=johnWeight/johnHeight **2;
const isFalse=false;
if(markBMI>johnBMI)
console.log("Mark's Bmi is higher");
else
console.log(isFalse);



markWeight=95;
markHeight=1.88;
johnWeight=85;
johnHeight=1.76;

markBMI=markWeight/markHeight **2;
johnBMI=johnWeight/johnHeight **2;
if(markBMI>johnBMI)
console.log("Mark's Bmi is higher");
else
console.log(isFalse);

*/
/////////////////////////////////////////////////////////////////////////////
///////////=============Coding Challenge #1============//////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////////=============concatenation============//////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
const firstName='Jonas';
const job='teacher';
const birthYear=1991;
const year=2037;

const jonas="I'm "+firstName+',a '+(year-birthYear)+' years old '+job
console.log(jonas);

/////////////////////////////////////////////////////////////////////////////
///////////=============concatenation with template literals======////////////
/////////////////////////////////////////////////////////////////////////////

const jonasLit=`I'm ${firstName},a ${year-birthYear} old ${job}`;
console.log(jonasLit);

//``---These symbol works pretty well for concatenating string and
//typing string faster like the example below

console.log(`Just a regular string...`)*/

/////////////////////////////////////////////////////////////////////////////
///////////=============concatenation with template literals======////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
///////////======Multiple lines of string with template literals======///////
/////////////////////////////////////////////////////////////////////////////
/*
console.log('String with\n\
  multiple\n\
  lines');

  console.log(`String
    multiple
    lines`);

    /////////////////////////////////////////////////////////////////////////////
    ///////////======Multiple lines of string with template literals======///////
    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////
    ///////////======If/else Statements======////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    const age=17;
    const isOldEnough= age>=18;

    if(isOldEnough){
      console.log(`You're of driving age`);
    }
    else{
      const yearsleft = 18-age;
      console.log(`You're a minor you have ${yearsleft} years left`);
    }

    //use elseif if you want to add more variants to your if statement.
*/
/////////////////////////////////////////////////////////////////////////////
///////////======Type conversion and coercion======///////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
const inputYear='1991';
console.log(inputYear+18)// This won't work and give 199118 as a result
because it is a String
 console.log(number(inputYear));//This will turn the string into a number
 and make it work.

 This also works if you use string to turn a number into a string.*/

 /////////////////////////////////////////////////////////////////////////////
 ///////////======Type conversion and coercion======///////////////////////////
 /////////////////////////////////////////////////////////////////////////////

 /////////////////////////////////////////////////////////////////////////////
 ///////////======Truthy and falsy values======///////////////////////////////
 /////////////////////////////////////////////////////////////////////////////

 //There are only 5 falsy values:0,'',undefined,null,NaN
//NaN=Not a Number
/////////////////////////////////////////////////////////////////////////////
///////////======Truthy and falsy values======///////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////

//=={This is a loose equality value}  ==={This is a strict equality value}
//Avoid loose equality if you can

//prompt('');==This allows you to ask the user for input
//const variable= prompt('');==To declare a variable


/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
///////////======Boolean logic :And && ,Or || & NOT ! ======/////////////////
/////////////////////////////////////////////////////////////////////////////
/*
const hasDriversLicense=true//A
const hasGoodVision=true// B

console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);

const shoudlDrive= hasDriversLicense && hasGoodVision;

if(shoudlDrive){
  console.log(`Sarah is able to drive`);
}
else{
  console.log(`Don't go on the wheel`);
}
*/
/////////////////////////////////////////////////////////////////////////////
///////////======Boolean Logic======/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
///////////======Coding Challenge #3======///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �*/
//Variables:Name of the team(Dolphins and Koalas),Number of matches(3)
//Average score
//Possible scenarios:Dolphins win,Koalas win, Both of them tie.
//Minimum winning requirement >=100 points.
//A draw also happens if the winning team doesn't have  >=100 points
//
/*
const dolphinsScore=97+112+101;
const koalasScore=88+91+110;
const dolphinsAverage=dolphinsScore/3;
const koalasAverage=koalasScore/3;

if(dolphinsAverage>koalasAverage ){
  console.log(`The Dolphins have won`);
}
else if (koalasAverage>dolphinsAverage ) {
  console.log(`The Koalas have won`);
}
else if(koalasAverage===dolphinsAverage){
  console.log(`It's a tie!!!!`);
}*/

//Bonus 1
/*
const dolphinsScore=(97+112+101)/3;
const koalasScore=(109+95+123)/3;

if(dolphinsScore>koalasScore && dolphinsScore >=100){
  console.log(`The Dolphins have won`);
}
else if(koalasScore>dolphinsScore && koalasScore >=100){
  console.log(`The Koalas Have Won`);
}
else if(dolphinsScore===koalasScore){
  console.log(`It's a tie!!!!`);
}*/


//Bonus 2
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
/*
const dolphinsScore=(97+112+101)/3;
const koalasScore=(109+95+106)/3;

if(dolphinsScore>koalasScore && dolphinsScore >=100){
  console.log(`The Dolphins have won`);
}
else if(koalasScore>dolphinsScore && koalasScore >=100){
  console.log(`The Koalas Have Won`);
}

else if(koalasScore===dolphinsScore || koalasScore && dolphinsScore >=  100){
  console.log(`It's a tie`);
}
*/
/////////////////////////////////////////////////////////////////////////////
///////////======Coding Challenge #3======///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////////======The Switch Statement======//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//Switch Statement:Alternative way of writing an if else statement whe all we
//want is to compare multiple different options

const day='monday';
/*
switch(day){
  case 'monday';
  console.log('Plan Course Structure');
  console.log('Go to coding meetup');
  break
  case 'tuesday';
  console.log('Prepare theory videos');
  break;
  case 'wednesday';
  case'Thursday';
  console.log('Write code examples');
  break
  case'friday';
  console.log('Record Videos');
  break
  case 'Saturday';
  case 'Sunday';
  console.log('Enjoy the weekend');
  break
  default.log('not a valid date');
}
*/

//The break statement closes the case you are executing
/*Doing the same with if Statements
if(day==='monday'){
  console.log('Plan Course Structure');
  console.log('Go to coding meetup');
}
else if(day==='tuesday'){
  console.log('Prepare theory videos');
}
else if(day==='wednesday' || day='thursday'){
  console.log('Write code examples');
}
else if(day==='friday'){
  console.log('Record videos');
}
else if(day==='saturday' || day='sunday'){
  console.log('Enjoy the weekend');
}
else{
  console.log(`Invalid Input`);
}*/

/////////////////////////////////////////////////////////////////////////////
///////////======The Switch Statement======//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////////======Statements and Expressions======////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
Expression:Piece of code that produces a value.
Examples:
3+4
1991
true && false && ;false

Statements:A bigger piece of code that does not produce value in itself.To
make an analogy to normal spoken language a statement is a complete sentece
and an expression is like the words that make up the sentences.
Example:An If Statement.*/
/////////////////////////////////////////////////////////////////////////////
///////////======Statements and Expressions======////////////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////////======Conditional Operators===========////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//This is a way of writing an IF statement in one line
//It has three parts:Condition,if part,else part.
// ?-- Initiates the IF Statement
//:--starts else Statement
//;--end operator
/*
const age= 23;
age >= 18 ? console.log('I like to drink wine'):
console.log('I like to drink water');
*/

/////////////////////////////////////////////////////////////////////////////
///////////======Conditional Operators===========////////////////////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
///////////======Coding Challenge #4======////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for
whenever he goes eating in a restaurant.
In his country, it's usual to tip 15% if the
 bill value is between 50 and 300. If the value is different,
the tip is 20%.
Your tasks:
1. Calculate the tip,depending on the bill value.Create a
variable called'tip'for this.
It's not allowed to use an if/else statement 😅
 (If it's easier for you, you can start with an if/else statement,
 and then try to convert it to a ternary operator!)
2. Print a string to the console containing
the bill value,the tip,and the final value (bill + tip).
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value,
simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300,
if it's>= 50 && <= 300😉
*/
/*
const bill=40;
const tip= bill<=300 && bill >=50 ? bill*.15: bill*0.2;
console.log(`The bill value is ${bill}, the tip value is ${tip},
  and the final value is ${bill+tip}`); */

/////////////////////////////////////////////////////////////////////////////
///////////======Coding Challenge #4======////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
///////////======ES5,ES6, AND ESNEXT===========////////////////////////////
/////////////////////////////////////////////////////////////////////////
