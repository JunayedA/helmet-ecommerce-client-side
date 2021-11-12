import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import productsBanner from '../productsBanner/productsBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <productsBanner></productsBanner>
        </div>
    );
};

export default Home;