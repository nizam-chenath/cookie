import React, {useContext}from 'react'

import { useHistory } from 'react-router';
import { firebase } from 'firebase';
import { FirebaseContext } from './../../store/FirebaseContext';

const Cards = ({name,url,category,price,date,product}) => {

    const history = useHistory()

    const {firebase} = useContext(FirebaseContext)
    const deleteItem = () =>{
        firebase.firestore().collection('products').doc(product.id).delete().then(()=>{
            console.log('DELETED SUCCESSFULLY')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div
    className="card"
   
  >
   
    <div className="image">
      <img src={url} alt="" />
    </div>
    <div className="button-delete" onClick={deleteItem}>delete</div>
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

export default Cards