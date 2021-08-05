import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul className='nav-ul'>
        <span className='header-links'>
        <li className='nav-li'>
        <Link href='/' alt='' passHref>
        <h2 className='header-a'>Blog</h2>
        </Link></li>
        <li className='nav-li'>
        <Link href='/about' alt='' passHref>
        <h2 className='header-a'>About</h2>
        </Link></li>
        <a href='https://moxley.hashnode.dev/' alt='' target="_blank" rel="noopener noreferrer">
        <h2 className='header-a'>Hashnode</h2>
        </a>
        <a href='https://www.erikmoxley.com/' alt='' target="_blank" rel="noopener noreferrer">
        <h2 className='header-a'>Website</h2>
        </a>
        </span>
      </ul>
    </header>
  )
}