import { Link, useLoaderData, useParams } from "react-router-dom";


const ServicesDetails = () => {
    const Services = useLoaderData();

    const { id } = useParams();

    const service = Services.find(service => service.id === id)
    console.log(service);
    return (
        <div>
            <div className="relative flex mx-auto w-full my-20  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={service.img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-3xl font-bold uppercase leading-relaxed tracking-normal text-[#f87272]
                    antialiased">
                        {service.title}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {service.short_description}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        We offer the latest in implant, orthodontic and cosmetic dentistry within a clean and modern practice with state of the art sterilisation facilities. We pride ourselves for focusing on providing dedicated patient care, customer service and quality dentistry to patients in and around the Paisley area with others travelling from afar afield as Oban to the South of England to The Cayman Islands! Come and see for yourself and experience ‘Complete’ Dentistry.

                        The practice has been established for over 60 years and has been at the forefront of modern dentistry. Prevention is a cornerstone of the practice philosophy and subsequently we work in conjunction with our hygienists to help our patients achieve this.
                    </p>
                    <p className="font-medium text-xl">Our Service Price : {service.price}</p>
                    <a className="inline-block" href="#">
                       <Link to="/">
                       <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Back
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button></Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;