import Card from "../card/Card"
import "./Galery.css"
import { MockData } from "../../api/MockData"
import { useEffect, useState } from "react"
import IProduct from "../../interfaces/IProduct"

export default function Galery() {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        const results: IProduct[] = MockData()
        setData(results);
    }, [])
    
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
                {
                    data && data.map((item: IProduct) => {
                        return  <Card 
                                    id={item.id}
                                    imgsrc={item.imgsrc} 
                                    hoverimagesrc={item.hoverimagesrc} 
                                    title={item.title} 
                                    price={<p>{item.price} {item.offer ? <s>{item.offer}</s> : ""}</p>} 
                                    offer={item.offer && item.offer.length > 0 ? true : false}
                                />
                    })
                }
            </div>
        </main>
    )
}
