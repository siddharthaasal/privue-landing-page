import { footerLinks, socialMedia } from "../data/index";
import copyright from "../assets/copyright.png";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16 mt-20">
            {/* Top Row */}
            <div className="flex justify-between items-start flex-wrap gap-16 lg:gap-24 max-lg:flex-col">
                {/* Brand Column */}
                <div className="flex flex-col items-start max-w-sm">
                    <a href="/" className="text-2xl font-bold text-coral-red">
                        PRIVUE
                    </a>
                    <p className="mt-6 text-base font-montserrat text-slate-400 leading-relaxed">
                        Empowering Businesses Through Intelligent Data
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                        {socialMedia.map((icon) => (
                            <a
                                key={icon.alt}
                                href={icon.src || "#"}
                                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform"
                            >
                                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-1 justify-between flex-wrap gap-12">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold mb-4 font-montserrat">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.link}
                                            className="text-slate-300 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-center flex-wrap gap-4 mt-16 border-t border-slate-700 pt-6 text-slate-500 text-sm max-sm:flex-col max-sm:text-center">
                <div className="flex items-center gap-2">
                    <p>© {new Date().getFullYear()} PRIVUE-SAMPLE.</p>
                </div>
                <a href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                </a>
            </div>
        </footer>
    );
};

export default Footer;
