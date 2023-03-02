import { useState } from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const formik = useFormik({
    // initialValues: initialValues,
    initialValues,
  });
  console.log(formik.values);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted !!');
  };

  return (
    <div className='h-screen w-1/2'>
      <form
        onSubmit={submitHandler}
        className=' flex flex-col items-center bg-gray-50 border-2 border-slate-300 shadow-md rounded-lg px-8 py-4'
      >
        {/* Name */}
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
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Name'
            required
          />
        </div>
        {/* Email Address */}
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
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='Email'
            required
          />
        </div>
        {/* Password */}
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Password
          </label>
          <input
            type='text'
            id='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='•••••••••'
            required
          />
        </div>
        {/* Confirm Password */}
        {/* <div className='mb-6'>
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
        </div> */}
        <button
          type='submit'
          className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 '
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
