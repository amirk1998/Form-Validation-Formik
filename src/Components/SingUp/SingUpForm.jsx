import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { getOneUser } from '../../services/getOneUserService';
import Input from '../Common/Input';
import RadioInput from '../Common/RadioInput';
import SelectComponent from '../Common/SelectComponent';
import FakeData from '../FakeData/FakeData';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
  gender: '',
  nationality: '',
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./?><-]).{8,}$/;

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
  password: Yup.string().required('Password is Required').matches(
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    passwordRegex,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
  ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  gender: Yup.string().required('Gender is Required'),

  nationality: Yup.string().required('Select Nationality'),
});

const SignUpForm = () => {
  //
  const [formValues, setFormValues] = useState(null);

  const userID = 3;

  const radioOptions = [
    { label: 'Male', value: '0' },
    { label: 'Female', value: '1' },
  ];

  const selectOptions = [
    { label: 'select nationality ...', value: '' },
    { label: 'Iran', value: 'IR' },
    { label: 'Germany', value: 'GER' },
    { label: 'USA', value: 'US' },
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
        <div className='flex items-center justify-around w-[350px] bg-gray-50 border-2 border-gray-300 rounded-lg  font-medium text-slate-900 my-10 px-2 '>
          <RadioInput
            formik={formik}
            radioOptions={radioOptions}
            name='gender'
          />
        </div>

        {/* Select Nationality */}
        <SelectComponent
          formik={formik}
          selectOptions={selectOptions}
          name='nationality'
        />

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
