const SelectComponent = ({ selectOptions, name, formik }) => {
  return (
    <div className='mt-3 mb-6 w-[350px]'>
      <select
        name={name}
        id={name}
        {...formik.getFieldProps(name)}
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:border-blue-500 block w-full p-2.5 '
      >
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className='text-red-500 mt-1 text-sm '>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
