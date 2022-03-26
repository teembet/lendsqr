import {useState} from "react"
import {Link} from "react-router-dom"
import Search from "../assets/images/Vector.svg";
import Logo from "../assets/images/login-logo.svg";
import MenuIcon from "../assets/images/ant-design_menu-outlined-1.svg";
import DropDownIcon from "../assets/images/Vector_1.svg"
import NotificationIcon from "../assets/images/Vector.png"
import orgIcon from "../assets/images/briefcase-1.svg"
import dropdownIcon2 from "../assets/images/Vector_2.svg"
import dashboardIcon from "../assets/images/home-1.svg"
import userIcon from "../assets/images/user-friends-1.svg"
import guarantorIcon from "../assets/images/users-1.svg"
import loanIcon from "../assets/images/sack-1.svg"
import userIcon2 from "../assets/images/handshake-regular-1.svg"

import savingsIcon from "../assets/images/piggy-bank-1.svg"
import lrequestIcon from "../assets/images/Group-104-1.svg"
import whitelistIcon from "../assets/images/user-check-1.svg"
import karmaIcon from "../assets/images/user-times-1.svg"
import orgIcon2 from "../assets/images/briefcase-1_1.svg"
import lproductIcon from "../assets/images/Group-104-1.svg"
import lsavingsIcon from "../assets/images/np_bank_148501_000000-1.svg"
import feeIcon from "../assets/images/coins-solid-1.svg"
import transIcon from "../assets/images/icon.svg"
import servIcon from "../assets/images/galaxy-1.svg"
import servAccIcon from "../assets/images/user-cog-1.svg"
import settlementIcon from "../assets/images/scroll-1.svg"
import reportIcon from "../assets/images/chart-bar-2.svg"
import prefIcon from "../assets/images/sliders-h-1.svg"
import pricingIcon from "../assets/images/badge-percent-1.svg"
import auditIcon from "../assets/images//clipboard-list-1.svg"
import systIcon from "../assets/images/tire-1.svg"
import logoutIcon from "../assets/images/sign-out-1.svg"

function TopBar() {

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
<> 
{
mobileMenu ?
<div className="menu-modal">
    <div onClick={() => { setMobileMenu(false)}} className="close-btn w-inline-block" >
      <div>CLOSE MENU</div>
    </div>
    <div className="div-block-15">
      <div className="profile-avater"></div>
      <div className="user-info">
        <div className="user-name">Adedeji</div>
      </div>
    </div>
    <Link to="#" className="side-nav org w-inline-block"><img src={orgIcon} loading="lazy" alt="" className="side-nav-icon"/>
      <div className="side-bar-text">Switch Organization</div><img src={dropdownIcon2} loading="lazy" alt=""/>
    </Link>
    <Link to="#" className="side-nav w-inline-block"><img src={dashboardIcon} loading="lazy" alt="" className="side-nav-icon"/>
      <div>Dashboard</div>
    </Link>
    <div className="nav-group">
      <div className="div-block-5">
        <div className="side-nav-label">CUSTOMERS</div>
      </div>
      <Link to="#" className="side-nav nav-active w-inline-block"><img src={userIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Users</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={guarantorIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Guarantors</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={loanIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Loans</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={userIcon2} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Decision Models</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={savingsIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Savings</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={lrequestIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Loan Requests</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={whitelistIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Whitelist</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={karmaIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Karma</div>
      </Link>
    </div>
    <div className="nav-group">
      <div className="div-block-5">
        <div className="side-nav-label">BUSINESSES</div>
      </div>
      <Link to="#" className="side-nav w-inline-block"><img src={orgIcon2} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Organization</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={lproductIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Loan Products</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={lsavingsIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Savings Products</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={feeIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Fees and Charges</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={transIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Transactions</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={servIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Services</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={servAccIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Service Account</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={settlementIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Settlements</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={reportIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Reports</div>
      </Link>
    </div>
    <div className="nav-group">
      <div className="div-block-5">
        <div className="side-nav-label">SETTINGS</div>
      </div>
      <Link to="#" className="side-nav w-inline-block"><img src={prefIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Preferences</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={pricingIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Fees and Pricing</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={auditIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Audit Logs</div>
      </Link>
      <Link to="#" className="side-nav w-inline-block"><img src={systIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div>Systems Messages</div>
      </Link>
    </div>
    <div className="div-block-6">
      <Link to="#" className="side-nav w-inline-block"><img src={logoutIcon} loading="lazy" alt="" className="side-nav-icon"/>
        <div className="side-bar-text">Logout</div>
      </Link>
      <div className="div-block-5 version">
        <div className="text-block-3">v1.2.0</div>
      </div>
    </div>
  </div>
 : null
}
<div className="app-nav">
    <div className="app-nav-col-1"><img src={Logo} loading="lazy" width="137" alt="" className="logo"/>
      <div className="form-block-2 w-form">
  
          <div className="div-block-4">
            <input type="email" className="search-textfield w-input" placeholder="Search for anything" id="email" required=""/>
            <div className="search-btn">
              <img src={Search} loading="lazy" alt=""/></div>
          </div>
      
      </div>
    </div>
    <div className="app-col-2">
      <div className="nav-link">Docs</div><img src={NotificationIcon} loading="lazy" alt="" className="nav-icon"/>
      <div className="profile-avater"></div>
      <div className="user-info">
        <div className="user-name">Adedeji</div><img src={DropDownIcon} loading="lazy" alt="" className="drop-down-icon"/>
      </div>
    </div>
  </div>
  <div className="app-nav mobile"><img src={Logo} loading="lazy" width="137" alt="" className="logo" /><img onClick={() => { setMobileMenu(true)}} src={MenuIcon} loading="lazy" width="32" alt=""/></div>
</>
  );
}

export default TopBar;