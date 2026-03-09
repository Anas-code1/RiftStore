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
  return (
    <div className="w-full px-[10%] h-15 bg-[#888f950d]">
        <Row className="flex items-center h-full justify-between">
          {menus.map(item => <p className="text-4 text-slate-800" key = {item} >  {item}  </p>)}
        </Row>
      </div>
  );
};

export default BottomHeader;
