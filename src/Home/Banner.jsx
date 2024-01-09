
import React, { useState } from 'react';
import banner from '../assets/images/banner/banner.png';
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCetegory from '../components/SelectedCetegory';
const title=(
    <h2>Search Your One From <span className='text-[#FF004D] font-serif'>TrendHaven</span> of  Products</h2>
)
const dece ='we have the largest collecetion of products available on your website '

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput,setSearchInput]=useState('')
    const [filterProduct,setProductFilter]=useState(productData)
    console.log(searchInput)
    const searchHandleInput =(e)=>{
        const searchTrame = e.target.value
        setSearchInput(searchTrame)
        const filtered=productData.filter((product)=>product.name.toLowerCase().includes(searchTrame.toLowerCase()) )
        setProductFilter(filtered)

    }
  return (
    <div className="h-80 lg:h-[700px] bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
      <div className="max-w-2xl mx-auto px-4 md:px-0 flex items-center h-full">
        <form className="w-full">
        <h1 className='text-[20px] font-mono p-2 pt-10 md:pt-0 text-[#33186B]'>{title}</h1>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input           
             value={searchInput}
             onChange={searchHandleInput}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your product"
              required
            />
            
            <button
              type="submit"
              className=" text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
         <p className='font-mono py-3 '>{dece}</p>
        </form>
      </div>
<ul className="flex flex-wrap gap-2 justify-center mx-auto md:-mt-52 px-2 ">
  {searchInput &&
    filterProduct.map((product) => (
      <Link to={`/shop/${product.id}`} key={product.id}>
        <li className="bg-white p-4 my-2 rounded-md shadow-md w-full transition duration-300 ease-in-out transform hover:scale-105">
          {product.name}
        </li>
      </Link>
    ))}
</ul>
    </div>
  );
};

export default Banner;



// import React, { useState } from 'react';
// import banner from '../assets/images/banner/banner.png';
// import productData from '../products.json'
// import { Link } from 'react-router-dom';
// import SelectedCetegory from '../components/SelectedCetegory';

// const title = (
//   <h2>Search Your One From <span className='text-[#FF004D] font-serif'>TrendHaven</span> of  Products</h2>
// );

// const dece = 'we have the largest collection of products available on your website ';

// const bannerList = [
//   {
//     iconName: "icofont-users-alt-4",
//     text: "1.5 Million Customers",
//   },
//   {
//     iconName: "icofont-notification",
//     text: "More than 2000 Marchent",
//   },
//   {
//     iconName: "icofont-globe",
//     text: "Buy Anything Online",
//   },
// ];

// const Banner = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null); // New state for selected category
//   const [filterProduct, setProductFilter] = useState(productData);

//   const searchHandleInput = (e) => {
//     const searchTrame = e.target.value;
//     setSearchInput(searchTrame);

//     // Filter products based on both search input and selected category
//     const filtered = productData.filter((product) =>
//       product.name.toLowerCase().includes(searchTrame.toLowerCase()) &&
//       (!selectedCategory || product.category === selectedCategory)
//     );

//     setProductFilter(filtered);
//   }

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   }

//   return (
//     <div className="h-80 lg:h-[700px] bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
//       <div className="max-w-2xl mx-auto px-4 md:px-0 flex items-center h-full">
//         <form className="w-full">
//           <h1 className='text-[20px] font-mono p-2 pt-10 md:pt-0 text-[#33186B]'>{title}</h1>
//           <div className="relative">
//             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//               <SelectedCetegory onSelect={handleCategorySelect} />
//               <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//               </svg>
//             </div>
//             <input
//               value={searchInput}
//               onChange={searchHandleInput}
//               type="search"
//               id="default-search"
//               className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Search your product"
//               required
//             />

//             <button
//               type="submit"
//               className=" text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Search
//             </button>
//           </div>
//           <p className='font-mono py-3 '>{dece}</p>
//         </form>
//       </div>
//       <ul className="flex flex-wrap gap-2 justify-center mx-auto md:-mt-52 px-2 ">
//         {searchInput &&
//           filterProduct.map((product) => (
//             <Link to={`/shop/${product.id}`} key={product.id}>
//               <li className="bg-white p-4 my-2 rounded-md shadow-md w-full transition duration-300 ease-in-out transform hover:scale-105">
//                 {product.name}
//               </li>
//             </Link>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Banner;



