// প্রাকটিস চ্যালেঞ্জ -৩ টা: 

// ১.leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapyear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
}
// console.log(leapyear(2019));


// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
function oddEven(age) {
    if (age % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(oddEven(21));


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
function time(hour) {
    let min = 60;
    let totalMin = hour * min;
    return totalMin;
}
// console.log(time(5));


// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
function dhaka(hour) {
    let min = 60;
    let sec = 60;
    let totalMin = hour * min;
    let totalSec = totalMin * sec;
    return totalSec;
}
// console.log(dhaka(4));

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 400 == 0 || (arr[i] % 4 == 0 && arr[i] % 100 != 0)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(findLeapYear([2000, 2005, 2009, 2012, 2017, 2020, 2022, 2024, 2028, 2032, 2036, 2040, 2044]));


/*
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/
function findOddSum() {
    let arr = [5, 7, 8, 10, 45, 30];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
// console.log(findOddSum());