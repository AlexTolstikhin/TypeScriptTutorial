const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const empty: string[] = []; // add type annotation in case array is empty

const dates = [new Date(), new Date()];

const carsByYear: string[][] = [];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(1);

// Help with 'map'
carMakers.map((car: string): string => {
    // typescript helps with data type methods
    return car.italics();
});

// Flexibale types
const importantDates: (Date | string | number)[] = [
    new Date(),
    '2020/12/31',
    '2013/12/01',
    123
];
