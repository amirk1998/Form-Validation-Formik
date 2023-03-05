import userData from './FakeUserData';
import { addNewUser } from '../../services/addNewUserService';
import { useState } from 'react';
const FakeData = () => {
  const [loading, setLoading] = useState(false);

  const postUser = async () => {
    try {
      setLoading(true);
      await addNewUser(userData);
      console.log('Data added');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={loading}
        onClick={postUser}
        className='focus:outline-none text-gray-800 bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2  '
      >
        {loading ? 'Adding...' : 'Add Fake Data'}
      </button>
    </div>
  );
};

export default FakeData;
