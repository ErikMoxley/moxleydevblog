import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='navigation'>
        <Link href='/' passHref>
          <a href='/' alt=''><h2>Medium Clone</h2></a>
        </Link>
      </div>
    </header>
  )
}