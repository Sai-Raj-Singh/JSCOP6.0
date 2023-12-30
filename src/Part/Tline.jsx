import React from 'react'
import  './Tiiline.css'


function Tiline({arr}) {


  return (
    <div className='tlinebody'>

<main>
 
 {arr.map((item, index) => (
     <article key={index} class="stop">
     <div class="text">
     <img className='tlimh' src={item.pic} alt="" />
       <header>
         <h3>{item.name}</h3>
         <time>{item.time}</time>
         <br /> {item.venue}
       </header>
     </div>
   </article>
 ))}

  
  
 
</main>
    </div>
  )
}

export default Tiline