import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import Bannerimg from '../../images/banner.png'
import Bannerimg2 from '../../images/banner-2.png'
import Bannerimg3 from '../../images/banner-3.png'

const Banner = () => {
    return (
        <div>
            <Carousel className='d-none d-lg-block'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 "
                        src={Bannerimg}
                        alt="First slide"
                    />
                    <Carousel.Caption className='translate-middle  text-black ps-5'>
                        <h3>Redmi Note 7s</h3>
                        <p>Xiaomi Redmi Note 7S Android smartphone. Announced May 2019. Features 6.3″ display, <br /> Snapdragon 660 chipset, 4000 mAh battery, 64 GB storage, 4 GB RAM</p>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 "
                        src={Bannerimg2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='translate-middle text-black'>
                        <h3>Colmi P28 Plus</h3>
                        <p>COLMI P28 Plus Smart Watch. Stay healthy : Health: 24/7 Heart Rate monitor, Blood Pressure, Blood Oxygen, Sleep tracker, <br /> Breathe, Drink water reminder.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 "
                        src={Bannerimg3}
                        alt="First slide"
                    />
                    <Carousel.Caption className=' translate-middle text-black'>
                        <h3>Air Pod</h3>
                        <p>AirPods models deliver an unparalleled wireless experience, <br /> from magical setup to high-quality sound. Available with free engraving.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;