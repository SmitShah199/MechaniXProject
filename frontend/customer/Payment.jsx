import React from 'react'
import CustomerNav from '../navbar/CustomerNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Payment = () => {
    const navigate=useNavigate();
    const customer = JSON.parse(localStorage.getItem("customer"))
    console.log(customer,"customer")
    const param=useParams();
    console.log(param,"param")
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm();
  return (
    <div>
        <CustomerNav/>
        <div className="flex justify-center  ">
        <body class="bg-blue-50 w-5/12">
          <div class="m-4">
            <div
              class="credit-card w-full p-8 sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
              x-data="creditCard"
            >
              <header class="flex flex-col justify-center items-center">
                <ul class="flex">
                  <li class="mx-2">
                    <img
                      class="w-16"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                      alt=""
                    />
                  </li>
                  <li class="mx-2">
                    <img
                      class="w-14"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li class="ml-5">
                    <img
                      class="w-7"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </header>
              <form onSubmit={handleSubmit(async(data)=>{

                try {
                        console.log(data,"dataaa")
                    const dataToSend={
                        holderName:data.holderName,
                        cardNumber:data.cardNumber,
                        expiryMonth:data.expiryMonth,
                        expiryYear:data.expiryYear,
                        customerEmail:customer.email,
                        mechanicEmail:param.email,
                        cvv:data.cvv,
                        amount:data.amount
                    }
                    console.log(dataToSend,"cccccccc")
                    const res = axios.post(
                      `http://localhost:5000/payment`,
                      dataToSend
                    );
                    console.log(res.dataToSend,"DATa")
                    toast.success("Payment Successful");
                        navigate("/responses")
                  } catch (error) {
                    toast.error("Unsuccessful");
                  }
              })}>
              <main class="mt-4 p-4">
                <h1 class="text-xl font-semibold text-gray-700 text-center">
                  Card payment
                </h1>
                <div class="">
                  <div class="my-3">
                    <input
                      type="text"
                     {...register("holderName")} required
                      
                      class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Card holder"
                      maxlength="22"
                      x-model="cardholder"
                    />
                  </div>
                  <div class="my-3">
                    <input
                      type="number"
                      {...register("cardNumber")} required
                     
                      class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Card number"
                      maxlength="19"
                    />
                  </div>
                  <div class="my-3 flex flex-col">
                    <div class="mb-2">
                      <label for="" class="text-gray-700">
                        Expiry Month and Year
                      </label>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <select
                        id="dept"
                        
                        {...register("expiryMonth")}required
                       
                        class=" border bg-transparent border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" selected>
                          MM
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        id="dept"
                        {...register("expiryYear")}
                        placeholder="type" required
                       
                        class=" border bg-transparent border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option className="text-black" value="">
                          YY
                        </option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2022">2027</option>
                        <option value="2021">2028</option>
                      </select>

                      <input
                        type="number"  
                      
                        {...register("cvv")}
                        
                        class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Security code"
                        maxlength="3"
                      />
                        <input
                        type="number"  
                      
                        {...register("amount")}
                        
                        class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Bill Amount"
                        maxlength="3"
                      />
                    </div>
                  </div>
                </div>
              </main>
              <footer class="mt-6 p-4">
                <button
                  onClick={() => handleSubmit()}
                  class="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                >
                  Pay now
                </button>
              </footer>
              </form>
            </div>
          </div>
        </body>
      </div>
    </div>
  )
}

export default Payment;