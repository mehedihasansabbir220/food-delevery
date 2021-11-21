import React from 'react';
import AllProducts from '../../../Component/AllProducts/AllProducts';
import HomeBanner from '../../../Component/HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;