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

const spliceResults = testResults.splice(0, 2); // removes first two elements from original array

const concatResults = testResults.concat(storeResults); // combines two arrays
console.log('Concat Results:', concatResults);

console.log('Index of 1.5:', testResults.indexOf(1.5)); // finds index of element
console.log('Index of 100:', testResults.indexOf(100)); // finds index of element not present

console.log('last Index of 1.5:', testResults.lastIndexOf(1.5)); // finds last index of element

console.log('Includes 10.99:', testResults.includes(10.99));


const personData = [{name: 'Shiva'}, {name: 'Alex'}];

console.log('Find Alex:', personData.find(person => person.name === 'Alex'));
console.log('Find Max:', personData.find(person => person.name === 'Max'));

console.log(personData.indexOf({name: 'Shiva'})); // reference check fails

const manual = personData.findIndex(person => person.name === 'Shiva'); // works correctly
console.log('Manual index of Shiva:', manual);

const Alex = personData.find((person, index, perosns) => {
    return person.name === 'Alex';
})

Alex.name = 'Anna'
console.log(Alex, personData)
console.log('Found Alex using find method:', Alex);


const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, index, prices) => {
    const priceObj = {index: index, taxAdjPrice: price * (1 + tax)};
    return priceObj;
});

// const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, index, prices) => {
//     const priceObject = {index: index, taxAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObject);
// });


console.log('Tax Adjusted Prices using map:', taxAdjustedPrices);
// console.log('Tax Adjusted Prices using for loop:', taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if(a > b) {
        return 1;
    } else if (a === b){
        return 0;
    } else {
        return -1;
    }
});

console.log('Sorted Prices:', sortedPrices);
console.log('Sorted Prices:', sortedPrices.reverse());

const filteredPrices = prices.filter((price, index, prices) => {
    return price > 6;
})

console.log('Filtered Prices (greater than 6):', filteredPrices);

// arrow functions

const filterdPricesArrow = prices.filter(price => price > 6);
console.log('Filtered Prices using arrow function (greater than 6):', filterdPricesArrow);

// the reduce method

let sum = 0;
prices.forEach((price) => {
    sum += price;
});
console.log('Sum using forEach:', sum);

const sumReducer = prices.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0);

console.log('Sum using reduce:', sumReducer);

const sumReducerNoInitial = prices.reduce((prevValue, curValue) => {
    return prevValue + curValue;
});

console.log('Sum using reduce without initial value:', sumReducerNoInitial);

const data = '  Apple, Banana, Kiwi  ';

data.split(',').map(item => item.trim()).forEach(item => console.log(item)); // chaining methods split method will create array of strings

// Arrays and Strings split and join()

const dataNew = 'new york;los angeles;chicago;houston;phoenix';

const cities = dataNew.split(';');
console.log('Cities Array:', cities);

const citiesUpperCase = cities.map(city => city.toUpperCase());
console.log('Cities in Upper Case:', citiesUpperCase);

const nameFragment = ['Shivanand', 'Mallappa', 'Katti'];
const fullName = nameFragment.join(' ');
console.log('Full Name:', fullName);  

// the spread operator

let copiedNameFragment = [...nameFragment];
console.log('Copied Name Fragment:', copiedNameFragment);

copiedNameFragment.push('Jr.');
console.log('Modified Copied Name Fragment:', copiedNameFragment);
console.log('Original Name Fragment remains unchanged:', nameFragment);

Math.min(Math.min(...prices)); // spread operator to pass array elements as individual arguments
console.log('Minimum Price:', Math.min(...prices));

const persons = [{name: 'Shiva', age: 30}, {name: 'Alex', age: 28}, {name: 'Anna', age: 25}];
// const copiedPersons = persons.map(person => ({...person}));
// const copiedPersons = [...perosns];
// console.log('Copied Persons:', copiedPersons);

const copiedPersons = [...persons.map(person => ({
    name: person.name,
    age: person.age
}))]; // here we are maping the array and creating new objects for each person to achieve deep copy
console.log('Copied Persons with deep copy:', copiedPersons);

// array destructuring

const nameData = ['Shiva', 'Mallappa', 'Katti'];
const [firstName, middleName, lastName] = nameData; // destructuring assignment
console.log('First Name:', firstName); // accessing elements directly
console.log('Middle Name:', middleName); // accessing elements directly
console.log('Last Name:', lastName); // accessing elements directly

const [fName, , lName] = nameData; // skipping middle name
console.log('First Name:', fName); 
console.log('Last Name:', lName);

const [first, ...otherNames] = nameData; // rest operator to gather remaining elements
console.log('First Name:', first);
console.log('Other Names:', otherNames); // array of remaining elements

const personInfo = {
    firstName: 'Shiva',
    lastName: 'Katti',
    age: 30
};

personInfo.address = '123 Main St'; // adding new property using dot notation
console.log('Person Info:', personInfo);

personInfo['phone'] = '123-456-7890'; // adding new property using bracket notation
console.log('Person Info with phone:', personInfo);

personInfo.age = 31; // modifying existing property
console.log('Person Info with updated age:', personInfo);

personInfo['firstName'] = 'Shivanand'; // modifying existing property using bracket notation
console.log('Person Info with updated first name:', personInfo);

delete personInfo.phone; // deleting property
console.log('Person Info after deleting phone:', personInfo);

// maps and sets:

//---------------------------------------------------------------------------------------------------------------------------
//        Arrays                                  Sets                                Maps
//-------------------------------------------------------------------------------------------------------------------------
//1. Store(nested) data of any              Store(nested) data of any 
//  kind and lenght                         kind and lenght
//2. 

// working with sets

