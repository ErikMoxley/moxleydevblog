import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <a href='/' alt=''><h2>Erik Moxley</h2></a>
        </Link>
      </div>
    </header>
  )
}