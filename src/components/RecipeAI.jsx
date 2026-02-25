import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

function RecipeAI({ random = false }) {
    const { id } = useParams()
    const [apiData, setApiData] = useState(null)
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        if (apiData && apiData.meals) {
            const favs = JSON.parse(localStorage.getItem("Fav") || "[]")
            setIsFav(favs.includes(apiData.meals[0].idMeal))
        }
    }, [apiData])

    useEffect(() => {
        async function getData() {
            try {
                if (random) {
                    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                    setApiData(response.data)
                } else {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                    setApiData(response.data)
                }
            } catch (error) {
                console.error("Error fetching recipe data:", error)
            }
        }

        getData()
    }, [id, random])

    // Wait for the data to load
    if (!apiData || !apiData.meals) {
        return (
            <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
                <Navbar />
                <div className="grow flex justify-center items-center">
                    <div className="animate-pulse text-xl font-medium text-slate-400 tracking-wide">Loading your recipe...</div>
                </div>
            </div>
        )
    }

    const meal = apiData.meals[0]

    function handleFav() {
        let favs = JSON.parse(localStorage.getItem("Fav") || "[]")
        if (!favs.includes(meal.idMeal)) {
            favs.push(meal.idMeal)
            setIsFav(true)
        } else {
            favs = favs.filter(favId => favId !== meal.idMeal)
            setIsFav(false)
        }
        localStorage.setItem("Fav", JSON.stringify(favs))
    }

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />
            <div className="grow w-full max-w-5xl mx-auto p-6 md:p-8 flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-800 group">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                {meal.strArea} Cuisine
                            </span>
                        </div>

                        {/* Favorite Button Overlay */}
                        <button
                            onClick={handleFav}
                            className={`absolute top-4 right-4 p-3 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl group/btn z-10 ${isFav ? 'bg-red-500/20 hover:bg-red-500/30 text-red-500' : 'bg-slate-900/60 text-slate-300 hover:text-red-500 hover:bg-slate-800'}`}
                            aria-label="Add to favorites"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover/btn:scale-110" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 tracking-tight">
                            {meal.strMeal}
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-2">
                            {meal.strCategory && (
                                <span className="text-sm px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 shadow-sm backdrop-blur-md">
                                    {meal.strCategory}
                                </span>
                            )}

                            {meal.strArea && (
                                <span className="text-sm px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 shadow-sm backdrop-blur-md">
                                    {meal.strArea} Origin
                                </span>
                            )}
                            {/* Tags if available */}
                            {meal.strTags && meal.strTags.split(',').map(tag => (
                                <span key={tag} className="text-sm px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 shadow-sm backdrop-blur-md">
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl overflow-hidden mt-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-8 w-1 bg-linear-to-b from-emerald-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                            <h3 className="text-2xl font-bold text-slate-100">Instructions</h3>
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-[15px] md:text-base font-medium opacity-90">
                                {meal.strInstructions}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeAI
