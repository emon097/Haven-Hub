import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const Product = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch(`https://haven-hub-server.vercel.app/product`)
        .then((res) => res.json())
        .then((data) => {
            setProduct(data);
        });
    }, []);
    

    return (
        <div className='bg-white text-black  my-10 rounded-xl '>
       
           {
            product.length === 0 ? <div className='flex my-72 justify-center'>
            <MoonLoader
                color="#65a30d"
                loading
                size={60}
                speedMultiplier={1}
              />
            </div> : < div>
            <p className='bg-gray-200 text-3xl font-bold pl-3 text-lime-500 pt-10'>Your Best Deal</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-gray-200">
           
            {product.map((products) => (
              <>
                <body class="antialiased bg-gray-200 text-gray-900 font-sans ">
                  <div class="container mx-auto">
                    <div class="flex flex-wrap ">
                      <div class="w-full  p-4">
                        <p
                          href=""
                          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                        >
                          <div class="relative pb-48 overflow-hidden">
                            <img
                              class="absolute inset-0 w-96 h-auto  "
                              src={products?.PPhoto}
                              alt=""
                            />
                          </div>
                          <div class="p-4">
                            <h2 class="mt-2 mb-2 text-base  font-semibold">
                              {products?.PName.slice(0, 50)} 
                            </h2>
                            <p className='text-sm'>{products?.PCategory}</p>
                            <p className='text-xs'>ID: {products?.PCode}</p>
                            <div class="mt-3 flex items-center">
                              <span class="text-sm font-semibold">Price</span>&nbsp;
                              <span class="font-bold text-xl">
                                {products?.PPrice}
                              </span>
                              &nbsp;
                              <span class="text-xl font-semibold">
                                <TbCurrencyTaka></TbCurrencyTaka>
                              </span>
                            </div>
                          </div>
                          <div class="p-4 border-t border-b text-xs text-gray-700">
                            <Link to={`${products?._id}`} ><span class="rounded-md bg-green-400 p-2 text-white mb-1">
                              See Details
                            </span></Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </body>
              </>
            ))}
          </div>
            </div>
           }
        </div>
    );
};

export default Product;