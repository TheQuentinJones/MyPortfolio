import React from "react";
import Header from './Components/Header/Header'
import AboutMe from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

return (

    <Router>
        <div className='has-background-black'>
            <Header />
            <div>
                <Routes>
                    <Route path='/MyPortfolio' element={ <AboutMe />}/>
                    <Route path='/projects' element={ <Portfolio /> }/>
                    <Route path='/education' element={ <Education /> }/>
                    <Route path='/contact' element={ <Contact /> }/>
                </Routes>
            </div>
            <Footer />
        </div>
    </Router>
    
    )
};

export default App;
