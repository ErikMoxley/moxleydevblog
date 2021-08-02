import Link from 'next/link'

export default function Header() {
  return (
    <header>
  <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
  <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
  <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>

      <ul className='nav-ul'>
        <span className='header-links'>
        <li className='nav-li'>
        <Link href='/personal' passHref alt=''>
        <h2 className='header-a'>Blog</h2>
        </Link></li>
        <li className='nav-li'>
        <Link href='/about' passHref alt=''>
        <h2 className='header-a'>About</h2>
        </Link></li>
        <a href='https://moxley.hashnode.dev/' passHref alt='' target="_blank" rel="noopener noreferrer">
        <h2 className='header-a'>Hashnode</h2>
        </a>
        <a href='https://www.erikmoxley.com/' passHref alt='' target="_blank" rel="noopener noreferrer">
        <h2 className='header-a'>Website</h2>
        </a>
        </span>
      </ul>
    </header>
  )
}