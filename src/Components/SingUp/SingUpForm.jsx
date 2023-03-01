const SignUpForm = () => {
  return (
    <div>
      <form className='flex flex-col items-center'>
        <div>
          <label
            htmlFor='name'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Name'
            required
          />
        </div>
        {/*  */}
        <div className='my-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Email address
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='Email'
            required
          />
        </div>
        {/*  */}
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='•••••••••'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='confirm_password'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Confirm password
          </label>
          <input
            type='password'
            id='confirm_password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='•••••••••'
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
