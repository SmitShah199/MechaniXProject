import React, { useEffect, useState } from "react";
import AdminNav from "../navbar/AdminNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Customers = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/customer`);
      console.log(res.data, "DATA");
      setData(res.data);
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const submit = async (id) => {
    try{
        const res= await axios.delete(`http://localhost:5000/customer/${id}`)
        toast.success("Customer deleted successfully")
    }catch(error){
        toast.error("Not deleted")
    }
  };
 
  return (
    <div>
      <AdminNav />
      <div className="justify-center flex">
        <button
          class=" w-64 mt-3  none center rounded-lg bg-neutral-200 py-2 px-6 font-sans text-md font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          All Customers
        </button>
      </div>
      <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500 mt-5">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              S.No
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Name
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Email
            </th>
            <th scope="col" class="px-6 py-4">
              Phone Number
            </th>
            <th scope="col" class="px-6 py-4">
              Address
            </th>
            <th scope="col" class="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,Index) => {
            return (
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    {item._id}
                  </td>
                  <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {item.name}
                  </td>
                  <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {item.email}
                  </td>
                  <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {item.phoneNumber}
                  </td>
                  <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {item.address}
                  </td>
                  <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 gap-2">
                    <button
                        onClick={()=>navigate(`/updatecustomer/${item._id}`)}
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => submit(item.id)}
                      class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
