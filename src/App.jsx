import { BrowserRouter } from 'react-router-dom';
import {About , Contact , Experience, Feedbacks, Hero , Navbar , Tech , Works, StarsCanvas } from './components';
const App =()=> {
 

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>

      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      {/* //for  just leave this feedback as we dont have any so  */}
     {/* <Feedbacks/> */}
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
      </div>
      </BrowserRouter>
  
  )
}

///template_ip9vlvo 

  ///service_pcrj6kh

  ///8NMU7PApy50Mk_Jv3

export default App;
