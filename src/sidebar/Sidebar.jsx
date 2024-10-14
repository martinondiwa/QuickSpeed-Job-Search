import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPostingData from './JobPostingData';

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      {/* Location Filter */}
      <Location handleChange={handleChange} />
      {/* Salary Filter */}
      <Salary handleChange={handleChange} handleClick={handleClick} />
      {/* Job Posting Date Filter */}
      <JobPostingData handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
