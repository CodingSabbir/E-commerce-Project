import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const title = "Our Products";


const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$129.79',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$52.72',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$69.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$17.90',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$39.79',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$9.80',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$129.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$19.00',
id: 8,
},
]
const CategoryProduct = () => {
const [items,setItems]=useState(ProductData)

    const filterItems = (category) => {
        if (category === 'All') {
          setItems(ProductData); // Show all products
        } else {
          const updatedData = ProductData.filter((currentElement) => {
            return currentElement.cate === category;
          });
          setItems(updatedData);
        }
      };
    return (
        <div >
            <div className='grid grid-cols-2 md:flex justify-between mx-5 px-2 md:px-5 py-3 bg-[#DCF2F1] rounded-sm'>
                <div>
                    <p className=' text-[14px]  md:text-[22px] font-semibold font-bold md:font-serif'>{title}</p>
                </div>
                <div>
                    <ul className='flex justify-center  md:gap-8  mr-16 md:mr-0'>
                        <li className='font-mono text-[14px] md:text-[18px] hover:bg-blue-700 hover:text-white cursor-pointer px-1 md:px-2 rounded-sm' onClick={()=>filterItems('All')}>All</li>
                        <li className='font-mono text-[14px] md:text-[18px]  hover:bg-blue-700 hover:text-white cursor-pointer px-1 md:px-2 rounded-sm' onClick={()=>filterItems('Shoes')}>Shoes</li>
                        <li className='font-mono text-[14px] md:text-[18px]  hover:bg-blue-700 hover:text-white cursor-pointer px-1 md:px-2 rounded-sm' onClick={()=>filterItems('Bags')}>Bages</li>
                        <li className='font-mono text-[14px] md:text-[18px]  hover:bg-blue-700 hover:text-white cursor-pointer px-1 md:px-2 rounded-sm' onClick={()=>filterItems('Phones')}>Phones</li>
                        <li className='font-mono text-[14px] md:text-[18px]  hover:bg-blue-700 hover:text-white cursor-pointer px-1 md:px-2 rounded-sm' onClick={()=>filterItems('Beauty')}>Beauty</li>
                    </ul>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000" className='grid grid-cols-2 mt-2 md:mt-5 px-5 md:flex md:flex-wrap md:justify-center gap-3 md:gap-5 pb-3'>
                {
                   items.map((product)=>(
                    

<div key={product.id} className=" mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={product.imgUrl} alt="product image" />
    </a>
    <div className="px-2 md:px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.cate} </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <Link to={`/shop/${product.id}`}><p className='font-mono'>{product.title}</p></Link>
        <div className="flex items-center justify-between">
            <span className=" md:text-3xl font-bold text-blue-700 dark:text-white">{product.price}</span>
           <Link to={'/'}><p className='font-serif font-semibold'>{product.brand}</p></Link>
        </div>
    </div>
</div>

                   )) 
                }
            </div>
        </div>
    );
};

export default CategoryProduct;