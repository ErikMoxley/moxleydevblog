// import Link from 'next/link'
// import Image from 'next/image'
// import profilePic from '../public/images/newprofile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJs, faReact, faNpm  } from "@fortawesome/free-brands-svg-icons";

export default function FooterBottom() {
  return (
    <footer className='footer-bottom'>
      <ul>
          <span>
            <li className="made-with">This blog was made with NextJS plus:</li>
            <span>
              <li className="fa-icons">
              <span className="brand-icons"><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></span>
              <span className="brand-icons"><FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon></span>
              <span className="brand-icons"><FontAwesomeIcon icon={faJs}></FontAwesomeIcon></span>
              <span className="brand-icons"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></span>
              <span className="brand-icons"><FontAwesomeIcon icon={faNpm}></FontAwesomeIcon></span>
              </li>
            </span>
            <li>
        <p className="copyright">
        &nbsp;&nbsp;Copyright &copy; {(new Date().getFullYear())} ErikMoxley</p></li>
         </span>
      </ul>
    </footer>
  )
}