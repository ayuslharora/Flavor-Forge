import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import CategoryCards from './Category-cards'

function Category() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
                setCategories(res.data.categories)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
                <Navbar />
                <div className="grow flex justify-center items-center">
                    <div className="animate-pulse text-xl font-medium tracking-wide text-cyan-400">Loading Categories...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />

            <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-8 text-center">
                <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 capitalize tracking-tight'>
                    Recipe Categories
                </h1>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Explore our wide variety of dishes from all over the world, sorted by their main ingredient or meal type.</p>
                <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 mt-6 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto pb-20 px-4 w-full'>
                {categories.map((item) => (
                    <CategoryCards key={item.idCategory} data={item} />
                ))}
            </div>
        </div>
    )
}

export default Category