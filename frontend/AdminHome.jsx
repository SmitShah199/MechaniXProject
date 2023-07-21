import React from 'react'
import AdminNav from '../navbar/AdminNav';

const AdminHome = () => {
  return (
    <div>
        <AdminNav/>
        <div className="flex justify-center mt-20 text-5xl  text-black font-bold ">
        <h2 className="border-2 p-8 bg-neutral-300">Welcome To MECHANIX </h2>
        </div>
        <h2 className="p-8 text-5xl mt-3 font-bold">ADMIN</h2>
    </div>
  )
}

export default AdminHome;