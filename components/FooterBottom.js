import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJs, faReact, faNpm  } from "@fortawesome/free-brands-svg-icons";

export default function FooterBottom() {
  return (
    <footer className='footer-bottom'>
      <div className='footer-container'>
        <div className='footer-nav'>
          <ul className='footer-navlinks'>
            <li>
            <Link href='/about' alt='' passHref>
              About
            </Link>
            </li>
            <li>
            <Link href='/contact' alt='' passHref>
              Contact
            </Link>
            </li>
            <li>
            <a href='https://moxley.hashnode.dev/' alt='' target="_blank" rel="noopener noreferrer">
              Hashnode
            </a>
            </li>
            <li>
            <a href='https://www.erikmoxley.com/' alt='' target="_blank" rel="noopener noreferrer">
              Website
            </a>
            </li>
          </ul>
        </div>
      <div className='footer-nav'>
      <ul>
        <div>
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
         </div>
      </ul>
      </div>
    </div>
    <div className='copyright'>
    <li>
      <p>
        &nbsp;&nbsp;Copyright &copy; {(new Date().getFullYear())} ErikMoxley</p></li>
    </div>
    </footer>
  )
};