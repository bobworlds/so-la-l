import {useEffect, useState} from 'react';
import Logo from '../images/logo.png';
import Pictures from './Pictures';
import Data from '../datas/images.json';
// import SimpleParallax from 'simple-parallax-js';

function Parallax2(params) {
  const [isClick, setClick] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(e) {
    const scrollOptions = {
      behavior: 'smooth',
      block: 'start',
    };
    const logo = document.getElementById('logo');
    logo.scrollIntoView(true);
    setClick(true);
    console.log('log');
    // logo.animate([
    //     {transform: "translateY(0)"},
    //     {transform: "translateY(100vh)"},
    // ],
    // {duration: 1000,
    // iterations: EaseIn}
    // )
  }
  //   var image = document.getElementsByClassName('.paral__city--layer--1');
  //   new SimpleParallax(image);

  return (
    <section className="paral">
      <div className="paral__logo">
        <img id="logo" src={Logo} alt="" />
        {/* {isClick ? null : 
                <button onClick={handleClick}>Découvrir</button>
            } */}
      </div>
      <div className="espace"></div>
      <div className="paral__city">
        <div className="paral__city--layer paral__city--layer--1"></div>
        <div
          className="paral__city--layer paral__city--layer--2"
          id="par"
        ></div>
        {/* <img src={Batiment} alt="" className="paral__city--layer" />
                    {/* <img src={Batiment2} alt="" className="paral__city--layer" /> */}
        {/* <img src={Batiment3} alt="" className="paral__city--layer" /> */}
      </div>
      {/* <div className='container'>
            {Data.map((data) => {
            <Pictures id={data.id} src={data.src} title={data.title} key={data.id}/>

            })}
            </div> */}
      {/* <Pictures /> */}
    </section>
  );
}

export default Parallax2;
