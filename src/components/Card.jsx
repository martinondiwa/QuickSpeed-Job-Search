import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const {
        companyName,
        jobTitle,
        companyLogo,
        minPrice,
        maxPrice,
        salaryType,
        jobLocation,
        employmentType,
        postingDate,
        description
    } = data;

    return (
        <section className='card'>
            <Link to="/" className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt={companyName} />
                <div>
                    <h3 className='text-primary mb-1'>{companyName}</h3>
                    <p>{jobTitle}</p>
                    <p>{jobLocation}</p>
                    <p>{employmentType}</p>
                    <p>{minPrice} - {maxPrice} ({salaryType})</p>
                    <p>{postingDate}</p>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    );
}

export default Card;
