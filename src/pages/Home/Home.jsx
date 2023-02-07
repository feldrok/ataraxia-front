import BeerCard from '../../components/BeerCard'
import React from 'react'
import Slider from '../../components/Slider'

const beers = [
    {
        id: 1,
        name: 'Scottish Ale',
        price: 1000,
        abv: 4.8,
        ibu: 12,
        image: 'https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/scottish.png?alt=media&token=c98c002a-d44a-4ca5-838c-341ca3b830da',
    },
    {
        id: 2,
        name: 'Blonde Ale',
        price: 900,
        abv: 5.5,
        ibu: 21,
        image: 'https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/blondeale.png?alt=media&token=aa6626d4-3ce0-4229-b92a-449793d0109b',
    },
    {
        id: 3,
        name: 'Stout',
        price: 1300,
        abv: 6.0,
        ibu: 18,
        image: 'https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/stout.png?alt=media&token=48727545-47fa-4dde-8bac-e10462240c5e',
    },
    {
        id: 4,
        name: 'IPA',
        price: 1200,
        abv: 6.5,
        ibu: 54,
        image: 'https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/ipa.png?alt=media&token=3063c2e0-797e-4c05-989f-16193e208159',
    },
]

function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Slider />
            <div className="flex flex-col justify-center items-center p-2">
                <h1 className="p-2 text-2xl font-bold text-tertiary-500">
                    Cervezas
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-flow-row-dense">
                    {beers.map((beer) => (
                        <BeerCard
                            key={beer.id}
                            name={beer.name}
                            price={beer.price}
                            image={beer.image}
                            abv={beer.abv}
                            ibu={beer.ibu}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
