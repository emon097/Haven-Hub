import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/Authprovider';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    let Scodes = Math.floor(Math.random() * 1234567890 + 1);
    const { user } = useContext(AuthContext);

  const onSubmit = (data, e) => {
    const PName = data.productName;
    const PCategory = data.productCategory;
    const PDetails = data.productDetails;
    const PImage = data.productPhoto[0];
    const PCode = data.productCode;
    const PPrice = data.productPrice;
    const email = user?.email;
    const displayName = user?.displayName;
    const formData = new FormData();
    formData.append("image", PImage);
    const url = `https://api.imgbb.com/1/upload?key=a9092fb79f783fc4527950882d60d253`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const PPhoto = imageData.data.display_url
        console.log(PPhoto);
        const allDetails = {
            PCode,
            PPhoto,
            PDetails,
            PCategory,
            PName,
            PPrice,
            displayName,
            email,
          };
          console.log(allDetails);
          fetch("http://localhost:5000/addProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(allDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.acknowledged){
                e.target.reset();
              }
            });
      })

  }
    return (
        <div className="flex justify-center mx-2 my-10">
      <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
      <div class="w-full md:w-1/3 mb-6 md:mb-2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="productName"
            >
              Product Name
            </label>
            <input
              {...register("productName")}
              class="appearance-none block w-72 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="productName"
              type="text"
              placeholder="Type Your Product Name"
            />
          </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="productCategory"
            >
              Product Category
            </label>
            <div class="relative">
              <select
                {...register("productCategory")}
                class="block appearance-none md:w-80 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="productCategory"
              >
                <option>Electronics and Gadgets</option>
                <option>Fashion and Clothing</option>
                <option>Home and Kitchen Appliances</option>
                <option>Health and Wellness Products</option>
                <option>Toys and Games</option>
                <option>Beauty and Personal Care</option>
                <option>Food and Beverage</option>
                <option>Furniture and Home Decor</option>
                <option>Sports and Fitness</option>
                <option>Books and Educational Materials</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex  items-center px-2 text-gray-700">
                
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="productDetails"
            >
              Product Details
            </label>
            <textarea
              {...register("productDetails")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="productDetails"
              id="productDetails"
              cols="30"
              placeholder="Write a Full Details in Service"
              rows="10"
            ></textarea>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="True"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="productPhoto"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
                >
                  <span>Upload a file</span>
                  <input
                    {...register("productPhoto")}
                    id="productPhoto"
                    name="productPhoto"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mt-6 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ServiceCode"
            >
               Product ID
            </label>
            <input
              {...register("productCode")}
              class="appearance-none block w-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="productCode"
              type="number"
              name="productCode"
              value={Scodes}
            />
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="productPrice"
            >
              Product Price
            </label>

            <input
              {...register("productPrice")}
              class="appearance-none block w-72 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="productPrice"
              type="number"
              placeholder="Enter Your Amount in Taka"
            />
          </div>
        </div>
        <input
          className="text-white hover:bg-green-500 rounded-lg bg-green-400 btn-sm"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
    );
};

export default AddProduct;