import { useState } from "react";
import { faqs } from "../data/index";


const FAQCard = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
            <button
                className="w-full text-left flex justify-between items-center"
                onClick={onClick}
            >
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 font-palanquin">
                    {question}
                </h3>
                <span className="text-coral-red text-xl font-bold">
                    {isOpen ? "–" : "+"}
                </span>
            </button>
            {isOpen && (
                <p className="mt-4 text-slate-600 text-base font-montserrat leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="w-full px-6 md:px-12 lg:px-20 py-20 max-container bg-white"
        >
            <div className="text-left mb-12">
                <h2 className="text-4xl md:text-5xl font-palanquin font-semibold text-slate-900">
                    Frequently Asked <span className="text-coral-red">Questions</span>
                </h2>
                <p className="mt-4 text-slate-600 text-lg max-w-2xl font-montserrat">
                    Find answers to some of the most common questions our users ask.
                </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto  cursor-pointer">
                {faqs.map((faq, index) => (
                    <FAQCard
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
}