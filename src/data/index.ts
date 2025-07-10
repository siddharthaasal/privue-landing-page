import scorecard from "../assets/scorecard.png";
import contract from "../assets/contract.png";
import sentimentAnalysis from "../assets/sentimentAnalysis.png";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import linkedin from "../assets/linkedin.png";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Solutions" },
    { href: "#services", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];


export const services = [
    {
        imgURL: contract,
        label: "Abstractive Summarization",
        subtext: "LLMs are used to summarize the context and insights into easy-to-read formats like paragraphs and memos, for better understanding and clarity."
    },
    {
        imgURL: sentimentAnalysis,
        label: "Sentiment Analysis",
        subtext: "Abstractive summaries of news articles, customer reviews, and judicial documents are used to analyze sentiment and assess the level of concern, providing a concise and actionable risk profile."
    },
    {
        imgURL: scorecard,
        label: "Scorecards",
        subtext: "Scorecards consolidate key information to streamline and automate decision-making processes. Users can calibrate these scorecards to reflect their unique risk perspectives."
    },
];

export const solutions = [
    {
        imgURL: s1,
        name: "Smarter Credit Risk Decisions with Alternative Data Insights",
    },
    {
        imgURL: s2,
        name: "Optimizing Commercial Lines Underwriting with Extensive Data Assets",
    },
    {
        imgURL: s3,
        name: "Navigating Global Supplier Selection: Screening for Trust and Compliance",
    },
];

export const faqs = [
    {
        question: "What is the source of your data?",
        answer: "We collaborate with a curated selection of marquee data providers to cater to a wide range of needs. You can subscribe to datasets through our marketplace and seamlessly access them within the workstation."
    },
    {
        question: "Can we continue using our current providers them on this platform?",
        answer: "Yes. If your data provider can develop an adopter, we can integrate it with our platform, allowing your teams to continue using their preferred datasets."
    },
    {
        question: "Will our data and files be exposed to the internet?",
        answer: "No. Our private cloud option ensures that you maintain full control over your data and infrastructure, providing the highest level of security and privacy."
    },
    {
        question: "Is it mandatory to use the platform and workstation?",
        answer: "No. Our client success team can integrate an API that triggers from your workflow system, enabling structured data and report transmission without requiring direct use of the platform."
    },
];


export const footerLinks = [

    {
        title: "Help",
        links: [
            { name: "Home", link: "#home" },
            { name: "Solutions", link: "#solutions" },
            { name: "Services", link: "#services" },
            { name: "FAQs", link: "#faqs" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "sample@email.in", link: "mailto:sample@email.in" },
            { name: "+9123456789", link: "tel:+9123456789" },
        ],
    },
];

export const socialMedia = [
    { src: linkedin, alt: "linkedin logo" },
];
