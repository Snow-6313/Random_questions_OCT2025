const prompt = require ('prompt-sync')();

//Question 1

/* let temperature = parseInt(prompt("Enter the temperature - "))
if ( temperature > 30){
    console.log("the temp is hot")
}
else

    console.log("Temp is normal") */

//end question 1
//Start of question 2

/* let purchase = parseInt(prompt("Enter the amount of your purchase - "))
if (purchase >=100){
    console.log("you get 10% discount")
}
else
    console.log("no dicount for you hehe") */

//end of question 2
//Start question 3

/* let age = parseInt(prompt("Enter your age - "))
if (age < "12"){
    console.log(" your ticket cost $8")
}
else if (age >= "12"){
    console.log(" your ticket cost $15")
} */

//end of question 3
//start of question 4
/* 
let dotw = parseInt(prompt("Enter the day of the week - "))
if (dotw === "saturday", "sunday"){
    console.log(" Its the weekend")
}
else

    console.log("Its a weekday") */

//end of question 4
//start of question 5
let AgeGroup = parseInt(prompt("Enter your Age - "));
if( AgeGroup>=0 && AgeGroup<=12)
{
    console.log("You are a child");
}
else if(AgeGroup >=13 && AgeGroup <=19){
    console.log("You are a teenager ");
}
else if(AgeGroup >=20 && AgeGroup <=59){
    console.log("You are an Adult  ");
}
else if(AgeGroup >=60){
    console.log("You are a senior  ");
}
else
{
    console.log("You are just so old I can't classify you")
} 
//end of question 5
