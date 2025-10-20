const prompt = require ('prompt-sync')();

//Questin 1
/* let temp = parseInt(prompt("enter the temp - "));
if( temp>=30)
{
    console.log("Your room is Hot");
}
else if(temp >=20 && score <=30){
    console.log("Your room is Warm");
}
else if(temp >=10 && score <=19){
    console.log("Your room is cool");
}
else if(temp <10){
    console.log("Your room is cold");
} */
// end of quetion 1
//Start of question 2

/* let day = parseInt(prompt("Enter a number 1-7  - "));
if( day >= 1)
{
    console.log("Today is Monday");
}
else if(day >= 2){
    console.log("Today is Tuesday");
}
else if(day >= 3){
    console.log("Today is Wednesday ");
}
else if(day >= 4){
    console.log("Today is Thursday ");
}

else if(day >= 5){
    console.log("Today is Friday ");
}

else if(day >= 6){
    console.log("Today is Saturday ");
}
else if(day >= 7){
    console.log("Today is Sunday ");
}
 */
//End of Question 2
//Start Of question 3
/* let AgeGroup = parseInt(prompt("Enter your Age - "));
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
} */
//End of question 3
//Start of question 4
/* let BMI = parseInt(prompt("Enter your BMI - "));
if( BMI< 18.5)
{
    console.log("You are underweight ");
}
else if(BMI >=18.5 && BMI <=24.9){
    console.log("You are normal weight ");
}
else if(BMI >=25 && BMI <=29.9){
    console.log("You are overweight ");
}
else if(BMI <30){
    console.log("You are obese ");
}
else
{
    console.log("INVALID")
} */
//End of question 4
//Start of question 5
/* let light = parseInt(prompt("Enter a color {red, yellow, Green} - "));
if( light="red")
{
    console.log("STOP");
}
else if(light = "yellow"){
    console.log( "Slow DOWN");
}
else if(light = "green"){
    console.log("GO");
}
else
{
    console.log("INVALID")
} */
//End of question 5
//Start of question 6
/* let season = parseInt(prompt("Enter the month number - "));
if( season==="12" && season===1 && season===2)
{
    console.log("ITS WINTER ");
}
else if(season==3 && season==4 && season==5){
    console.log("ITS SPRING ");
}
else if(season==6 && season==7 && season==8){
    console.log("ITS SUMMER ");
}
else if(season==9 && season==10 && season==11){
    console.log("ITS FALL ");
}
else
{
    console.log("INVALID")
} */
//End of question 6
//Start of question 7
/* let temp = parseInt(prompt("Eter your temp - "));
if( temp<0)
{
    console.log("solid");
}
else if(temp <=0 && temp <=99){
    console.log("water ");
}
else if(temp >=100){
    console.log("steam ");
}
else
{
    console.log("invalid")
} */
//End of question 7
/* let money = parseInt(prompt("Enter your earnings - "));
if( money<0 && money >=10000)
{
    console.log("no tax");
}
else if( money<10001 && money >=30000){
    console.log("10% tax ");
}
else if( money<30001 && money >=60000){
    console.log("20% tax ");
}
else if( money<60001 && money >=100000){
    console.log("30% tax ");
}
else if(money >100000){
    console.log("40% tax");
}
else
{
    console.log("Invanid")
} */
//End of question 7
//Start of question 10
let score = parseInt(prompt("Enter your credit score 300-850 - "));
if( score>=800 && score<=850)
{
    console.log("Exceptional - Best rates available");
}
else if(score >=740 && score <=799){
    console.log("Very Good - Better than average");
}
else if(score >=670 && score <=739){
    console.log("Good - Near or above average ");
}
else if(score >=550 && score <=669){
    console.log("Fair - Below average ");
}
else if(score >=300 && score <=579){
    console.log("Poor - Credit may be denied ");
}
else

    console.log("INVALID | outside 300-850 range")


