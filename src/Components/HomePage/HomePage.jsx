import React from 'react'
import './HomePage.css'
import { motion } from 'framer-motion'
import CountdownTimer from '../../Part/CountdownTimer'
import earth4 from './earth4.png'
import Part from '../../Part/Part'
import Smoke from '../../Part/Smoke'

function HomePage() {
  return (
   <>

   <Part op1 = {0.1} op2 = {0.2} sh={""} col={"#004e92"} val={80} />
    <div className='Homescreen'>
     
    <div className="hpfront">

    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
      duration: 1,
      delay: 0.5,
     }}
     className="hoptica"><div><span id="ooo">JIIT OPTICA CHAPTER</span> <br /> PRESENTS</div></motion.div>
             <div className="HomeHeading">
                 
                 <div className="jjhead">
                 <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1,
                delay: 1,
           }} className="homejscop glow">JSCOP <span id='jscopno'>6.0</span></motion.div>
                <div className="confrr"> <motion.div
                 initial={{x: 5000}}
                 animate={{ x: -1 }}
                 transition={{ type: "tween", duration: 1, delay: 1}}
                 className='hline'>JIIT STUDENTS CONFERENCE FOR OPTICS AND PHOTONICS</motion.div></div>
                 </div>
             </div>
     
             <motion.div 
             initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 2, }}
             className="homeregister">
          <motion.button
           whileTap={{ scale: 0.9 }}
           whileHover={{ scale: 1.2 }}
             className='hregister'>Register Now</motion.button></motion.div>
     
             {/* <div className="homecounter"><CountdownTimer /></div> */}
             
              {/* <div className='earthimg'>
                 <motion.img 
                 initial={{y: 1000}}
                 animate={{ y: 10 }}
                 transition={{ type: "tween", duration: 1}}
                 className='earthpic' src= {earth4} />
              </div> */}
     
     {/* <motion.div  class="triangle-down"></motion.div>
     <div class="triangle-up"></div> */}

    </div>
     
         </ div>
   </>
     )
}

export default HomePage