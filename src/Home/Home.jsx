import React from 'react';
import Banner from './Banner';
import HomeCetegory from './HomeCetegory';
import CategoryProduct from './CategoryProduct';
import Regester from './Regester';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeCetegory />
            <CategoryProduct/>
            <Regester/>
        </div>
    );
};

export default Home;