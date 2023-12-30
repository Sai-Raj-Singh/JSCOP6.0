import React from 'react'
import './Events.css'
import { useScroll, motion, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
// import image2 from '../images/poster.jpg'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'
import image5 from '../images/image5.jpeg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEventContext } from './EventContext'
import Part from '../../Part/Part'

const Events = () => {
    const navigate = useNavigate();
    const {setEvent} = useEventContext();

    const handleDetailsClick = (eventData) =>{
        setEvent(eventData);
        navigate("/Details")
    }

   
    return (
        <div className="eeee">
            <Part op1 = {0} op2 = {0.2} sh={"triangle"} col={"#004e92"} val={100} />
            <div className='eevents'>

<div className="ewriting">
    <motion.h1  className='etitle'
        initial={{ x: '-100vw' }}
        animate={{ x: 0, y: 10 }}
        transition={{
            type: "tween",
            duration: 1
        }}

    >
        EVENTS BY OPTICA
    </motion.h1>
</div>
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 2, delay: 1 }}
viewport={{ once: true }}
className="eCards">
    <div className="ecard">
        <img src={image1} alt="" className='erimgg' />
        <div className="ecard-body">
            <h1 className="ecard-title">Blind Coding</h1>
            <button className="ecard-btn" onClick={() => handleDetailsClick({image:image1, about:"Talk is cheap. Show me your code! Attention all the budding coders! Aren't you all bored of the monotonous coding routines and wanna exolore something fun? Here's your chance as JSCOP 5.0 presents you the Blind Coding Competition in which you have to type the code with your monitors off.Doesn't this sound exciting?Yes it is! So what are you waiting for? Fill the registration form and join us in this crazy fun-filled event and maximize your chances of winning exciting prizes and goodies worth 25k+.Further details will be revealed soon so just gear up!"})}>Details</button>
        </div>
    </div>
    <div className="ecard">
        <img src={image2} alt="" className='erimgg' />
        <div className="ecard-body">
            <h1 className="ecard-title">Create-Code-Crack-It</h1>
            <button className="ecard-btn" onClick={() => handleDetailsClick({image:image2, about:"Join us for an exciting circuit building event which will be a perfect opportunity for someone wants to gain a fundamental understanding of circuit building.The students in OPTICA will guide you through the process of building your own circuits and resolve any queries you might have.Put on your smart glasses and get ready to hone your skills, expand your knowledge and connect with other like-minded individuals in the field of electronics and communication engineering! Don't miss out on this opportunity and REGISTER NOW to secure your spot!"})}>Details</button>
        </div>
    </div>
    <div className="ecard">
        <img src={image3} alt="" className='erimgg' />
        <div className="ecard-body">
            <h1 className="ecard-title">Code Of Duty</h1>
            <button className="ecard-btn" onClick={() => handleDetailsClick({image:image3, about:`HACKATHON DETAILS: 
STEP 1:Register yourself on Devfolio. Fill out your details mentioned. - If you have team ready with you (you can register max upto 4 teammates altogether) 
- generate your team code on devfolio (will be generated if you create team) 
- when created team code share it with your teammates and join the team.

STEP 2:    After registration join the discord server. Joining discord server is mandatory as further instructions will be provided on discord only.

STEP 3:    After joining discord server, please mention which team you belong. If you are alone please mention that as well. Also fill out form pinned in discord channel.

STEP 4:    Idea submission: Fill out the Idea-submission form pinned in discord server (Team leader should do it). Make a ppt containing your idea and(ppt should contain all the necessary features you will use. Do mention the resources you will use in your project)
Ppt also contains certain evaluation points.

You have to pitch the ppt so make sure you make all good and awesome :)`})}>Details</button>
        </div>
    </div>
    <div className="ecard">
        <img src={image4} alt="" className='erimgg'/>
        <div className="ecard-body">
            <h1 className="ecard-title">Ideathon 2.0</h1>
            <button className="ecard-btn"  onClick={() => handleDetailsClick({image:image4, about:`A spark which results in fire, a stream leading to a river and diamonds found in the rough. Everything big starts with something small. It takes an enormous amount of courage and and effort to take the road not taken and extreme passion to reach the other side.
Do you have an idea that would change how things are done today? That makes you a dreamer and an inventor. Do you find yourself thinking and working on your idea in the oddest of times? That makes you a conqueror. Do you have what it takes to change the world? That makes you a wizard.
Is the only thing standing between you and your dream money? Don’t worry, we’ve got you covered. OPTICA presents “IDEATHON”, an event where you get the opportunity to woo the judges with your ideas and win cash prizes and the really special ones will also get the chance to be funded.

Time for all the brainstorming to payout!
You believe in your idea, we believe in your vision!`})}>Details</button>
        </div>
    </div>
    <div className="ecard">
        <img src={image5} alt="" className='erimgg' />
        <div className="ecard-body">
            <h1 className="ecard-title">Squid Game</h1>
            <button className="ecard-btn"  onClick={() => handleDetailsClick({image:image5, about:"Are you ready for a life-and-death experience? Do you have what it takes to be a world-class champion? Optica brings to you their very first version of Squid Game. Squid game is a series of fun games where the participants need to make use of their brain, strength, and strategies. For all those risk-takers out there, join us in this thrilling chase for exciting cash prizes and many more."})}>Details</button>
        </div>
    </div>

</motion.div>

</div>
        </div>
    )
}

export default Events