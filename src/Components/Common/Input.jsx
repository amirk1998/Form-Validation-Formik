const Input = ({ label, name, formik, type = 'text' }) => {
  return (
    <div className='mt-6 w-[350px]'>
      <label
        htmlFor='name'
        className='block mb-2 text-lg font-medium text-gray-900'
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
        placeholder={label}
        required
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className='text-red-500 mt-1 text-sm '>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
