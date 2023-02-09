import React, { useEffect, useRef, useState } from 'react'

const images = [
    {
        image: '/banner1.jpg',
    },
    {
        image: '/banner2.jpg',
    },
    {
        image: '/banner3.jpg',
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
        <div className="w-full select-none relative z-10 max-w-7xl justify-center flex overflow-hidden">
            <div
                style={{
                    transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
                }}
                className={`aspect-w-16 z-10 whitespace-nowrap aspect-h-9 w-full duration-300`}
            >
                {images.map((image) => (
                    <img
                        className="h-96 inline-block w-full object-cover"
                        src={image.image}
                        alt=""
                    />
                ))}
            </div>
            <div className="absolute z-10 w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="hover:bg-primary-500 rounded-full p-2 duration-300"
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
                    className="hover:bg-primary-500 rounded-full p-2 duration-300"
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
