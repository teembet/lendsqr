import filterIcon from "../assets/images/filter-results-button.svg";
import {useState} from "react"
import pagLeftIcon from "../assets/images/Vector-4.svg";
import pagRightIcon from "../assets/images/Vector-5.svg";
import moreIcon from "../assets/images/Vector-1.png"

import TableFilter from "./TableFilter";
import TableMore from "./TableMore";


function UserTable(props) {
console.log(props.users,"users")
    const [filterStatus, setFilterStatus] = useState(false);
 

    

    const toggleFilter = () => {
        setFilterStatus(!filterStatus)
      }
  
  return (
      <>
           <div className="app-card main-table">
               <div className="table-div">
      <table>
          <thead>
           <tr>
    <th ><div className="text-block-5">ORGANIZATION</div><img onClick={toggleFilter} src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
    <th ><div className="text-block-5">USERNAME</div><img onClick={toggleFilter} src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
    <th ><div className="text-block-5">EMAIL</div><img onClick={toggleFilter} src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
    <th ><div className="text-block-5">PHONE NUMBER</div><img onClick={toggleFilter} src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
    <th ><div className="text-block-5">DATE JOINED</div><img onClick={toggleFilter} src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
    <th ><div className="text-block-5">STATUS</div><img  onClick={toggleFilter}  src={filterIcon} loading="lazy" alt="" className="image-5"/></th>
  </tr>     
          </thead>
<tbody>
    {
        props.users.map(
            (item, index) => {
                return (

                  <tr key={index}>
    <td>{item.organisation}</td>
    <td>{item.firstName}</td>
    <td>{item.firstName + "@gmail.com"}</td>
    <td>09083838338</td>
    <td>23/09/22</td>
    <td>{ item.status == 0 ? <div className="status-chip inactive">Inactive</div> : 
     item.status == 1 ? <div className="status-chip pending">Pending</div> : 
     item.status == 2 ? <div className="status-chip danger">Inactive</div> : 
     item.status == 3 ? <div className="status-chip active">Active</div> : null
    }</td>
    <td><img style={{cursor:"pointer"}} onClick={() => {props.toogleMore(index)}} src={moreIcon} loading="lazy" alt=""/></td>
    { item.more ? <TableMore id = {item.id}/> : null }
  </tr>   
                )
            }
        )
    }

  
  </tbody>
</table>
{
    filterStatus ? <TableFilter/> : null
}

</div>
     
      </div>
      {
        props.users.map(
            (item, index) => {
                return (
      <div key={index} className="app-card mobile-table">
        <div className="div-block-14">
          <div className="text-block-7">.</div><img src={filterIcon} loading="lazy" alt="" className="image-5"/>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">ORGANIZATION</div>
          <div>{item.organisation}</div>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">USERNAME</div>
          <div>{item.firstName}</div>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">EMAIL</div>
          <div>{item.firstName + "@gmail.com"}</div>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">PHONE NUMBER</div>
          <div>09083838338</div>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">DATE JOINED</div>
          <div>23/09/22</div>
        </div>
        <div className="div-block-14">
          <div className="text-block-7">STATUS</div>
          { item.status == 0 ? <div className="status-chip inactive">Inactive</div> : 
     item.status == 1 ? <div className="status-chip pending">Pending</div> : 
     item.status == 2 ? <div className="status-chip danger">Inactive</div> : 
     item.status == 3 ? <div className="status-chip active">Active</div> : null
    }
        </div>
      </div>
                      )
                    }
                )
            }

      <div className="pagination">
        <div>
          <div className="text-block-6">Showing <span className="p-use">{props.pageLimit} </span> out of {props.totalUser}</div>
        </div>
        <div className="div-block-12">
          <div className="p-use arrow"><img onClick={props.previousPage} style={{ cursor: "pointer"}} src={pagLeftIcon} loading="lazy" alt=""/></div>
          <div className="div-block-13">
           {
               [...Array(props.pagelength)].map((item,index) => {
                    return (
                    
                        props.pageNum == index + 1 ?
                       <div className="pag-num active-num">{index + 1}</div> :
                       <div className="pag-num">{index + 1}</div>
                    
                    
                    
                    )
               }
              
              )
           }
            
          </div>
          <div className="p-use arrow"><img onClick={props.nextPage} style={{ cursor: "pointer"}} src={pagRightIcon} loading="lazy" alt=""/></div>
        </div>
      </div>
      </>

  );
}

export default UserTable;
