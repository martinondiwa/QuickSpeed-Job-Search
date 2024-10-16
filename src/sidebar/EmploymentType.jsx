import React from 'react';
import InputField from '../components/InputField';

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
    <div>
        <label className='sidebar-label-container'>
            <input
                type="radio"
                name='location'
                value=""
                onChange={handleChange}
            />
            <span className='checkmark'></span> Any experience
        </label>

        <InputField handleChange={handleChange} 
        value="Full-Time" title="Full-Time" name="test" />
        <InputField handleChange={handleChange} 
        value="Temporary" title="Temporary" name="test" />
        <InputField handleChange={handleChange} 
        value="Part-Time" title="Part-Time" name="test" />
        
    </div>
</div>
  );
}

export default EmploymentType;
