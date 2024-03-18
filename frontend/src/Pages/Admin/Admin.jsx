import React from 'react'
import Navbar from '../../Components/admin_Navbar/Navbar'
import Sidebar from '../../Components/admin_Sidebar/Sidebar'
import { Route,Routes} from "react-router-dom"
import Addproduct from '../../Components/admin_Addproduct/Addproduct'
import Listproduct from '../../Components/admin_Listproduct/Listproduct'
import "./Admin.scss"
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
        <Sidebar/>

       <Outlet/>

    </div>
  )
}

export default Admin