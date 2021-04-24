//Strict mode is a special mode  in JavaScriptt that allows us
//To write secure code.

'use strict';//This has to be the very first statement.
/*
let hasDriversLicense=false;
const passTest=true;

if(passTest)hasDriversLicense=true;
if(hasDriversLicense)console.log('I can drive');
*/
//A function is a reusable piece of code
/*
function logger(){
  console.log('my name is Jonas');
}
//Functions can pass and receive data
//Calling a function
//  logger();


function fruitProcessor(apples,oranges){
  console.log(apples,oranges);
  const juice=`Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}


const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
*/
/*
//This is a Function declaration
function calcAge1(birthYear){
  return 2037-birthYear;
}
const age1=calcAge1(1991);
console.log(age1);
//////////////////////////////////////

//An anonymous function is a function without a name
//This can also be called a function expression
const calcAge2=function(birthYear){
  return 2037-birthYear;
}
const age2=calcAge2(1991);
console.log(age1,age2)
//Above is an anonymous Function
*/

//////////////////////////////////////////////////////////////////
///////================ARROW FUNCTIONS=====================///////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


//Simpler and shorter Function

//const calcAge3= birthYear => 2037- birthYear;


//Does the same as the functions Above
//Very useful if you need to use one-liners
/*
const yearsUntilRetirement= (birthYear,firstName)=>{
const age=2037-birthYear
const retirement=65-age;
//return retirement
return `${firstName} retires in ${retirement} years `;
}
yearsUntilRetirement(1991);
console.log(yearsUntilRetirement(1991,'Jonas'));
*/
//////////////////////////////////////////////////////////////////
///////================ARROW FUNCTIONS=====================///////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
/////////==========Functions Calling Other Functions=======///////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
function cutFruitPieces(fruit){
  return fruit*4;
}

function fruitProcessor(apples,oranges){
  const applePieces =cutFruitPieces(apples);
  const orangePieces=cutFruitPieces(oranges);
  console.log(apples,oranges);
  const juice=`Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcessor(2,3);
*/
//This function calls another function.In this case It's a function
//of a fruitProcessor that needs function cutFruitPieces to cut the
//fruit in order to make juice

//////////////////////////////////////////////////////////////////
/////////==========Functions Review=======///////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Types of FUNCTIONS
/*Function Declaration:Function that can be used before it's
declared

Function Expression:Essentially a function value stored in
a variable.

Arrow Function:Great for quick one-line functions.
Has no this keyword(more later...)

All of these functions can receive input data,transform data
and the output the data*/



/*
const calcAge=function(birthYear){
  return 2037- birthYear;
}

const yearsUntilRetirement= function(birthYear,firstName){
const age=calcAge(birthYear,firstName);
const retirement=65-age;
if(retirement>0){
console.log(`${firstName} retires in ${retirement} years `) ;
return retirement;
}
else{
  console.log(`${firstName} has already retired`);
  return -1;
}

}
console.log(yearsUntilRetirement(1991,'Jonas'))
*/

//////////////////////////////////////////////////////////////////
/////////==========Functions Review==========/////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////
/////////==========Coding Challenge#1==========///////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times,
and then the average of the 3 scores is calculated
 (so one average score per team).
A team only wins if it has at least double the average
score of the other team.
 Otherwise, no team wins!
Your tasks:
1. Create an arrow function
'calcAverage'to calculate the average of 3 scores
2. Use the function to calculate theaverage for both teams
3. Create a function'checkWinner'that takes the average score of
each team as parameters ('avgDolhins' and 'avgKoalas'), and then
logs the winner to the console, together with the victory points,
 according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'function to determine
the winner for both Data1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71.
Koalas score 65, 54 and 49 §
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 GOOD LUCK 😀*/
/*
const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner=function(avgDolhins,avgKoalas){
  if (avgDolhins>=2*avgKoalas){
    console.log(`Dolphins Win(${avgDolhins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas>=2*avgKoalas) {
    console.log(`Koalas Win(${avgKoalas} vs. ${avgDolhins})`);

  }
  else{
    console.log(`No team wins`);
  }
}
checkWinner(scoreDolphins,scoreKoalas)*/

//////////////////////////////////////////////////////////////////
/////////==========Coding Challenge#1==========///////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////
/////////==========Arrays==========///////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
const friends=['Michael','Peter','Steven'];//This is an Arrays

const years=new Array[1991,1984,2000,2020];//This is another way
//of writing an Array

console.log(friends[0]);//Calling an Array(They're 0 based)


//Only primitive values are immutable
//Arrays aren't primitive values so they can be replaced
//Methods are array operations
//push();function you call to add a variable to the end of
//an Array.
//shift();Same as push but adds variable at the beginning
//pop();Takes out last element of an Array
//Indexof();Tells you where the element is located in the Array
//const friends=['Michael','Peter','Steven'];

const calcTip= function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15:
  bill *.2;
}

const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(bills,tips);
*/





//////////////////////////////////////////////////////////////////
/////////==========Arrays==========//////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////
/////////==========Objects==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
const jonas={
  firstName:'Jonas',
  lastName:'Silva',
  age:2037-1991,
  job: 'teacher',
  friends:['Michael','Peter','Steven'];
  hasDriversLicense:true;
}
console.log(jonas);
//objects are better for unstructured Data
console.log(jonas.lastName);

const nameKey='Name';
console.log(jonas['firstName'+nameKey]);
//When taking input from a user
const interestedIn=prompt(`What do you want to know about jonas
? Choose between firstName,lastName,age,job,and friends`);
console.log(jonas[interestedIn]);


//Challenge/
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName}has ${jonas.friends.length}, and his best
friend is called ${jonas.friends[0]}`);

//OBJECTS WITH FUNCTIONS
//Any function attached to an object is called a Method
const jonas={
  firstName:'Jonas',
  lastName:'Silva',
  age:2037-1991,
  job: 'teacher',
  friends:['Michael','Peter','Steven'];
  hasDriversLicense:true;

//  calcAge:function(birthYear){
//  return 2037-birthYear
//This is used to reference the object
//This(functiion)is equal to the object calling the Method
calcAge:function(){
console.log(this);
return 2037-this.birthYear
}

console.log(jonas.calcAge(1991));

*/
//Need to polish Object Methods

//////////////////////////////////////////////////////////////////
/////////==========Objects==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
/////////==========Coding CHALLENGE#3==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/*
const mark={
  fullName:'Mark Miller',
  mass:78,
  height:1.69,
  calcBMI:function(){
    this.bmi=this.mass/this.height**2;
    return this.bmi;
  }
};

const john={
  fullName:'John Smith',
  mass:92,
  height:1.95
  this.bmi=this.mass/this.height**2;
  return this.bmi;
};

mark.calcBMI();//Without this method call it wouldn't work
john.calcBMI();
console(mark.bmi,john.bmi);
console.log(`${mark.fullName}'s BMI (${mark.BMI}
is higher than ${john.fullName}'s bmi(${mark.BMI})`);
*/



//////////////////////////////////////////////////////////////////
/////////==========Coding CHALLENGE#3==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
/////////==========The for loop==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Loops are quintessential to programming as it allows You
//to repeat repetitive tasks with less code.
/*
console.log(`Lifting weights repetition 1`)

for(let rep=1;rep<=10;rep++){
  console.log(`Lifting weights repetition ${rep}`);
}
*/
//
///////////////////////////////////////////////////////////
/*
const jonasArray={
  'Jonas',
  'Shcmedtmann',
  2037-1991,
  'teacher',
  ['Michael','Peter','Steven']
};
const types=[];

for (let i=0;i<5;i++){
  console.log(jonas[i]);
  types[i]=typeof jonas[i];
}

console.log(types);
const years=[1991,2007,1969,2020];
const ages=[];

for (let i=0;i<years.length,i++){
ages.push(2037-years[i]);
}
console.log(ages);

//continue and break
//Continue exits current iteration and proceeds to the next one
//Break breaks the current iteration of the loop
for(let i=0;i<jonas.length;i++){
if(typeof jonas[i] !=='string')continue;//Will continue iteration
//even if there's a string
if(typeof jonas[i]==='number')break;//Stops the loop altogether

}
*/
//Looping Backwards and Nested Loops

//0,1....,4
//4,3,.....,0

//for(let i=jonas.length-1;i>=0;i--)//Loops Backwards



//////////////////////////////////////////////////////////////////
/////////==========The for loop==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////
/////////==========The while loop=========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
for(let rep=1;rep<=10;rep++){
  console.log(`Lifting weifhts repetition ${rep}`)
}
/////Does the same as the loop Above///////////
let rep=1;
while (rep<=10){
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}
/////Does the same as the loop Above///////////
let dice=Math.trunc(Math.random()*6-1;
console.log(dice);

while(dice !==6){
console.console.log(`You rolled a $dice`);
dice=Math.trunc(Math.random()*6)+1;
if(dice===6)console.log('Loop is about to end...')
}
*/







//////////////////////////////////////////////////////////////////
/////////==========The while loop==========/////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
