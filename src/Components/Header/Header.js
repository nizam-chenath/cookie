import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
function Header() {

  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const [ searchItem, setSearchItem] = useState("")


  const goToSell = () =>{
    history.push('/create')
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
        
          MyoPro
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='Serach location' />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find crafts that you like..."
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        {/* <div className="language">
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>Italic</option>
            <option>Chinese</option>
          </select> */}
          {/* <span> ENGLISH </span> */}
          {/* <Arrow></Arrow> */}
        {/* </div> */}
        <div className="loginPage">
          <span>{user ? `Hey..welcome ${user.displayName}` : <span onClick={()=>{ history.push("login")}}>Login</span>}</span>
          <hr />
        </div>
          {user && <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}

        {/* <div className="sellMenu" onClick={goToSell}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
