import React, { useContext,useEffect } from 'react'
import './Loginweb.css'
import { TiGroup } from "react-icons/ti";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { logincontext } from '../Contexts/Logincontext';

function Loginweb() {

  let [currentuser,loginerror,UserloginStatus,Loginuser,Logoutuser]= useContext(logincontext)


    const navigate = useNavigate()

    let {register,handleSubmit,formState:{errors}}=useForm()

  let submitForm=(userobj)=>{
        Loginuser(userobj)
   
    }
  useEffect(()=>{
    if(UserloginStatus===true){
      navigate('/profile')
    }
  },[UserloginStatus])

  return (
    
    <div className='log5'>
    
      <h3>.</h3>
      <div className='log1'>
        <div className='ch'>
            <form onSubmit={handleSubmit(submitForm)}>
            <div className='icon'>
            <TiGroup size={'7em'}/>
            {loginerror.length!==0 && (<p className='display-5 text-danger text-center'>{loginerror}</p>)}

            </div>
            <div className='line'>
                <div className='username'>
                <input  type="text" height="60%" name="name" id="name" placeholder="Username"  className='bigtext form-control mt-1' size="10" {...register("name",{required:true,minLength:"4"})}/>
                {errors.username?.type==="required" && <p className='text-danger'>*username is required</p>}
                {errors.username?.type=="minLength" && <p className='text-danger'>*min length is 4</p>}
                </div>
                <div className='pass'>
                    <input type="password" name="password" id="password" placeholder='password' className='form-control bigtext mt-3 ' size="20" {...register("password",{required:true})}/>
                {errors.password?.type=="required" && <p className="text-danger">*password is required</p>}
                </div>
                </div>
              
                <button type='submit' className='btn btn-success mt-3'>Login</button>
              
            </form>
            </div>
    </div>
  </div>
  )
}

export default Loginweb