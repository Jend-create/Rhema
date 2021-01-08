import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';
import { social} from './data';
import { search } from './data';
import rhema from '../images/rhema.png';
// import axios from 'axios';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const [find, setFind] = useState ('');
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }  }, [showLinks]);

    // const getFind = (e) =>{
    //   e.preventDefault()
    //   if (find)
    //   axios.get (`https://www.googleapis.com/customsearch/v1?key=AIzaSyAz8FD-7hg4ws0vwdUJ92HVJbLaiQE0j54&cx=017576662512468239146:omuauf_lfve&q=lectures
    //   `)
    //   .then((res) => {
    //       setFind(res.data)
    //       console.log(res)
    //   })
    //   .catch((error)=>{
    //       console.log(error);
    //   })
    //  }
  return (
    <nav>
    <div className='nav-center'>
    <div className='nav-header'>
    <img src={rhema} className='logo' alt='rhema' onClick={toggleLinks} />
    <button className='nav-toggle' onClick={toggleLinks}>
    <FaBars /> </button>
    </div>
    <div className='links-container' ref={linksContainerRef}>
    <ul className='links' ref={linksRef}>         
    <li> <Link color='primary' to="/"><FaHome/> </Link> </li> 
    {search.map((searchIcon) => {
    const { id, url, icon } = searchIcon;
    return ( 
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <li>  <a onChange={url} href={url}>{icon}</a> </li> <li></li>
    <li> <input className="searchBar" type="text" placeholder="Search Facilitators" key={id}/></li>
    </form> );  })} 
    <li className="nav-item">
    <Link className="nav-link" to="/contactFacilitator">Staff Room</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/facilitator">Facilitator</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/learner">Learner</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/vroom">Virtual Room</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/contactFacilitator">Library</Link>
    </li>
    </ul>
    </div>
    <ul className='social-icons'>
    {social.map((socialIcon) => {
    const { id, url, icon } = socialIcon;
    return (      
    <li key={id}>
    <a href={url}>{icon}</a>
    </li>);  })}  
    </ul>
    </div>
    </nav>  
); 
};

export default Navbar;         