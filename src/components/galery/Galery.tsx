import Card from "../card/Card"
import "./Galery.css"
import alamedaImageOne from "../../assets/alameda-1.jpg"
import alamedaImageOneHover from "../../assets/alameda-1-2.jpg"

export default function Galery() {
    
    return (
        <main className="galery-container">
            <div className="galery-links">
                <ul>
                    <li><a href="">Tops</a></li>
                    <li><a href="" id="bottom">Bottoms</a></li>
                    <li><a href="">Sale</a></li>
                </ul>
            </div>
            <div className="galery-cards-container">
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
                <Card imgsrc={alamedaImageOne} hoverimagesrc={alamedaImageOneHover} title="Lounge Tunic / Black" price="$50.00" offer={false}/>
            </div>
        </main>
    )
}
