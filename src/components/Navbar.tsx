import { navLinks } from "../data/index";

export default function Navbar() {
    return (
        <>
            <header className="w-full  px-8 py-5">
                <nav className="flex flex-row justify-between align-center">
                    <div className="text-xl font-extrabold">
                        <a href="/">
                            <p className="text-xl text-coral-red  font-bold">PRIVUE</p>
                        </a>
                    </div>
                    <div className="flex flex-row gap-16 font-montserrat">
                        {
                            navLinks.map((link) => {
                                return (
                                    <p key={link.label}>
                                        <a
                                            href={link.href}
                                            className='font-montserrat text-lg text-slate-gray'
                                        >
                                            {link.label}
                                        </a>
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div className="gap-2 text-lg font-medium text-black">
                        <a href='/'>Sign in</a>
                        <span>/ </span>
                        <a href='/'>Explore now</a>
                    </div>
                </nav>
            </header>
        </>
    )
}