import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Create = () => {
 
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const history = useHistory()

  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)
   
  const date = new Date()
  const handleSubmit = () =>{
         setLoading(true)
         firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) =>{
           ref.getDownloadURL().then((url) =>{
             console.log(url)
             firebase.firestore().collection('products').add({
               name,
               category,
               price,
               url,
               userId:user.uid,
               createdAt:date.toDateString()
             })
             setLoading(false)
             history.push('/')
           })
         }).catch((err) =>{
           console.log(err)
         })
         
        
  }

  return (
    <Fragment>
      <Header />
      {
        loading?
          <div className='loading'>
              <FontAwesomeIcon icon={faSpinner} spin />
             
            <p>just a second, we are uploading ...</p>
          </div>
        :
         user ?
      <card>
        <div className="centerDiv">
      
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input1"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input1"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input1" type="number" id="fname" name="Price" value={price} onChange={(e)=> setPrice(e.target.value)} />
            <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
      
            <br />
            <input on type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
       
        </div>
      </card>
      :
      <div className='popup'>

      <h1>Please Login First for Publish your item</h1>
      <button className='home-btn' onClick={()=> history.push('/')}>Back to Home</button>
     </div>
      }
    </Fragment>
  );
};

export default Create;
