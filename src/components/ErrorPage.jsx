import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='row'>
      <div className='col-xs-12'>
         <div className='Error-image'>
             <img width="100%" src='https://www.impactbnd.com/hs-fs/hubfs/404-error-page-examples-best.jpg?length=1200&name=404-error-page-examples-best.jpg' alt="Error-image"/>
             <NavLink to ="/" className="btn btn-dark">Go To Home</NavLink>        
          </div>
      </div>
    </div> 
  )
}

export default ErrorPage