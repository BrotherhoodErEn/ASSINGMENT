var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var every_result_is_smaller_than_9 = numbers.every(item => item < 9);

// this is equivalent with 
var every_result_is_smaller_than_9 = numbers.every(function(item) { return item < 9; });


console.log(every_result_is_smaller_than_9);  // false

var some_resulst_are_smaller_than_9 = numbers.some(item => item < 9);
console.log(some_resulst_are_smaller_than_9); // true

var odd_numbers = numbers.filter(item => item % 2 == 1);
console.log(odd_numbers);        // [1, 3, 5, 7, 9]

numbers.forEach(item => console.log("works"));


var numbers_plus_one = numbers.map(item => item + 1);
console.log(numbers_plus_one);