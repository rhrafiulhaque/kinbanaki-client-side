import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import HotSell from '../HotSell/HotSell';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <HotSell></HotSell>
            <Services></Services>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;