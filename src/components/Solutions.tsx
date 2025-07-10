import { solutions } from "../data/index";


const SolutionsCard = ({ imgURL, name }: any) => {
    return (
        <div className="flex flex-col items-start w-full bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <img
                src={imgURL}
                alt={name}
                className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg text-center font-medium font-palanquin text-slate-800">
                {name}
            </h3>
        </div>
    );
};


const Solutions = () => {
    return (
        <section
            id="solutions"
            className="max-container px-6 md:px-12 lg:px-20 py-16">
            <div className="flex flex-col justify-start gap-5 mb-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-palanquin font-bold">
                    Our <span className="text-coral-red">Solutions</span>
                </h2>
                <p className="mt-2 font-montserrat text-slate-600 max-w-2xl mx-auto md:mx-0">
                    Our data lake delivers unrivaled value to our clients to identify new opportunities, mitigate risks, and build trusted partnerships.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {solutions.map((solution: any) => (
                    <SolutionsCard key={solution.name} {...solution} />
                ))}
            </div>
        </section>
    );
};


export default Solutions;
