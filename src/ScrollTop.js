import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

function ScrollTop() {

  const clickHandler = () =>
  {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: "smooth"
      }
    )
  };

  return (
    <span onClick={clickHandler}>
      <IconContext.Provider value={{ color: '#000' }}>
        <BiArrowToTop size="50px"/>
      </IconContext.Provider>
    </span>
  )
}

export default ScrollTop
