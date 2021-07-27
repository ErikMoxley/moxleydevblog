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
        <Link href='/' passHref alt=''>
        <h2><span>Blog</span></h2>
        </Link></li>
        <li>
        <Link href='/contact' passHref alt=''>
        <h2><span>Privacy</span></h2>
        </Link></li>
        <li>
        <Link href='/terms' passHref alt=''>
        <h2><span>Terms</span></h2>
        </Link></li>
        <li>
        <Link href='/about' passHref alt=''>
        <h2><span>About</span></h2>
        </Link></li>
      </ul>
    </footer>
  )
}