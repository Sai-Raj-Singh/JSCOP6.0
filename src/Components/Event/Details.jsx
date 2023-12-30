import React from 'react'
import './Details.css'
import { motion } from 'framer-motion'
import { useEventContext } from './EventContext'
import Part from '../../Part/Part'

const Details = () => {
    const {selectedEvent} = useEventContext();
  return (
   <div className="erdet">
    <Part op1 = {0.1} op2 = {0.2} sh={""} col={"#004e92"} val={80} />
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0 }}
      viewport={{ once: true }}
      className='detname'>ABOUT THE EVENT</motion.div>
     <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 2, delay: 0.5 }}
     viewport={{ once: true }}
     className='edetails'>
        <div className="egallery">
           <img src={selectedEvent?.image} alt="" id='eimgg' />
        </div>
        <div className="ewritingPart">
          
            <p id='ewrg'>{selectedEvent?.about}</p>
        </div>
    </motion.div>
   </div>
  )
}

export default Details