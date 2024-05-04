function add (...numbers) {
    let sum = 0;
    let preNumber = 0
    for (number of numbers) {
        console.log(`${number} + ${sum}`);
        sum = number + sum;
        console.log(`= ${sum}`);
    }
    return sum;
}