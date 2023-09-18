/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../card/Card"
import "./Galery.css"
import { MockData } from "../../api/MockData"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import IProduct from "../../interfaces/IProduct"
import gsap from 'gsap'

export default function Galery() {
    const [data, setData] = useState<IProduct[]>([]);
    const galeryCards = useRef(null);
    const [timeline, setTimeline] = useState<gsap.core.Timeline>()

    useEffect(() => {
        const results: IProduct[] = MockData()
        setData(results)
    }, [])

    useEffect(() => {
        if(data.length > 0) {
            animateCardsOnLoad()
        }
    }, [data])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            setTimeline(tl)
        });
        return () => ctx.revert()
    }, [])

    const animateCardsOnLoad = () => {
        if(data && data.length > 0) {
            const current: any = galeryCards.current;
            const arrayOfCards : gsap.TweenTarget[]= current ? gsap.utils.toArray(current.children) : [];
            arrayOfCards.forEach((card) => {
                timeline?.to(card, {
                    opacity: 1,
                    duration: 0.3,
                    y: "+=4"
                })
            });
        }
    }
    
    return (
        <main className="galery-container">
            <div className="galery-links">
                <ul>
                    <li><a href="">Tops</a></li>
                    <li><a href="" id="bottom">Bottoms</a></li>
                    <li><a href="">Sale</a></li>
                </ul>
            </div>
            <div className="galery-cards-container" ref={galeryCards}>
                {
                    data && data.map((item: IProduct, key) => {
                        return  <div key={key} style={data.length > 0 ? { opacity: 0 } : { opacity: 1 }}>
                                    <Card 
                                        id={item.id}
                                        imgsrc={item.imgsrc} 
                                        hoverimagesrc={item.hoverimagesrc} 
                                        title={item.title} 
                                        price={<p>{item.price} {item.offer ? <s>{item.offer}</s> : ""}</p>} 
                                        offer={item.offer && item.offer.length > 0 ? true : false}
                                    />
                                </div>
                    })
                }
            </div>
            <div className="galery-lookbook-container">
                <a href="#">SS - 22 Lookbook</a>
            </div>
        </main>
    )
}
