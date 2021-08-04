import React from 'react'

const Pagination = ({shopPerPage,totalShopping,paginate}) => {
    const pageNumbers=[]

    for(let i=1; i<Math.ceil(totalShopping/shopPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination">
                {
                    pageNumbers.map(number=>(
                        <li className="page-ite" key={number}>
                            <a href="#" className='page-link' onClick={()=> paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
    )
}

export default Pagination






