// variables
var correct = 0;

// prompt
var answer1 = prompt("Are you ready kids...");
//console.log("the answer is:" + answer1);
var answer2 = prompt("I can't hear you!...");
var answer3 = prompt("Who lives in a pineapple under the sea...");
//console.log("the answer is:" + answer3);
var answer4 = prompt("Absorbant and yellow and porous is he...");
//console.log("the answer is:" + answer4);
var answer5 = prompt("If nautical nonsense be something you wish...");
//console.log("the answer is:" + answer5);


// if statement
if ( answer1.toUpperCase() === 'AYE AYE CAPTAIN' ) {
 correct += 1;
 document.write("<p> Your answer: '" + answer1 + "' was correct</p>");

}
else{
  document.write("<p> Your answer: '" + answer1 + "' was incorrect</p>");
}

if ( answer2.toUpperCase() === 'AYE AYE CAPTAIN' ) {
 correct += 1;
 document.write("<p> Your answer: '" + answer2 + "' was correct</p>");
}

else{
  document.write("<p> Your answer: '" + answer2 + "' was incorrect</p>");
}


if ( answer3.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
 document.write("<p> Your answer: '" + answer3 + "' was correct</p>");
}

else{
  document.write("<p> Your answer: '" + answer3 + "' was incorrect</p>");
}


if ( answer4.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
 document.write("<p> Your answer: '" + answer4 + "' was correct</p>");
}

else{
  document.write("<p> Your answer: '" + answer4 + "' was incorrect</p>");
}


if ( answer5.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
 document.write("<p> Your answer: '" + answer5 + "' was correct</p>");
}

else{
  document.write("<p> Your answer: '" + answer5 + "' was incorrect</p>");
}


 console.log(" Number Correct:" + correct);
if (correct === 3)
{
  alert( "BRONZE MEDAL");
}

if (correct === 4)
{
  alert( "SILVER MEDAL");
}

if (correct === 5)
{
  alert( "GOLD MEDAL");
}
