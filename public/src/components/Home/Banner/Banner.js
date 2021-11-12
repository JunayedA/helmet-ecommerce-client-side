import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
<Carousel variant="dark">
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src=""
        alt="First slide"
        />
        <Carousel.Caption>
        <h5>We are at your service</h5>
        <p>Engaged in your highest service</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src=""
        alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Our Doctors</h5>
        <p>The most advanced quality ICU service</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src=""
        alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Covid-19</h5>
        <p>There are separate security measures for covid-19</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;