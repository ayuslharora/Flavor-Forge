import Card from "./Card"
import Navbar from "./Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
function Favorites() {
    const [favs, setFavs] = useState([])
    const [loading, setLoading] = useState(true)
    const idesString = localStorage.getItem("Fav")

    useEffect(() => {
        if (idesString && idesString !== "[]") {
            async function getData() {
                const ides = JSON.parse(idesString)
                let newFavs = []

                for (let i = 0; i < ides.length; i++) {
                    let apiInput = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ides[i]}`)
                    if (apiInput.data.meals) {
                        newFavs.push(apiInput.data.meals[0])
                    }
                }

                setFavs(newFavs)
                setLoading(false)
            }
            getData()
        } else {
            setLoading(false)
        }
    }, [idesString])

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-100 flex flex-col">
            <Navbar />
            <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-6 text-center">
                <h1 className='text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-500 capitalize tracking-tight'>
                    Your Favorites
                </h1>

                <p className="mt-6 mb-8 text-xl text-slate-300 font-medium tracking-wide">
                    You have collected <span className="text-pink-400 font-bold">{favs.length}</span> favorite dishes so far!
                </p>
                <div className="h-1 w-20 bg-linear-to-r from-red-400 to-pink-500 mt-4 mx-auto rounded-full"></div>
            </div>

            <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto pb-16 px-4 w-full'>
                {loading ? (
                    <div className="mt-10 animate-pulse text-xl font-medium text-slate-400 tracking-wide">Loading your recipes...</div>
                ) : favs.length > 0 ? (
                    favs.map((item) => (
                        <Card key={item.idMeal} data={item} />
                    ))
                ) : (
                    <div className="mt-10 text-xl font-medium text-slate-400">
                        You haven't added any favorites yet. Go find some delicious recipes!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favorites
