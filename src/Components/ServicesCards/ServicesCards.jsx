import { useEffect, useState } from "react";
import Card from "./Card";


const ServicesCards = () => {
    const [cards, setCards ] = useState([])

    useEffect(() =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data =>setCards(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-5xl font-bold my-10">Our Services</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"  >
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default ServicesCards;

