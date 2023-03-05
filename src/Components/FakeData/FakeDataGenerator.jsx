import { faker } from '@faker-js/faker';
import { addNewUser } from '../../services/addNewUserService';

const generateFakeData = (numOfData) => {
  let dataArray = [];
  let data = {};

  for (let i = 0; i < numOfData; i++) {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    const address = faker.address.streetAddress();
    const newData = { name, email, phone, address };
    dataArray.push(newData);
  }
  // dataArray.map((data) => {});
  return data;
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
