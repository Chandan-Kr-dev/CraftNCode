import React from 'react'

const Card = ({data}) => {
     console.log(data);

     const readMore = (url) =>{
        window.open(url)
     }
     
  return (
    <div className='cardContainer overflow-y-auto '>
    {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
            return null
        }else{
            return(
            <div className='card'>
                <img src={curItem.urlToImage}/>
                <div className='content'>
                    <a className='card-title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                    <p className='text-gray-300 font-light card-para'>{curItem.description}</p>
                    <button onClick={()=>window.open(curItem.url)}>Read More</button>
                </div>
            </div>
        )
        }
         
    })}
    </div>
  )
}

export default Card