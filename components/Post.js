import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/newprofile.png'

export default function Post({ post }) {
  return (      <Link href={`/blog/${post.slug}`}><a>
    <div className='card'>
      <div className='card-text'>
        <div className='author-section'><Image className='author-image' src={profilePic} alt="Picture of the author" 
                  width={30}
                  height={30}/>
                  <span class='author-text'>{post.frontmatter.author}</span></div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.excerpt}</p>
      <div className='post-date'>Posted on {post.frontmatter.date}
      </div>
      </div>
      <div className='card-image'>
        <img src={post.frontmatter.cover_image} alt='' />
      </div>
    </div>
    </a>
    </Link>
  )
}