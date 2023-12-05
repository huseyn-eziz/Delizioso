import { useState } from "react";
import Cards from "./Cards";
// import Cards from "./Cards";


const CardsWithPagination = () => {

    //Pagination atarted
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5)
    const pages = [...Array(totalPages).keys()].map(num => num + 1)
    //Pagination ended




    const handleClick = (num) => {
        setPage(num)
    }

    return (
        <div className=" container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
            <h5 className="text-center text-lg font-bold mb-4">Page: {page}</h5>
            <Cards page={page} setTotalPages={setTotalPages} />

            <div className="flex justify-center gap-4 mt-4"> 
                {pages.map((num, id) => (
                    <button
                        className={`text-red-500 px-4 py-2 rounded-md focus:outline-none transition duration-300 ease-in-out 
                            ${page === num ? 'bg-red-500 text-white' : 'bg-white hover:bg-gray-200 hover:text-gray-800'}`}
                        key={id}
                        onClick={() => handleClick(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>

    )
}

export default CardsWithPagination