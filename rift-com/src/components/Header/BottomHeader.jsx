import React from "react";
import Row from "../common/Row";
const BottomHeader = () => {
    const menus = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Entertainment',

];
    <div className="w-full px-[10%] min-h-[60px] max-md:py-[10px] bg-[#888f950d]">
        <Row className="flex items-center h-full justify-between max-md:flex-wrap max-md:justify-center max-md:gap-y-[10px] max-md:gap-x-[20px]">
          {menus.map(item => <p className="text-[16px] text-slate-800 text-center" key={item}> {item} </p>)}
        </Row>
      </div>
};

export default BottomHeader;
