import React,{useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './Pagination';

const PAGE_PRODUCTS='shopping';
const PAGE_CART='cart';


const ShopSelect = () => {
	const [cart,setCart]=useState([])
	const [page,setPage]=useState(PAGE_PRODUCTS) 
    const [shopping,setShopping]=useState([])

	useEffect(()=>{
		fetchShopping()
	},[])

	const fetchShopping=async ()=>{
		const response=await axios.get('https://api.punkapi.com/v2/beers');
		console.log(response.data)
		setShopping(response.data)
		
		
	}
  
	
	const addToCart=(product)=>{
	  
	  setCart([...cart,{...product}])
	}
	const removeFromCart=(productToRemove)=>{
	  setCart(cart.filter((product)=>product !==productToRemove))
	}
	const navigateTo= (nextPage)=>{
	  setPage(nextPage)
	}


	const [currentPage, setCurrentPage]=useState(1)
	const [shopPerPage]=useState(6);
	const lastShopIndex=currentPage*shopPerPage;
	const firstShopIndex=lastShopIndex-shopPerPage;
	const currentShopping=shopping.slice(firstShopIndex,lastShopIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber);
  
  
  
	
	const renderCart=()=>(
	  <>
	  
	  <div className="products cardss">
	  {cart.map((product,idxx)=>(
		<>
		<div className="card  cardsss" style={{ width: "18rem" }} key={idxx}>
  <img src={product.image_url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
      {product.tagline}
    </p>
	<button className="removeClick" onClick={()=>removeFromCart(product)}>remove</button>
  </div>
</div>
		</>
	  ))}</div>
	  </>
	)
	
	const renderProducts=()=>(
	  <>

	  <div className="products cardss">
	  {currentShopping.map((product,idxx)=>(
		<>
		<div className="card cardsss" style={{ width: "18rem" }}>
  <img src={product.image_url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
      {product.tagline}
    </p>
	<button onClick={()=>addToCart(product)}>Əlavə et</button>
  </div>
</div>


		</>
	  ))}</div>
	  <Pagination shopPerPage={shopPerPage} totalShopping={shopping.length} paginate={paginate}/>
	  </>
	)
  
  
  
  
	return (
	  <div className="App">
		<header>
		  <button className='shoppingCart' onClick={()=>navigateTo(PAGE_CART)}><i className="fas fa-shopping-cart fa-2x"><p>({cart.length})</p></i></button>
		  <button className='bg-light border-0' onClick={()=>navigateTo(PAGE_PRODUCTS)}><h1 className='text-center bg-light mt-3'>Məhsullarımız</h1></button>
		</header>
		{page===PAGE_PRODUCTS && renderProducts()}
		{page===PAGE_CART && renderCart ()}
		  
		
	  
	  </div>
	);
  }
export default ShopSelect
