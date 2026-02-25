import React from 'react'
import { Link } from 'react-router-dom'
function Card({ data }) {

    const [isFav, setIsFav] = React.useState(() => {
        const favs = JSON.parse(localStorage.getItem("Fav") || "[]")
        return favs.includes(data.idMeal)
    })

    function handleFav() {
        let favs = JSON.parse(localStorage.getItem("Fav") || "[]")

        if (!favs.includes(data.idMeal)) {
            favs.push(data.idMeal)
            setIsFav(true)
        } else {
            favs = favs.filter(id => id !== data.idMeal)
            setIsFav(false)
        }
        localStorage.setItem("Fav", JSON.stringify(favs))
    }

    return (
        <div className="relative group w-60 bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 border border-slate-800 font-sans cursor-pointer">
            {/* Image Container with Hover Zoom */}
            <div className="relative w-full h-40 overflow-hidden">
                <img
                    src={data.strMealThumb}
                    alt={data.strMeal}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>

                {/* Favorite Button Overlay */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleFav();
                    }}
                    className={`absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-full transition-all duration-300 shadow-md group/btn ${isFav ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' : 'bg-slate-900/60 text-slate-300 hover:text-red-500 hover:bg-slate-800'}`}
                    aria-label="Add to favorites"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col justify-between h-[120px]">
                <h3 className="text-base font-bold text-white line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-emerald-500 transition-all duration-300">
                    {data.strMeal}
                </h3>

                <Link to={`/Recipe/${data.idMeal}`} className="mt-2 w-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 font-semibold py-1.5 px-3 rounded-lg text-sm transition-all duration-300 shadow-inner group-hover:shadow-cyan-500/25 flex items-center justify-center gap-1.5">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Card