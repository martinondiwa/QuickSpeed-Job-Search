import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
    <div>
        <label className='sidebar-label-container'>
            <input
                type="radio"
                name='location'
                value=""
                onChange={handleChange}
            />
            <span className='checkmark'></span> All
        </label>

        <InputField handleChange={handleChange} value="london" title="London" name="location" />
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="location" />
        <InputField handleChange={handleChange} value="brussels" title="Brussels" name="location" />
        <InputField handleChange={handleChange} value="san Francisco" title="San Francisco" name="location" />
        <InputField handleChange={handleChange} value="boston" title="Boston" name="location" />
        <InputField handleChange={handleChange} value="madrid" title="Madrid" name="location" />
    </div>
    </div>
  )
}

export default JobPostingData
