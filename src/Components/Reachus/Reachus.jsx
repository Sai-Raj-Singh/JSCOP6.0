import React from 'react'
import './Reach.css'
import { motion } from 'framer-motion'
import Part from '../../Part/Part'
// import Bubble from '../../Part/Bubble'

function Reachus() {

  return (
    <div className='rreachbox'>
<Part op1 = {0.1} op2 = {0.2} sh={""} col={"#004e92"} val={80} />
{/* <Bubble/> */}
        <div className="rcontact">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='reachhead'>
                Write To Us
            </motion.div>
         <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5, delay: 0.2 }}
         viewport={{ once: true }}
         className="writetous">
           
         <div className="cright">
        
         <form action="https://formsubmit.co/hello.first93@gmail.com" method="POST">

         <div id='cinfo'>
                <input type="text" name="name" placeholder='Your Name' className='cds' required />
                <input type="email" name="email" placeholder='Your Email' className='cds' required />
            </div>
            <div className="textreach">
            <textarea name="message" id="cmsg" cols="20" rows="10" className='ctesta' placeholder='Message' required/>
            </div>
            <div className='ccbtn'>
                <button type='submit' id='cbtn'>Send Message</button>
            </div>


            </form>


            
      </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.4 }}
           viewport={{ once: true }}
         className='reachhead'>
                FAQ'S
            </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" id='accbt2' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Is it necesssary to have team in the events ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>No, this is not necessary. One can participate individually.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed"id='accbt1' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How can I submit my solutions?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong> If you’re confident that you’ve correctly written the code, you can call a volunteer who will submit your solution by turning on your monitor. If the code is incorrect, you’ll get a 10-minute penalty. You can also use one of your lifelines to check the code before submitting ;)</strong>
            </div>
    </div>
  </div>

</motion.div>
        </div>

        
        
    </div>
  )
}

export default Reachus