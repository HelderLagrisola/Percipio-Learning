const input = "Turpentine and turtle"
const vowels = ["a", "e", "i", "o", "u"]
const resultArray = []
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    if (input[inputIndex] === "e") {
        resultArray.push(input[inputIndex]);
    }

    if (input[inputIndex] === "u") {
        resultArray.push(input[inputIndex]);
    }
 
 
for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    
    //console.log(`vowelIndex is : ${vowelIndex}`)
    if (input[inputIndex] === vowels[vowelIndex]) {
        //console.log(input[inputIndex])
        resultArray.push(input[inputIndex]);
    }
}
}   

const resultString = resultArray.join('').toUpperCase();
console.log(resultString)