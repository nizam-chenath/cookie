import React from 'react';
import {useEffect, useState, useContext } from 'react'
import {PostContext} from '../../store/PostContext'
import {FirebaseContext} from '../../store/FirebaseContext'
import {Link} from 'react-router-dom'

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==', userId).get().then((res) =>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })

  },[])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          style={{height: "300px",width: "300px"}}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       { userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <button className='call-btn'>  <a style={{ color: "white"}} href={"tel:+" + userDetails.phone}>call and deal</a></button>
          {/* <a href={"tel:+" + userDetails.phone}>call and deal</a> */}
          <p>Phone Number: {userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
