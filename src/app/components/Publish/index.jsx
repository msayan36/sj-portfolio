import './style.css'

const index = ({author, title, journal}) => {
  return (
    <section className='publish-section'>
        <p className='author'>{author}</p>
        <p className='publish-title'>{title}</p>
        <p className='article'>In: {journal}</p>
        <p className='link'>Link</p>
    </section>
  )
}

export default index