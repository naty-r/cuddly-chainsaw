"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var length = {
    MAX_SAFE_INTEGER: 100000,
    MIN_NUMBER: 0
};
var MinMax = {
    minNumber: 0,
    maxNumber: 100000,
};
function getRandomNumber(minNumber, maxNumber) {
    return random(RandomNumber() * (maxNumber - minNumber + 1)) + minNumber;
}
