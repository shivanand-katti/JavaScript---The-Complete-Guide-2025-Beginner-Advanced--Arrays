// const numbers = [1, 2, 3, 4, 5];
// console.log('Original numbers:', numbers);

// // const moreNumbers = [6, 7, 8, 9, 10];
// // const combinedNumbers = [...numbers, ...moreNumbers];
// // console.log('Combined numbers:', combinedNumbers);

// // const moreNumbers = new Array('Hi', 'Welcome', 'to', 'JavaScript');
// // console.log('More numbers:', moreNumbers);

// const moreNumners = new Array(6);
// console.log('More numbers with specified length:', moreNumners);

// const listItems = document.querySelectorAll('li');
// const arrayListItems = Array.from(listItems);
// console.log('Array from list items:', arrayListItems);

// const hobbies = ['Sports', 'Cooking'];
// const personalData = [30, 'Shiva', {moreDeails: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for(const data of analyticsData){
//     for(const dataPoint of data){
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); // adds at the end
hobbies.unshift('Coding'); // adds at the beginning
console.log(hobbies);

hobbies.pop(); // removes from the end
hobbies.shift(); // removes from the beginning
console.log(hobbies);

hobbies.splice(1, 0, 'Good Food'); // adds at index 1
console.log(hobbies);

hobbies.splice(1, 1); // removes at index 1
console.log(hobbies);

hobbies[1] = 'Traveling'; // modifies at index 1
console.log(hobbies);

hobbies[5] = 'Dancing'; // adds at index 5, leaving undefined at index 4
console.log(hobbies);

hobbies.splice(-1, 1, 'Singing'); // modifies last element
console.log(hobbies);

hobbies.splice(-2, 0, 'Gardening'); // adds before last element
console.log(hobbies);

hobbies.splice(-3, 1); // removes third last element
console.log(hobbies);

hobbies.length = 3; // truncates the array to length 3
console.log(hobbies);

hobbies.length = 5; // extends the array to length 5, leaving undefined elements
console.log(hobbies);

hobbies.sort(); // sorts the array
console.log(hobbies);

hobbies.reverse(); // reverses the array
console.log(hobbies);

hobbies.splice(1, 2); // removes 2 elements starting from index 1
console.log(hobbies);

hobbies.splice(1, 0, 'Photography', 'Traveling'); // adds multiple elements at index 1
console.log(hobbies);

hobbies.push('Cooking', 'Dancing'); // adds multiple elements at the end
console.log(hobbies);

hobbies.pop(); // removes last element
console.log(hobbies);   

const testResults = [1, 5.3, 1.5, 10.99, 20.3];
const storeResults = testResults.slice(); // creates a shallow copy of first two elements

testResults.push(100); // modifies the original array
console.log('Test Results:', testResults);
console.log('Store Results:', storeResults);