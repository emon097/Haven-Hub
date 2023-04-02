import React, { useContext, useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';
const AdminProduct = () => {
  const {user}= useContext(AuthContext)
    const [adminProduct, setAdminProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/addProducts?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setAdminProduct(data);
          });
      }, []);
    return (
        <div>
        <div className='bg-white text-black  my-10 rounded-xl '>
       {
        adminProduct.length === 0 ? <div className='flex my-72 justify-center'>
        <MoonLoader
            color="#65a30d"
            loading
            size={60}
            speedMultiplier={1}
          />
        </div> : < div>
        <p className='bg-gray-200 text-3xl font-bold pl-3 text-lime-500 pt-10'>Here is Only Your Added Product</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-gray-200">
        {adminProduct.map((products) => (
          <>
            <Link to={`${products?._id}`}>
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
                        <p className='text-xs'>ID:{products?.PCode}</p>
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
                     
                    </p>
                  </div>
                </div>
              </div>
            </body>
            
            </Link>
          </>
        ))}
      </div>
        </div>
       }
    </div>


        </div>
    );
};

export default AdminProduct;