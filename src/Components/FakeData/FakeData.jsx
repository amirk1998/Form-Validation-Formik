import { useState } from 'react';
import { generateFakeData, saveFakeData } from './FakeDataGenerator';

const FakeData = (props) => {
  const [loading, setLoading] = useState(false);
  const { numOfData } = props;
  const [fakeData, setFakeData] = useState([]);
  const handleGenerateData = () => {
    console.log('Post User');
    const data = generateFakeData(5);
    setFakeData(data);
    saveFakeData(data);
  };
  return (
    <div>
      <button
        disabled={loading}
        onClick={handleGenerateData}
        className='focus:outline-none text-gray-800 bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2'
      >
        {loading ? 'Adding...' : 'Generate Data'}
      </button>
    </div>
  );
};

export default FakeData;
