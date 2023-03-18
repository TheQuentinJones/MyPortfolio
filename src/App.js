import React from "react";
import Header from './components/Header/Header'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Footer from "./components/Footer/Footer";
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
