import React from 'react';
import { Data } from '../../core/data/moves';
import ProductCard from './components/ProductCard';
import './style/ProductList.css';

const ProductList = () => {
    const items = Data
    return( 
    <div className='produc-list'>
        {
            items.map(item =>  {
                return <ProductCard id={item.id} name = {item.name} desc = {item.description} img = {item.image}/>
            })
        }

    </div>
    );
};

export default ProductList;