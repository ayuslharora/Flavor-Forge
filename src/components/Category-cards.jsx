import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCards({ data }) {
    return (
        <div className="relative group w-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-800 font-sans cursor-pointer flex flex-col h-full">
            {/* Image Container with Hover Zoom */}
            <div className="relative w-full h-48 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <img
                    src={data.strCategoryThumb}
                    alt={data.strCategory}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 border border-slate-700">
                    Category Menu
                </span>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col grow justify-between bg-slate-900/80">
                <div>
                    <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 mb-2">
                        {data.strCategory}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                        {data.strCategoryDescription}
                    </p>
                </div>

                {/* Keep a consistent button style but route to somewhere meaningful or just act as a filter button */}
                <Link to={`/Category/${data.strCategory}`} className="mt-auto w-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 shadow-inner group-hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                    <span>Explore Recipes</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default CategoryCards