export default function Contact() {


  return (
    <div style={{ height: '95vh'}}>
      <h1>Contact Page</h1>
      <div className='container'>
        <h1 className='is-size-2 has-text-centered'>Your Info</h1>
        <form style={{ margin: '4rem',}}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input is-small" type="name" placeholder="Your Name" style={{ width: '20vw'}} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input is-small" type="email" placeholder="Your Email" style={{ width: '20vw'}} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
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
