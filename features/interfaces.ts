interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date('2000-12-12'),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const myDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 20,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
