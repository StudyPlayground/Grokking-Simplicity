function beforePrinter(user, phone) {
  console.log('USER PHONE:');
  console.log(`Country code Phone : ${phone.countryCode}`);
  console.log(`Phone area code: ${phone.areaCode}`);
  console.log(`Phone base number: ${phone.baseNumber}\n`);
  console.log('USER DATA:');
  console.log(`User name: ${user.name}`);
  console.log(`User lastname: ${user.lastName}`);
  console.log(`User DNI: ${user.dni}`);
  console.log(`User phone: ${user.email}`);
  console.log(`User email: ${user.phone}`);
}

function afterPrinter(user, phone) {
  console.log('USER PHONE:');
  console.log(`Country code Phone : ${phone.countryCode}`);
  console.log(`Phone: ${phone.formatPhone}\n`);
  console.log('USER DATA:');
  console.log(`User name: ${user.name}`);
  console.log(`User lastname: ${user.lastName}`);
  console.log(`User DNI: ${user.dni}`);
  console.log(`User email: ${user.phone}`);
}

class Phone {
  #unformattedNumber;
  #countryCode;
  #areaCode;
  #baseNumber;
  #formatPhone
  constructor(unformattedNumber) {
    this.#unformattedNumber = unformattedNumber;
    this.#countryCode = unformattedNumber.substring(0, 3);
    this.#areaCode = unformattedNumber.substring(3, 6);
    this.#baseNumber = `${unformattedNumber.substring(6, 9)} ${unformattedNumber.substring(9, 12)}`;
    this.#formatPhone = `${this.#countryCode} ${this.#areaCode} ${this.#baseNumber}`;
  }

  get countryCode() {
    return this.#countryCode;
  }
  get areaCode() {
    return this.#areaCode;
  }
  get baseNumber() {
    return this.#baseNumber;
  }
  get formatPhone() {
    return this.#formatPhone;
  }
}

class User {
  #name;
  #lastName;
  #dni;
  #email;
  #phone;
  constructor(name, lastName, dni, phone, email) {
    this.#name = name;
    this.#lastName = lastName;
    this.#dni = dni;
    this.#email = email;
    this.#phone = `${phone.countryCode} ${phone.areaCode} ${phone.baseNumber}`;
  }

  get name() {
    return this.#name;
  }
  get lastName() {
    return this.#lastName;
  }
  get dni() {
    return this.#dni;
  }
  get email() {
    return this.#email;
  }
  get phone() {
    return this.#phone;
  }
}

const phone1 = new Phone('+34635538973');
const user1 = new User('Fernando', 'Aparicio Galende', '12345678S', phone1, 'fernando.aparicio@guidesmiths.com');

beforePrinter(user1, phone1);
afterPrinter(user1, phone1);