import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [search, setSearch] = useState("")
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobileSearchOpen, setMobileSearchOpen] = useState(false)
    const navigate = useNavigate()

    function handleKeyDown(e) {
        if (e.key === "Enter" && search.trim() !== "") {
            navigate(`/Search/${search.trim()}`);
            setSearch("");
            e.target.value = "";
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

                    {/* Mobile Menu Toggle button */}
                    <div className="md:hidden flex items-center gap-5">
                        <button onClick={() => { setMobileSearchOpen(!isMobileSearchOpen); setMobileMenuOpen(false); }} className="text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button onClick={() => { setMobileMenuOpen(!isMobileMenuOpen); setMobileSearchOpen(false); }} className="text-slate-300 hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {['Home', 'Favorites', 'Random'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item}`} className="text-slate-300 hover:text-white font-medium text-base transition-colors duration-200 relative group py-2">
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
                                <Link to="/Category" className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 w-full text-left transition-colors">
                                    By Category
                                </Link>

                                {/* Region Option */}
                                <Link to="/Region" className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border-t border-slate-700 w-full text-left transition-colors">
                                    By Region
                                </Link>

                                {/* Ingridents Option */}
                                <Link to="/Ingridents" className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border-t border-slate-700 w-full text-left transition-colors">
                                    By Ingredients
                                </Link>

                            </div>
                        </li>
                    </ul>

                    {/* Search Bar (Desktop only) */}
                    <div className="hidden md:flex items-center">
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

                {/* Mobile Search Bar Expansion */}
                {isMobileSearchOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 border-b border-slate-800 p-4 shadow-xl z-50">
                        <div className="relative flex items-center">
                            <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                autoFocus
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    handleKeyDown(e);
                                    if (e.key === 'Enter') setMobileSearchOpen(false);
                                }}
                                className="block w-full pl-11 pr-4 py-3 border border-cyan-500/50 rounded-full leading-5 bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-inner"
                                placeholder="Search meal by name"
                            />
                        </div>
                    </div>
                )}

                {/* Mobile Menu Content */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 border-b border-slate-800 shadow-xl z-50 pb-4">
                        <ul className="flex flex-col gap-2 pt-2">
                            {['Home', 'Favorites', 'Random'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item}`}
                                        className="block px-6 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-slate-800 mt-2">
                                <span className="block px-6 py-2 text-xs text-slate-500 font-semibold uppercase tracking-wider">Categories</span>
                                <Link to="/Category" className="block px-6 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>By Category</Link>
                                <Link to="/Region" className="block px-6 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>By Region</Link>
                                <Link to="/Ingridents" className="block px-6 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>By Ingredients</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar