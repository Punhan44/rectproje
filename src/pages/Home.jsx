import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Homeselect from "./homeselect";
import 'bootstrap/dist/css/bootstrap.min.css'

import Pagination from './Pagination';





const Home =()=>{
    const myStyle={
        fontfamily: "Herr Von Muellerhoff",
        color: "#ccc",
        fontweight:300,
        textalign: 'center',
        marginbottom:0,
        margintop:0,
        lineheight:1.4,
       
    }
	const [comments,setComments]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
    fetchComments();
  }, [])

  const fetchComments=async()=>{
    const response=await axios('https://fakestoreapi.com/products');
    setComments(response.data)  
    setIsLoading(false)  
    console.log(response.data)
   
  }
  
  const [currentPage, setCurrentPage]=useState(1)
const [shopPerPage]=useState(6);
const lastShopIndex=currentPage*shopPerPage;
const firstShopIndex=lastShopIndex-shopPerPage;
const currentShopping=comments.slice(firstShopIndex,lastShopIndex)
const paginate = pageNumber => setCurrentPage(pageNumber);



    return(
		
        <div className="home page page-template page-template-template-portfolio page-template-template-portfolio-php">
      <div id="page">
	<div className="container">
		<header id="masthead" className="site-header">
		<div className="site-branding">
			<h1 className="site-title"><Link to='/'  rel="home">Moschino</Link></h1>
			<h2 className="site-description">Minimalist Portfolio HTML Template</h2>
		</div>
		<nav id="site-navigation" className="main-navigation">
		<div className='dropdown'> 
        <button className='dropbtn menu-toggle'>Menu</button>
        <div className='dropdown-content'>
        <li><Link to='/' >Ana səhifə</Link></li>
	
    <li><Link to="/shop">Mağaza</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to='/contact'>Əlaqə</Link></li>
        </div>
        </div>
		<div className="menu-menu-1-container">
			<ul id="menu-menu-1" className="menu">
			<li><Link to='/' >Ana Səhifə</Link></li>
		
				<li><Link to="/shop">Mağaza</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				
				
				<li><Link to='/contact'>Əlaqə</Link></li>
			</ul>
		</div>
		</nav>
		</header>
		{/* <!-- #masthead --> */}
		
		<div id="content" className="site-content">
			<div id="primary" className="content-area column full">
				<main id="main" className="site-main">
               <div className="cards">
			   <Homeselect className="houmeselect" comments={currentShopping} isLoading={isLoading} />
			   </div>
			

				{/* <!-- .grid --> */}
				
				<Pagination shopPerPage={shopPerPage} totalShopping={comments.length} paginate={paginate}/>
				<br/>
				
				</main>
				{/* <!-- #main --> */}
			</div>
			{/* <!-- #primary --> */}
		</div>
		{/* <!-- #content --> */}
	</div>
	{/* <!-- .container --> */}
	<footer id="colophon" className="site-footer">
	<div className="container">
		<div className="site-info">
			<h1 style={myStyle}>Moschino</h1>
			 <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
		</div>
	</div>	
	</footer>
	<a href="#top" className="smoothup" title="Back to top"><i className="fas fa-arrow-up fa-3x "></i></a>
</div>
{/* <!-- #page --> */}



        </div>
		
    )
}

export default Home