import React, { useEffect, useState } from "react";
import MechanicNav from "../navbar/MechanicNav";
import axios from "axios";
import { toast } from "react-toastify";

const Requests = () => {
  const mechanic = JSON.parse(localStorage.getItem("mechanic"));
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const requests = await axios.get(
        `http://localhost:5000/request/mechanic/${mechanic.name}`
      );
      setData(requests.data);
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async(id)=>{
    try{
      console.log(id,"Id")
        const res = await axios.patch(`http://localhost:5000/request/accept/${id}`);
        toast.success("Accepted")
    }catch(error){
        toast.error("Something goes wrong")
    }
  }
  const submit = async(id)=>{
    try{
      console.log(id,"Id")
        const res = await axios.patch(`http://localhost:5000/request/reject/${id}`);
        toast.success("rejected")
    }catch(error){
        toast.error("Something goes wrong")
    }
  }
  return (
    <div>
      <MechanicNav />
      <div className="justify-center flex">
        <button
          class=" w-64 mt-3  none center rounded-lg bg-neutral-200 py-2 px-6 font-sans text-md font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          All Requests
        </button>
      </div>
      <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500 mt-5">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Customer
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              MechanicName
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Experience
            </th>
            <th scope="col" class="px-6 py-4">
              Skill
            </th>
            <th scope="col" class="px-6 py-4">
              Location
            </th>
            <th scope="col" class="px-6 py-4">
              Number
            </th>
            <th scope="col" class="px-6 py-4">
              Status
            </th>
            <th scope="col" class="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, Index) => {
            return (
              <tr class="border-b dark:border-neutral-500 text-blue-950">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.customerEmail}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.mechanicName}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.mechanicExperience}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium font-medium dark:border-neutral-500">
                  {item.mechanicSkill}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.mechanicLocation}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.mechanicNumber}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.status}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 gap-2">
                  <button  onClick={()=>handleSubmit(item._id)} class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Accept
                  </button>
                  <button onClick={()=>submit(item._id)} class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                    Reject
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

export default Requests;
