import BatimentD from '../images/desktop/bat1.png'
import Bat1D from '../images/desktop/bat3.png'
import PanneauD from '../images/desktop/panneau.png'
import Logo from '../images/logo.png'
import Drop from '../images/Vector.svg'
import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function ParallaxBanD() {
    const [isHover, setHover] = useState(true)
    const [click, setClick] = useState(true)
    function handleHover() {
      setHover(!isHover)
    }
    function handleClick() {
      
      setClick(false)
    }
  
  
    return (
        <Parallax factor={1} pages={2} style={{ left: '0', bottom: '0' }} className="parallaxD">
     
        <ParallaxLayer offset={0} speed={-1.5} className="parallaxD__layer logo" >
          <img src={Logo} alt="" className=" parallaxD__layer--img--logo"/>
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
        <ParallaxLayer offset={1.25} speed={0.5} className="parallaxD__layer ">
          <img src={Bat1D} alt="" className="parallaxD__layer--img parallax__layer--img--1" />
        </ParallaxLayer>      
        <ParallaxLayer offset={1} speed={0.2} className="parallax__layer">
          <img src={BatimentD} alt="" className="parallaxD__layer--img parallax__layer--img--2"/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0} className="parallax__layer">
          <img src={PanneauD} alt="" className="parallaxD__layer--img parallax__layer--img--3" />
        </ParallaxLayer>
  
        </section>
       
  
      </Parallax>
  
    )
}

export default ParallaxBanD