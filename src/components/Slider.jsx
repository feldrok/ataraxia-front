import React, { useEffect, useRef, useState } from 'react'

const images = [
    {
        image: 'https://images.pexels.com/photos/6173987/pexels-photo-6173987.jpeg',
    },
    {
        image: 'https://images.pexels.com/photos/5531894/pexels-photo-5531894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        image: 'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]

const delay = 3000

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeOutRef = useRef(null)
    const slideLength = images.length

    const resetTimeout = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeOutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slideLength - 1 ? 0 : prevIndex + 1
            )
        }, delay)
        return () => {
            resetTimeout()
        }
    }, [currentIndex])

    const handleNext = () => {
        setCurrentIndex(currentIndex === slideLength - 1 ? 0 : currentIndex + 1)
    }
    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? slideLength - 1 : currentIndex - 1)
    }

    return (
        <div className="w-full select-none relative max-w-7xl justify-center flex overflow-hidden">
            <div
                style={{
                    transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
                }}
                className={`aspect-w-16 whitespace-nowrap aspect-h-9 w-full duration-300`}
            >
                {images.map((image) => (
                    <img
                        className="h-96 inline-block w-full object-cover"
                        src={image.image}
                        alt=""
                    />
                ))}
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="hover:bg-black rounded-full p-2 duration-300"
                    onClick={handlePrev}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="w-8 h-8 stroke-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <button
                    className="hover:bg-black rounded-full p-2 duration-300"
                    onClick={handleNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="w-8 h-8 stroke-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Slider
