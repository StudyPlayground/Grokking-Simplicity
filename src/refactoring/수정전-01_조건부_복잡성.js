// 01. mapping
const AnimalEmojiMap = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};

const getAnimalEmoji = (animal) => {
  return AnimalEmojiMap[animal];
};
console.log(getAnimalEmoji('dragon'));

// 02. includes
const MY_ANIMAL = ['dog', 'cat'];
const printMyAnimal = (animal) => {
  MY_ANIMAL.includes(animal) && console.log(`I have a ${animal}`);
};

console.log(printMyAnimal('dog'));

//03. find
const ANIMAL_PROPERTIES = ['type', 'name', 'gender'];

const hasProperty = (obj, key) => Object.keys(obj).includes(key);

const getAnimalDetails = (animal) => {
  if (typeof animal !== 'object') {
    return 'No animal';
  }

  const missingProperty = ANIMAL_PROPERTIES.find(
    (property) => !hasProperty(animal, property)
  );

  return missingProperty
    ? `No animal ${missingProperty}`
    : `${animal.name} is a ${animal.gender} ${animal.type}`;
};

console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

//04. 01처럼 mapping 하면 안되나...?
const printFruits = (color) => {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

//05. 논리 연산자
const printVegetableName = (vegetable) => {
  const vegetableName = (vegetable && vegetable.name) || 'unknown';
  console.log(vegetableName);
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA',
    },
  },
};

const model = (car && car.model) || 'default model';

const street =
  (car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.street) ||
  'default street';

const phoneNumber =
  car &&
  car.manufacturer &&
  car.manufacturer.address &&
  car.manufacturer.phoneNumber;

console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (
    car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.state === 'USA'
  ) {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
