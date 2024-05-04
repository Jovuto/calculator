function add (...numbers) {
    let sum = 0;
    for (number of numbers) {
        sum = number + sum;
    }
    return sum;
}

function sub (...numbers) {
    let subArr = [];
    for (number of numbers){
        subArr.push(number);
    }
    return subArr.reduce((sum, currentNum) => sum - currentNum);
}