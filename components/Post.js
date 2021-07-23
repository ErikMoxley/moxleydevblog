import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/newprofile.png'

export default function Post({ post }) {
  return (
    <div className='card'>
      <div className='card-text'>
        <Link href={`/blog/${post.slug}`}><a>
          <div className='author-section'><Image className='author-image' src={profilePic} alt="Picture of the author" 
                  width={20}
                  height={20}/>
                  <span class='author-text'>{post.frontmatter.author}</span></div>
              <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.excerpt}</p>
          </a>
        </Link>
          <div className='post-date'>Posted on {post.frontmatter.date}</div>
        </div>
      <Link href={`/blog/${post.slug}`}><a>
      <div className='card-image'>
          <img src={post.frontmatter.cover_image} alt='' />
     </div></a></Link>
    </div>

  )
}