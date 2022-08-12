

//problem - 1
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please enter a valid input';
    } else {
        let convertedValue = Number.parseFloat(radian * 180 / Math.PI).toFixed(2);
        //180/pi 
        return convertedValue;
    }
}


//problem - 2
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter a valid input';
    } else {
        //checking if ending with js or not
        if (fileName.endsWith('js')) {
            return true;
        }
        else return false;
    }
}


//problem - 3
function oilPrice(disel, patrol, octen) {
    if (typeof disel !== 'number' || typeof patrol !== 'number' || typeof octen !== 'number') {
        return 'Please enter a valid input';
    } else {
        const dPrice = 114;
        const pPrice = 130;
        const oPrice = 135;
        // calculating total price
        let total = disel * dPrice
            + patrol * pPrice
            + octen * oPrice;


        return total;
    }
}

//problem - 4
function publicBusFare(totalPeople) {
    if (typeof totalPeople !== 'number') {
        return 'Please enter a valid input';
    } else {
        let remainPeople;
        //for 50+
        if (totalPeople >= 50) {
            remainPeople = totalPeople % 50;
            if (remainPeople >= 11) {
                remainPeople = remainPeople % 11;
            }
        }//for 11-49 
        else if (totalPeople < 50 && totalPeople >= 11) {
            remainPeople = totalPeople % 11;
        }

        //counting fair
        let totalFair = remainPeople * 250;

        return totalFair;
    }
}

//problem - 5 
function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return 'Please enter a valid input';
    } else {
        //checking for type
        if (typeof friend1.name !== 'string' || typeof friend1.friend !== 'string' || typeof friend2.name !== 'string' || typeof friend2.friend !== 'string') {
            return 'Please enter a valid input';
        } else {
            if (friend1.name.toLowerCase() === friend2.friend.toLowerCase() && friend1.friend.toLowerCase() === friend2.name.toLowerCase()) {
                return true;
            } else return false;

        }
    }
}
