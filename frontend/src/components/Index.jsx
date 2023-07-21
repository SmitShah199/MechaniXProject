import React from "react";
import MainNav from "../navbar/MainNav";

const Index = () => {
  return (
    <div>
      <MainNav />

      

      <h2 className="text-2xl mt-10 underline font-bold italic text-blue-900">
          A doctor is not a mechanic A car doesn't react with a mechanic, but a
          human being does.
        </h2>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-6 mt-20">
          <img
            className="w-96 h-64"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/268212468/original/d891aa3988709e7b44330db26f25a01b97f7a049/develop-mechanic-app-mechanic-booking-app-car-repair-app.png"
          ></img>
        </div>
        <div className="col-start-8 col-span-12 mt-20">
          <img className="w-96 h-64" src="https://octet.design/wp-content/uploads/2021/12/Auto-service-booking.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Index;
