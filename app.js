// function add(number1, number2) {
//     console.log(number1 + number2);
//     var sum = number1 + number2;
//     return sum;
// }

// var total = add(100, 20);
// console.log(total);

// function bringSingara(money) {
//     var singaraPrice = 3;
//     var quantity = money / singaraPrice;
//     return quantity;
// }
// var myTk = bringSingara(100);
// var singaras = bringSingara(myTk);
// console.log(singaras); 

function getAvg(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}

const assignment1Mark = 56;
const assignment2Mark = 60;
const assignment3Mark = 60;

var myAvg = getAvg(assignment1Mark, assignment2Mark, assignment3Mark);
var ans = parseFloat(myAvg.toFixed(3));
console.log(ans); 