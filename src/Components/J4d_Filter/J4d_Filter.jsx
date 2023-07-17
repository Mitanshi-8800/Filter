import backgroundImage from '../Image/Search_button.png';

function J4d_Filter(){
    return(
        // J4d filter starts here
        <div className="j4d_filter">
         <div className="j4d_filter_headsection">
         <h3>Filter</h3>
         <p>Clear All</p>
        </div> 
        <div className="J4d_filter_headsection_position"> Position <br/>
         <input
          size={42}
          type="text"
          name="position"
          placeholder="Ex: SDE, Blockchain, Fullstack,etc "
        //   style={{ backgroundImage: `url(${backgroundImage})` }} 
        />
      </div>
    <div className='J4d_filter_headsection_location'> Location
      <select name="Location" >
      <option value=""> Type Location Here | </option>
          <hr/>
          <option value="option1"> Banglore</option>
          <hr/>
          <option value="option2">Hyderabad</option>
          <hr/>
          <option value="option3">Gujarat</option>
          <hr/>
          <option value="option3">Delhi</option>
        </select>
    </div>
      <div className='J4d_filter_headsection_availablity'> Availablity
     <div className='J4d_filter_headsection_availablity_section'>
    <div className='J4d_filter_headsection_availablity_section_1' >
    <div><input
          type="checkbox" />
       <label> Full Time </label>
    </div>
    <div>
      <input
          type="checkbox" />
       <label> Part Time </label> </div>
      <div> <input
          type="checkbox" />
       <label> Night Shift </label>
       </div>
    </div>
    <div className='J4d_filter_headsection_availablity_section_1'>
    <div>
    <input
          type="checkbox" />
       <label> Freelance </label>
       </div>
     <div> <input
          type="checkbox" />
       <label> Internship </label>
       </div>
     <div> <input
          type="checkbox"  />
       <label> Flexible </label>
       </div>
    </div>
     </div>
      </div>
      <div className='J4d_filter_headsection_mode'> Mode <br />
        <select name="mode" >
          <option value="">  In office </option>
          <hr/>
          <option value="option1">In-office</option>
          <hr/>
          <option value="option2">Hybrid</option>
          <hr/>
          <option value="option3">Remote</option>
        </select>

      </div>
      <div className='J4d_filter_headsection_jobs'>
      Jobs You Might Like
      <div className='J4d_filter_headsection_jobs_mode'>
      <div className='J4d_filter_headsection_jobs_mode_section'>
      <input
          type="radio"
          name="options"
          value="option1"
      />
      <label> Best Matches </label> </div>
    <div className='J4d_filter_headsection_jobs_mode_section'> 
    <input
          type="radio"
          name="options"
          value="option2"
      /> 
       <label> Most Recent </label></div>
      <div className='J4d_filter_headsection_jobs_mode_section'>
      <input
          type="radio"
          name="options"
          value="option3"
      />
    <label>  Women Perks </label></div>
  </div>
</div>
<div className='J4d_filter_headsection_sort'> Sort <br/>
 <select name='sort' >
          <option value="option0">  Relevance </option>
          <hr/>
          <option value="option1">Highest Paid First</option>
          <hr/>
          <option value="option2">Lowest Paid First</option>

  </select>
</div>
<div className='J4d_filter_headsection_Extras'> Package Extras <br/>
<div className='J4d_filter_headsection_Extras_prefences' >
<div className='J4d_filter_headsection_Extras_1' ><input
          type="checkbox" />
       <label> Bonus Pay </label>
    </div>
    <div className='J4d_filter_headsection_Extras_1'>
      <input
          type="checkbox" />
       <label>Stocks/ESOPS </label> </div>
      <div className='J4d_filter_headsection_Extras_1'>  <input
          type="checkbox" />
       <label> WFH Benefits </label>
       </div>
       <div className='J4d_filter_headsection_Extras_1'> <input
          type="checkbox" />
       <label> Additional Perks </label>
       </div>
</div>
</div>
 <div className='J4d_filter_headsection_Extras_prefrences_1'> Extra Prefrences <br/>
 <div className='J4d_filter_headsection_Extras_prefrences_text' ><input
          type="checkbox" />
       <label> Women Only Jobs </label>
    </div>
 </div>
</div>
    );
}
export default J4d_Filter;