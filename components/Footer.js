import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='footer'>
      <ul>
      <div>
        <li>
        <Link href='/' passHref alt=''>
        <h2><span>Blog</span></h2>
        </Link></li>
        <li>
        <Link href='/contact' passHref alt=''>
        <h2><span>Privacy</span></h2>
        </Link></li>
        <li>
        <Link href='/' passHref alt=''>
        <h2><span>Terms</span></h2>
        </Link></li>
        <li>
        <Link href='/about' passHref alt=''>
        <h2><span>About</span></h2>
        </Link></li>
      </div>
      </ul>
    </footer>
  )
}