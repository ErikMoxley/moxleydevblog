import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='navigation'>
        <Link href='/' passHref alt=''>
          <h2><span className='header-title'>Medium Clone</span></h2>
        </Link>
      </div>
    </header>
  )
}