import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container my-5'>
            <div className="row">
                <h1 className='fw-bold text-center' style={{color:'#161880', fontSize:'50px'}}>Our Products</h1>
                    {
                        products.slice(0,6).map(product=><Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
            </div>
            
        </div>
    );
};

export default Products;