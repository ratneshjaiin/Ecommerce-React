import React from 'react'
// import styled from 'styled-components'
const Services = () => {
  return (
    <section className='service-block'>
      <div className='container'>

        <div className='row'>
          <div className='col-md-3'>
            <div className="card mb-3">
              <i className="fas fa-shipping-fast"></i>
              <div className="card-body">
                <h6 className="card-title">Super Fast and Free Delivery</h6>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mb-3">
            <i className="fa-solid fa-shield"></i>
              <div className="card-body">
              <h6 className="card-title">Non-contact Shipping</h6>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mb-3">
            <i className="fa-solid fa-coins"></i>  
              <div className="card-body">
              <h6 className="card-title">Money-back Guaranteed</h6>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mb-3">
            <i className="fa-solid fa-building-columns"></i>  
              <div className="card-body">
              <h6 className="card-title">Super Secure Payment System</h6>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services