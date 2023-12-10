import {useEffect, useState} from 'react';
import Logo from '../images/logo.png';
import Pictures from './Pictures';
import Merch from './Merch';
import Data from '../datas/images.json';
import Drop from '../images/drop.png';
import Box from '../images/box.png';
import MerchBtn from '../images/merch.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

// import SimpleParallax from 'simple-parallax-js';

function Parallax2() {
  const [isClick, setClick] = useState(true);

  const scrollsmooth = () => {
    const par = document.getElementById('par');
    const paral = document.getElementsByClassName('paral__logo');
    let sectionPosition = par.offsetTop;

    window.scrollIntoView({
      sectionPosition,
      behavior: 'smooth',
    });
  };
  function handleClickBtnBox() {
    // scrollsmooth();
    setClick(false);
  }
  function handleClickBtnMerch() {
    // scrollsmooth();
    setClick(true);
  }

  return (
    <div className="paral">
      <section className="paral__logo">
        <img id="logo" src={Logo} alt="" />
        <div className="paral__logo--btn">
          <a href="#par" alt="Merch" onClick={handleClickBtnMerch}>
            <img src={MerchBtn} alt="" id="btnMerch" />
          </a>
          <a href="#par" alt="Box" onClick={handleClickBtnBox}>
            <img src={Box} alt="" id="btnBox" />
          </a>
        </div>
      </section>
      <section className="espace" id="par"></section>
      <section className="paral__city">
        <div className="paral__city--layer paral__city--layer--1"></div>
        <div className="paral__city--layer paral__city--layer--2"></div>
      </section>
      {isClick ? <Merch /> : <Pictures />}
      <a href="#main" className="backToTop">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}

export default Parallax2;
