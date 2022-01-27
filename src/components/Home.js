import React from 'react';
import About from './About';
import Contact from './Contact';
import Expertise from './Expertise';
import Myproject from './Myproject';
import Resume from './Resume';
import Services from './Services';
import Typical from 'react-typical'
function Home() {
  return <div>

<section className="home-section">
    <div className="container-fluid py-3 ">
        <div className="row mt-5">
            <div className="col-sm-6 py-5">
              <h1 className="myname mt-5">
                
              <Typical
        steps={['Hello', 1000, ' Hi, I am yousaf jamil . I am a full stack  Developer', 500,'I build both Front end website in react.js and backend end web api  in Node.js',1000]}
        loop={Infinity}
        wrapper="p"
      />
               </h1>
            
            </div>

            <div className="col-sm-6" className='my-pic-section'  data-aos="flip-right">
               <img src="https://media-exp1.licdn.com/dms/image/C5603AQF3hsJjNPXneA/profile-displayphoto-shrink_800_800/0/1633202979461?e=1648684800&v=beta&t=4qFQv8Qp6CoEZp1Lr3lKanN6VQKlS7ZPQqOdM3-JSjA" alt="mypic" className="mypic"  />
            </div>
   
        </div>
    </div>
</section>

<About />
<hr />
<Expertise />
<hr />
<Contact />

<Resume />
<Myproject  />
<Services />
  </div>;
}

export default Home;
