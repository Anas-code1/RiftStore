import React, { Component } from "react";
import Row from "../common/Row";
const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[90px] max-md:py-[40px]">
      <Row className="w-full items-center justify-between max-md:flex-col-reverse max-md:gap-[40px]">
        <div className="w-[46%] max-md:w-full max-md:text-center">
          <h1 className="text-[74px] max-md:text-[40px] text-slate-950 font-light leading-tight">MODRA</h1>
          <p className="text-[30px] max-md:text-[20px] text-black mt-[52px] max-md:mt-[20px]">
            Discover a hand-selected assembly of premier collections
          </p>
          <button className=" p-3 text-white bg-black text-[20px] max-md:text-[16px] font-medium mt-[50px] max-md:mt-[30px] max-md:w-full">
            Shop Now
          </button>
        </div>
        <div className="w-[46%] max-md:w-full max-md:flex max-md:justify-center">
          <div className="w-[424px] h-[542px] max-md:w-[90%] max-md:max-w-[400px] max-md:h-auto max-md:aspect-[4/5] relative">
            <img
              className=" w-full h-full object-cover rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1705675451868-014a161e591b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero"
            />
            <div className="absolute  w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] max-md:top-[15px] max-md:left-[10px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
