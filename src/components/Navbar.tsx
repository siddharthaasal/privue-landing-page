import { useState } from "react";
import { navLinks } from "../data/index";
import hamburger from "../assets/hamburger.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-sm px-4 py-3 md:px-6 md:py-4">
            <nav className="max-container flex justify-between items-center">
                <a href="/" className="text-xl md:text-2xl text-coral-red font-extrabold">
                    PRIVUE
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 font-montserrat">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-slate-gray text-lg hover:text-coral-red transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Auth Links */}
                <div className="hidden md:flex items-center gap-4 text-base font-medium text-black">
                    <a href="/" className="hover:text-coral-red">Sign in</a>
                    <span>/</span>
                    <a href="/" className="hover:text-coral-red">Explore now</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden w-6 h-6"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <img src={hamburger} alt="menu" className="w-full h-full object-contain" />
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden mt-3 px-4 pb-4 border-t border-gray-200 bg-white shadow-md">
                    <div className="flex flex-col gap-4 font-montserrat">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-slate-gray text-base hover:text-coral-red transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <hr className="my-2" />
                        <a href="/" className="text-black text-base hover:text-coral-red">Sign in</a>
                        <a href="/" className="text-black text-base hover:text-coral-red">Explore now</a>
                    </div>
                </div>
            )}
        </header>

    );
}
