import React from 'react';
import Banner from './Banner';
import HomeCetegory from './HomeCetegory';
import CategoryProduct from './CategoryProduct';
import Regester from './Regester';
import Loaction from './Loaction';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeCetegory />
            <CategoryProduct/>
            <Regester/>
            <Loaction/>
            <AboutUs/>
            <AppSection/>
            <Sponsor/>
        </div>
    );
};

export default Home;