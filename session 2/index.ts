import lenght from "./length";
import MinMax from "./MinMax";

let length: lenght = {
    MAX_SAFE_INTEGER: 100000,
    MIN_NUMBER: 0
}
let MinMax: MinMax = {
    minNumber: 0,
    maxNumber: 100000,

};



function getRandomNumber (minNumber,maxNumber) {
    return random(RandomNumber() * (maxNumber - minNumber + 1)) + minNumber;
}

/** 
 * už nad tým sedím fest dlho a fakt neviem, čo s tým
 * vôbec nerozumiem ako máme urobiť túto úlohu
 * prepáč:))
 */