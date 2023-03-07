import React from 'react';
const CheckBoxInput = ({ formik, name, checkBoxOptions }) => {
  return (
    <div className='grid grid-cols-3 items-center px-6 py-4 gap-y-4 border-2 border-gray-300 rounded-lg mt-2 mb-6 w-[350px]'>
      {checkBoxOptions.map((item) => {
        return (
          <div key={item.value} className='flex items-center'>
            <input
              id={item.value}
              type='checkbox'
              value={item.value}
              name={name}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)}
              className='w-6 h-6 text-purple-600 accent-purple-700 bg-gray-100 border-gray-300'
            />
            <label
              htmlFor={item.value}
              className='w-full py-2 mx-2 text-base font-medium text-gray-900  '
            >
              {item.label}
            </label>
          </div>
        );
      })}

      {formik.errors[name] && formik.touched[name] && (
        <div className='text-red-500 mt-1 text-sm'>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CheckBoxInput;
