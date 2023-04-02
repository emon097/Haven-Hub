import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { BsTrashFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const {user} = useContext(AuthContext)
    const [product, setProduct] = useState([]);
 

    const { data = [], refetch } = useQuery({
      queryKey: ["review"],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/cart?cartEmail=${user?.email}`
        );
        const data = await res.json();
        setProduct(data);
        return data;
      },
    });
    
       const handlerDelete=(id) => {
        fetch(`http://localhost:5000/cart/${id}`,{
          method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount === 1){
            refetch()
            toast.success("Successfully Cancel Your Order")
          }
            console.log(data);
        });
    
        
      }
    return (
        <div>
         {
         product.length === 0 ? <h1 className='text-center text-black h-60 py-64'> Not Available Product Please Order Now</h1>:
         <div className='md:my-24'>{product.map(products =>
          <div  key={products._Id} className='md:mx-60 '>
         <ul role="list" class="-my-6 divide-y divide-gray-200">
          <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img src={products.pPhoto} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
            </div>
            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <p>{products.pName}</p>
                  </h3>
                  <p class="ml-4 flex font-semibold">৳ {products.pPrice}</p>
                </div>
                <p class="mt-1 text-sm text-gray-500"> 
                 {products.pCategory}
                 </p>
              </div>
              <div class="flex flex-1 items-end justify-end text-sm">
                <div  class="flex">
                  <button onClick={() => handlerDelete(products._id)} type="button" class="font-medium btn btn-error text-white btn-xs ">
                    <BsTrashFill className='mx-1'></BsTrashFill>
                    Cancel</button>
                </div>
              </div>
            </div>
          </li>
          </ul></div>
)
}

</div>
         }

        </div>
    );
};

export default Cart;