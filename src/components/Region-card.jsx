import React from 'react'
import { Link } from 'react-router-dom'

function RegionCard({ area }) {
    const flag = [
        { "name": "Algerian", "flag": "https://flagcdn.com/w320/dz.png", "desc": "Algerian cuisine features a blend of Mediterranean and North African flavors, often with couscous, lamb, and rich spices." },
        { "name": "American", "flag": "https://flagcdn.com/w320/us.png", "desc": "American cuisine is famous for classic comfort foods like burgers, barbecue, hot dogs, and indulgent desserts like apple pie." },
        { "name": "Argentinian", "flag": "https://flagcdn.com/w320/ar.png", "desc": "Argentinian cuisine is celebrated for its exceptional beef, hearty grilled meats (asado), empanadas, and sweet dulce de leche." },
        { "name": "Australian", "flag": "https://flagcdn.com/w320/au.png", "desc": "Australian cuisine combines indigenous ingredients with diverse international influences, known for seafood, meat pies, and Vegemite." },
        { "name": "British", "flag": "https://flagcdn.com/w320/gb.png", "desc": "British cuisine offers comforting classics such as fish and chips, Sunday roast, hearty savory pies, and traditional full English breakfasts." },
        { "name": "Canadian", "flag": "https://flagcdn.com/w320/ca.png", "desc": "Canadian cuisine is famous for poutine, maple syrup-infused dishes, butter tarts, and diverse regional foods from coast to coast." },
        { "name": "Chinese", "flag": "https://flagcdn.com/w320/cn.png", "desc": "Chinese cuisine is renowned for its diverse regional styles, featuring stir-fries, dim sum, noodles, and rich, savory sauces." },
        { "name": "Croatian", "flag": "https://flagcdn.com/w320/hr.png", "desc": "Croatian cuisine offers a mix of Mediterranean seafood on the coast and hearty Central European meat and pastry dishes inland." },
        { "name": "Dutch", "flag": "https://flagcdn.com/w320/nl.png", "desc": "Dutch cuisine features wholesome, hearty dishes like stamppot, bitterballen, stroopwafels, and excellent regional cheeses." },
        { "name": "Egyptian", "flag": "https://flagcdn.com/w320/eg.png", "desc": "Egyptian cuisine relies heavily on legumes and vegetables, featuring historical dishes like koshari, ful medames, and falafel." },
        { "name": "Filipino", "flag": "https://flagcdn.com/w320/ph.png", "desc": "Filipino cuisine is a vibrant fusion of sweet, sour, and savory flavors, with famous dishes like adobo, sinigang, and lechon." },
        { "name": "French", "flag": "https://flagcdn.com/w320/fr.png", "desc": "French cuisine is world-renowned for its elegance, rich sauces, artisanal cheeses, pastries, and exceptional wine pairings." },
        { "name": "Greek", "flag": "https://flagcdn.com/w320/gr.png", "desc": "Greek cuisine emphasizes fresh Mediterranean ingredients, famously featuring olive oil, feta cheese, gyros, moussaka, and olives." },
        { "name": "Indian", "flag": "https://flagcdn.com/w320/in.png", "desc": "Indian cuisine is celebrated for its incredibly diverse and aromatic spice blends, rich curries, diverse flatbreads, and vibrant sweets." },
        { "name": "Irish", "flag": "https://flagcdn.com/w320/ie.png", "desc": "Irish cuisine is known for comforting, hearty foods, especially stews, soda bread, colcannon, and excellent dairy products." },
        { "name": "Italian", "flag": "https://flagcdn.com/w320/it.png", "desc": "Italian cuisine focuses on high-quality, fresh ingredients, giving the world beloved classics like pizza, pasta, and gelato." },
        { "name": "Jamaican", "flag": "https://flagcdn.com/w320/jm.png", "desc": "Jamaican cuisine is bold and flavorful, widely known for fiery jerk chicken, fragrant curries, ackee, and saltfish." },
        { "name": "Japanese", "flag": "https://flagcdn.com/w320/jp.png", "desc": "Japanese cuisine emphasizes seasonality and presentation, featuring fresh sushi, comforting ramen, tempura, and umami-rich broths." },
        { "name": "Kenyan", "flag": "https://flagcdn.com/w320/ke.png", "desc": "Kenyan cuisine is characterized by hearty staples like ugali, roasted meats (nyama choma), and flavorful stews." },
        { "name": "Malaysian", "flag": "https://flagcdn.com/w320/my.png", "desc": "Malaysian cuisine is a rich melting pot of Malay, Chinese, and Indian flavors, known for nasi lemak, laksa, and bold curries." },
        { "name": "Mexican", "flag": "https://flagcdn.com/w320/mx.png", "desc": "Mexican cuisine is vibrant and complex, featuring colorful dishes like tacos, enchiladas, moles, and fresh salsas." },
        { "name": "Moroccan", "flag": "https://flagcdn.com/w320/ma.png", "desc": "Moroccan cuisine masterfully blends sweet and savory flavors, famous for its tagines, couscous, and aromatic spice mixes like ras el hanout." },
        { "name": "Norwegian", "flag": "https://flagcdn.com/w320/no.png", "desc": "Norwegian cuisine focuses on preserving techniques and fresh local produce, known for excellent seafood, curing, and hearty stews." },
        { "name": "Polish", "flag": "https://flagcdn.com/w320/pl.png", "desc": "Polish cuisine is known for its hearty and flavorful dishes, often featuring meat, potatoes, and cabbage. Famous for pierogi and bigos." },
        { "name": "Portuguese", "flag": "https://flagcdn.com/w320/pt.png", "desc": "Portuguese cuisine is known for its fresh seafood, flavorful stews, and delicious pastries like the iconic pastel de nata." },
        { "name": "Russian", "flag": "https://flagcdn.com/w320/ru.png", "desc": "Russian cuisine features hearty, warming foods suited to cold climates, including borscht, pelmeni, and blini." },
        { "name": "Saudi Arabian", "flag": "https://flagcdn.com/w320/sa.png", "desc": "Saudi Arabian cuisine centers around rice and meat, rich in aromatic spices like cardamom and saffron. Famous for dishes like Kabsa." },
        { "name": "Slovakian", "flag": "https://flagcdn.com/w320/sk.png", "desc": "Slovakian cuisine is hearty and heavily relies on pork, potatoes, and dairy, known for dishes like bryndzové halušky." },
        { "name": "Spanish", "flag": "https://flagcdn.com/w320/es.png", "desc": "Spanish cuisine is diverse and ingredient-driven, famous for tapas, rich paellas, cured meats, and exceptional olive oils." },
        { "name": "Syrian", "flag": "https://flagcdn.com/w320/sy.png", "desc": "Syrian cuisine is rich and varied, known for its refined dishes, mezze varieties, kibbeh, and delicate, sweet pastries." },
        { "name": "Thai", "flag": "https://flagcdn.com/w320/th.png", "desc": "Thai cuisine aims for a perfect balance of sweet, spicy, sour, and salty flavors, known for vibrant curries and pad thai." },
        { "name": "Tunisian", "flag": "https://flagcdn.com/w320/tn.png", "desc": "Tunisian cuisine is bold and spicy, blending Mediterranean and North African elements, famous for harissa, coucous, and brik." },
        { "name": "Turkish", "flag": "https://flagcdn.com/w320/tr.png", "desc": "Turkish cuisine blends Central Asian, Middle Eastern, and Mediterranean influences, famous for kebabs, mezes, and baklava." },
        { "name": "Ukrainian", "flag": "https://flagcdn.com/w320/ua.png", "desc": "Ukrainian cuisine is hearty and comforting, renowned for its iconic borscht, varenyky (dumplings), and rich breads." },
        { "name": "Uruguayan", "flag": "https://flagcdn.com/w320/uy.png", "desc": "Uruguayan cuisine is heavily focused on top-quality grilled meats (asado), chivito sandwiches, and European influences." },
        { "name": "Venezulan", "flag": "https://flagcdn.com/w320/ve.png", "desc": "Venezuelan cuisine is vibrant and flavorful, widely recognized for its arepas, pabellón criollo, and sweet plantains." },
        { "name": "Vietnamese", "flag": "https://flagcdn.com/w320/vn.png", "desc": "Vietnamese cuisine is celebrated for its fresh ingredients, vibrant herbs, clear broths like pho, and perfectly balanced flavors." }
    ]



    return (
        <Link to={`/Region/${area}`} className="relative group w-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 border border-slate-800 font-sans cursor-pointer flex flex-col h-full">

            {/* Image Container */}
            <div className="relative w-full h-48 overflow-hidden bg-white/5 flex items-center justify-center p-6">
                {/* FLAG IMAGE TO BE PLACED HERE */}
                {flag.map((item) => {
                    if (item.name === area) {
                        return (
                            <img
                                key={item.name}
                                src={item.flag}
                                alt={item.name}
                                className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-700"
                            />
                        )
                    }
                })}

                {/* Show placeholder if no image exists */}
                {!flag.find(item => item.name === area) && (
                    <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500 transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                {/* <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-slate-700 uppercase tracking-wider">
                    {area}
                </span> */}
            </div>

            <div className="p-6 flex flex-col grow justify-between bg-slate-900/80 relative z-20">
                <div>
                    <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 mb-2 drop-shadow-sm">
                        {area} Cuisine
                    </h3>


                    <div className="text-sm text-slate-500 italic line-clamp-2 leading-relaxed mb-4">
                        {flag.map((item) => {
                            if (item.name === area) {
                                return (
                                    <span key={item.name} className="not-italic text-slate-400 line-clamp-3 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                                        {item.desc}
                                    </span>
                                )
                            }
                        })}

                        {/* Fallback if no description exists */}
                        {!flag.find(item => item.name === area) && (
                            <span>Discover the authentic and traditional dishes from {area}. Click to explore popular recipes.</span>
                        )}
                    </div>
                </div>

                {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div> */}
            </div>
        </Link>
    )
}

export default RegionCard