import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import productsHeader from '../productsHeader/productsHeader';
import Availableproductss from '../Availableproductss/Availableproductss';

const products = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <productsHeader date={date} setDate={setDate}></productsHeader>
            <Availableproductss date={date}></Availableproductss>
        </div>
    );
};

export default products;