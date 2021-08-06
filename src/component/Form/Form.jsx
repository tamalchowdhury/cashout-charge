import { useState } from 'react';
const Form = (props) => {
  const [value, updateValue] = useState();

  const handleFormSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handleFormSubmit}>
      <div id='calc_area'>
        <input
          type='number'
          name='amount'
          className='amount'
          value={value}
          onChange={(e) => updateValue(e.value)}
          autoFocus={true}
        />
        <button className='calc_button'>✔ Calculate</button>
      </div>
    </form>
  );
};

export default Form;
