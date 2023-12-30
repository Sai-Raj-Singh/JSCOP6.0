import React, {useEffect, useState} from 'react'
import './TimeLine.css'
import Smoke from '../../Part/Smoke'
import { motion } from 'framer-motion'
import Part from '../../Part/Part'
import devfolio1 from './devfolio1.png'
import filecoin1 from './filecoin1.png'
import poygon1 from './poygon1.png'
import replit1 from './replit1.png'
import solana1 from './solana1.png'
import Tiline from '../../Part/Tline'
import talk from './talk.png'
import tea2 from './tea2.png'
import squid from './squid.png'
import tea from './tea.png'
import opening from './opening.png'
import onlinem from './onlinem.png'
import lunch from './lunch.png'
import idea from './idea.png'
import code from './code.png'
import closing from './closing.png'
import ccc from './ccc.png'



function Timeline() {

  const listItems = [
    {
        pic: devfolio1,
        text1: "devfolio",
     },
     {
        pic: filecoin1,
        text1: "filecoin",
     },
     {
        pic: poygon1,
        text1: "polygon",
     },
     {
        pic: replit1,
        text1: "replit",
     },
     {
        pic:solana1,
        text1: "solana",
        
     }
    ];

  let arr1 = [
    { 
      pic: opening,
      name: 'INAUGRATION CEREMONY',
      time: '10:00 AM - 10:30 AM',
      venue: 'LT-4'
    },
    {
      pic: tea,
      name: 'TEA BREAK',
      time: '10:30 AM - 11:00 AM',
      venue: 'Infront of LT-4'
    },
    { pic: talk,
      name: 'TALK 1',
      time: '11:00 AM - 12:00 PM',
      venue: 'LT-4'
    },
    {pic: talk,
      name: 'TALK 2',
      time: '12:00 PM - 12:45 PM',
      venue: 'LT-4'
    },
    {pic: lunch,
      name: 'LUNCH',
      time: '12:45 PM - 2:00 PM',
      venue: 'MESS'
    },
    {pic: code,
      name: 'BLIND CODING',
      time: '2:00 PM - 4:00 PM',
      venue: 'CL-1 - CL-4'
    },
    {pic: tea2,
      name: 'TEA BREAK 2',
      time: '4:00 PM - 4:20 PM',
      venue: 'Infront of LT-4'
    },
    {pic: ccc,
      name: 'CCC',
      time: '4:20 PM - 5:30 PM',
      venue: 'Comm. Systems Lab EL-11'
    },
  ]

  let arr2 = [
    {pic: talk,
      name: 'TALK3',
      time: '10:00 AM - 10:45 AM',
      venue: 'LT-4'
    },
    {pic: tea2,
      name: 'TEA BREAK',
      time: '10:45 AM - 11:15 AM',
      venue: 'Infront of LT-4'
    },
    {pic: onlinem,
      name: 'ONLINE TALK',
      time: '11:05 AM - 12:00 PM',
      venue: 'Google Meet'
    },
    {pic: lunch,
      name: 'LUNCH',
      time: '12:00 AM - 1:30 PM',
      venue: 'Mess'
    },
    {pic: idea,
      name: 'IDEATHON',
      time: '1:30 PM - 3:30 PM',
      venue: 'Audi/LT-4'
    },
    {pic: squid,
      name: 'SQUID GAME',
      time: '3:00 PM - 4:30 PM',
      venue: 'JBS'
    },
    {pic: tea,
      name: 'TEA BREAK',
      time: '4:30 PM - 5:00 PM',
      venue: 'Infront of LT-4'
    },
    {pic: closing,
      name: 'TCLOSING CEREMONY',
      time: '5:00 PM - 6:30 PM',
      venue: 'Audi'
    }

  ]

  const [arr, setArr] = useState(arr1);



  useEffect(() => {
    const list = document.getElementById('list');
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className='timet'>
        <Part op1 = {0.1} op2 = {0} sh={"circle"} col={"rgba(136, 246, 251, 0.3)"} val={10} />
       <motion.div
       initial={{y: '-100vh', opacity: 0}}
       animate={{ y: '0', opacity: 1}}
       transition={{
           y: {delay: 0, duration: 0.7, type: "tween", stiffness: 1000},bounce: 0}}
 
       className="timeline">
       
          <div className='theading'>
         TimeLine
          </div>

          <div className="acttime">

            <div className='tlbtndiv'>
              <button className='tlbtn' onClick={()=>setArr(arr1)}>Day-1 Timeline</button>
              <button className='tlbtn' onClick={()=>setArr(arr2)}>Day-2 Timeline</button>
            </div>
            
          <Tiline arr={arr}/>
           
          <div className='tlbtndiv'>
          <a href="./day1.png" download>
             <motion.button
             whileFocus={{ scale: 1.2 }}
             className='tlbtn tlbtn2' >Download Day-1 Timeline</motion.button>
             </a>
             <a href="./day2.png" download>
            <button className='tlbtn tlbtn2' >Download Day-2 Timeline</button>
            </a>
            </div>

          </div>
          <div className="theading">
           Sponsors
          </div>
          <div className="tsponser">

          <div className='dabb'>
      <div id="rcontainer" data-animated>
        <ul id="list">
          {listItems.map((item, index) => (
            <li key={index} className='lii'>
                <div className='core'>
                <img src={item.pic} alt={`The picture of ${item.text1}`} className='sponspic' />
                </div>

            </li>
          ))}
        </ul>
      </div>
    </div>

          </div>



       </motion.div>

    </div>
  )
}

export default Timeline