import React from 'react';
import Banner from './Banner';
import HomeCetegory from './HomeCetegory';
import CategoryProduct from './CategoryProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeCetegory />
            <CategoryProduct/>
        </div>
    );
};

export default Home;