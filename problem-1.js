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