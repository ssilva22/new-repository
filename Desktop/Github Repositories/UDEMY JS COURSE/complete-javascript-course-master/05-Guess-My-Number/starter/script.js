'use strict';
/*What is DOM?
DOM:It stands for Document Obkect Model which is a structured
representation of HTML documents which allows JS to access
HTML elements and Styles to manipulate them
*/
//DOM always start with document right at the start
//This is how you select an element
//DOM manuipulation is making JS interact with a webpage
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Correct Number';

//console.log(document.querySelector('.message').textContent='Correct Number');

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent= 10;
//When value is empty
document.querySelector('.guess').value=23; 
console.log( document.querySelector('.guess').value); 
*/
let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.check').addEventListener('click',function() {
    
   const guess =Number(document.querySelector('.guess').value);  
   //When There's no input
   if(!guess){
       document.querySelector('.message').textContent='No number!';
   }
   //When the player guesses the right number
   else if(guess === secretNumber ){
    document.querySelector('.message').textContent="Correct Number!!";
    document.querySelector('.number').textContent=secretNumber;
  
    document.querySelector('body').style.backgroundColor='#60b347';
//.style allows you to edit CSS
    document.querySelector('.number').style.width='30rem';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent= highscore;
    }
   } 
   //When the number is too high
   else if(guess > secretNumber){
    if(score>1)  {
        document.querySelector('.message').textContent="Too high!!";
        score--; 
        document.querySelector('.score').textContent=score;
    }   
    else{
        document.querySelector('.message').textContent="You lost!! :(";  
        document.querySelector('.score').textContent=0;
    }
   }
   //When the number is too low
   else if(guess < secretNumber){
       if(score>1){
        document.querySelector('.message').textContent="Too low!!";
        score--
        document.querySelector('.score').textContent=score;
       }
       else{
        document.querySelector('.message').textContent="You lost!! :("; 
        document.querySelector('.score').textContent=0; 
       }
   }
   
});
//WATCH REFACTORING CODE VIDEO
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Selecttheelementwiththe'again'classandattachaclickeventhandler 2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
'secretNumber' variables
3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
fields
4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)
GOOD LUCK 😀*/



//This resets the game
document.querySelector('.again').addEventListener('click',function(){
   score=20; 
   secretNumber=Math.trunc(Math.random()*20)+1;

document.querySelector('.message').textContent='Start guessing...';   
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222';
 document.querySelector('.number').style.width='15rem';
});
