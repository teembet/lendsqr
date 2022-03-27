import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

import userCountIcon from "../assets/images/icon.png";
import activeUserIcon from "../assets/images/icon-1.png";
import userLoanIcon from "../assets/images/icon-2.png";
import userSavingsIcon from "../assets/images/icon-3.png";

import UserTable from "../components/UserTable";
import { getUsers } from "../helpers/GlobalApi"


function Dashboard() {


const [ users, setUsers] = useState([]);
const [page, setPage] = useState(1)
const [pageLimit, setPageLimit] = useState(0)
const [totalUser, setTotalUser] = useState(0)
const [pageNum, setPageNum] = useState(1)
const [pagelength, setPageLength] = useState(0)



useEffect( () => {

  getUsers(page).then(result => { 
 
  
    setPageLimit(result.limit);
    setTotalUser(result.total);
    setPageNum(result.page);
    var sub = result.total/result.limit;
    setPageLength(Math.round(sub))
    var orgArray = [
      "Apple",
      "Wells",
      "Amazon"
    ];
    var statusArray = [
      0,
      1,
      2,
      3
    ];
   const newData = result.data.map(item => {
      return{
           ...item,
           organisation: orgArray[Math.floor(Math.random()*orgArray.length)],
           status: statusArray[Math.floor(Math.random()*statusArray.length)],
           more: false
      }
    })
// indexing that array incase a row is to be selected. we dont have to loop through the array again
    let items=[];
    items =newData
       var mapItem= new Object;
       items.forEach(element => {
         mapItem[element.id]=element
       });

       localStorage.setItem("user",JSON.stringify(mapItem))
// indexing that array

  
    setUsers(newData)},error=>{
      console.log(error)
    })

}, [page])

const toogleMore = (index) => {
  users[index].more = !users[index].more;
  setUsers([...users]);
}

const nextPage = () => {
  if(page > pagelength){
    return false;
  }
  let newPage = page + 1
  setPage(newPage);
}

const previousPage = () => {
  if(page <= 0){
    return false;
  }
  let newPage = page - 1
  setPage(newPage);
}


  return (
    <div className="dashboard-bg">
<TopBar/>
<div className="content-row">
<div className="content-col-1">
    <SideBar/>
</div>
<div className="content-col-2">
      <div className="text-block-4">Users</div>
      <div className="summary-row">
        <div className="summary-col"><img src={userCountIcon} loading="lazy" alt="" className="summary-img"/>
          <div className="summary-title">USERS</div>
          <div className="summary-value">2,453</div>
        </div>
        <div className="summary-col"><img src={activeUserIcon} loading="lazy" alt="" className="summary-img"/>
          <div className="summary-title">ACTIVE USERS</div>
          <div className="summary-value">2,453</div>
        </div>
        <div className="summary-col"><img src={userLoanIcon} loading="lazy" alt="" className="summary-img"/>
          <div className="summary-title">USERS WITH LOANS</div>
          <div className="summary-value">12,453</div>
        </div>
        <div className="summary-col"><img src={userSavingsIcon} loading="lazy" alt="" className="summary-img"/>
          <div className="summary-title">USERS WITH SAVINGS</div>
          <div className="summary-value">102,453</div>
        </div>
      </div>
<UserTable users= {users} toogleMore={toogleMore} pageLimit={pageLimit} pageNum={pageNum} pagelength = {pagelength} totalUser={totalUser} nextPage={nextPage} previousPage={previousPage}/>
    </div>
</div>
    </div>
  );
}

export default Dashboard;
