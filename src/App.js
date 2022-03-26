import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import UserDetails from "./pages/UserDetails"
import './App.css';
import './scss/app.scss'

function App() {
  return (
     <div className="App">
            <BrowserRouter>
     <Routes>
       <Route  path = "/" element = {<Login/>}/>
       <Route  path = "/dashboard" element = {<Dashboard/>}/>
       <Route  path = "/user/:id" element = {<UserDetails/>}/>
     </Routes>

     </BrowserRouter>
     </div>


  );
}

export default App;
