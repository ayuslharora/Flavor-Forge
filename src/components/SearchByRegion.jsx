import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Card'


function SearchByRegion() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { region } = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`)
            .then((res) => {
                setData(res.data.meals)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })

    }, [region])

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />

            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-16 text-center flex-col items-center flex">
                <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 capitalize tracking-tight'>
                    {region} Cuisine
                </h1>
                <p className="text-slate-400 mt-4 max-w-2xl text-lg opacity-90">
                    Explore our curated collection of authentic {region} recipes. Discover new flavors and traditional favorites to cook at home.
                </p>
                <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>

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

export default SearchByRegion