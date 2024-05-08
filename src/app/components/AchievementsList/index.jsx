import './style.css'

const index = ({date, title}) => {
  return (
    <section className='publish-section'>
        <p className='publish-title'>{title}</p>
        <p className='author'>Year: {date}</p>
        <p className='link'>Link</p>
    </section>
  )
}

export default index