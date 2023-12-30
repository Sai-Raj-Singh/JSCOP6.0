import React from 'react'
import { motion } from 'framer-motion'
import './Speaker.css'
import Bubble from '../../Part/Bubble'
import Card1 from '../../Part/Card1'
import cg from './cg.jpg'
import gk from './gk.jpeg'
import ritwic from './ritwic.png'
import somak from './somak.png'
import Part from '../../Part/Part'
import { useEffect } from 'react'


function Speaker() {

    let box = [
        {
          pic: cg,
          text1: "PROF. CM CHANDRASHEKAR",
          text2: "IISC BANGLORE",
          text3: "We are delighted to have Prof. C M Chandrashekhar for the sixth edition of the jscop.He is here to resolve all your queries and make the topic interesting for everyone. Enriched with his expertise in the topics of Quantam algorithms and Open quantam system, the session will definitely be informative.",
          text4: "15th April",
          text5: "10: 30 AM"
       },
        {
            pic: gk,
            text1: "DR. GAGAN KUMAR",
            text2: "IIT GUWAHATI",
            text3: "We are more than delighted to announce that Dr Gagan Kumar will be joining us as our guest speaker at JSCOP 5.0Enhance your knowledge on the topics of microfabrication and  nanotechnology as you attend the enriching session with the expert in this field, Dr Gagan Kumar, Associate Professor ai IIT Guwahati.",
          text4: "16th April",
          text5: "10: 00 AM"
        },
        {
          pic: ritwic,
          text1: "DR. SOMAK BHATTACHARYYA",
          text2: "IIT BHU",
          text3: "Somak Bhattacharyya has received Honours in Physics from Scottish Church College, Kolkata in 2003. Next to it, he has received both Bachelor of Technology and Master of Technology from Institute of Radiophysics and Electronics in University of Calcutta in 2006 and 2008 respectively.",
          text4: "16th April",
          text5: "11: 35 AM"

        },
        {
            pic: somak,
            text1: "DR. RITWICK DAS",
            text2: "IIT DELHI",
            text3: "Music is the arithmetic of sounds as optics is the geometry of light. Have you ever wondered about the magnificence of optics and photonics??We are glad to have Dr. Ritwick Das associated with IIT Delhi, an expert in the field of Fiber optics, lasers and nonlinear optics, in whose sessions one gets to dive deep into the world of optics and related science.",
            text4: "15th April",
            text5: "11: 35 AM"
           
          }
    
      ]

  return (
   <>
   <Part op1 = {0.1} op2 = {0} sh={"circle"} col={"rgba(136, 246, 251, 0.3)"} val={10} />
   <div className='ssbig'>
        {/* <Bubble /> */}

        <motion.div
        // initial={{y: '0', opacity: 0}}
        // animate={{ y: '0', opacity: 1}}
        // transition={{
        //     y: {delay: 0, duration: 0.7, type: "tween", stiffness: 1000},bounce: 0}}
            
        className="ssbig2">
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5, delay: 0.5 }}
         viewport={{ once: true }}
        className="spheading">Speakers</motion.div>
        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5, delay: 0.5 }}
         viewport={{ once: true }}
        className="sspeaker">
         
        {
        box.map((item, index) => (
          <Card1 key={index} pic={item.pic} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} text5={item.text5} />
        ))
      }
        </motion.div>
        </motion.div>
    </div>
    </>
  )
}

export default Speaker