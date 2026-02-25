import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const inp = document.querySelector("input")
    function handleKeyDown(e) {
        if (e.key === "Enter" && inp.value !== "") {
            setSearch(inp.value)
            navigate(`/Search/${inp.value.trim()}`);
            inp.value = ""

        }
    }

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/90 border-b border-slate-800 shadow-xl transition-all duration-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center gap-3 cursor-pointer group">
                        <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                            Flavor Forge
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {['Home', 'Favorites', 'Random'].map((item) => (
                            <li key={item}>
                                <Link to={`/${item}`} className="text-slate-300 hover:text-white font-medium text-base transition-colors duration-200 relative group py-2">
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </Link>
                            </li>
                        ))}
                        {/* Sort Dropdown Placeholder */}

                        <li className="relative group">
                            <button className="flex items-center gap-1.5 text-slate-300 hover:text-white font-medium text-base transition-colors duration-200 py-2">
                                Sort
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Main Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden flex flex-col">

                                {/* Category Option */}
                                <button className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 w-full text-left transition-colors">
                                    <Link to="/Category">
                                        By Category
                                    </Link>
                                </button>

                                {/* Region Option */}
                                <button className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border-t border-slate-700 w-full text-left transition-colors">
                                    <Link to="/Region">
                                        By Region
                                    </Link>
                                </button>

                                {/* Ingridents Option */}
                                <button className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border-t border-slate-700 w-full text-left transition-colors">
                                    <Link to="/Ingridents">
                                        By Ingridents
                                    </Link>
                                </button>

                            </div>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <div className="flex items-center">
                        <div className="relative group flex items-center">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="block w-full pl-11 pr-4 py-2 border border-slate-700/50 rounded-full leading-5 bg-slate-800/80 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 hover:bg-slate-700/80 transition-all duration-300 sm:w-56 focus:sm:w-72 shadow-inner"
                                placeholder="Search meal by name"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar