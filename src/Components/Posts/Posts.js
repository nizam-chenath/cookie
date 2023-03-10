import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import Heart from '../../assets/Heart';
import {PostContext} from '../../store/PostContext'
import { FirebaseContext  } from '../../store/FirebaseContext';
import Card from './Card';
import './Post.css';

function Posts() {
  
  const {firebase} = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const {setPostDetails} = useContext(PostContext)  

  useEffect(()=>{
      firebase.firestore().collection('products').get().then((snapshot)=>{
        const allPost = snapshot.docs.map((product) =>{
          return{
            ...product.data(),
           id: product.id
          }
        })
        setProducts(allPost)
      })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span style={{margin: "20px 0"}}>Quick Menu</span>
          <input type="text" placeholder='Search category' className='searchField' onChange={(e) => setSearchItem(e.target.value)}></input>
        </div>
        <div className="cards">
          {products.filter((e)=> e.category.toLowerCase().includes(searchItem)).map((product) =>{
            return <Card setPostDetails={setPostDetails} product={product} url={product.url} price={product.price} category={product.category} name={product.name} date={product.createdAt}/>
          })}
         
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
