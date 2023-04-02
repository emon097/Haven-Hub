import React, { useState } from 'react';

const Category = () => {

     
    return (
        <div className='my-20'>
            <p className='text-black my-6 text-xl font-semibold'>Our Product Category</p>
         <div className='grid grid-cols-2   md:grid-cols-5 gap-6'>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://plus.unsplash.com/premium_photo-1679177184017-7777cdbb2ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Electronics and gadgets</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Fashion and clothing</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1484632152040-840235adc262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1063&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Home and kitchen appliances</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Health and wellness products</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Toys and games</h2>
            </body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1610595433626-e45abdb5a88b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Beauty and personal care</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Food and beverage</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Furniture and home decor</h2></body>
            
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Sports and fitness</h2></body>
            <body className='bg-slate-200 p-3 rounded-xl' >
            <img class=" w-full h-20 items-center "src="https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt=""/>
            <h2 class="mt-2 mb-2 text-sm text-black font-semibold">Books and educational materials</h2></body>
        </div>
        </div>
    );
};

export default Category;