import { Link } from 'react-router-dom'
import { getUser } from "../helpers/GlobalApi"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import arrowIcon from "../assets/images/Vector-6.svg";

import rating from "../assets/images/Group-26.png";

function UserDetails() {


  let { id } = useParams();
  const [ user, setUser] = useState({});


  
useEffect( () => {
  getUser(id).then(result => { 
    setUser(result)
  })
}, [])

  return (
    <>
     
<TopBar/>
<div className="content-row">
<div className="content-col-1">
    <SideBar/>
</div>
<div className="content-col-2">
<Link to={"/dashboard"}>
<div className="div-block-16"><img src={arrowIcon} loading="lazy" width="22" alt="" className="image-6"/>
        <div>Back to User</div>
      </div>
      </Link>
      <div className="div-block-17">
        <div className="text-block-4 dif">User Details</div>
        <div className="div-block-26">
          <div  className="filter-btn red">BLACKLIST USER</div>
          <div  className="filter-btn red blue">ACTIVATE USER</div>
        </div>
      </div>
      <div className="app-card details">
        <div className="div-block-18">
          <div className="div-block-19"><img src={user.picture} loading="lazy" style={{borderRadius: "50%"}} width="65" alt="" className="image-7"/>
            <div>
              <div className="text-block-8">{user.firstName} {user.lastName}</div>
              <div>LSQFf587g90</div>
            </div>
          </div>
          <div className="div-block-20">
            <div className="text-block-9">User’s Tier</div><img src={rating} loading="lazy" alt=""/>
          </div>
          <div className="div-block-21">
            <div className="text-block-8">₦200,000.00</div>
            <div className="text-block-10">9912345678/Providus Bank</div>
          </div>
        </div>
        <div className="div-block-22">
          <div className="text-block-11 active">General Details</div>
          <div className="text-block-11">Documents</div>
          <div className="text-block-11">Bank Details</div>
          <div className="text-block-11">Loans</div>
          <div className="text-block-11">Savings</div>
          <div className="text-block-11">App and System</div>
        </div>
      </div>
      <div className="app-card">
        <div className="div-block-25">
          <div className="text-block-12">Personal Information</div>
          <div className="div-block-23">
            <div className="div-block-24">
              <div className="text-block-13">FULL NAME</div>
              <div className="text-block-14">{user.firstName} {user.lastName}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">PHONE NUMBER</div>
              <div className="text-block-14">{user.phone}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">EMAIL ADDRESS</div>
              <div className="text-block-14">{user.email}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">BVN</div>
              <div className="text-block-14">{user.phone}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">GENDER</div>
              <div className="text-block-14">{user.gender}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">MARITAL STATUS</div>
              <div className="text-block-14">Single</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">CHILDREN</div>
              <div className="text-block-14">None</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">TYPE OF RESIDENCE</div>
              <div className="text-block-14">Parent’s Apartment</div>
            </div>
          </div>
        </div>
        <div className="div-block-25">
          <div className="text-block-12">Education and Employment</div>
          <div className="div-block-23">
            <div className="div-block-24">
              <div className="text-block-13">LEVEL OF EDUCATION</div>
              <div className="text-block-14">BSC</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">EMPLOYMENT STATUS</div>
              <div className="text-block-14">Employed</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">SECTOR OF EMPLOYMENT</div>
              <div className="text-block-14">Fintech</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">DURATION OF EMPLOYMENT</div>
              <div className="text-block-14">2 Years</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">OFFICE EMAIL</div>
              <div className="text-block-14">{user.email}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">MONTHLY INCOME</div>
              <div className="text-block-14">₦200,000.00- ₦400,000.00</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">LOAN REPAYMENT</div>
              <div className="text-block-14">40,000</div>
            </div>

          </div>
        </div>
        <div className="div-block-25">
          <div className="text-block-12">SOCIALS</div>
          <div className="div-block-23">
            <div className="div-block-24">
              <div className="text-block-13">TWITTER</div>
              <div className="text-block-14">@{user.firstName}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">FACEBOOK</div>
              <div className="text-block-14">{user.firstName} {user.lastName}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">INSTAGRAM</div>
              <div className="text-block-14">@{user.firstName}</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">BVN</div>
              <div className="text-block-14">07060780922</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">GENDER</div>
              <div className="text-block-14">Female</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">MARITAL STATUS</div>
              <div className="text-block-14">Single</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">CHILDREN</div>
              <div className="text-block-14">None</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">TYPE OF RESIDENCE</div>
              <div className="text-block-14">Parent’s Apartment</div>
            </div>
          </div>
        </div>
        <div className="div-block-25">
          <div className="text-block-12">GUARANTOR</div>
          <div className="div-block-23">
            <div className="div-block-24">
              <div className="text-block-13">FULL NAME</div>
              <div className="text-block-14">Grace Effiom</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">PHONE NUMBER</div>
              <div className="text-block-14">07060780922</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">EMAIL ADDRESS</div>
              <div className="text-block-14">grace@gmail.com</div>
            </div>
            <div className="div-block-24">
              <div className="text-block-13">RELATIONSHIP</div>
              <div className="text-block-14">Sister</div>
            </div>
 
          </div>
        </div>
      </div>
</div>
</div>
    </>
  );
}

export default UserDetails;
