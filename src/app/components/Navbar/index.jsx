import "./style.css"

const index = () => {
  return (
    <nav className="navbar">
        <h1 className="title">Susovan Jana</h1>
        <ul className="menu">
            <li>Research</li>
            <li>Teaching</li>
            <li>Professional</li>
            <li>Academics</li>
            <li>Achievements</li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
        </ul>
    </nav>
  )
}

export default index