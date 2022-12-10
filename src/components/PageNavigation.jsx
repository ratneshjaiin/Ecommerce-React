import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
   <nav aria-label="breadcrumb">
      <ol className="breadcrumb mt-3">
        <li className="breadcrumb-item"><NavLink to="/" href="#">Home</NavLink></li>
        <li className="breadcrumb-item active" aria-current="page">{title}</li>
      </ol>
    </nav>
  )
}

export default PageNavigation