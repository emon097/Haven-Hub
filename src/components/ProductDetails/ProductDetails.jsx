import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { FcCloseUpMode, FcDebt, FcInTransit } from 'react-icons/fc';
import { AuthContext } from '../../context/Authprovider';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
  const {user} = useContext(AuthContext)

    const productDetails = useLoaderData();
    const {PPhoto, PName, PDetails, PPrice, PCode,PCategory, _id}= productDetails;
    const handleCart = (productDetails) =>  {
    const cartEmail = user?.email;
    const productId = _id;
    const pName = PName;
    const pPrice = PPrice;
    const pCategory = PCategory;
    const pPhoto = PPhoto;
    const cartDetails = {
    cartEmail,pName,pPrice,pCategory,pPhoto, productId}
    console.log(cartDetails);
    fetch("http://localhost:5000/addCart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(cartDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.acknowledged){
                toast.success("You Have Successfully Added on Cart")
              }
              else{
                toast.error(data.message)
              }
              console.log(data);
            });
  }
    return (
        <div className='bg-white my-12 md:mx-36 mx-3 text-black'>
            <div>
            <div>
            <div>
            <img   className='rounded-xl' src={PPhoto} alt="" />
            </div>
            <div className='md:flex  my-14 rounded-2xl bg-green-200 p-6'>
            <div>
            <p  className='font-bold'>{PName}</p>
            <p  className='flex font-bold' >Category: <p className='font-normal'>{PCategory}</p></p>
            <p className='flex text-sm'> <p className='font-semibold'>Product ID:</p> {PCode}</p>
            <div className='flex '>
            <p className='flex items-center font-medium text-lg mt-5 bg-lime-600 md:w-20 p-1 text-white rounded-lg'>  <span class=" text-xl font-semibold">
            <TbCurrencyTaka></TbCurrencyTaka>
            </span>  <p  >{PPrice}</p> </p>
           
            <button onClick={e => handleCart(productDetails)} className='border-none p-0 mt-0' type="submit">
            <p className='flex items-center cursor-pointer mt-5 text-sm p-2 mx-4 bg-lime-600 hover:bg-lime-700 text-white rounded-lg'>  <span class=" font-semibold">
            <AiOutlineShoppingCart className='text-lg'></AiOutlineShoppingCart>
            </span> Add to Cart</p>
            </button>
            </div>
            </div> 
            <div className='md:mt-0 mt-7'>
              <ul>
                <li className='list-disc md:list-none'><p className='flex font-medium'><FcCloseUpMode className='text-3xl hidden md:block'></FcCloseUpMode>  Enjoy a seamless shopping experience with our reliable delivery service and quality products.</p></li>
                <li className='list-disc md:list-none '> <p className='flex font-medium'> <FcInTransit className='text-3xl items-center hidden md:block'></FcInTransit> Get your orders delivered right to your doorstep, hassle-free.</p></li>
                <li className='list-disc md:list-none'><p className='flex font-medium items-center'> <FcDebt className='text-3xl hidden md:block'></FcDebt>  Our easy return policy ensures your satisfaction with every purchase.</p></li>
              </ul>
            </div>
            </div>
           <p className='font-bold'>Product Details</p>
            <p className='flex-wrap p-10 bg-green-100'>{PDetails}</p>
            </div>
            <div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;