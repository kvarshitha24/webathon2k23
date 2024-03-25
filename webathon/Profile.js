import React,{useContext} from 'react'
import './Profile.css'
import { logincontext } from '../Contexts/Logincontext'

function Profile() {
    let [currentuser,loginerror,UserloginStatus,Loginuser,Logoutuser]= useContext(logincontext)
  return (
    
    <div>
        <h2>Profile of a person</h2>
        <p>{currentuser.name}</p>
        <p>{currentuser.id}</p>
    </div>
  )
}

export default Profile