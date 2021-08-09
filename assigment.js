/* ---------------------------------------------------------
                        problem-1
------------------------------------------------------------*/
// function define
function seerToMon(seerValue) {
    // declared a variable
    var monValue = 1;
    if (typeof (seerValue) == 'number' && seerValue > 0) {
        // Seer is converting to Mon.
        monValue = seerValue / 40;
        return monValue;
    }
    // probable error
    else if (typeof (seerValue) != 'number') {
        // if a user enter the a string / incorrect value then he/she can see this message to enter a correct value.
        return "You entered a string or wrong value. Please, enter a number.";
    }
    // probable error
    else if (seerValue <= 0) {
        // if a user enter a negative value then he/she gets a message to enter a positive value.
        return "You entered zero or a negative value.Please, enter a positive value greater than 0.";
    }
    else {
        console.log("you entered a wrong value!!! Please, recheck.");
    }
}
// FUNCTION CALL
var seer = seerToMon(100);
console.log(seer);

/* ---------------------------------------------------------------
                            problem- 2
------------------------------------------------------------------*/
// function define
function totalSales(numberOfShirt, numberOfPant, numberOfshoes) {
    // price assign in declared variable.
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;
    if (((typeof numberOfShirt == 'number') && (typeof numberOfPant == 'number') && (typeof numberOfshoes == 'number')) && (numberOfShirt && numberOfPant && numberOfshoes) >= 0) {
        // calculating the total sales of shirt, pant & shoes.
        var totalShirtPrice = numberOfShirt * shirtPrice;
        var totalPantPrice = numberOfPant * pantPrice;
        var totalShoesPrice = numberOfshoes * shoesPrice;
        // total sales.
        var totalSold = totalShirtPrice + totalPantPrice + totalShoesPrice;
        return totalSold;
    }
    // probable error
    else if (typeof (numberOfShirt) != 'number' || typeof (numberOfPant) != 'number' || typeof (numberOfshoes) != 'number') {
        // if the entered value is not number then return this message.
        return "Your entered value is not a number. Please, enter a number";
    }
    // probable error
    else if ((numberOfShirt < 0 || numberOfPant < 0 || numberOfshoes < 0)) {
        // if a user entered a negative value. then he/ she can see this messasge to enter a positive value.
        return "You entered a negative number. Please, enter a positve value.";
    }
    else {
        return "Maybe you entered a wrong input!!! Please, recheck.";
    }
}
// variable declared
let numberOfShirt = 5;
let numberOfPant = 2;
let numberOfshoes = 1;
//function call
var totalSoldPrice = totalSales(numberOfShirt, numberOfPant, numberOfshoes);
console.log(totalSoldPrice);

/* -------------------------------------------------------
                        problem- 3
----------------------------------------------------------*/
// declare function
function deliveryCost(productNumber) {
    // delivery cost.
    const first100Cost = 100;
    const second100Cost = 80;
    const third100Cost = 50;
    // variable declared.
    var totalCost = 0;
    var totalCostFrist100 = 0;
    var totalCostSecond100 = 0;
    var totalCostthird100 = 0;
    if (productNumber > 0 && typeof productNumber == "number") {
        // for first 100
        if (productNumber <= 100) {
            totalCostFrist100 = first100Cost * 100;
            return totalCostFrist100;
        }
        // for second 100
        else if (productNumber > 100 && productNumber <= 200) {
            totalCostFrist100 = first100Cost * 100;
            productNumber -= 100;
            totalCostSecond100 = second100Cost * productNumber;
            totalCost = totalCostFrist100 + totalCostSecond100;
            return totalCost;
        }
        // for thrid 100 or more
        else if (productNumber > 200) {
            totalCostFrist100 = first100Cost * 100;
            productNumber -= 100;
            totalCostSecond100 = second100Cost * 100;
            productNumber -= 100;
            totalCostthird100 = productNumber * third100Cost;
            totalCost = totalCostFrist100 + totalCostSecond100 + totalCostthird100;
            return totalCost;
        }
    }
    // probable error
    else if (productNumber <= 0) {
        // this message will return for negative value of zero
        return "Number of product can not be zero or a negative value. Please, enter a positive number.";
    }
    // probable error
    else if (typeof productNumber != "number") {
        // this message will return for strng
        return "Your entred value is a string. Please, enter a positive number";
    }
    else {
        return "Your entered value is wrong!! Please, recheck.";
    }
}
// function call
var totalDeliveryCost = deliveryCost(210);
console.log(totalDeliveryCost);

/* -----------------------------------------------------------
                        problem-4
-------------------------------------------------------------- */
function perfectFriend(nameslist) {
    // variable declare
    var flag = 0;
    const nameLength = 5;
    if (typeof (nameslist) == 'object' && nameslist.length != 0) {
        // for loop
        for (let i = 0; i < nameslist.length; i++) {
            // cheaking weather the name's characters or length 5 or not.
            if (nameslist[i].length == nameLength) {
                let name = nameslist[i];
                flag = 1; // if flag's value is 1 then then condition is true and it will return the value.
                if (flag == 1) {
                    return name;
                }
                else {
                    return "There is no five characters name";
                }
            }
        }
    }
    // probable error -1
    else if (nameslist.length == 0) {
        // if the object is empty then the user can see this message
        return "The array is empty. Please, add some names of your friends.";
    }
    // probable error - 2
    else if (typeof nameslist != 'object') {
        return "The decalred variable is not a array. Please declare a array and add some names of your friends.";
    }
    // probable error - 3
    else {
        return "something wrong !!!";
    }
}
var friendNames = ["Shakil", "Jahirul", "Asif", "Raz", "Miraz", "Sifat"];
var fiveCharacterName = perfectFriend(friendNames);
console.log(fiveCharacterName);