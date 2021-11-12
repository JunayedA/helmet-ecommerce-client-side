import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
<Card className="bg-dark text-white">
  <Card.Img src={notfound} style={{height:"100vh",width:"100%"}} alt="Card image" />
  <Card.ImgOverlay>
  <Link to="/">
      <button className="p-5 btn-primary m-5 d-flex" style={{borderRadius:"10px", fontSize:"20px"}}>Go Back</button>
    </Link>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default NotFound;