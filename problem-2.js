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