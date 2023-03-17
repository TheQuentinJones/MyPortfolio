import React from "react";
import Header from './components/Header/Header'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './components/Footer/Footer'


const App = () => {

return (

    <body>
        <Header />
        <div>
            <AboutMe />
            <Contact />
            <Portfolio />
            <Resume />
        </div>
        <Footer />
    </body>
    
    
    )
};

export default App;
