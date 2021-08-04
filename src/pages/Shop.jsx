import React,{useState,useEffect} from 'react';
import ShopSelect from './ShopSelect';
import axios from 'axios'
import { CartProvider } from 'react-use-cart';
 import { Link } from 'react-router-dom';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './Pagination';
const Shop=()=> {

	


    return (
       <div className="archive post-type-archive post-type-archive-product woocommerce woocommerce-page">
       <div id="page" className="shop">
	<div className="container">
		<header id="masthead" className="site-header">
		<div className="site-branding">
			<h1 className="site-title"><Link to='/' rel="home">Moschino</Link></h1>
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
		<CartProvider><div id="content" className="site-content">
		
			<div id="primary" className="content-area column full">
				<main id="main" className="site-main" role="main">
				
				<section className='py-4 container'>
					<div className="row justify-content-center">
						<ShopSelect  />
						
					</div>
				</section>
				<nav className="woocommerce-pagination">
				<ul className="page-numbers">
					<Pagination/>
				</ul>
				</nav>
				<Cart/>
				</main>
				{/* <!-- #main --> */}
			</div>
			{/* <!-- #primary --> */}
		</div>
		</CartProvider>
		{/* <!-- #content --> */}
	</div>
	{/* <!-- .container --> */}
	<footer id="colophon" className="site-footer">
	<div className="container">
		<div className="site-info">
			<h1 style={{fontfamily: "Herr Von Muellerhoff",color: "#ccc",fontweight:300,textalign: "center",marginbottom:0,margintop:0,lineheight:1.4,fontsize: "46px"}}>Moschino</h1>
			<a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
		</div>
	</div>
	</footer>
	<a href="#top" className="smoothup" title="Back to top"><i className="fas fa-arrow-up fa-3x "></i></a>
</div>
       </div>  
         
    )
}

export default Shop
