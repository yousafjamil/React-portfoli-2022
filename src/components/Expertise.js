import React from 'react';
import Aos from 'aos';
;

function Expertise() {
  Aos.init()
  return <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h1 className='resume-header'>my Expertise in programming </h1>
          <div className="expertise">
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >HTML</label>
              <input type="range" className="form-control"  defaultValue='90' readOnly />
            </div>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label>Bootstrap</label>
              <input type="range" className="form-control"  defaultValue='90' readOnly />
            </div>

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >CSS</label>
              <input type="range" className="form-control"   defaultValue='90' readOnly />
            </div>

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >Node.js</label>
              <input type="range" className="form-control "  defaultValue='90' readOnly />
            </div>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >ExpressJs</label>
              <input type="range" className="form-control"  defaultValue='90' readOnly />
            </div>

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >MongoDB</label>
              <input type="range" className="form-control" value="90" defaultValue='90' readOnly />
            </div>


            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <label >Mongoose</label>
              <input type="range" className="form-control" value="90" defaultValue='90' readOnly />
            </div>



          </div>


        </div>
      </div>
    </div>

  </div>;
}

export default Expertise;
