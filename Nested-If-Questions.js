const prompt = require("prompt-sync")();

//question 1

/* let age = parseInt(prompt("Enter Your Age : "))

if (age>=21){
    console.log("Age requirements met");
    
    let income =parseInt(prompt("Enter your income : "));
    if(income>=30000)
        {
              console.log("Income requirements met");
                let creditScore = parseInt(prompt("Enter your credit score : "));
                if(creditScore >=650)
                    {
                    console.log("credit score requirements met");
                    console.log("You qualify for loan application");
                    }
                else{
                    console.log("credit score requirements are not met");
                     console.log("You don't qualify for loan application");
                    }
        }
     else{
            console.log("Income requirements not met");
             console.log("You don't qualify for loan application");
        }

}

    else{
        console.log("Your age requirements are not met- Don't qualify for loan");
    } */

//end of question 1
//Start of question 2

/* let weekend = prompt("Is it the weeknd? - ");
let price ;
if (weekend === "yes") {
  console.log("Weekend prices applied");

  let time1 = prompt("is it before 5 PM? - ");
  if (time1 === "yes") {
    console.log("Your bill is 10 USD");
    price = 10;
  } else {
    console.log("Your bill is 15 USD");
    price = 15;
  }
} else {
  console.log("Its not the weekend, flat rate of $8 applied.");
  price = 8;
}


let age = prompt("Are you older than 65?");
if (age === "yes") 
{
    price = (price * .80)
     console.log("Your bill is - " + price)


}
else{
        console.log("You bill was sent in the prior message.")
} */

        //end question 2
        // Start of question 3



/* let bonus = prompt("Have you worked for us over 5 years? (yes/no)");
let money = 1000;

if (bonus === "yes") {
    console.log("50% increase applied");
    money = money * 1.5;

    let performance = parseInt(prompt("What's your performance rating? (1-5)"));
    if (performance == 5) {
        money = money + 2000;
        console.log("$2000 bonus added");
    } else {
        if (performance == 4) {
            money = money + 1000;
            console.log("$1000 bonus added");
        } else {
            if (performance <= 3) {
                console.log("No performance bonus");
            }
        }
    }
} else {
    let performance = parseInt(prompt("What's your performance rating? (1-5)"));
    if (performance == 5) {
        money = money + 2000;
        console.log("$2000 bonus added");
    } else {
        console.log("No performance bonus");
    }
}

let dept = prompt("Are you a department head? (yes/no)");
if (dept === "yes") {
    money = money + (money * 0.25);
    console.log("25% department head bonus added");
}

console.log("Your final year-end bonus is: $" + money); */

// end of question 3
//start of question 4

/* let stock = prompt("Is the item in stock? (yes/no)")
let price = 100

if (stock === "yes"){
    let pay = prompt("Payment method? (credit/paypal)")
    if (pay === "credit"){
        let card = prompt("Is your credit card valid? (yes/no)")
        if (card === "yes"){
            let ship = prompt("Is your address domestic or international?")
            if (ship === "domestic"){
                price = price + 10
                console.log("Domestic order processed")
            } else {
                let country = prompt("Is your country supported? (yes/no)")
                if (country === "yes"){
                    price = price + 25
                    console.log("International order processed")
                } else {
                    console.log("We dont ship there")
                }
            }
        } else {
            console.log("Card invalid")
        }
    } else if (pay === "paypal"){
        let verified = prompt("Is your PayPal verified? (yes/no)")
        if (verified === "yes"){
            let ship = prompt("Is your address domestic or international?")
            if (ship === "domestic"){
                price = price + 10
                console.log("Domestic order processed")
            } else {
                let country = prompt("Is your country supported? (yes/no)")
                if (country === "yes"){
                    price = price + 25
                    console.log("International order processed")
                } else {
                    console.log("We dont ship there")
                }
            }
        } else {
            console.log("PayPal not verified")
        }
    } else {
        console.log("Invalid payment")
    }
    console.log("Final price: $" + price)
} else {
    console.log("Item not in stock")
} */
//end of question 4
// Start of question 5

/* let gpa = prompt("What is your GPA?")
let sat = prompt("What is your SAT score?")
let activities = ""
let leader = ""

if (gpa >= 3.0){
    if (sat >= 1200){
        activities = prompt("Do you have extracurricular activities? (yes/no)")
        if (activities === "yes"){
            leader = prompt("Did you have a leadership role? (yes/no)")
            if (leader === "yes"){
                console.log("Admitted with Honors")
            } else {
                console.log("Admitted")
            }
        } else {
            if (sat >= 1400){
                console.log("Admitted on probation")
            } else {
                console.log("Rejected - No extracurricular activities")
            }
        }
    } else {
        console.log("Rejected - SAT score too low")
    }
} else {
    console.log("Rejected - GPA below 3.0")
} */

// end of question 5
//start of question 6

/* let premium = 1000
let age = prompt("What is your age?")
let accidents = prompt("Have you had any accidents? (yes/no)")

if (age < 25){
    premium = premium + 500
    if (accidents === "yes"){
        premium = premium + 300
    }
} else {
    let exp = prompt("How many years of driving experience do you have?")
    if (exp < 5){
        premium = premium + 200
    } else {
        if (accidents === "no"){
            premium = premium - 150
        }
    }
}

if (premium > 1500){
    let multi = prompt("Do you have multiple cars? (yes/no)")
    if (multi === "yes"){
        premium = premium * 0.9
        console.log("10% discount applied")
    }
}

console.log("Final insurance premium: $" + premium) */

//end of question 6 

//start of question 7
/* let bill = parseFloat(prompt("Enter base bill amount:"))
let total = bill

if (bill > 50){
    let people = prompt("How many people in your party?")
    if (people >= 6){
        let tip = bill * 0.18
        total = bill + tip
        console.log("18% gratuity added for large party")
    } else {
        let tipChoice = prompt("Choose tip percentage (15, 18, or 20):")
        if (tipChoice == 15){
            total = bill + (bill * 0.15)
        } else if (tipChoice == 18){
            total = bill + (bill * 0.18)
        } else if (tipChoice == 20){
            total = bill + (bill * 0.20)
        } else {
            console.log("Invalid tip choice, no tip added")
        }
    }
} else {
    console.log("Bill is $50 or under, suggesting 15% tip")
    total = bill + (bill * 0.15)
}

let rewards = prompt("Do you have a rewards card? (yes/no)")
if (rewards === "yes"){
    total = total - (bill * 0.10)
    console.log("10% discount applied before tip")
}

console.log("Final total: $" + total.toFixed(2)) */
//End of question 7
//start of question 8

/* let degree = prompt("Do you have the required degree? (yes/no)")
let years = 0
let certs = ""
let relocate = ""

if (degree === "yes"){
    years = prompt("How many years of experience do you have?")
    if (years >= 2){
        certs = prompt("Do you have any certifications? (yes/no)")
        if (certs === "yes"){
            console.log("Strong candidate")
            relocate = prompt("Are you willing to relocate? (yes/no)")
            if (relocate === "yes"){
                console.log("Priority review")
            }
        } else {
            if (years >= 5){
                console.log("Qualified candidate")
                relocate = prompt("Are you willing to relocate? (yes/no)")
                if (relocate === "yes"){
                    console.log("Priority review")
                }
            } else {
                console.log("Meets minimum experience but no certifications")
            }
        }
    } else {
        console.log("Entry-level consideration")
    }
} else {
    console.log("Rejected - missing required degree")
} */

    //end of question 8

/*     let price = 50
let type = prompt("What membership type? (Basic/Premium/VIP)")

if (type === "Premium"){
    price = price + 30
    console.log("Includes group classes")
} else if (type === "VIP"){
    price = price + 70
    console.log("Includes personal trainer")
} else {
    console.log("Basic membership selected")
}

let age = prompt("What is your age?")
if (age < 25){
    let student = prompt("Are you a student? (yes/no)")
    if (student === "yes"){
        price = price * 0.8
        console.log("20% student discount applied")
    }
}

let annual = prompt("Are you signing up for an annual contract? (yes/no)")
if (annual === "yes"){
    let discount = price * 2
    price = (price * 12) - discount
    console.log("2 months free with annual contract")
    if (type === "Premium" || type === "VIP"){
        console.log("Free gym bag included!")
    }
} else {
    price = price * 1
}

console.log("Final monthly membership cost: $" + price) */

//end of question 9
//start of question 10

/* let price = 100
let room = prompt("Room type? (Standard/Deluxe/Suite)")

if (room === "Deluxe"){
    price = price + 50
} else if (room === "Suite"){
    price = price + 150
}

let season = prompt("What season is it? (Peak/Regular/Off-peak)")
if (season === "Peak"){
    price = price * 1.5
} else if (season === "Off-peak"){
    price = price * 0.8
}

let nights = prompt("How many nights are you staying?")
let total = price * nights

if (nights >= 14){
    total = total * 0.75
    console.log("25% discount for long stay")
} else if (nights >= 7){
    total = total * 0.85
    console.log("15% discount for week stay")
}

let loyalty = prompt("Loyalty status? (None/Silver/Gold/Platinum)")

if (loyalty === "Silver"){
    let breakfast = 20 * nights
    console.log("Free breakfast added ($" + breakfast + " value)")
} else if (loyalty === "Gold"){
    let breakfast = 20 * nights
    console.log("Free breakfast added ($" + breakfast + " value)")
    console.log("Room upgraded to next tier")
} else if (loyalty === "Platinum"){
    let breakfast = 20 * nights
    total = total * 0.9
    console.log("Free breakfast added ($" + breakfast + " value)")
    console.log("Free parking included")
    console.log("10% additional discount applied")
}

console.log("Total cost for stay: $" + total.toFixed(2)) */
//end of question 10

//why was 10 so hard.




