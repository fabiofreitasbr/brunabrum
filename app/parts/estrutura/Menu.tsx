"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
    const namePath = usePathname();
    const menuFlutuante = (namePath == "/") ? "" : "bg-yellow-200 relative";

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");

    const menuBurger = () => {
        const currentActive = (menuActive == '') ? 'is-active' : '';
        const currentNavigation = (menuActive == '') ? 'right-0' : "-right-full";
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    }

    return (
        <>
            <header className={"absolute top-0 w-full py-4 " + menuFlutuante}>
                <nav className="container mx-auto px-4 flex justify-end">
                    <ul className="hidden md:flex lg:text-2xl 2xl:text-3xl md:gap-x-10 justify-end">
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#inicio">Início</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#agenda">Agenda</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#biografia">Biografia</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#midia">Mídia</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#redes">Redes</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#contato">Contato</Link></li>
                    </ul>
                    <div className="z-20 block md:hidden" onClick={menuBurger}>
                        <div className={"hamburger hamburger--squeeze " + menuActive}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <nav onClick={menuBurger} className={"block md:hidden z-40 w-full h-screen bg-white fixed top-0 px-6 pt-28 transition-all duration-300 ease-in-out " + menuNavigation}>
                <div className="container mx-auto">
                    <ul className="flex flex-col gap-5 xl:gap-10 text-2xl font-medium">
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#inicio">Início</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#agenda">Agenda</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#biografia">Biografia</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#midia">Mídia</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#redes">Redes</Link></li>
                        <li className="text-amber-900 hover:text-blue-600"><Link href="#contato">Contato</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}