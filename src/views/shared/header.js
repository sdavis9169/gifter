import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="#">gifter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <Link to={'/dashboard'} >
      <button>Home</button>
      </Link>

      <Link to={'/'} >
      <button>Logout</button>
      </Link>
</nav>
        </div>
    )
}