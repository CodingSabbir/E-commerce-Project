import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa6";
const HomeCetegory = () => {
    const subTitle = "Choose Any Products";
    const title = "Buy Everything with Us";
    const btnText = "Get Started Now";
    
    const categoryList = [
    {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'DSLR Camera',
    },
    {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'Shoes',
    },
    {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'Photography',
    },
    {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'Formal Dress',
    },
    {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'Colorful Bags',
    },
    {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: <FaShopify />,
    title: 'Home Decor',
    },
    ]

    return (
        <>
           <div className='text-center '>
           <p className='font-mono text-gray-700 py-3'>{title}</p>
           <h2 className='text-[22px] font-serif text-blue-700'>{subTitle}</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-5" data-aos="fade-up"
     data-aos-duration="2000">
      {categoryList.map((productItem, i) => (
        <div key={i} className="text-center ">
          <Link to={'/shop'}>
          <img src={productItem.imgUrl} alt={productItem.imgAlt} className="rounded-md mx-auto border " />  
          </Link>
          <div className='flex gap-2 p-2'>
          <p className="text-red-700 text-[20px] ">{productItem.iconName}</p>
          <Link to={'/shop'}>
          <p className="text-gray-700 font-mono ">{productItem.title}</p>
          </Link>
          </div>
        </div>
      ))}
    </div>
   <div className='flex justify-center py-4'>
   <Link to={'/shop'}>  <button className=' py-2 px-3 text-black hover:text-white font-bold rounded-md border border-purple-400  hover:bg-blue-700'>{btnText}</button></Link>
   </div>
        </>
    );
};

export default HomeCetegory;