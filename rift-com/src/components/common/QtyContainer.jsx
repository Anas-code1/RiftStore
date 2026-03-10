import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contextAPIs';
import Button from './Button';
import Row from './Row';

const QtyContainer = ({ data, qty, onInc, onDec }) => {
  const { cartItems, handleInc, handleDec } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item._id === data?._id);

  const finalQty = qty !== undefined ? qty : (cartItem?.qty || 0);
  const handleDecrease = onDec ? onDec : () => handleDec(data);
  const handleIncrease = onInc ? onInc : () => handleInc(data);

  return (
    <Row className="items-center">
      <Button
        onClick={handleDecrease}
        title="-"
        className="w-[52px] h-[52px]"
      />
      <p className="w-[70px] text-center text-[16px] font-semibold">
        {finalQty}
      </p>
      <Button
        title="+"
        className="w-[52px] h-[52px]"
        onClick={handleIncrease}
      />
    </Row>
  );
};

export default QtyContainer;