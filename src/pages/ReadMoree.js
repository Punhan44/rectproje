import React ,{useState} from 'react'

const ReadMoree = ({children}) => {
    const text=children;
    const [isTruncated,setIstruncated]=useState(true)

    const  resultString= text.slice(0,100) 
    
    return (
      
        <p className="text-readMore"> {resultString}
            
        </p>
        )
   
    
    
} 

export default ReadMoree
