import { faker } from '@faker-js/faker';

// const regularExpression =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();
const randomSexType = faker.name.sex();
let randomGender = '0';
if (randomSexType === 'male') {
  randomGender = '0';
} else if (randomSexType === 'female') {
  randomGender = '1';
}

const phoneNumberToNumber = (phoneNumber) => {
  // Remove any non-numeric characters from the string
  const numericString = phoneNumber.replace(/\D/g, '');

  // Convert the numeric string to a number using parseInt()
  const number = parseInt(numericString);

  return number;
};

const randomPhoneNumber = phoneNumberToNumber(
  faker.phone.number('####-###-####')
).toString();

// const randomPassword = faker.internet.password(10, true, regularExpression);

// Function to generate a random password with specific requirements
function generatePassword(
  length,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
) {
  let password = '';
  let characters = '';
  // Define the character sets based on the requirements
  if (hasUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (hasLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (hasNumbers) {
    characters += '0123456789';
  }
  if (hasSymbols) {
    characters += '!@#$%^&*()_+-={}[]|:;<>,.?/';
  }
  // Generate the password using faker.js
  while (password.length < length) {
    password += faker.helpers.arrayElement(characters);
  }
  return password;
}

// Generate a random password with the following requirements:
// length: 12
// hasUppercase: true
// hasLowercase: true
// hasNumbers: true
// hasSymbols: true
const randomPassword = generatePassword(12, true, true, true, true);

let userData = {
  name: randomName,
  email: randomEmail,
  phoneNumber: randomPhoneNumber,
  password: randomPassword,
  passwordConfirm: randomPassword,
  gender: randomGender,
};

export default userData;
