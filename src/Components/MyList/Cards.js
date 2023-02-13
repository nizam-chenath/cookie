import React, {useContext, useState}from 'react'

import { useHistory } from 'react-router';
import { firebase } from 'firebase';
import { FirebaseContext } from './../../store/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Cards = ({name,url,category,price,date,product}) => {

    const history = useHistory()
  const [loading, setLoading] = useState(false)

    const {firebase} = useContext(FirebaseContext)


    const deleteItem = () =>{
      setLoading(true)
        firebase.firestore().collection('products').doc(product.id).delete().then(()=>{
            console.log('DELETED SUCCESSFULLY')
            setLoading(false)
            window.location.reload()
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    loading ? 
    <div className='loading'>
    <FontAwesomeIcon icon={faSpinner} spin />
   
  <p>just a second, we are deleting {name} ...</p>
</div>
:
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