import { Link } from 'react-router-dom'
import viewIcon from "../assets/images/np_view_1214519_000000-1.svg";
import blackListIcon from "../assets/images/Vector-2.svg";
import activateIcon from "../assets/images/Vector-3.svg";

function TableMore(props) {
  return (
      <>
        <div className="app-card more">
          <Link to={"/user/"+ props.id}>
          <div className="div-block-11"><img src={viewIcon} loading="lazy" alt="" className="image-4"/>
            <div>View Details</div>
          </div>
          </Link>

          <div className="div-block-11"><img src={blackListIcon} loading="lazy" alt="" className="image-4"/>
            <div>Blacklist User</div>
          </div>
        
   
          <div className="div-block-11"><img src={activateIcon} loading="lazy" alt="" className="image-4"/>
            <div>Activate User</div>
          </div>
       
        </div>

      </>

  );
}

export default TableMore;
