import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbarweb from './Navbarweb'
import Footerweb  from './Footerweb';
function RootLayout() {


  return (
    <div>
      <Navbarweb/>
        <Outlet/>
    </div>
  )
}

export default RootLayout