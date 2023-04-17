import React from 'react';
import { Routes, useSearchParams , useParams } from 'react-router-dom';
const ProductInfoPage = () => {
    //HOOKS [HELPER TO GET THE PARAMETER FROM THE ROUTE]
    let { id } = useParams();
    //QUERY PARAM
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>
                Product Info 
            </h1>
        </div>
    );
};

export default ProductInfoPage;