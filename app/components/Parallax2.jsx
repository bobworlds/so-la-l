import {useEffect, useState} from 'react';
import Logo from '../images/logo.png';
import Pictures from './Pictures';
import Data from '../datas/images.json';
import Drop from '../images/drop.png';
import {useFetcher} from 'react-router-dom';
// import SimpleParallax from 'simple-parallax-js';

function Parallax2(params) {
  const [isClick, setClick] = useState(false);
  const [isHover, setHover] = useState(true);

  const scrollsmooth = () => {
    const par = document.getElementById('par');
    const paral = document.getElementsByClassName('paral__logo');
    let sectionPosition = par.offsetTop;

    window.scrollIntoView({
      sectionPosition,
      behavior: 'smooth',
    });
  };
  function handleHover() {
    setHover(!isHover);
  }
  function handleClickBtn() {
    scrollsmooth();
    setClick(true);
  }

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

  //   const logo = document.getElementById('logo');
  //   logo.scrollIntoView(true);
  //   setClick(true);
  //   console.log('log');
  // logo.animate([
  //     {transform: "translateY(0)"},
  //     {transform: "translateY(100vh)"},
  // ],
  // {duration: 1000,
  // iterations: EaseIn}
  // )
  //}
  //   var image = document.getElementsByClassName('.paral__city--layer--1');
  //   new SimpleParallax(image);

  return (
    <div className="paral">
      <section className="paral__logo">
        <img id="logo" src={Logo} alt="" />
        {/* {isClick ? null : ( */}
        {/* <a href="/#par" className="btn" onClick={handleClickBtn}>
          <div className="btn__cont">
            {isHover ? (
              <div className="btn__text" onMouseEnter={handleHover}>
                Découvrir
              </div>
            ) : (
              <img
                src={Drop}
                alt=""
                className="btn__drop"
                onMouseLeave={handleHover}
              />
            )}
          </div>
        </a> */}
        {/* )} */}

        {/* {isClick ? null : 
                <button onClick={handleClick}>Découvrir</button>
            } */}
      </section>
      <section className="espace" id="par"></section>
      <section className="paral__city">
        <div className="paral__city--layer paral__city--layer--1"></div>
        <div className="paral__city--layer paral__city--layer--2"></div>
      </section>
      {/* <div className='container'>
            {Data.map((data) => {
            <Pictures id={data.id} src={data.src} title={data.title} key={data.id}/>

            })}
            </div> */}
    </div>
  );
}

export default Parallax2;
