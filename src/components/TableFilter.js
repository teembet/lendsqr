
import dateIcon from "../assets/images/np_calendar_2080577_000000-1.svg"
function TableFilter() {
  return (
      <>


<div className="app-card filter">
          <div>
            <form>
              <div className="form-col"><label for="field" className="filter-label">Organisation</label>
              <select className="filter-input slect w-select font-check">
                  <option value="">Select one...</option>
                  <option value="First">First choice</option>
                  <option value="Second">Second choice</option>
                  <option value="Third">Third choice</option>
                </select></div>
              <div className="form-col">
                <label className="filter-label">Username</label>
              <input type="text" className="filter-input w-input font-check"  placeholder="User" /></div>
              <div className="form-col"><label className="filter-label">Email</label>
              <input type="password" className="filter-input w-input font-check"  placeholder="Email" /></div>
              <div className="form-col"><label for="Date" className="filter-label">Date</label>
                <div className="div-block-10">
                  <input type="text" className="filter-input w-input font-check"  name="Date" data-name="Date" placeholder="Date" id="Date"/>
                  <img src={dateIcon} loading="lazy" alt="" className="image-3"/></div>
              </div>
              <div className="form-col">
                <label className="filter-label">Phone Number</label>
                <input type="tel" className="filter-input w-input font-check"  placeholder="Phone Number" />
                </div>
              <div className="form-col">
                <label for="field-2" className="filter-label">Status</label>
                <select className="filter-input slect w-select font-check">
                  <option value="">Select one...</option>
                  <option value="First">First choice</option>
                  <option value="Second">Second choice</option>
                  <option value="Third">Third choice</option>
                </select></div>
            </form>
           
          </div>
          <div className="action-btn w-container">
            <div  className="filter-btn">Reset</div>
            <div  className="filter-btn filter">Filter</div>
          </div>
        </div>


      
      </>

  );
}

export default TableFilter;
