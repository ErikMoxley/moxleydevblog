import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
      <div className='navigation'>
        <li>
        <Link href='/' passHref alt=''>
        <h2><span className='header-links'>Erik Moxley</span></h2>
        </Link></li>
        <span className='header-links'>
        {/* <li>
        <a href='https://www.erikmoxley.com/' passHref alt='' target="_blank" rel="noopener noreferrer">
        <h2 className='header-a'>|&nbsp;&nbsp;&nbsp;Website</h2>
        </a></li> */}
        <li>
        <Link href='/about' passHref alt=''>
        <h2 className='header-a'><span>|&nbsp;&nbsp;&nbsp;About</span></h2>
        </Link></li>
        <li>
        <Link href='/personal' passHref alt=''>
        <h2 className='header-a'><span>|&nbsp;&nbsp;&nbsp;Personal Blog</span></h2>
        </Link></li>
        <li>
        <Link href='/' passHref alt=''>
        <h2 className='header-a'><span>Dev Blog</span></h2>
        </Link></li></span>
      </div>
      </ul>
    </header>
  )
}