import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Cards({ page, setTotalPages }) {
    const [cards, setCards] = useState([]);
    const url = "http://localhost:3000/cards"
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setCards(data)
        })
        setTotalPages(Math.ceil(cards.length / NumberOfShowCards))

    }, []);

    const NumberOfShowCards = 3;

    const startIndex = (page - 1) * NumberOfShowCards;
    const selectedCards = cards.slice(startIndex, startIndex + NumberOfShowCards);



    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCards.map(({ id, title,     description }) => (
                <div key={id} className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                </div>
            ))}
        </div>

    )
}

export default Cards


