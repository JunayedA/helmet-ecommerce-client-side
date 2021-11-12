import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth();
    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() =>{
        fetch('/serviceDetails.json')
        .then(res => res.json())
        .then(data =>setServiceDetails(data.service))
    },[]);

    useEffect(() =>{
        const foundService = serviceDetails.find(service => service.index == serviceId);
        setSingleService(foundService);
    },[serviceDetails])
    return (
        <div>
            <div>
                <Row>
                    <Col md={6} xs={12}>
                        <Card>
                        <Card.Img variant="left" src={singleService?.picture} />
                        </Card>
                    </Col>
                    <Col md={6} xs={12}>
                        <Card>
                        <Card.Body>
                            <Card.Title>{singleService?.guid}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Doctor:{singleService?.name}</Card.Subtitle>
                            <Card.Text>Description:{singleService?.about}</Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Age:{singleService?.age}</ListGroup.Item>
                            <ListGroup.Item>Gender:{singleService?.gender}</ListGroup.Item>
                            <ListGroup.Item>Graduate from {singleService?.company}</ListGroup.Item>
                            <ListGroup.Item>Eye Color:{singleService?.eyeColor}</ListGroup.Item>
                            <ListGroup.Item>Email:{singleService?.email}</ListGroup.Item>
                            <ListGroup.Item>Phone:{singleService?.phone}</ListGroup.Item>
                            <ListGroup.Item>Address:{singleService?.address}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Card.Body>
                            <Card.Title>Service Fee:{singleService?.balance}$</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="d-block w-50 mx-auto m-4" defaultValue={user.email} {...register("exampleRequired", { required: true })} />
                <input className="d-block w-50 mx-auto m-4" placeholder="Card Number" {...register("example")} />
                <input className="d-block w-50 mx-auto m-4" placeholder="MM/YY  CVC" {...register("example")} />
                {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                <input className="bg-success p-2 border border-success px-5" type="submit" value={`Pay${singleService?.balance}$`} />
            </form>
        </div>
    );
};

export default Booking;