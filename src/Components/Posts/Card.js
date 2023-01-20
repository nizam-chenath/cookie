import React from 'react'
import Heart from '../../assets/Heart';
import { useHistory } from 'react-router';

const Card = ({name,url,category,price,date,setPostDetails,product}) => {
    const history = useHistory()
  return (
    <div
    className="card"
    onClick={()=>{
        setPostDetails(product)
        history.push('/view')
    }}
  >
    <div className="favorite">
      <Heart></Heart>
    </div>
    <div className="image">
      <img src={url} alt="" />
    </div>
    <div className="content">
      <p className="rate">&#x20B9; {price}</p>
      <p className="name"> {name}</p>
      <span className="kilometer">{category}</span>
    </div>
    <div className="date">
      <span>{date}</span>
    </div>
  </div>
  )
}

export default Card