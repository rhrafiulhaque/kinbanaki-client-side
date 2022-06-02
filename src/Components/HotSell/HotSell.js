import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './HotSell.css';
import HotSellSingle from './HotSellSingle';

const HotSell = () => {
    const [hotSellProducts, hotSellProductsAdd] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => hotSellProductsAdd(data));
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <h1 className='fw-bold text-center mb-5' style={{ color: '#161880', fontSize: '50px' }}> Our Hot Sales</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {hotSellProducts.map(hotSellProduct =>
                        <SwiperSlide>
                            <HotSellSingle
                                key={hotSellProduct._id}
                                hotSellProduct={hotSellProduct}>
                            </HotSellSingle>
                        </SwiperSlide>)}
                </Swiper>





            </div>

        </div>
    );
};

export default HotSell;