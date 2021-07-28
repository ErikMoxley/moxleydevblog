import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/newprofile.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <span className='profile-image'>
      <Image className='author-image' src={profilePic} alt="Picture of the author" 
                  width={100}
                  height={100}/></span>
        <li>
        <Link href='/contact' passHref alt=''>
        <h2>Contact</h2>
        </Link></li>
        <li>
        <Link href='/privacy' passHref alt=''>
        <h2>Privacy</h2>
        </Link></li>
        <li>
        <Link href='/terms' passHref alt=''>
        <h2>Terms</h2>
        </Link></li>
        <li>
        <p class="copyright"><h4>
        &nbsp;&nbsp;Copyright &copy; 2021 ErikMoxley</h4></p></li>
      </ul>
    </footer>
  )
}