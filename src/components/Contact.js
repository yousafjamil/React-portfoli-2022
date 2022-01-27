import React from 'react';
import Aos from 'aos';
;
function Contact() {
    Aos.init()
    return <div className='container bg-white mt-5'>

<h1 className="text-center bg-info text-white mt-5 py-4" data-aos="zoom-in">Contact<span>Us</span></h1>
                <h5 className='text-center display-5' data-aos="zoom-in">I will provide a high standered clean website for your bussiness solution</h5>

        <div className='row'>
            <div className='col-sm-6 col-md-6 col-lg-6 mt-5'>

                <div data-aos="zoom-in"><span className='bg-white p-3 rounded-circle'><i className="fas fa-phone fa-2x"></i></span><br />
                <b >+923448307585</b>    
                </div><br />

                <div data-aos="zoom-in"><span className='bg-white p-3 rounded-circle'><i className="far fa-envelope fa-2x"></i></span>
                <b>yousafjamil200@gmail.com</b>    
                </div><br />

                <div data-aos="zoom-in"><span className='bg-white p-3 rounded-circle'><i className="fab fa-linkedin fa-2x"></i></span>
                <b>https://www.linkedin.com/in/yousaf-jamil-7b6a13190/</b>    
                </div>


            </div>
           
            <div className='col-sm-6 col-md-6 col-lg-6 '>

              
                <form className='jumbotron'>
                    <div className="form-group p-4">
                        <label >Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>


    </div>



}

export default Contact;
