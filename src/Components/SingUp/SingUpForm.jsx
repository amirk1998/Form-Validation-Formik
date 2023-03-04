import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is Required')
    .min(6, 'Name length is not valid'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is Required'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string()
    .required('Password is Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUpForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    // initialValues: initialValues,
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log(formik.values);

  return (
    <div className='h-screen w-1/2'>
      <form
        onSubmit={formik.handleSubmit}
        className=' flex flex-col items-center bg-gray-50 border-2 border-slate-300 shadow-md rounded-lg px-8 py-4'
      >
        {/* Name */}
        <div className='mt-1 w-[350px]'>
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
            {...formik.getFieldProps('name')}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
            placeholder='Name'
            required
          />
          {formik.errors.name && formik.touched.name && (
            <div className='text-red-500 mt-1 text-sm '>
              {formik.errors.name}
            </div>
          )}
        </div>
        {/* Email Address */}
        <div className='mt-6 w-[350px]'>
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
            {...formik.getFieldProps('email')}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
            placeholder='Email'
            required
          />
          {formik.errors.email && formik.touched.email && (
            <div className='text-red-500 mt-1 text-sm'>
              {formik.errors.email}
            </div>
          )}
        </div>
        {/* PhoneNumber */}
        <div className='mt-6 w-[350px]'>
          <label
            htmlFor='phoneNumber'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Phone Number
          </label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            {...formik.getFieldProps('phoneNumber')}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
            placeholder='Phone Number'
            required
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className='text-red-500 mt-1 text-sm '>
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        {/* Password */}
        <div className='mt-6 w-[350px]'>
          <label
            htmlFor='password'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            {...formik.getFieldProps('password')}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
            // placeholder='•••••••••'
            placeholder='Password'
            required
          />
          {formik.errors.password && formik.touched.password && (
            <div className='text-red-500 mt-1 text-sm'>
              {formik.errors.password}
            </div>
          )}
        </div>
        {/* Confirm Password */}
        <div className='my-6 w-[350px]'>
          <label
            htmlFor='passwordConfirm'
            className='block mb-2 text-lg font-medium text-gray-900'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            {...formik.getFieldProps('passwordConfirm')}
            className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
            // placeholder='•••••••••'
            placeholder='Confirm Password'
            required
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className='text-red-500 mt-1 text-sm'>
              {formik.errors.passwordConfirm}
            </div>
          )}
        </div>

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
