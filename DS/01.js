// Checking zero sum - Problem 1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
// [-4, 4] -> output

function getSumPairZero(array) {
    for (let number of array) {
        console.log("Outer loop")
        for (let j = 1; j < array.length; j++) {
            console.log("Inner loop")
            if (number + array[j] === 0) {
                return [number, array[j]];
            }
        }
    }
} // function getSumPairZero(array){

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result)

// o(n^2) quadratic time complexity