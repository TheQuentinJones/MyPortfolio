export default function Contact() {


  return (
    <div style={{ height: '80vh'}}>
      <h1>Contact Page</h1>
      <div className='container'>
        <h1 className='is-size-1 has-text-centered' style={{ margin: '3rem', padding: '3rem'}}>Your Info</h1>
        <form className='' style={{ margin: '4rem',}}>
          <div className="field">
            <label class="label">Name</label>
            <p className="control has-icons-left has-icons-right">              
              <input className="input is-small" type="name" placeholder="Your Name" style={{ width: '20vw'}} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label class="label">Email</label>
            <p className="control has-icons-left">            
              <input className="input is-small" type="email" placeholder="Your Email" style={{ width: '20vw'}} />
            </p>
          </div>
          <div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea is-small" placeholder="Your Message"></textarea>
            </div>
          </div>  
          </div>
          <div class="field is-grouped" style={{ margin: '2rem' }}>
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>        
      </div>
    </div>
  );
}
