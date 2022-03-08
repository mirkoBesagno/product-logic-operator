import { or, and } from ".";

var tmp = false;




function TestOR() {
    try {
        tmp = or(true, '==')(true, true, true);
        console.log(tmp);
        if (tmp == true) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = or(true, '==')(true, false, true);
        console.log(tmp);
        if (tmp == true) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = or(true, '==')(false, false, false);
        console.log(tmp);
        if (tmp == false) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = or('yeppa', '==')('haha', 'hihi', 'lol');
        console.log(tmp);
        if (tmp == false) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = or('ciao', (x) => {
            if (x == 'ciao') return true;
            else return false;
        })('haha', 'mona', 'ciao');
        console.log(tmp);
        if (tmp == true) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
}
function TestAnd() {
    try {
        tmp = and(true, '==')(true, true, true);
        console.log(tmp);
        if (tmp == true) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);

    }
    console.log('**************************************');
    try {
        tmp = and(true, '==')(true, false, true);
        console.log(tmp);
        if (tmp == false) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = and('yeppa', '==')('haha', 'hihi', 'lol');
        console.log(tmp);
        if (tmp == false) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
    try {
        tmp = and('ciao', (x) => {
            if (x == 'ciao') return true;
            else return false;
        })('haha', 'mona', 'ciao');
        console.log(tmp);
        if (tmp == false) {
            console.log("OK");
        }
        else {
            console.log("NO!");
        }
    } catch (error) {
        console.log(error);
    }
    console.log('**************************************');
}

console.log('**************************************');
console.log("INIZIO TEST OR");
TestOR();
console.log("FINE TEST OR");
console.log("*************");
console.log("INIZIO TEST OR");
TestAnd();
console.log("FINE TEST OR");

console.log("FINITO");