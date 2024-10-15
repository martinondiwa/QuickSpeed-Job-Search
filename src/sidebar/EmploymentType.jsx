import React from 'react';
import InputField from '../components/InputField';

const EmploymentType = ({handleChange}) => {
  return (
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
    <InputField handleChange={handleChange} 
    value="work Remotely" title="Work Remotely" name="test" />
    
</div>
  );
}

export default EmploymentType;
