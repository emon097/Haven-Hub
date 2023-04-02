import React from "react";
import { useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from 'react-icons/tb';
const AdminProductDetails = () => {
  const AdminProductDetails = useLoaderData()
  const {PPhoto, PName, PDetails, PPrice, PCode,PCategory, _id}= AdminProductDetails;
  return <div>
   <div className='bg-white my-12 md:mx-36 mx-3 text-black'>
            <div>
            <div>
            <div className="md:flex md:gap-5 md:my-0 md:items-start">
            <img   className='rounded-xl' src={PPhoto} alt="" /> 
            <div className="my-10 md:my-0">
            <p className='font-bold md:p-0 p-2'>Product Details</p>
            <p className='flex-wrap p-10 overflow-y-auto rounded-xl h-80 bg-green-100'>{PDetails}
            </p>
            </div>
            </div>
            <div className='md:flex  my-6 rounded-2xl bg-green-200 p-6'>
            <div>
            <p  className='font-bold'>{PName}</p>
            <p  className='flex font-bold' >Category: <p className='font-normal'>{PCategory}</p></p>
            <p className='flex text-sm'> <p className='font-semibold'>Product ID:</p> {PCode}</p>
            <div className='flex '>
            <p className='flex items-center font-medium text-lg mt-5 bg-lime-600 md:w-20 p-1 text-white rounded-lg'>  <span class=" text-xl font-semibold">
            <TbCurrencyTaka></TbCurrencyTaka>
            </span>  <p  >{PPrice}</p> </p>
            </div>
            </div> 
            </div>
           
            </div>
            <div>
            </div>
            </div>
        </div>
  </div>;
};

export default AdminProductDetails;
