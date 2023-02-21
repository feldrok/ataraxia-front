import React from 'react'

function AboutUs() {
    return (
        <>
            <div className="h-100 flex flex-col items-center justify-center">
                <h1 className="max-w-md flex-wrap pb-6 text-center text-5xl font-bold text-primary-500">
                    Nuestra Cervecería
                </h1>
                <img
                    src={'/ataraxia-signupbanner.png'}
                    alt="ataraxia banner"
                    className=" h-96 w-full object-cover"
                />
            </div>
            <div className="flex flex-col items-center justify-center p-10 pb-0">
                <h2 className="italic">
                    <span className="font-bold not-italic text-primary-500">
                        Ataraxia.
                    </span>{' '}
                    Palabra proveniente del griego ἀ (a = sin) + ταραχή (taraji
                    = alteración); tranquilidad, serenidad, paz de espíritu.
                </h2>
                <section className="flex w-3/4 flex-col items-center justify-center gap-5 py-10 indent-5 text-xl">
                    <p>
                        Bienvenido a Ataraxia, una cervecería independiente del
                        sur de Chile, específicamente de la ciudad de Villarrica
                        en la Araucanía. Fundada por Matías Mora durante la
                        pandemia del año 2021, Ataraxia es una cervecería que
                        busca llevar a sus clientes a un estado de calma o
                        imperturbabilidad, tal como lo indica su nombre.
                    </p>
                    <p>
                        Nuestra filosofía es simple: ofrecer productos de alta
                        calidad y brindar una experiencia excepcional a nuestros
                        clientes. Nos esforzamos por utilizar ingredientes
                        locales y de calidad para elaborar nuestras cervezas, y
                        nos enorgullece apoyar a la economía local.
                    </p>
                    <p>
                        En Ataraxia, nos esforzamos por ofrecer no solo
                        excelentes cervezas, sino también una experiencia
                        completa. Desde el momento en que entra en nuestra
                        página web, encontrará un ambiente acogedor y relajado.
                        Nuestro slogan, "Alcanza tu estado de calma", se refleja
                        en todo lo que hacemos.
                    </p>
                    <p>
                        Nos apasiona lo que hacemos y estamos comprometidos con
                        brindar productos y servicios excepcionales a nuestros
                        clientes. Si tiene alguna pregunta o necesita ayuda, no
                        dude en contactarnos.
                    </p>
                    <p>Gracias por elegirnos.</p>
                    <p>
                        Atentamente,{' '}
                        <span className="font-semibold text-primary-500">
                            El equipo de Ataraxia.
                        </span>
                    </p>
                </section>
                <h2 className="max-w-md flex-wrap pb-6 text-center text-5xl font-bold text-primary-500">
                    Testimonios
                </h2>
                <div className="mb-8 grid w-3/4 gap-4 rounded-lg md:mb-12 md:grid-cols-2">
                    <figure className="flex flex-col items-center justify-center rounded-md border-b bg-quaternary-400 p-8 text-center shadow-md duration-200 hover:scale-105 hover:shadow-none">
                        <blockquote className="mx-auto mb-4 max-w-2xl  lg:mb-8 ">
                            <p className="my-4 text-2xl text-gray-900">
                                "La Stout es tan rica y refrescante que les
                                agoté el stock personalmente."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="perfil de usuario"
                            />
                            <div className="space-y-0.5 text-left font-medium text-gray-800">
                                <div>Lucrecia Gillone</div>
                                <div className="text-sm">
                                    Desarrolladora Web Full-Stack
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center rounded-md border-b bg-tertiary-300 p-8 text-center shadow-md duration-200 hover:scale-105 hover:shadow-none">
                        <blockquote className="mx-auto mb-4 max-w-2xl">
                            <p className="my-4 text-2xl text-gray-900">
                                "Esta marca se destaca no sólo por la calidad de
                                sus productos, sino también por su hermosa
                                presentación y diseño."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="perfil de usuario"
                            />
                            <div className="space-y-0.5 text-left font-medium text-gray-800">
                                <div>Martín Ticinese</div>
                                <div className="text-sm">CEO de Quilmes</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center rounded-md border-b bg-secondary-400 p-8 text-center shadow-md duration-200 hover:scale-105 hover:shadow-none">
                        <blockquote className="mx-auto mb-4 max-w-2xl">
                            <p className="my-4 text-2xl text-gray-900">
                                "A nivel user experience, Ataraxia nos ofrece
                                una página de e-commerce clara, concisa, y
                                accesible. Muy recomendable."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="perfil de usuario"
                            />
                            <div className="space-y-0.5 text-left font-medium text-gray-800">
                                <div>Lucas Ezequiel Silva</div>
                                <div className="text-sm">
                                    Desarrollador UI/UX
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center rounded-md bg-primary-300 p-8 text-center shadow-md duration-200 hover:scale-105 hover:shadow-none">
                        <blockquote className="mx-auto mb-4 max-w-2xl">
                            <p className="my-4 text-2xl text-gray-900">
                                "Ataraxia? No es esa la enfermedad que te traba
                                los músculos y no te podés mover?"
                            </p>
                            <br />
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="perfil de usuario"
                            />
                            <div className="space-y-0.5 text-left font-medium text-gray-800">
                                <div>Katie Gonzalez</div>
                                <div className="text-sm">
                                    Esposa de Ariel Gonzalez
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default AboutUs
