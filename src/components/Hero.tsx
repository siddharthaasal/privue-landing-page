import { lazy, Suspense } from "react";

const WorldMap = lazy(() => import("./ui/world-map"));


export default function Hero() {
    return (
        <section
            id="home"
            className="w-full flex flex-col xl:flex-row justify-between items-center gap-10 px-6 md:px-12 lg:px-28 py-10"
        >
            {/* Info Section */}
            <div className="relative w-full xl:w-2/4 flex flex-col justify-center items-start">
                <p className="text-xl font-montserrat text-coral-red">
                    Clear summaries, not tables of data
                </p>

                <h1 className="mt-10 font-palanquin text-xl sm:text-3xl lg:text-5xl leading-tight font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-4">
                        Empowering Businesses via
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Intelligent</span> Data
                </h1>

                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-md">
                    Access unparalleled business data and insights to identify new opportunities,
                    mitigate risks, and build trusted relationships that drive your success.
                </p>
            </div>

            {/* Map Section */}
            <div className="relative w-full xl:flex-1 flex justify-center items-center min-h-[500px]">
                <div className="relative w-full h-full max-h-[600px] flex justify-center items-center rounded-xl shadow-l bg-white border border-gray-200 overflow-hidden">
                    <Suspense fallback={<div>Loading map...</div>}>
                        <WorldMap
                            dots={[
                                { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                                { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
                                { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
                                { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                            ]}
                        />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
