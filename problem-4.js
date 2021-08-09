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