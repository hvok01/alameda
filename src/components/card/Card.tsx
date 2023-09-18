import { useState, ReactElement, useRef, useLayoutEffect } from "react";
import "./Card.css";
import gsap from 'gsap'

export default function Card(props: {
  id: number,
  imgsrc: string;
  hoverimagesrc: string;
  title: string;
  price: ReactElement<any, any>;
  offer: boolean;
}) {
  const [hover, setHover] = useState(false);
  const button = useRef(null);
  const image = useRef(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>()

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          const tl = gsap.timeline()
          setTimeline(tl)
      });
      return () => ctx.revert()
  }, [])

  const animateOnEnter = () => {
    setHover(true)
    timeline?.fromTo(button.current, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.5,
      }).fromTo(image.current, {
        opacity: 0.6,
      }, {
        opacity: 1,
        duration: 0.8,
      })
  }

  const animateOnLeave = () => {
    setHover(false)
    timeline?.fromTo(button.current, {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 0.5,
      }).fromTo(image.current, {
        opacity: 0.6,
      }, {
        opacity: 1,
        duration: 0.8,
      })
  }
  
  
  return (
    <div className="card-container" key={props.id}>
      <button className="card-hoverbutton" onMouseEnter={() => setHover(true)} ref={button}>quick view</button>
      <img
        src={hover && props.hoverimagesrc ? props.hoverimagesrc : props.imgsrc}
        alt="image alameda top one"
        onMouseEnter={animateOnEnter}
        onMouseLeave={animateOnLeave}
        ref={image}
      />
      <h1>{props.title}</h1>
      {props.price}
      {props.offer && <div className="offer">sale</div>}
    </div>
  );
}
