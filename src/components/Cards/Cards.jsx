import axios from "axios"
import { useEffect, useState } from "react"


const Cards = () => {
    const [cards, setCards] = useState([])
    const [page, setPage] = useState(1)
    const [itemsForpage, setItemsForpage] = useState(3)

    const url = "http://localhost:3000/cards"
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setCards(data)
        })

    }, []);

    const totalPages = Math.ceil(cards.length / itemsForpage)

    const currentData = cards.slice(
        (page - 1) * itemsForpage,
        page * itemsForpage

    );

    const handlePageChange = (page) => {
        setPage(page);
    }


    return (
        <>
            <div className=" container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
                <h5 className="text-center text-lg font-bold mb-4 text-red-500 px-4 py-2 rounded-md bg-red-200 hover:bg-gray-00">Page: {page}</h5>
                <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
                {currentData.map(({ id, title, description }) => (
                    <div key={id} className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>
                ))}
                </div>

                <div className="flex justify-center gap-4 mt-4"> 
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button  className={`text-red-500 px-4 py-2 rounded-md focus:outline-none transition duration-300 ease-in-out 
                        ${page === index + 1 ? 'bg-red-500 text-white' : 'bg-white hover:bg-gray-200 hover:text-gray-800'}`}
                   
                        key={index + 1} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Cards