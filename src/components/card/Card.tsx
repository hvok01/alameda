import { useState } from "react"
import "./Card.css"

export default function Card(props : {imgsrc: string, hoverimagesrc: string, title: string, price: string, offer: boolean}) {
    const [hover, setHover] = useState(false);

    return (
        <div className="card-container">
            <img src={hover && props.hoverimagesrc ? props.hoverimagesrc : props.imgsrc} alt="image alameda top one" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            {
              props.offer && (
                <div>
                  sale
                </div>
              )
            }
        </div>
    )
}
