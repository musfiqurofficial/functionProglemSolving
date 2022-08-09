function oddEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("odd");
    }
}
// oddEven(20);

function oddEvenCheck(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "odd";
    }
}
// console.log(oddEvenCheck(21));

function lergestnumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 && num2 > num1) {
        return num2;
    } else {
        return num3;
    }
}

console.log(lergestnumber(10, 20, 30));