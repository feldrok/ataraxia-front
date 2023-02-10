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
        <div className="relative z-10 flex w-full max-w-7xl select-none justify-center overflow-hidden">
            <div
                style={{
                    transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
                }}
                className={`aspect-w-16 aspect-h-9 z-10 w-full whitespace-nowrap duration-300`}
            >
                {images.map((image) => (
                    <img
                        key={image.image}
                        className="inline-block h-96 w-full object-cover"
                        src={image.image}
                        alt=""
                    />
                ))}
            </div>
            <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 transform items-center justify-between px-3">
                <button
                    className="rounded-full p-2 duration-300 hover:bg-primary-500"
                    onClick={handlePrev}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="h-8 w-8 stroke-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <button
                    className="rounded-full p-2 duration-300 hover:bg-primary-500"
                    onClick={handleNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="h-8 w-8 stroke-white"
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
