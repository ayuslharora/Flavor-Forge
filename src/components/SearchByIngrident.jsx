import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

function SearchByIngrident() {
    const { ingrident } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrident}`)
            .then((res) => {
                setData(res.data.meals)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [ingrident])

    if (data == null) {
        return (
            <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
                <Navbar />
                <div className="grow flex justify-center items-center">

                    <div className="flex flex-col items-center gap-4 bg-red-500/10 border border-red-500/20 px-8 py-6 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div className="text-xl font-medium tracking-wide text-red-400 text-center">
                            No recipes found for "<span className="text-white font-bold">{ingrident}</span>"
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />

            {/* Header Section */}
            {!loading && data !== null && (
                <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-8 text-center flex-col items-center flex">
                    <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 capitalize tracking-tight'>
                        {ingrident} Recipes
                    </h1>
                    <p className="text-slate-400 mt-4 max-w-2xl text-lg opacity-90">
                        Explore our curated collection of delicious recipes featuring {ingrident.toLowerCase()} as the star ingredient.
                    </p>
                    <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                </div>
            )}

            {loading ? (
                <div className="grow flex justify-center items-center">
                    <div className="animate-pulse text-xl font-medium tracking-wide text-cyan-400">Loading Recipes...</div>
                </div>
            ) : (
                <div className='flex flex-wrap justify-center gap-6 max-w-7xl mx-auto pb-20 px-4 w-full mt-4'>
                    {data.map((item) => (
                        <Card key={item.idMeal} data={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchByIngrident