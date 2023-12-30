import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
// import Stars from '../../Part/Stars'
import optica22 from './optica22.png'
import Crousel3 from '../../Part/Crousel3'
import Part from '../../Part/Part'

function About() {
  return (
    <div className='ghjk'>
     {/* <Stars /> */}
     <Part op1 = {0.1} op2 = {0.2} sh={""} col={"#004e92"} val={80} />
    <div className='outeraboutt'>
     

    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     viewport={{ once: true }}
     id='aaboutus'><br />About US</motion.div>
     <div className='aabout'>
       <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1.5, delay: 0.2 }}
       viewport={{ once: true }}
       className='aboutleft'>
         <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
              duration: 1.5, 
              ease: "linear",
              repeat: Infinity, 
              repeatType: "reverse" 
          }}
         className="aboutpic aglow">
            <img src= {optica22} className='alogo' />
         </motion.div>
       </motion.div>

       <div className='aboutright'>
        
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='aaboutuscont'>
          <br />
        From a newly founded hub with a handful active members, JIIT OPTICA has evolved into a reputable community with commendable social outreach. With the support of our versatile volunteers, assiduous coordinators, core team enthusiasts and their diligent efforts we have been able to achieve unprecedented levels of outreach, interaction and social support.
        <br /> <br /> From following the footsteps and walking down the well-trodden path to paving it’s very own, JIIT OPTICA has witnessed bliss in it’s own making. From conducting technical seminars and workshops to organising our flagship event JSCOP, JIIT OPTICA has made a brand of its name and with each success our impeccable efforts have set the bar high for the next. With the combined efforts of the digital, marketing and content team JIIT OPTICA has strengthened it's social media presence and it now has over 1k followers on Instagram and various posts on the page have 15k+ views. <br />
        </motion.div>
       </div>

     </div>
     
      <div className="agallary">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="agalhead">Gallery</motion.div>
        <Crousel3 />

        </div>



    </div>
    </div>
  )
}

export default About