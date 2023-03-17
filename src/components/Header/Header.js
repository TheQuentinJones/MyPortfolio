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
            <a class="navbar-item" href='/MyPortfolio'>
              About
            </a>

            <a class="navbar-item" href='/portfolio'>
              Portfolio
            </a>

            <a class="navbar-item" href='/contact'>
              Contact
            </a>

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