import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    // const {service} = props;
    const { index, name, balance, email, picture, guid, about } = service;
    return (
        <div className="service pb-3">           
        <Card>
            <Card.Img variant="top" src={picture} />
                <Card.Body>
                <Card.Title>{guid}</Card.Title>
                <Card.Text>Doctor:{name}</Card.Text>
                <Card.Text>Service Fee:{balance}</Card.Text>
                <Card.Text>Email:{email}</Card.Text>
                <Card.Text>Description:{about.slice(0,100)}</Card.Text>
                <Link to={`/booking/${index}`}>
                    <button className="btn btn-primary">Pay and Book {name.toLowerCase()}</button>
                </Link>
        </Card.Body>
</Card>
        </div>
    );
};

export default Service;