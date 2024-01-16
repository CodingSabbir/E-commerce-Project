
import React, { useState } from 'react';
import HeaderBanner from '../components/HeaderBanner';
import { LuMenuSquare } from "react-icons/lu";
import Product from './Product';
import productData from "../products.json"
import Pagetion from './Pagetion';

const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [product, setProduct] = useState(productData);
    //Pagenation
    const [currentPage, setCurrentPage] = useState(1)
    const productPage=12;
    const indexOfLastProduct=currentPage+productPage
    const indexOfFirstProduct=indexOfLastProduct-productPage
    const currtentProduct=product.slice(indexOfFirstProduct,indexOfLastProduct)
    const pagenation=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const toggleView = () => {
        setGridList(!gridList);
    };


    return (
        <div>
            <HeaderBanner
                title='Shop Item Details '
                page='Page'
                text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!'
                currentPage='shop'
            />
            <div className='grid md:grid-cols-3 px-10 py-2'>
                <div className='col-span-2'>
                    <div className='flex justify-between px-5'>
                        <div>Product </div>
                        <div className='flex gap-5'>
                            <button
                                onClick={toggleView}
                                className={`buttonStyle ${gridList ? 'activeButton' : ''}`}
                            >
                                <i><LuMenuSquare style={{ color: gridList ? 'blue' : 'red' }} /></i>
                            </button>
                            <button
                                onClick={toggleView}
                                className={`buttonStyle ${!gridList ? 'activeButton' : ''}`}
                            >
                                <i><LuMenuSquare style={{ color: !gridList ? 'blue' : 'red' }} /></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className=' md:flex md:flex-wrap'>
                        <Product shopProduct={currtentProduct} active={gridList}/>
                       
                    </div>
                    <div>
                        <Pagetion
                        productPage={productPage}
                        totallProduct={product.length}
                        paginate={pagenation}
                        activePage={currentPage}
                        />
                    </div>
                   
                </div>
                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default Shop;
