import React from 'react'
import './NavBar.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <motion.div 
    className='ncont'>
        
        <motion.div 
         initial={{x: '-100vw'}}
         animate={{ x: '0.7vw'}}
         transition={{
          x : {duration : 1},
          type: "tween"}}
     className='nnav'>
     <NavLink className="navlink" aria-current="page" to="/" >
     <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1], transition: { ease: "easeOut", duration: 0.7 } }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.3, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
            className='nbar'><div className="nsym">
            <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em">
            <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z" />
          </svg>
          </div><div className='navct'>Home</div></motion.div>
     </NavLink>
   <NavLink className='navlink' aria-current="page" to="About" >
   <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.3, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
            className='nbar'><div className="nsym">
                 <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h7v14H4zm9 0V5h7l.001 14H13z" />
      <path d="M15 7h3v2h-3zm0 4h3v2h-3z" />
    </svg></div><div className='navct'>About Us</div></motion.div>
   </NavLink>
    <NavLink className='navlink' aria-current="page" to="Events"  >
    <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.05, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
             className='nbar'><div className="nsym">
                <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"

    >
      <path d="M11 12h6v6h-6z" />
      <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.001 16H5V8h14l.001 12z" />
    </svg></div><div className='navct'>Events</div></motion.div>
    </NavLink>
     <NavLink className='navlink' aria-current="page" to="Speaker" >
     <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.05, 
                ease: "linear", 
                repeatType: "reverse" ,
            }}
             className='nbar'><div className="nsym">
                 <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z"
      />
    </svg></div><div className='navct'>Speakers</div></motion.div>
     </NavLink>
   <NavLink className='navlink' aria-current="page" to="Team" >
   <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.05, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
             className='nbar'><div className="nsym">
                 <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" />
    </svg></div><div className='navct'>Our Team</div></motion.div>
   </NavLink>



           <NavLink className='navlink' aria-current="page" to="TimeLine">
           <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.05, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
            className='nbar'><div className="nsym">
                   <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path fill="currentColor" d="M9 7h2v5h5v2H9V7z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
    </svg></div><div className='navct'>Timeline</div></motion.div>
           </NavLink>





           <NavLink className='navlink' aria-current="page" to="Contact">
           <motion.div  
            // whileHover={{ scale: [null, 1.1, 1.1] }}
            // transition={{ duration: 0 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.05, 
                ease: "linear", 
                repeatType: "reverse" 
            }}
             className='nbar'><div className="nsym">
                 <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"

    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 4a2.121 2.121 0 010 3l-9.5 9.5-4 1 1-3.944 9.504-9.552a2.116 2.116 0 012.864-.125zM9.5 17.5h8M15.5 6.5l1 1" />
      </g>
    </svg></div><div className='navct'>Reach Us</div></motion.div>
           </NavLink>
           

            
        </motion.div>
     </motion.div>
  )
}

export default Navbar