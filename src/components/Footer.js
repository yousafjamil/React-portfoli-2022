import React from 'react';

function Footer() {
  return <div className='container-fluid py-4  footer'>
    <div className='row'>
      <div className='offset-2 col-sm-8 col-md-4 col-lg-4'>

        <footer>
          <img className="logo" src="imges/mylogo.png" />
          <div className="social-footer">

            <div className='col-sm-6 col-md-6 col-lg-6 mt-5'>

              <div ><span className='bg-white p-3 rounded-circle'><i className="fas fa-phone fa-2x"> <b className='bg-white'>+923448307585</b>    </i>  </span>

              </div><br />

              <div ><span className='bg-white p-3 rounded-circle'><i className="far fa-envelope fa-2x"><b>yousafjamil200@gmail.com</b> </i></span>

              </div><br />

              <div ><span className='bg-white p-3 rounded-circle'><i className="fab fa-linkedin fa-2x"></i></span>
                <b>https://www.linkedin.com/in/yousaf-jamil-7b6a13190/</b>
              </div>


            </div>


          </div>

          <p className="display-5 text-white">Copyright 2020 Name STCS Template.All Right Reserved</p>

        </footer>


      </div>
    </div>


  </div>;
}

export default Footer;
