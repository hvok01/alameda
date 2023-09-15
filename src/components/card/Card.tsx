import { useState, ReactElement } from "react";
import "./Card.css";

export default function Card(props: {
  id: number,
  imgsrc: string;
  hoverimagesrc: string;
  title: string;
  price: ReactElement<any, any>;
  offer: boolean;
}) {
  const [hover, setHover] = useState(false);
  
  return (
    <div className="card-container" key={props.id}>
      {hover && <button className="card-hoverbutton" onMouseEnter={() => setHover(true)}>quick view</button>}
      <img
        src={hover && props.hoverimagesrc ? props.hoverimagesrc : props.imgsrc}
        alt="image alameda top one"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <h1>{props.title}</h1>
      {props.price}
      {props.offer && <div className="offer">sale</div>}
    </div>
  );
}
