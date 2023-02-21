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
                <h2 className="pb-1 italic self-end">
                    <span className="font-bold not-italic text-primary-500">
                        Ataraxia.
                    </span>{' '}
                    Palabra proveniente del griego ἀ (a = sin) + ταραχή (taraji
                    = alteración); tranquilidad, serenidad, paz de espíritu.
                </h2>
                <section className="flex w-3/4 flex-col items-center justify-center pb-5 text-xl indent-5 gap-5 pt-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem dolor, commodi quasi tempore accusamus eos, facilis
                        hic minus libero, odit doloremque. Architecto aperiam
                        autem ipsum sit nisi dolorum, numquam consequuntur. Rem
                        dicta blanditiis esse perferendis dolore nisi, eveniet
                        similique sequi, fugiat suscipit reprehenderit vero.
                        Odio culpa ex ipsum non, commodi deleniti recusandae,
                        expedita velit officiis dolor voluptatem at, aliquam
                        quisquam!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Impedit ratione incidunt sint commodi eaque
                        quidem, a voluptatibus nam facilis animi eos deserunt
                        dolorum iure sed harum eius adipisci minima amet.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, quidem. Ipsam libero nobis dolorem soluta
                        distinctio necessitatibus nostrum sint. Temporibus
                        voluptatibus officiis ipsam totam facere quae, illum
                        nostrum! Debitis, officia? Sapiente, nihil totam!
                        Maiores, velit! Quibusdam, suscipit optio omnis, nemo
                        iste, fugiat voluptas neque enim odit illo officia vitae
                        repellat adipisci ut ipsam eum labore itaque ducimus
                        tempore aut est! Quod recusandae facilis, quisquam
                        deserunt voluptatibus nam beatae alias illo minima
                        labore aliquam quam voluptate? Vitae a esse fuga
                        expedita quasi sit veniam quam praesentium ipsa rem
                        culpa, libero veritatis.
                    </p>
                </section>
                  <h2 className="max-w-md flex-wrap pb-6 text-center text-5xl font-bold text-primary-500">Testimoniales</h2>
                <div class="mb-8 grid w-3/4 gap-4 rounded-lg md:mb-12 md:grid-cols-2">
                    <figure class="flex flex-col items-center justify-center rounded-md border-b bg-white p-8 text-center dark:border-black dark:bg-quaternary-300">
                        <blockquote class="mx-auto mb-4 max-w-2xl  lg:mb-8 ">
                            <p class="my-4 text-2xl">
                                "La Stout es tan rica y refrescante que les
                                agoté el stock personalmente."
                            </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <img
                                class="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="perfil de usuario"
                            />
                            <div class="space-y-0.5 text-left font-medium dark:text-black">
                                <div>Lucrecia Gillone</div>
                                <div class="text-sm">
                                    Desarrolladora web full-stack
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col items-center justify-center rounded-md border-b border-gray-200 bg-white p-8 text-center dark:border-black dark:bg-tertiary-300">
                        <blockquote class="mx-auto mb-4 max-w-2xl">
                            <p class="my-4 text-2xl">
                                "Esta marca se destaca no sólo por la calidad de
                                sus productos, sino también por su hermosa
                                presentación y diseño."
                            </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <img
                                class="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="perfil de usuario"
                            />
                            <div class="space-y-0.5 text-left font-medium dark:text-black">
                                <div>Martín Ticinese</div>
                                <div class="text-sm">CEO de Quilmes</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col items-center justify-center rounded-md border-b border-gray-200 bg-white p-8 text-center dark:border-black dark:bg-secondary-100">
                        <blockquote class="mx-auto mb-4 max-w-2xl">
                            <p class="my-4 text-2xl">
                                "A nivel user experience, Ataraxia nos ofrece
                                una página de e-commerce clara, concisa, y
                                accesible. Muy recomendable."
                            </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <img
                                class="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="perfil de usuario"
                            />
                            <div class="space-y-0.5 text-left font-medium dark:text-black">
                                <div>Lucas Ezequiel Silva</div>
                                <div class="text-sm">Desarrollador UI/UX</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col items-center justify-center rounded-md border-gray-200 bg-white p-8 text-center dark:border-black dark:bg-primary-100">
                        <blockquote class="mx-auto mb-4 max-w-2xl">
                            <p class="my-4 text-2xl">
                                "Ataraxia? No es esa la enfermedad que te traba
                                los músculos y no te podés mover?"
                            </p>
                            <br />
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <img
                                class="h-9 w-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="perfil de usuario"
                            />
                            <div class="space-y-0.5 text-left font-medium dark:text-black">
                                <div>Katie Gonzalez</div>
                                <div class="text-sm">
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
