import React from 'react';
const RadioInput = ({ formik, name, radioOptions }) => {
  return (
    <div className='flex items-center pl-3'>
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
              className='w-4 h-4 text-purple-600 accent-purple-700 bg-gray-100 border-gray-300  '
            />
            <label
              htmlFor={item.value}
              className='w-full py-2 ml-2 text-sm font-medium text-gray-900 '
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
