import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarContainer>
        <nav className="navbar navbar-expand-md navbar-light px-5 py-0">
        <Link className="navbar-brand" to='/'>
          <img src={`../../images/blog-logo.jpg`} alt="logo" />
        </Link>
        <div className="navbar navbar-expand ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/add-article'>Add Article</Link>
            </li>  
          </ul>
        </div>  
      </nav>
      </NavbarContainer>
    )
}

export default Navbar

//Main navbar
const NavbarContainer = styled.div`
background: var(--dark-green);
.nav-link{
color: #fff !important;
&:hover{
    background: var(--light-green);
} 
}
.navbar-brand img{
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
@media(max-width:765px){
  .nav-link{
    font-size: 12px;
  }
}
@media(max-width:250px){
  font-size: 12px;
  width: 250px;

  }


`;

