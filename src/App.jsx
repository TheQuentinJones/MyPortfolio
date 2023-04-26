import React from "react";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Education from './Components/Education/Education';
import Nav from './Components/Nav/Nav'
import Experience from './Components/Experience/Experience'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

return (

    <>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
    </>

    // <Router>
    //     <div className='has-background-black'>
    //         <Header />
    //         <div>
    //             <Routes>
    //                 <Route path='/MyPortfolio' element={ <About /> />}/>
    //                 <Route path='/projects' element={ <Portfolio /> }/>
    //                 <Route path='/education' element={ <Education /> }/>
    //                 <Route path='/contact' element={ <Contact /> }/>
    //             </Routes>
    //         </div>
    //         <Footer />
    //     </div>
    // </Router>
   
    )
};

export default App;
