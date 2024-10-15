import React from 'react';
import InputField from '../components/InputField';

const Workexperience = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div>
        <label className='sidebar-label-container'>
            <input
                type="radio"
                name='location'
                value=""
                onChange={handleChange}
            />
            <span className='checkmark'></span> Any Experience
        </label>

        <InputField handleChange={handleChange} 
        value="Internship" title="Internship" name="test" />
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="location" />
        <InputField handleChange={handleChange} value="brussels" title="Brussels" name="location" />
        <InputField handleChange={handleChange} value="san Francisco" title="San Francisco" name="location" />
        <InputField handleChange={handleChange} value="boston" title="Boston" name="location" />
        <InputField handleChange={handleChange} value="madrid" title="Madrid" name="location" />
    </div>
</div>
  );
}

export default Workexperience;
