import React from 'react';
import Aos from 'aos';


function About() {
    Aos.init()
  return <div>
   

   <section>
  <div className="container p-5">
    <div className="row">
      <div className="col-sm-10">

<h1 className="aboutme">About Me</h1>
<hr />

<p className="para" data-aos="fade-down-left">
  He, my  name is yousaf  and  I'm web Developer who's passionate about all things of javascript. I m  currently working  for a software developing company, where  you  can  find me creating variety of projects and  maintaing our web application
</p>
<p className="para" data-aos="fade-down-left">
  I'm a developer ,beacause I'm  inspired by  the idea of being a better me  today than i   was  yestarday,Put simply ,i  love to  learn more  coding
</p>

<p className="para" data-aos="fade-down-left">I'm Currently looking  for an opportunity to   work with javascript framework and I'd  ultimately like to end  up working on mobile  application using  computer vision </p>
  <p className="para"  data-aos="fade-down-left">If  you would  like to learn about what makes me tick  feel free to   visit my contact  section</p>
</div>
    </div>
  </div>
</section>

  </div>;
}

export default About;
