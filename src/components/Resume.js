import React from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import resume from '../images/resume.pdf';


function Resume() {

  return <div className='container'>

      <div className='row'>
      <h1 className='resume-header' data-aos="zoom-in">My resume</h1>
        <div className='col-sm-12 col-md-12 col-lg-12'>
         
      

          <object  data={resume} type="application/pdf"  className='resume'>
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
         
        </div>
      </div>
  </div>;
}

export default Resume;
