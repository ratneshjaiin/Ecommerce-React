import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import FormatePrice from '../Helperse/FormatePrice';
const ListView = ({products}) => {
  return (
    <Wrapper>
     <div className='list_view'>  
       {
        products.map((curElem)=>{
          const { id, name, image, price, category,description } = curElem;
          return(
            <NavLink key={curElem.id} to={`/singlepreoduct/${id}`}>
              <div className="card mb-3" style={{maxWidth:"100%"}}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src={image} className="img-fluid rounded-start img-thumbnail" alt={name}/>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <FormatePrice price={price}/>
                      <p className="card-text">{description.slice(0,99)}</p>
                      <p className="card-text"><small className="text-muted">{category}</small></p>
                      <button type="button" className="btn btn-outline-primary">Primary</button>
                  </div>
                </div>
              </div>
              </div>
            </NavLink>
          )
        })
       }
    </div>  
    </Wrapper>    
  )
}
const Wrapper = styled.section`
  .list_view{
    a{      
      text-decoration: none;
      text-transform: capitalize;
      color: black;
    }
  }
`
export default ListView