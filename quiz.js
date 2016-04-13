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
}

if ( answer2.toUpperCase() === 'AYE AYE CAPTAIN' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'SPONGEBOB SQUAREPANTS' ) {
 correct += 1;
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


document.write("<p>" + answer1 + "</p>");

document.write("<p>"+ answer2 +"</p>");


document.write("<p>" + answer3 + "</p>");


document.write("<p>" + answer4 + "</p>");

document.write("<p>" + answer5 +"</p>");
