import { Sorter } from './sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([9, 8, 7, 6, 5, 4, 3, 2, 1]);
const characters = new CharactersCollection('dcba');

const sorter = new Sorter(numberCollection);
const sortString = new Sorter(characters);
sortString.sort();
console.log(characters.data);

sorter.sort();

console.log(numberCollection.data);
