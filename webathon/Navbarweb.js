import React ,{useContext} from 'react'
import './Navbarweb.css'
import { Link, NavLink } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import Dropdown from 'react-bootstrap/Dropdown';
import { VscSearch } from "react-icons/vsc";
import { logincontext } from '../Contexts/Logincontext';
function Navbar() {

let [currentuser,loginerror,UserloginStatus,Loginuser,Logoutuser]= useContext(logincontext)

const activeLink={
  color:"Red",
  fontsize:"1.2rem",
  fontweight:"bold"
}
const inactiveLink={
  color:"black",
  fontsize:"1.2rem"
}

  return (
  <div className='par'>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div  className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
  
       {(UserloginStatus===true)? (<li className='nav-item mr-2'>
        
        <NavLink className='nav-link' to='/login' style={({isActive})=>{return isActive?activeLink : inactiveLink}} onClick={Logoutuser} >Logout</NavLink>
            </li>):(<li className='nav-item mr-2'>
        
    <NavLink className='nav-link' to='/login' style={({isActive})=>{return isActive?activeLink : inactiveLink}} >Login</NavLink>
        </li>)}
        
        
      
        <li className='nav-item mr-2'>
        
        
        
        <NavLink className='nav-link' to='/register' style={({isActive})=>{return isActive?activeLink : inactiveLink}} >Register</NavLink>
            </li>


            <li className='nav-item mr-2'>
        
        
        
        <NavLink className='nav-link' to='/allusers' style={({isActive})=>{return isActive?activeLink : inactiveLink}} >Allusers</NavLink>
            </li>


        <li className='nav-item'>
        <form className="d-flex" role="search">
        <input className="form-control inp" type="search" placeholder="Search" aria-label="Search"/>
        <button className="b1" type="submit"><span className='icon'><VscSearch/></span></button>
      </form>
      </li>
          <li>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='drop'>
      <span className='sum'><RxAvatar size={'1.5em'}/></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Account</Dropdown.Item>
        <Dropdown.Item href="/">Leaderboard</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </li>

        </ul>
</div>
      
</nav>
   </div> 
  )
}

export default Navbar