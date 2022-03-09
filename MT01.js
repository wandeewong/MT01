function numberSplit(number1){
    return[Math.floor(number1/2),Math.ceil(number1/2)];
}


console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));