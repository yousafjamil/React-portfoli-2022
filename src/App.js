
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ServiceDetail from './components/ServiceDetail';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
     
 <Navbar />
 <Routes  >
 <Route exact path='/' element={<Home />} />
   <Route exact path='/about' element={<About />} />
   <Route exact path='/contact' element={<Contact />} />
   <Route exact path='/expertise' element={<Expertise />} />
   <Route exact path='/resume' element={<Resume />} />
   <Route exact path='/service' element={<Services />} />
   <Route exact path='/service/:id' element={<ServiceDetail />} />
 </Routes>
<Footer />

 
    </div>
  );
}

export default App;
