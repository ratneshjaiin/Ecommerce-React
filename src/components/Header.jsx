import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar prls-sub-nav navbar-expand-lg bg-light" style={{backgroundColor:"#ff4400"}}>
        <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#"><img src="https://www.parallels.com/static/pl/typo3conf/ext/prls_theme/Resources/Public/theme/res/img/logo/white-140x30.png" alt="logo"/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Nav/>
        </div>
    </nav>
  )
}
export default Header 