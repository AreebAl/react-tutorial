import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  // console.log(`navbar navbar-expand-lg    navbar-${props.mode} bg-${props.mode}`)
  return (
 <nav className={`navbar navbar-expand-lg    navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
      </ul>

    </div>
    <div className= {`form-check form-switch ${props.mode}=='light?"dark":"light`} >
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.toggleMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault" >Default switch checkbox input</label>
</div>
  </div>
</nav>
  )
}

export default Navbar