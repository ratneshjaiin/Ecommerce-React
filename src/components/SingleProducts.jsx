import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobleContext } from '../context';
import FormatePrice from '../Helperse/FormatePrice';
import AddToCart from './AddToCart';
import MyImage from './MyImage';
import PageNavigation from './PageNavigation';
import Stars from './Stars';

const API = "https://api.pujakaitem.com/api/products";
const SingleProducts = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useGlobleContext();
  // console.log("single", singleProduct)
  const { id } = useParams();
  // console.log("id:",id)

  const { id: alias, name, company, price, description, category, featured, stock, reviews, stars, image } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  // console.log("image:",image)
  return (
    <Fragment>
      <PageNavigation title={name} />
      <section className="single_product">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
            
            <MyImage image={image}/>
            </div>
            <div className="col-md-5">
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews}/>
              <p>MRP: <del><FormatePrice price={price + 25000}/></del></p>
              <p>Deal of the day : <span><FormatePrice price={price}/> </span></p>
              <p>{description}</p>
              <div className='product-data-warranty'>
              <div className="row">
                <div className='col-md-3 col-6'>
                  <div className="card">
                    <i className="fa-solid fa-truck"></i>
                    <div className="card-body">
                      <p className="card-title">Free Delivery</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-6'>
                  <div className="card">
                    <i className="fa-solid fa-truck"></i>
                    <div className="card-body">
                      <p className="card-title">30 Days replacement</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-6'>
                  <div className="card">
                    <i className="fa-solid fa-truck"></i>
                    <div className="card-body">
                      <p className="card-title">Delivered</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-6'>
                  <div className="card">
                    <i className="fa-solid fa-truck"></i>
                    <div className="card-body">
                      <p className="card-title">2 year Warrenty</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-data-info">
                 <p>Available: <span >{stock>0 ?"In Stock":"Out Of Stock"}</span></p>
                 <p>ID: {id}</p>
                 <p>Brand : <span>{company}</span></p>
                 </div>              
              </div>
              <hr/>
              <div className='color_picker'>
                  {stock > 0 && <AddToCart product={singleProduct}/>}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SingleProducts