import React from 'react'

const Card = ({data}) => {

    const Card = ({data})=> { 
        const {companyName, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType,postingDate, description} = data; 
    }
  return (
    <div>
      <h3>{data.jobTitle}</h3>
    </div>
  )
}

export default Card
