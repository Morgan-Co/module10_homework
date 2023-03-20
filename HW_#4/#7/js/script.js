let arr = [0, 1, 2, 3, 4, 5, null, 'M', '%' ];
let numOthers = 0;
let numEven = 0;
let numOdd = 0;

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 0) || (typeof (arr[i]) != 'number')) {
        numOthers++;
    } else {
        if (arr[i] % 2 === 0) {
            numEven++;
        } else {
            numOdd++;
        }
    }
}

console.log("Других: " + numOthers);
console.log("Четных: " + numEven);
console.log("Нечетных: " + numOdd);