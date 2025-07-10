import { services } from "../data/index";

const ServiceCard = ({ imgURL, label, subtext }: any) => {
    return (
        <div className="flex-1 sm:w-[320px] w-full rounded-2xl shadow-lg px-8 py-12 bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} className="w-6 h-6 object-contain" />
            </div>
            <h3 className="mt-6 font-palanquin text-2xl font-bold text-slate-800">
                {label}
            </h3>
            <p className="mt-3 text-base text-justify font-montserrat text-slate-600 leading-relaxed">
                {subtext}
            </p>
        </div>
    );
};



const Services = () => {
    return (
        <section
            id="services"
            className="max-container px-6 md:px-12 lg:px-20 py-16">
            <div className="text-left mb-16">
                <h2 className="text-4xl md:text-5xl font-palanquin font-bold text-slate-900">
                    What <span className="text-coral-red">We</span> Offer
                </h2>
                <p className="mt-4 text-left text-slate-600 text-lg">
                    We empower decision makers with better insights to navigate risk and ensure trust in their networks.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {services.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </div>
        </section>
    );
};


export default Services;
