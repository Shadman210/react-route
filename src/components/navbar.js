import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="nav-wrapper yellow darken-3">
            <div className="container">
                <Link className = 'brand-logo left'> LOGO </Link>

                <ul className = 'right'>
                    <li> <Link to ='/'>HOME</Link> </li>
                    <li> <Link to ='/about'>ABOUT</Link> </li>
                    <li> <Link to ='/contact'>Contact</Link> </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar