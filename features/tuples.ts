const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 20];
const tea: Drink = ['brown', false, 0];

// why we are not going to use tuples a lot
// it's hard to understand the meaning of the values
const carSpecs: [number, number] = [300, 2000];

// better to use objects, they are self descriptive with key:value pairs
const carStats = {
    maxSpeed: 220,
    weight: 2000
};

// Tuples may be helpfull in case of working with CSV files
