// const ids = new Set([1, 2, 3]);
const ids = new Set(['Hi', 'From', 'Sets']);
ids.add(2);
// console.log(ids);

for(const entry of ids.entries()) {
    console.log(entry[0]);
}

// working with Maps:

const person1 = {name: 'Max'};
const person2 = {name: 'Manual'};

const personData = new Map([[person1, [{date: 'yest', price: 10}]]]);
console.log(personData);
console.log(personData.get(person1));