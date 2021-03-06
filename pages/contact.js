
const Contact = () => {
    return (
<div id="contact-area">
  <div className="about-container">
    <div className="contact-info">
      <h2 className="con-title">Contact</h2>
        <p>Feel free to contact me via social media or through the working contact form built using Netlify forms.</p>
          <ul className="address">
          <a href='https://goo.gl/maps/f3D1vfaadg7MvoC66' alt='' target="_blank" rel="noopener noreferrer">
            <li>Greater Boston, United States</li></a>
            <li>
              <span>
                <a
                  href="mailto:moxleydev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">Email Me via Gmail
                </a></span></li>
              <li><span>
                <a href="tel:+19789358860">Call via Phone
                </a></span></li>
                  <li><span><a href="https://erikmoxley.com/" alt='' target="_blank" rel="noopener noreferrer">www.erikmoxley.com
                </a></span></li>
          </ul>
</div>

<form name="contact" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
<p className="hidden">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>
      <p>
        <label htmlFor="yourname">
          Your Name:
        </label><br/>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label><br/>
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label><br/>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>


  </div>
</div>

    )
  }
  
  export default Contact