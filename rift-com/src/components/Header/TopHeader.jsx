import React from "react";
import { useContext } from 'react';
import { CartContext } from '../../contextAPIs';
import SearchIcon from "../../svgs/SearchIcon";
import RotatedSquare from "../../svgs/RotatedSquare";
import UserIcon from "../../svgs/UserIcon";
import BucketIcon from "../../svgs/BucketIcon";
import Row from "../common/Row";
import HeaderButton from "./HeaderButton";
const TopHeader = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="w-full px-[10%] h-full max-md:h-auto max-md:py-[15px]">
      <Row className="flex items-center h-full justify-between max-md:flex-col max-md:gap-[15px]">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px] max-md:text-[24px]">Modra</h1>
          <RotatedSquare />
        </Row>
        <Row className="max-md:w-full max-md:justify-center max-md:gap-[20px]">
          <HeaderButton title="Account" Icon={UserIcon} />
          <HeaderButton
            title={`Cart (${cartItems.length})`}
            Icon={BucketIcon}
            url="/cart"
          />
        </Row>
      </Row>
    </div>
  );
};

export default TopHeader;
