const getAnimalEmoji = animal => {
  switch (animal) {
    case 'dog':
      return '🐶';
    case 'cat':
      return '🐱';
    case 'frog':
      return '🐸';
    case 'panda':
      return '🐼';
    case 'giraffe':
      return '🦒';
    case 'monkey':
      return '🐵';
    case 'unicorn':
      return '🦄';
    case 'dragon':
      return '🐲';
  }
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  const ANIMALS = ['dog', 'cat'];
  if (ANIMALS.includes(animal)) {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  if (!animal) {
    return 'No animal';
  }
  if (!animal.type) {
    return 'No animal type';
  }
  if (!animal.name) {
    return 'No animal name';
  }
  if (!animal.gender) {
    return 'No animal gender';
  }
  return `${animal.name} is a ${animal.gender} ${animal.type}`;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  //NOTE 위에 있는 getAnimalEmoji 함수의 개선된부분과 동일하게 되어 있는데 어떻게 개선해야할지 고민중
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

const printVegetableName = vegetable => {
  if (typeof vegetable === 'object' && vegetable.hasOwnProperty('name')) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
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

const model = getDeepProperty(car, ['model']) || 'default model';

const street = getDeepProperty(car, ['manufacturer', 'address', 'street']) || 'default street';

const phoneNumber = getDeepProperty(car, ['manufacturer', 'phoneNumber']);
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (getDeepProperty(car, ['manufacturer', 'address', 'state']) === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());

//NOTE utils
function getDeepProperty (obj, propertyList) {
  const key = propertyList[0];
  if (typeof obj === 'object') {
    if (obj.hasOwnProperty(key)) {
      return getDeepProperty(obj[key], propertyList.slice(1));
    } else {
      return undefined;
    }
  }
  return obj;
}