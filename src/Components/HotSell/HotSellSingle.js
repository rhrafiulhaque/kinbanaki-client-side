import React from 'react';
import { Card } from 'react-bootstrap';
import './HotSell.css'

const HotSellSingle = ({ hotSellProduct }) => {
    const { img, name, price } = hotSellProduct;
    return (
        <div className=''>
            <Card className="text-black card-hover ">
                <Card.Img src={img} alt="Card image hot-cover" />
                <Card.ImgOverlay className=''>
                    <div className='position-absolute bottom-0'>
                        <Card.Title className=' fw-bold hotname'>{name}</Card.Title>
                        <Card.Text className='hotprice'>${price} </Card.Text>
                    </div>
                    <div className='position-absolute  hot-btn'>
                        <button className='btn btn-primary'>Buy Now</button>
                    </div>
                </Card.ImgOverlay>
            </Card>





        </div>
    );
};

export default HotSellSingle;