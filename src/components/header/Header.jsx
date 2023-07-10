import React from 'react'
import './header.css'
import CTA from './CTA'
import MYIMG from 'file:///C:/Users/Szidelo/Desktop/picseveinvers/assets/full-stack-web-developer.svg'
import HeaderScocials from './HeaderScocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Claudiu Szidelo</h1>
        <h2 className="text-light">Frontend Developer</h2>
        <CTA/>

        <HeaderScocials/>

        <div className="my-img">
          <img src={MYIMG} alt="profile-img" id='header-img'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header