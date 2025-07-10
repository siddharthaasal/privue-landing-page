import { lazy, Suspense } from "react";

const WorldMap = lazy(() => import("./ui/world-map"));

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full flex flex-col xl:flex-row items-center justify-between gap-16 px-6 md:px-12 lg:px-20 py-20 bg-white"
        >
            {/* Info Section */}
            <div className="w-full xl:w-2/5 flex flex-col justify-center items-start text-left">
                <p className="text-lg md:text-xl font-montserrat text-coral-red font-medium">
                    Clear summaries, not tables of data
                </p>

                <h1 className="mt-6 font-palanquin text-3xl md:text-5xl leading-tight font-bold text-slate-900">
                    <span className="relative z-10 pr-2">
                        Empowering Businesses via
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-2">Intelligent</span>{" "}
                    Data
                </h1>

                <p className="font-montserrat text-base md:text-lg text-slate-600 leading-relaxed mt-6 mb-10 max-w-xl">
                    Access unparalleled business data and insights to identify new
                    opportunities, mitigate risks, and build trusted relationships that
                    drive your success.
                </p>
            </div>

            {/* Map Section */}
            <div className="w-full xl:w-3/5 flex justify-center items-center min-h-[400px]">
                <div className="w-full max-w-3xl h-[400px] md:h-[500px] lg:h-[500px] rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden p-4 md:p-6 flex justify-center items-center ">
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
