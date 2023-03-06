import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getOneUser } from '../../services/getOneUserService';
import Input from '../Common/Input';
import RadioInput from '../Common/RadioInput';
import FakeData from '../FakeData/FakeData';

const savedData = {
  name: 'AmirHossein',
  email: 'amir@test.com',
  phoneNumber: '09171234567',
  password: 'Amir102030@',
  passwordConfirm: 'Amir102030@',
  gender: '0',
  id: crypto.randomUUID(),
};

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
  gender: '',
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
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  gender: Yup.string().required('Gender is Required'),
});

const SignUpForm = () => {
  //
  const [formValues, setFormValues] = useState(null);

  const userID = 1;

  const radioOptions = [
    { label: 'male', value: '0' },
    { label: 'female', value: '1' },
  ];

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    // initialValues: initialValues,
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  useEffect(() => {
    getOneUser(userID)
      .then((res) => setFormValues(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='h-screen w-1/2'>
      <form
        onSubmit={formik.handleSubmit}
        className=' flex flex-col items-center bg-gray-50 border-2 border-slate-300 shadow-md rounded-lg px-8 py-4'
      >
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='email' label='Email' />
        <Input formik={formik} name='phoneNumber' label='Phone Number' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password Confirm'
          type='password'
        />
        {/* Radio Buttons */}
        <div className='flex items-center w-[350px] bg-gray-50 border-2 border-gray-300 rounded-lg text-sm font-medium text-slate-900 my-10 '>
          <RadioInput
            formik={formik}
            radioOptions={radioOptions}
            name='gender'
          />
        </div>

        {/* Load Data Button */}
        <div className='flex items-center justify-center gap-x-2'>
          {/* <button
            onClick={() => setFormValues(savedData)}
            className='focus:outline-none text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  '
          >
            Load Data
          </button> */}
          {/* Submit Button */}
          <button
            type='submit'
            disabled={!formik.isValid}
            className={
              formik.isValid
                ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 '
                : 'focus:outline-none text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  cursor-not-allowed'
            }
          >
            Submit Data
          </button>
        </div>
        <FakeData />
      </form>
    </div>
  );
};

export default SignUpForm;
