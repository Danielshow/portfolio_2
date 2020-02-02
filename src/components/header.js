import React from 'react'
import { Link } from 'gatsby'

const Header = ({setOpen, open}) => (
  <div className="header">
    <div className="header__nav">
      <ul className="header__nav--list"> 
        <li><Link to="/">Home</Link> </li>   
        <li><Link to="/blog">Blog</Link> </li>   
        <li onClick={ () => setOpen(true)}><a href="#">About Me</a></li>
      </ul>
    </div>
  </div>
)

export default Header;
