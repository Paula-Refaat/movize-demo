import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductCard.css';
const ProductCard = (props) => {
    return(
         <div className='product-card'>
            <div className='card-top'>
                <img src={props.img} alt='product-card'></img>
            </div>

            <div className='card-info'>
                <h4 className='title'>{props.name}</h4>
                <p className='info'>{props.desc} </p>
                <button >
                    <Link to={"/productinfo/"+ props.id }>Watch now</Link>
                    </button>
            </div>
    </div>
    );
};
export default ProductCard; 