import React from 'react';
import data from '../images/data';
import Aos from 'aos';
import ServiceDetail from './ServiceDetail';
import { Link } from 'react-router-dom';
function Services() {


  Aos.init()
  return <div className='container'>
    <h1 className='service-header' data-aos="fade-right">We Provide the following Services</h1>
    <div className='row'>

      {data.map((service, index) => {

        return <div className='col-sm-12 col-md-6 col-lg-4' key={service.id}>

          <div className="card mb-4 service-card" data-aos="fade-left">

            <img className="card-img-top service-img" src={service.pic} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.content.substring(0, 150)}  </p>
              <Link to={`/service/${service.id}`}> <button className='btn btn-info p-2 mb-3'  >Read More</button></Link >

            </div>
          </div>
          
        </div>

      })}



    </div>

  </div>;
}

export default Services;
