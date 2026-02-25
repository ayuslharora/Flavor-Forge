import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import IngridentsCards from "./Ingridents-cards"

function Ingridents() {
    const [ingridents, setIngridents] = useState([])
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then((res) => {
                setIngridents(res.data.meals)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />

            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-16 text-center flex-col items-center flex">
                <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 capitalize tracking-tight'>
                    Ingredients
                </h1>
                <p className="text-slate-400 mt-4 max-w-2xl text-lg opacity-90">
                    Browse our extensive catalog of ingredients. Select an ingredient to discover amazing recipes that feature it.
                </p>
                <div className="h-1 w-24 bg-linear-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>

            {/* Cards Grid */}
            {ingridents.length === 0 ? (
                <div className="grow flex justify-center items-center">
                    <div className="animate-pulse text-xl font-medium tracking-wide text-cyan-400">Loading Ingredients...</div>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto pb-20 px-4 w-full">
                    {ingridents.map((ingrident) => (
                        <IngridentsCards key={ingrident.idIngredient} ingrident={ingrident} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Ingridents