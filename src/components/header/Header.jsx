import React, {useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to='/'>
          <img
            className='header--icon'
            src='http://www.clipartbest.com/cliparts/yio/aBr/yioaBr8yT.png'
          />
        </Link>
        <Link to='/movies/upcoming' style={{textDecoration: 'none'}}><span>Upcoming</span></Link>
        <Link to='/movies/popular' style={{textDecoration: 'none'}}><span>Popular</span></Link>
        <Link to='/movies/top_rated' style={{textDecoration: 'none'}}><span>Top Rated</span></Link>
        <Link to='/tv' style={{textDecoration: 'none'}}><span>TV Shows</span></Link>
      </div>
      <div className='headerRight'>
        <form>
          <input type='search' className='search--field' placeholder='Searching for something?' value={searchItem} onChange={(e) => setSearchItem(e.target.value)}></input>
          <Link to={`/search/${searchItem}`}><button type="submit" value="Search" name="search" className="login--button" style={{backgroundColor:'#FF0000'}}>Search</button></Link>
        </form>
        <div className='login'>
          <Link to ='/login' style={{textDecoration:'none'}}><button className='login--button'>Login</button></Link>
        </div>
        <div className='login'>
          <Link to ='/register' style={{textDecoration:'none'}}><button className='login--button'>Register</button></Link>
        </div>
      </div>

    </div>
  );
};

export default Header;
