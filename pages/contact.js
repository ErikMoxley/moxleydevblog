// import Link from 'next/link'
// import profilePic from '../public/images/newprofile.png'

const Contact = () => {
    return (
  
<div id="contact-area">
  <div className="about-container">
    <div className="contact-info">
      <h2 className="con-title">Contact</h2>
        <p>Feel free to contact me via social media or through the working contact form built using Netlify forms with Recaptcha2.</p>
          <ul className="address">
            <li><span>Greater Boston, United States</span></li>
              <li><span>
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

<div className="contact-form">
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Submit</button>
  </p>
</form>
</div>


  </div>
</div>


    )
  }
  
  export default Contact