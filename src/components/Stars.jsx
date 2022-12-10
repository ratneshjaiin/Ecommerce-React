import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

const Stars = ({stars,reviews}) => {

 const ratingStar = Array.from({length:5},(curElem,index)=>{
        let number = index + 0.5 ; 
     
        return <span key={index}>
         {
            stars >= index+1 ? <FaStar className='icon'/> : stars >= number ? <FaStarHalfAlt className='icon'/> : <AiOutlineStar className='icon'/>
         }
        </span>
    })
    // console.log("s",stars)
    // console.log("R",reviews)
  return (
    <div className='star_rating'>
     <p>{ratingStar}</p>
     <p>({reviews} customer reviews) </p>
    </div>
  )
}

export default Stars