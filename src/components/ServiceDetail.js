import React, { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import data from '../images/data';

function ServiceDetail() {
    const { id } = useParams()
    const match = data.find((service) => service.id === parseInt(id));
    const { pic, title, content } = match;
    return <div className='container py-5 mt-5 '>
        <h1 className='detail'>Our Service Detail page </h1>
        <div className='row'>
<div className='col-sm-12 col-md-12 col-lg-12'>
<div className="card mb-4 service-card" data-aos="fade-left">

<img className="card-img-top service-img" src={pic} alt="Card image cap" />
<div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}  </p>
    <Link to={`/service`}> <button className='btn btn-info p-2 mb-3'  >Go Back</button></Link >

</div>
</div>
</div>
           


        </div>

    </div>;
}

export default ServiceDetail;
