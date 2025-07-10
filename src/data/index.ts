import scorecard from "../assets/scorecard.png";
import contract from "../assets/contract.png";
import sentimentAnalysis from "../assets/sentimentAnalysis.png";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";

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