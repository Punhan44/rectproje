import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';



const Homeselect=({comments,isLoading})=>{
 
  
    return(
		isLoading ? (<h1 className='load'><Loader/></h1>) :(
        <>
            {
        comments.map((item,ada)=>{
          return(
            <>
            <div className='card kard ' key={ada} >
            <div className='card-inner ' >
              <div className='card-front'>
                <img className='imagee' src={item.image} alt='' />
              </div>
              <div className='card-back'>
                <h1>{item.category}</h1>
                <ul>
                  <li>
                    <strong>Məlumat:  </strong> {item.description}
                  </li>
                  <li>
                    <strong><b>Qiymət:</b> </strong> {item.price} <b>Manat</b>
                  </li>
                  <li>
                    <strong>Qısa məlumat</strong> {item.title}
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
         
          </>
          )

        })
      }

        </>)
    )
	
}
export default Homeselect

