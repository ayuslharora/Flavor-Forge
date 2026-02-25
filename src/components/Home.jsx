import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Banner from './Banner'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [data, setData] = useState([])


    useEffect(() => {
        async function getData() {
            const apiInput = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
            console.log(apiInput.data.meals)
            setData(apiInput.data.meals)
        }
        getData()
    }, [])


    return (
        <div className='bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col'>
            <Navbar />
            <Banner />

            <main className="grow flex flex-col items-center">
                <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-6">
                    <h1 className='text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-slate-100 to-slate-400 capitalize tracking-tight'>
                        Trending Indian Dishes
                    </h1>
                    <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-emerald-400 mt-4 rounded-full"></div>
                </div>

                <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto pb-16 px-4 w-full'>
                    {data.map((item) => (
                        <Card key={item.idMeal} data={item} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home