import React ,{useContext,useState,useEffect} from 'react'
import { firebase } from 'firebase';
import { AuthContext, FirebaseContext } from './../../store/FirebaseContext';
import Card from '../Posts/Card';
import './MYList.css'
import Cards from './Cards';

const MyLists = () => {
  const {firebase} = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {user} = useContext(AuthContext)

  
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

const filteredProducts = products.filter((product) =>{
  return user.uid==product.userId
})
console.log(filteredProducts)
// console.log(user.uid)
  return (
    <div className='items-page'>

      <p className='noofitems'>No of Items posted: {filteredProducts.length}</p>

    <div className='list-card'>
        {filteredProducts.map((filtereditem)=>{
          return(
         

            <Cards  product={filtereditem} url={filtereditem.url} price={filtereditem.price} category={filtereditem.category} name={filtereditem.name} date={filtereditem.createdAt}/>           
            
          ) 
        })}
    </div>
    </div>
  )
}

export default MyLists