/**
 * bringing two or more numbers together to make a new total
 * @param a this is a first number we want to add 
 * @param b this is a second number we are adding to the first number in our equation  
 * @returns this is a result of equation, it is total of number a and b, thing we will get 
 */
function summary(a: number, b: number): number {
    return a + b
}

/**
 * taking one number away from another
 * @param a this is a number we are substracting/taking from
 * @param b this is a number which is substracted/ taken from number a 
 * @returns this is a result we get by taking number a from number b, thing we will get
 */
function subtraction(a: number, b: number): number {
    return a - b
}


const intFace = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

intFace.question("Zadajte prvé číslo: ", (first_number: number) => { 
    intFace.question("Zadajte druhé číslo: ", (second_number: number) => {
        intFace.question("Ponukane operacie:\n- summary\n- subtraction\nZadajte operáciu: ", (operation: string) => {
            if (operation == "summary"){
                console.log("\nVýsledok sčítanie je " + summary(Number(first_number), Number(second_number)));
            }
            if (operation == "subtraction"){
                console.log("\nVýsledok odčítania je " + subtraction(Number(first_number), Number(second_number)));
            }
            intFace.close();
        });
    });
});




