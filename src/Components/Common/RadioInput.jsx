import React from 'react';
const RadioInput = ({ formik, name, radioOptions }) => {
  return (
    <div className='flex items-center px-3 w-full border-gray-200 my-2 '>
      {radioOptions.map((item) => {
        return (
          <React.Fragment key={item.value}>
            <input
              id={item.value}
              type='radio'
              value={item.value}
              name={name}
              onChange={formik.handleChange}
              checked={formik.values[name] === item.value}
              className='w-8 h-8 text-purple-600 accent-purple-700 bg-gray-100 border-gray-300'
            />
            <label
              htmlFor={item.value}
              className='w-full py-2 mx-2 text-base font-medium text-gray-900  '
            >
              {item.label}
            </label>
          </React.Fragment>
        );
      })}

      {formik.errors[name] && formik.touched[name] && (
        <div className='text-red-500 mt-1 text-sm'>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
