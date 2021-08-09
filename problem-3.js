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