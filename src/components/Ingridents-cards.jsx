import { Link } from 'react-router-dom'

function IngridentsCards({ ingrident }) {
    // TheMealDB doesn't return a strThumb for the list.php?i=list endpoint, 
    // but they provide a standard URL structure for ingredient images.
    const imageUrl = `https://www.themealdb.com/images/ingredients/${ingrident.strIngredient}-Small.png`

    return (
        <Link to={`/Ingridents/${ingrident.strIngredient}`} className="group relative w-48 h-48 bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 flex flex-col items-center justify-center p-4 cursor-pointer" >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Ingredient Image */}
            <div className="relative z-20 w-32 h-32 mb-2 flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={ingrident.strIngredient}
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
            </div>

            {/* Ingredient Name */}
            <h3 className="relative z-20 text-center font-bold text-white text-sm tracking-wide group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                {ingrident.strIngredient}
            </h3>
        </Link>
    )
}

export default IngridentsCards