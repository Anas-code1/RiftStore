import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import Container from "../common/Container";
import Row from "../common/Row";
import ProductCard from "../ProductCard";
import client from '../../apis';
import apiEndpoints from '../../apis/endpoint';

const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const getData = async () => {
    try {
      const responseCat = await client.get(apiEndpoints.categories);
      setCategories(responseCat.data);
      handleGetProduct();
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const handleGetProduct = async (cid) => {
    setActiveCategory(cid || 'all');
    try {
      const response = await client.get(apiEndpoints.products(12, cid));
      setProducts(response.data.docs);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[30px] text-[#1e2832] font-semibold mt-[80px] mb-[40px] uppercase">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p
          onClick={() => handleGetProduct()}
          className={`text-[16px] mr-[40px] cursor-pointer hover:text-[#757575] ${activeCategory === 'all' ? 'text-black font-bold' : 'text-[#00000080]'}`}
        >
          All Products
        </p>
        {categories.map((item) => (
          <p
            onClick={() => handleGetProduct(item._id)}
            className={`text-[16px] mr-[40px] cursor-pointer hover:text-[#757575] ${activeCategory === item._id ? 'text-black font-bold border-b-2 border-black' : 'text-[#00000080]'}`}
            style={{ transition: 'all 0.3s ease' }}
            key={item._id}
          >
            {item.title}
          </p>
        ))}
      </Row>
      {products.length > 0 ? (
        <Row className="flex-wrap gap-[1%] mt-[40px]">
          {products.map((item) => (
            <div className="w-[24%] mb-[20px]" key={item._id}>
              <ProductCard data={item} />
            </div>
          ))}
        </Row>
      ) : (
        <div className="w-full flex flex-col items-center justify-center mt-[60px] py-[60px] bg-slate-50 rounded-lg border border-dashed border-gray-300">
          <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
          </svg>
          <h3 className="text-[20px] font-semibold text-gray-800 mb-2">No Products Available</h3>
          <p className="text-[15px] text-gray-500 text-center max-w-md">
            We currently don't have any items in this specific category. Please explore our other collections or check back later.
          </p>
        </div>
      )}
    </Container>
  );
};

export default BestSellerProducts;
