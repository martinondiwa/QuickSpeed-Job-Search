import React from 'react';
import { Link } from 'react-router-dom';
import { PiMapPinLineFill } from "react-icons/pi";
import { GiAlarmClock } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";


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
                    <h2 className='text-lg font-semibold mb-2'>{jobTitle}</h2>
                    <div className='flex'>
                     <span className='flex items-center gap-2'><PiMapPinLineFill />{jobLocation}</span>
                     <span className='flex items-center gap-2'><GiAlarmClock />{employmentType}</span>
                     <span className='flex items-center gap-2'><HiCurrencyDollar />{minPrice}-{maxPrice}k</span>
                     <span className='flex items-center gap-2'><SlCalender />{postingDate}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    );
}

export default Card;
