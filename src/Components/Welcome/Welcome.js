import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../store/FirebaseContext'
import './Welcome.css'
import { useHistory } from 'react-router-dom'


const Welcome = () => {
  
  const {user} = useContext(AuthContext)
 const history = useHistory()
  return (
    <div className='welcome-page'>
        <div className='content-side'>
          <div className='content'>{user ? `Hey Welcome ... ${user.displayName}` : "Welcome"}</div>
        </div>
        <div className='btn-side'>
          <div>

            <button onClick={()=>{
              history.push('/')
            }}>Lets Explore</button>
          </div>
          <div>

            <button onClick={()=>{
              history.push('/create')
            }}>Sell your product</button>
          </div>
        </div>
    </div>
  )
}

export default Welcome
