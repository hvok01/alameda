/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState, useRef } from 'react'
import './App.css'
import { ShoppingCartIcon } from '@fluentui/react-icons-mdl2'
import InstagramIcon from './assets/InstagramIcon'
import TwitterIcon from './assets/TwitterIcon'
import gsap from 'gsap'

function App() {
  //https://alameda-fluid-demo.squarespace.com/
  const hamburgerLineOne = useRef(null)
  const hamburgerLineTwo = useRef(null)
  const [timeline, setTimeline] = useState<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateOnNavBarClick(tl)
      setTimeline(tl)
    });
    return () => ctx.revert()
  }, [])

  const animateOnNavBarClick = (timeline: any) => {
    timeline?.to(hamburgerLineOne.current, {
      rotate: "+45",
      width: "25",
      height: "1",
      opacity: 1,
      duration: 0.2,
      y: "4",
      x: "8"
    }).to(hamburgerLineTwo.current, {
      rotate: "+140",
      width: "25",
      height: "1",
      opacity: 1,
      duration: 0.2,
      delay: -0.2,
      y: "-4",
      x: "8"
    }, "start").reverse()
  }

  const handleNavClick = () => {
    const navlinks = document.getElementById("navid");
    const socials = document.getElementById("socials");

    timeline?.reversed() ? timeline?.play() : timeline?.reverse();

    navlinks?.classList.toggle("active");
    socials?.classList.toggle("socials-active")
  }

  return (
    <>
      <header>
        <nav>
          <div className="hamburger-container" onClick={handleNavClick}>
            <div className="hamburger-item-1" ref={hamburgerLineOne}></div>
            <div className="hamburger-item-2" ref={hamburgerLineTwo}></div>
          </div>
          <div className="navlinks" id="navid">
            <ul className="navlinks-container">
              <li><a href="#" className="navlink-item">Shop</a></li>
              <li><a href="#" className="navlink-item">Lookbook</a></li>
              <li><a href="#" className="navlink-item">About</a></li>
              <li><a href="#" className="navlink-item">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="logo-container">
          <a href='#'>
            Alameda
          </a>
        </div>
        <div className="cart-container">
          <div className="socials" id='socials'>
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <ShoppingCartIcon style={{color: "#000", fontSize:"1.5rem"}}/>
          <div className="cart-count">
            0
          </div>
        </div>
      </header>

      <main>
        
      </main>
    </>
  )
}

export default App
