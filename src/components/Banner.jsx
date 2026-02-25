import React, { useState, useEffect } from 'react'

function Banner() {
    // Array containing dummy food banner photos and taglines
    const images = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
            alt: "Delicious looking food meal spread",
            tagline: "Discover Your Next Favorite Meal"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
            alt: "Plated barbecue style food",
            tagline: "Savor the Authentic Flavors"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop",
            alt: "Healthy breakfast bowl",
            tagline: "Healthy Options to Fuel Your Day"
        }
    ];



    const [currentIndex, setCurrentIndex] = useState(0)
    // const [bool,setBool] = useState(true)


    // why does the setIntravel give a glitch when its rinning for so long ?
    // 
    setInterval(() => {
        handleNext();
    }, 5000)

    // useEffect(() => {
    //     handleNextDynamic()
    // }, [bool, currentIndex])

    // function TrueFalse(){
    //     setBool(!bool)
    // }

    // function handleNextDynamic() {
    //         handleNext()
    // }

    function handlePrev() {
        let ind = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(ind);
    };

    function handleNext() {
        let ind = (currentIndex + 1) % images.length;
        setCurrentIndex(ind);
    };

    return (
        <div className="relative w-full h-100 overflow-hidden group font-sans bg-slate-900">
            {/* Background Images with Overlay */}
            {images.map((img, idx) => (
                <div
                    key={img.id}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
                    style={{ backgroundImage: `url(${img.url})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                </div>
            ))}

            {/* Content Area */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-md">Welcome to RecipeApp</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl transition-all duration-500 transform translate-y-0 opacity-100">
                    {images[currentIndex].tagline}
                </h2>

                {/* Pagination Dots */}
                <div className="mt-8 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none hover:scale-110"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none hover:scale-110"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default Banner