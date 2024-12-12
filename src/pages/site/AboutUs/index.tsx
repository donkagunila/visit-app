import PageHeader from "../../../components/domains/site/PageHeader";

const AboutUsPage = () => {
    return (
        <div>
            <PageHeader title="About Us" subTitle="Our Journey to Revolutionizing Poultry Farm Management"/>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="my-12">
                    <p>
                        At Farm Brain, we believe in empowering poultry farmers with the tools they need to succeed in a
                        rapidly evolving agricultural landscape. Our platform was born out of a deep understanding of
                        the
                        challenges farmers face daily—from managing feed inventory to tracking production and ensuring
                        profitability.
                    </p>
                </div>
            </div>


            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="relative mb-12">
                            <img className="w-full rounded-md"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                                 alt=""/>
                            
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <svg className="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Our
                                Mission</h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                Our mission is simple: to provide poultry farmers with an easy-to-use, comprehensive
                                management solution that enhances productivity, reduces waste, and fosters sustainable
                                farming practices. We’re committed to helping you grow your farm efficiently, ensuring
                                that your operations are as successful as possible.
                            </p>

                        </div>
                    </div>
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24 my-20">

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <svg className="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Our
                                Story</h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">Founded in 2023, Farm Brain
                                started with a small team of passionate individuals who recognized the need for a
                                better way to manage poultry farms. What began as a simple tool for local farmers has
                                grown into a fully-fledged platform used by farms across Dar es salaam. Our journey
                                has been driven by continuous innovation and a dedication to supporting the farming
                                community.</p>

                        </div>


                        <div className="relative mb-12">
                            <img className="w-full rounded-md"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                                 alt=""/>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;