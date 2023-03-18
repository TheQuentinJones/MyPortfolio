import { Link } from 'react-router-dom';

const Header = () => {

  return (


    <nav class="navbar has-background-black hast-text-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-flex is-justify-content-center">
        <div class="navbar-item">
          <p className='is-size-3'>Quentin <span style={{ color: 'blue'}}>Jones</span></p>
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <Link to='/MyPortfolio'>Home</Link>
            </div>

            <div class="navbar-item" >
             <Link to='/projects'>Projects</Link>  
            </div>

            <div class="navbar-item" >
             <Link to='/education'>Education</Link>  
            </div>
            
            <div class="navbar-item" >
             <Link to='/contact'>Contact</Link>  
            </div>

            

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>

      
  )
};

export default Header;