import React from 'react'
import './OurTeam.css'
import aman from './aman.jpg'
import nancy from '../images/Nancy.jpeg'
import harsh from './harsh.webp'
import Kaavya from './Kaavya.jpg'
import anshul from './anshul.png'
import anukriti from './anukriti.jpg'
import aryan from './aryan.jpeg'
import mridul from './mridul.jpg'
import preeteksha from './preeteksha.jpeg'
import rijul from './rijul.jpeg'
import sanidhya from './sanidhya.jpg'
import yashv from './yashv.jpg'
import { motion } from 'framer-motion'
import Part from '../../Part/Part'


const OurTeam = () => {
  return (

    <div className="main">
        <Part op1 = {0.1} op2 = {0.2} sh={""} col={"#004e92"} val={80} />
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 2, delay: 0 }}
         viewport={{ once: true }}
        className="ourTeam">
            <div style={{fontFamily: 'Ubuntu, sans-serif'}}>OUR TEAM</div>
        </motion.div>
       <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        viewport={{ once: true }}
       className="profileSection">
       <div className="profile-card">
                <div className="img" id="naman">
                    <img src={aman} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Aman Tripathi</h3>
                    <p className='headpos'>President</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={harsh} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Harsh Sharma</h3>
                    <p className='headpos'>Vice-President</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
            <div className="profile-card">
                <div className="img">
                    <img src={aryan} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>ARYAN Aggarwal</h3>
                    <p className='headpos'>Strategic Chief</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div className="profile-card">
                <div className="img">
                    <img src={nancy} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Nancy Soni</h3>
                    <p className='headpos'>Outreach Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Kaavya} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Kaavya Baranwal</h3>
                    <p className='headpos'>Technical Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={anshul} className='heyhead'/>
                </div>
                <div className="caption">
                    <h3 className='headn'>Anshul</h3>
                    <p className='headpos'>Digital Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={anukriti} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Anukriti Mishra</h3>
                    <p className='headpos'>Secretary</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
            <div className="profile-card">
                <div className="img">
                    <img src={preeteksha} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Prateeksha</h3>
                    <p className='headpos'>Management Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
            <div className="profile-card">
                <div className="img">
                    <img src={mridul} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Mridul Saraswat</h3>
                    <p className='headpos'>Treasurer</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
            <div className="profile-card">
                <div className="img">
                    <img src={rijul} className='heyhead'/>
                </div>
                <div className="caption">
                    <h3 className='headn'>Rijul Raj</h3>
                    <p className='headpos'>Digital Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={sanidhya} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Sanidhya</h3>
                    <p className='headpos'>Management Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>  
            <div className="profile-card">
                <div className="img">
                    <img src={yashv} className='heyhead' />
                </div>
                <div className="caption">
                    <h3 className='headn'>Yashvardhan</h3>
                    <p className=''>Creative Head</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
       </motion.div>
        
    </div>

  )
}

export default OurTeam