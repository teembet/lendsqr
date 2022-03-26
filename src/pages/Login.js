import loginLogo from "../assets/images/login-logo.svg";
import loginImg from "../assets/images/pablo-sign-in-1.jpg";
import { Link }  from "react-router-dom"
function Login() {
  return (
      <>
      <div className="app-login-wrapper">
    <div className="login-col-1">
      <img src={loginLogo} loading="lazy" alt="" className="image"/>
      <img src={loginImg} loading="lazy" width="694"  alt="" className="image-2"/>
      </div>
    <div className="login-col-2">
      <div className="div-block">
        <div className="auth-heading">
          <div className="auth-header">Welcome!</div>
          <div className="text-block">Enter details to login.</div>
        </div>
        <div className="form-block">
          <form  className="form">
            <div><input type="text" className="auth-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" id="Email-2"/></div>
            <div className="div-block-2 w-clearfix">
              <div className="text-block-2">SHOW</div><input type="password" className="auth-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Password" id="email" required=""/>
            </div>
          </form>       
        </div>
        <Link to="/" className="link">FORGOT PASSWORD ?</Link>
        <Link to="/dashboard" className="auth-button">LOG IN</Link>
      </div>
    </div>
  </div>
      </>

  );
}

export default Login;
