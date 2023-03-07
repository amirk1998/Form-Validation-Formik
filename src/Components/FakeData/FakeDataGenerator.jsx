import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { addNewUser } from '../../services/addNewUserService';
import { getAllUsers } from '../../services/getAllUsersService';

const generateFakeData = (numOfData) => {
  let dataArray = [];
  let dataObject = {};

  for (let i = 0; i < numOfData; i++) {
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
    // function generatePassword(
    //   length,
    //   hasUppercase,
    //   hasLowercase,
    //   hasNumbers,
    //   hasSymbols
    // ) {
    //   let password = '';
    //   let characters = '';
    //   // Define the character sets based on the requirements
    //   if (hasUppercase) {
    //     characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //   }
    //   if (hasLowercase) {
    //     characters += 'abcdefghijklmnopqrstuvwxyz';
    //   }
    //   if (hasNumbers) {
    //     characters += '0123456789';
    //   }
    //   if (hasSymbols) {
    //     // characters += '!@#$%^&*()_+-={}[]|:;<>,.?/';
    //     characters += '@$!%*?&';
    //   }
    //   // Generate the password using faker.js
    //   while (password.length < length) {
    //     password += faker.helpers.arrayElement(characters);
    //   }
    //   return password;
    // }

    // // Generate a random password with the following requirements:
    // // length: 12
    // // hasUppercase: true
    // // hasLowercase: true
    // // hasNumbers: true
    // // hasSymbols: true
    // const randomPassword = generatePassword(12, true, true, true, true);

    function generatePassword() {
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

      let password = '';
      password += uppercase.charAt(
        Math.floor(Math.random() * uppercase.length)
      );
      password += lowercase.charAt(
        Math.floor(Math.random() * lowercase.length)
      );
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      password += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );

      const remainingLength = 12 - password.length;
      const allChars = uppercase + lowercase + numbers + specialCharacters;
      for (let i = 0; i < remainingLength; i++) {
        password += allChars.charAt(
          Math.floor(Math.random() * allChars.length)
        );
      }

      return password;
    }

    const randomPassword = generatePassword();

    let randomNationality = '';
    const words = ['IR', 'GER', 'US'];

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      randomNationality = words[0];
    } else if (randomNumber === 1) {
      randomNationality = words[1];
    } else if (randomNumber === 2) {
      randomNationality = words[2];
    }

    const newData = {
      name: randomName,
      email: randomEmail,
      phoneNumber: randomPhoneNumber,
      password: randomPassword,
      passwordConfirm: randomPassword,
      gender: randomGender,
      nationality: randomNationality,
    };
    dataArray.push(newData);
  }
  return dataArray;
};

const saveFakeData = async (fakeData) => {
  try {
    await addNewUser(fakeData);
    console.log('Fake data saved to local database!');
  } catch (error) {
    console.error(error);
  }
};

export { generateFakeData, saveFakeData };
