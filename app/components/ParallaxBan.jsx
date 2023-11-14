import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Batiment from '../images/mobile/bat1.png'
import Bat1 from '../images/mobile/bat3.png'
import Panneau from '../images/mobile/panneau.png'
import Logo from '../images/logo.png'
import Drop from '../images/Vector.svg'
import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import Pictures from "./Pictures";


const ParallaxBan = () => {
  const [isHover, setHover] = useState(true)
  const [click, setClick] = useState(true)
  function handleHover() {
    setHover(!isHover)
  }
  function handleClick() {
    
    setClick(false)
  }

  return (
    <Parallax factor={1} pages={2} style={{ left: '0', bottom: '0' }} className="parallax">
     
      <ParallaxLayer offset={0} speed={-1.5} className="parallax__layer logo" >
        <img src={Logo} alt="" className="parallax__layer--img parallax__layer--img--logo"/>
        <a href='/#par' onClick={handleClick}>
              <div className="btn__cont">
              {isHover ? 
              <div className="btn__text" onMouseEnter={handleHover}>Découvrir</div>
              :
              <img src={Drop} alt="" className="btn__drop" onMouseLeave={handleHover}/>
          }
          </div>
          </a>
      </ParallaxLayer>      
      <section id="par">
{/* 
      <ParallaxLayer offset={0} speed={0} className="picturesLayer" >
        <Pictures />
      </ParallaxLayer>  
*/}
      <ParallaxLayer offset={1.25} speed={0.5} className="parallax__layer ">
        <img src={Bat1} alt="" className="parallax__layer--img parallax__layer--img--1" />
      </ParallaxLayer>      
      <ParallaxLayer offset={1} speed={0.2} className="parallax__layer">
        <img src={Batiment} alt="" className="parallax__layer--img parallax__layer--img--2"/>
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0} className="parallax__layer">
        <img src={Panneau} alt="" className="parallax__layer--img parallax__layer--img--3" />
      </ParallaxLayer>

      </section>
    </Parallax>
  )
}
export default ParallaxBan;
