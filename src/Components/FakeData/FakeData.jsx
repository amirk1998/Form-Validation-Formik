import userData from '../../../data/FakeUserData';
import { addNewUser } from '../../services/addNewUserService';
const FakeData = () => {
  const postUser = async () => {
    try {
      await addNewUser(userData);
      console.log('Data added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={postUser}
        className='focus:outline-none text-gray-800 bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2  '
      >
        Add Fake Data
      </button>
    </div>
  );
};

export default FakeData;
