import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import backgroundImage from '../Image/Search_button.png';

const NoticePeriodFilter = () => {
  const [noticePeriod, setNoticePeriod] = useState(1); // Initial notice period value
}
  const handleNoticePeriodChange = (event) => {
    setNoticePeriod(parseInt(event.target.value));
  };
  function J4d_Filter() {
    const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range values
  
    const handlePriceChange = (value) => {
      setPriceRange(value);
    };
    const [noticePeriod, setNoticePeriod] = useState(1);

    const handleNoticePeriodChange = (event) => {
      setNoticePeriod(parseInt(event.target.value));
  return (
    <div className='Notice_Period'>
      <label htmlFor="noticePeriod">Notice Period (months):</label>
      <input
        type="range"
        id="noticePeriod"
        name="noticePeriod"
        min="1"
        max="5"
        step="1"
        value={noticePeriod}
        onChange={handleNoticePeriodChange}
      />
      <div className='ScrollBar'>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index + 1 === noticePeriod ? 'selected' : ''}>
            
          </span>
        ))}
      </div>
    </div>
  );
};

const RequiredExperienceFilter = () => {
  const [requiredExperience, setRequiredExperience] = useState(0); // Initial required experience value

  const handleRequiredExperienceChange = (event) => {
    setRequiredExperience(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="requiredExperience">Required Experience (years): {requiredExperience}</label>
      <input
        type="range"
        id="requiredExperience"
        name="requiredExperience"
        min="0"
        max="10"
        step="1"
        value={requiredExperience}
        onChange={handleRequiredExperienceChange}
      />
      <div>
        {Array.from({ length: 11 }, (_, index) => (
          <span key={index} className={index === requiredExperience ? 'selected' : ''}>
            
          </span>
        ))}
      </div>
    </div>
  );
};



  return (
    // J4d filter starts here
    <div className="j4d_filter">
      <div className="j4d_filter_headsection">
        <h3>Filter</h3>
        <p>Clear All</p>
      </div>
      <div className="J4d_filter_headsection_position">
        Position
        <br />
        <input
          size={42}
          type="text"
          name="position"
          placeholder="Ex: SDE, Blockchain, Fullstack,etc "
          //   style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </div>
      <div className="J4d_filter_headsection_location">
        Location
        <select name="Location">
          <option value=""> Type Location Here | </option>
          <hr />
          <option value="option1"> Banglore</option>
          <hr />
          <option value="option2">Hyderabad</option>
          <hr />
          <option value="option3">Gujarat</option>
          <hr />
          <option value="option3">Delhi</option>
        </select>
      </div>
      <div className="J4d_filter_headsection_availablity">
        Availablity
        <div className="J4d_filter_headsection_availablity_section">
          <div className="J4d_filter_headsection_availablity_section_1">
            <div   className='J4d_filter_headsection_availablity_section_1_checkbox'>
              <input type="checkbox" />
              <label> Full Time </label>
            </div>
            <div className='J4d_filter_headsection_availablity_section_1_checkbox' >
              <input type="checkbox" />
              <label> Part Time </label>{' '}
            </div>
            <div className='J4d_filter_headsection_availablity_section_1_checkbox'>
              
              <input type="checkbox" />
              <label> Night Shift </label>
            </div>
          </div>
          <div className="J4d_filter_headsection_availablity_section_1">
            <div className='J4d_filter_headsection_availablity_section_1_checkbox_'>
              <input type="checkbox" />
              <label> Freelance </label>
            </div>
            <div className='J4d_filter_headsection_availablity_section_1_checkbox_'>
              {' '}
              <input type="checkbox" />
              <label> Internship </label>
            </div>
            <div className='J4d_filter_headsection_availablity_section_1_checkbox_'>
              {' '}
              <input type="checkbox" />
              <label> Flexible </label>
            </div>
          </div>
        </div>
      </div>
      <div className="J4d_filter_headsection_mode">
        Mode
        <br />
        <select name="mode">
          <option value=""> In office </option>
          <hr />
          <option value="option1">In-office</option>
          <hr />
          <option value="option2">Hybrid</option>
          <hr />
          <option value="option3">Remote</option>
        </select>
      </div>
      <div className="J4d_filter_headsection_jobs">
        Jobs You Might Like
        <div className="J4d_filter_headsection_jobs_mode">
          <div className="J4d_filter_headsection_jobs_mode_section">
            <input type="radio" name="options" value="option1" />
            <label> Best Matches </label>{' '}
          </div>
          <div className="J4d_filter_headsection_jobs_mode_section">
            <input type="radio" name="options" value="option2" />
            <label> Most Recent </label>
          </div>
          <div className="J4d_filter_headsection_jobs_mode_section">
            <input type="radio" name="options" value="option3" />
            <label> Women Perks </label>
          </div>
        </div>
      </div>
      <div className="J4d_filter_headsection_price">
        <div className="j4d_salary">Salary
        </div>
        <div className="range_text">Set Range
        </div>
        <div className="j4d_filter_salary_range">
        <div className="j4d_filter_salary_range_min ">{priceRange[0]}</div>
        <div className="j4d_filter_salary_range_bar ">
          <Slider
            min={0}
            max={100}
            range
            value={priceRange}
            onChange={handlePriceChange}
          />
        </div>
        <div className="j4d_filter_salary_range_max ">{priceRange[1]}</div>
      </div>
        
      </div>
      <div className="J4d_filter_headsection_sort">
        Sort
        <br />
        <select name="sort">
          <option value="option0"> Relevance </option>
          <hr />
          <option value="option1">Highest Paid First</option>
          <hr />
          <option value="option2">Lowest Paid First</option>
        </select>
      </div>
      <div className="J4d_filter_headsection_Extras">
        Package Extras
        <div className="J4d_filter_headsection_Extras_package">
          <div className="J4d_filter_headsection_availablity_Extras_package_1">
            <div   className='J4d_filter_headsection_availablity_Extras_package_1_checkbox'>
              <input type="checkbox"
               style={{ borderRadius: '10px' }} 
                width={20}
               />
              <label> Bonus Pay </label>
            </div>
            <div className='J4d_filter_headsection_availablity_Extras_package_1_checkbox' >
              <input type="checkbox"
               style={{ borderRadius: '10px' }} 
                width={20} />
              <label> Stocks/ESOPS  </label>{' '}
            </div>
            <div className='J4d_filter_headsection_availablity_Extras_package_1_checkbox'>
              
              <input type="checkbox"
               style={{ borderRadius: '10px' }} 
                width={20} />
              <label> WFH Benefits </label>
            </div>
            <div className='J4d_filter_headsection_availablity_Extras_package_1_checkbox'>
              
              <input type="checkbox" 
               style={{ borderRadius: '10px' }} 
              width={20} />
              <label> Additional Perks </label>
            </div>
          </div>
         
        </div>
      </div>
      
      <div className="J4d_filter_headsection_Extras_prefrences">
        Extra Preferences
        <br />
        <div>
          <input type="checkbox" />
          <label> Women Only Jobs </label>
        </div>
      </div>
      <div>
        <NoticePeriodFilter />
        </div>
        <div>
        <RequiredExperienceFilter />
      </div>
    </div>
  );
}


export default J4d_Filter;