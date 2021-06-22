import React from 'react';
import {Carousel} from 'react-bootstrap';
import styles from './Carousel.module.scss';

import image1 from './../../assets/imageslider1.jpg';
import image2 from './../../assets/imageslider2.jpg';
import image3 from './../../assets/imageslider3.jpg';

const CarouselContainer = () => {
    return (
        <Carousel className={styles.carousel} fade={true}>
            <Carousel.Item className={styles.carouselItem} interval={2000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Make best living with our sofas</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={styles.carouselItem} interval={2000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>New Arrivals</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={styles.carouselItem} interval={2000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Bestsellers</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default CarouselContainer;
