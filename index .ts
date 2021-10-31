/**
 * adding two/more numbers together to calculate their sum
 * @param a the first number to add (addend 1)
 * @param b the second number to add to the first one (addend 2)
 * @returns the sum of the first and second number
 */
function summary(a: number, b: number): number {
    return a + b
}

/**
 * substracting one number from another to calculate their difference
 * @param a the number that is substracted from (minuend)
 * @param b the number that is substracted from number a (subtrahend) 
 * @returns the difference of substracting the second number from the first number 
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
                console.log("\nVýsledok sčítania je " + summary(Number(first_number), Number(second_number)));
            }
            if (operation == "subtraction"){
                console.log("\nVýsledok odčítania je " + subtraction(Number(first_number), Number(second_number)));
            }
            intFace.close();
        });
    });
});




