import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {FaStar} from "react-icons/fa";
import ReadMore from '../ReadMore/ReadMore';

const Product = ({product}) => {
    const{name,brand,quantity,img,ratins,price,description}=product;
    const stars = Array(ratins).fill(0);
    return (
        <div className=" col-md-4 g-4  text-center">
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        {
                            stars.map((_,index)=>{
                                return(
                                    <FaStar
                                        key={index}
                                        style={{color:'#F6B924'}}
                                    ></FaStar>
                                )
                            })
                        }
                    </div>
                    <Card.Text  className='m-0 fw-bold' style={{color:'#FF0101'}}>${price} </Card.Text>
                    <Card.Text  className='m-0'><ReadMore message={description}></ReadMore></Card.Text>
                    <Card.Text  className='m-0'>Brand: <span className='fw-bold'>{brand}</span> </Card.Text>
                    <Card.Text  className='m-0'><span className='fw-bold'>Quantity:</span> {quantity} </Card.Text>
                    <Button variant="primary" className='mt-3'>Buy Now</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Product;