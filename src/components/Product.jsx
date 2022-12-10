import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatePrice from '../Helperse/FormatePrice';
const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    return (
        <div key={id} className="col-md-4" >
            <NavLink to={`/singlepreoduct/${id}`}>
                <div className="products-detail">
                    <div className="products-image">
                        <figure>
                            <img src={image} alt={name} />
                            <figcaption className="caption">{category}</figcaption>
                        </figure>
                    </div>
                    <div className="products-heading">
                        <h2>
                            {name}
                        </h2>
                        <p>
                            <FormatePrice price={price} />
                        </p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Product