import React, { useState } from "react";

const Banner = () => {

    let [slide , setSlide] = useState(false)

  return (
    <div className="bnrMain relative z-[1] ">
      <img src={`/images/${!slide ? "bnrslide1" : "bnrslide2"}.jpg`} alt="bnrslide1" className="absolute z-[-1]  " />
      <div className="container">
        {!slide ? 
        <div className="pt-[300px] ml-auto  w-[70%] text-right ">
          <h1 className=" text-dark font-black text-5xl w-[90%] ml-auto leading-[50px]  ">Urgent Care + Multi-Specialty Medical Clinic Group </h1>
          <h3 className=" text-secondary text-xl py-3   ">RELIABLE MEDICAL SERVICES LOCATED IN LOS ANGELES, CA</h3>
          <button className="btn py-4 px-5 font-semibold  " type="button">get started</button>
        </div>
        :
        <div className="pt-[300px]  w-[70%] ">
          <h1 className=" text-dark font-black text-5xl w-[90%]  leading-[50px]  ">Cardiology, Gastroenterology, Pulmonology and Dental Care </h1>
          <h3 className=" text-secondary text-xl py-3   ">RELIABLE MEDICAL SERVICES LOCATED IN LOS ANGELES, CA</h3>
          <button className="btn py-4 px-5 font-semibold  " type="button">get started</button>
        </div>
        }
        <div className="flex justify-center pb-[300px] pt-[70px] gap-5  ">
            <button onClick={() => setSlide(false)} type="button" className={`bnrbtn ${!slide ? "bg-dark" : "bg-transparent"}`}></button>
            <button onClick={() => setSlide(true)} type="button" className={`bnrbtn ${slide ? "bg-dark" : "bg-transparent"}`}></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
