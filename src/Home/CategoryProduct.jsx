import React, { useState } from 'react';
const title = "Our Products";


const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]
const CategoryProduct = () => {
const [items,setItems]=useState(ProductData)
    const filterItems=()=>{

    }
    return (
        <div >
            <div className='flex justify-between mx-5 px-5 py-3 bg-[#DCF2F1] rounded-sm'>
                <div>
                    <p className='text-[22px] font-semibold font-serif'>{title}</p>
                </div>
                <div>
                    <ul className='flex justify-center gap-8'>
                        <li className='font-mono text-[18px]' onClick={()=>filterItems('All')}>All</li>
                        <li className='font-mono text-[18px]' onClick={()=>filterItems('Shoes')}>Shoes</li>
                        <li className='font-mono text-[18px]' onClick={()=>filterItems('Bags')}>Bags</li>
                        <li className='font-mono text-[18px]' onClick={()=>filterItems('Phones')}>Phones</li>
                        <li className='font-mono text-[18px]' onClick={()=>filterItems('Beauty')}>Beauty</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CategoryProduct;