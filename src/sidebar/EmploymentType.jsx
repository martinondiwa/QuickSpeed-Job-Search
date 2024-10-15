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
            <span className='checkmark'></span> Any 
        </label>

        <InputField handleChange={handleChange} 
        value="Internship" title="Internship" name="test" />
        <InputField handleChange={handleChange} 
        value="work Remotely" title="Work Remotely" name="test" />
        
    </div>
</div>
  );
}

export default EmploymentType;
