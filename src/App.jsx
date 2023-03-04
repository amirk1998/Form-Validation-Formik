import { useState } from 'react';
import SignUpForm from './Components/SingUp/SingUpForm';

function App() {
  return (
    <div className='App flex flex-col items-center bg-gray-100 w-full h-full'>
      <header className='text-4xl text-slate-800 mt-4 mb-8 font-semibold '>
        Form Validation
      </header>
      <SignUpForm />
    </div>
  );
}

export default App;
