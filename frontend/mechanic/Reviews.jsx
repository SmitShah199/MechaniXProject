import MechanicNav from '../navbar/MechanicNav';
import React, { useEffect, useState } from "react";
import axios from 'axios';
const Reviews = () => {
    const [data,setData]=useState([])
    const customer = JSON.parse(localStorage.getItem("mechanic"));
  
    const getData = async () => {
      try {
        const requests = await axios.get(
          `http://localhost:5000/review/mechanic/${customer.email}`
        );
        setData(requests.data);
      } catch {
        alert("something went wrong");
      }
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <div>
        <MechanicNav/>
        <div className="justify-center flex">
        <button
          class=" w-64 mt-3  none center rounded-lg bg-neutral-200 py-2 px-6 font-sans text-md font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          All Mechanics
        </button>
      </div>
      <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500 mt-5">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Customer
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Mechanic
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Review
            </th>
            <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, Index) => {
            return (
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  {item.customerEmail}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                  {item.mechanicEmail}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                  {item.description}
                </td>
                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                  {item.rating}
                </td>
            
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Reviews;