import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import Navbar from './Navbar'
function SearchByCategory() {
    const { category } = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((res) => {
                setData(res.data.meals)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })

    }, [])
    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />
            {loading ? (
                <div className='flex items-center justify-center h-screen text-2xl  text-cyan-400 '>Loading...</div>
            ) : (
                <>
                    <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-8 text-center">
                        <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 capitalize tracking-tight'>
                            {category} Recipes
                        </h1>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Explore our wide variety of dishes from all over the world, sorted by their main ingredient or meal type.</p>
                        <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 mt-6 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-6 max-w-7xl mx-auto pb-20 px-4 w-full'>
                        {data.map((item) => (
                            <Card key={item.idMeal} data={item} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default SearchByCategory
