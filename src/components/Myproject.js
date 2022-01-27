import React from 'react';

function Myproject() {
  return <div className='container'>
    <h1 className='service-header' >My Projects</h1>

    <div className='row'>
      <div className='col-sm-12 col-md-6 col-lg-4 project-container'>
        <div className="card mb-3 ml-3  service-card" >
          <img className="card-img-top" src={"https://scontent.fisb6-1.fna.fbcdn.net/v/t1.18169-9/p370x247/19420815_354896064913317_6285275013479052278_n.png?_nc_cat=103&ccb=1-5&_nc_sid=85a577&_nc_ohc=nMer1mdO6bsAX-MKHem&_nc_ht=scontent.fisb6-1.fna&oh=00_AT8NQfh7lVubI5hklYbAjqlD8azOee2Ggpv7ZtzueGdqzQ&oe=62193420"} alt="Card  cap" />
          <div className="card-body">
            <p className="card-text">this is my Real  based project that i  have done for a company,which  is very popular company in peshawar.</p>
            <a href="https://stcss.netlify.app/" className="btn btn-primary">Browse the project</a>
          </div>
        </div>
        {/* second project */}
        <div className="card ml-3 service-card" >
          <img className="card-img-top" src={"https://www.filepicker.io/api/file/INZsH6XtRIqQqxvYGP6Q"} alt="Card  cap" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://yousaf-jamil.netlify.app/" className="btn btn-primary">Browse the project</a>
          </div>
        </div>
        {/* third project card */}
       
        <div className="card mb-3 ml-3  service-card" >
          <img className="card-img-top" src={"https://cdn.uarizonabootcamp.com/wp-content/uploads/sites/56/2020/05/front-end-developer-skills.jpg"} alt="Card  cap" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://vigilant-yousafjamil-1ca80f.netlify.app/" className="btn btn-primary">Browse the project</a>
          </div>
        </div>


      </div>
      
    </div>




  </div>;
}

export default Myproject;
