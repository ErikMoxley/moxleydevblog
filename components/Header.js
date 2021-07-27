import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
      <div className='navigation'>
        <li>
        <Link href='/' passHref alt=''>
        <h2><span className='header-title'>Erik Moxley</span></h2>
        </Link></li>
        <span className='header-links'>
        <li>
        <Link href='/contact' passHref alt=''>
        <h2 className='header-contact'><span>Contact</span></h2>
        </Link></li>
        <li>
        <Link href='/about' passHref alt=''>
        <h2 className='header-about'><span>About</span></h2>
        </Link></li>
        <li>
        <Link href='/' passHref alt=''>
        <h2 className='header-blog'><span>Blog</span></h2>
        </Link></li></span>
      </div>
      </ul>
    </header>
  )
}