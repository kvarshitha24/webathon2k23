
import './Allusers.css'
import axios from "axios";

import React, { useState ,useEffect} from 'react'

function Allusers() {

  const [allusers,setallusers]=useState([])
useEffect(()=>{


    const fetchData= async()=>{

    const response = await axios.get("http://localhost:4000/user-api/get-users")
 
    setallusers(response.data.payload)
    console.log(allusers)


}
fetchData()
 
},[])


  return (
    <div>


<ul>
        {allusers.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>



    </div>
  )
}

export default Allusers