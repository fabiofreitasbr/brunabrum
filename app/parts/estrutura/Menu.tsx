"use client"
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
    const namePath = usePathname();
    const menuFlutuante = (namePath == "/") ? "bg-black bg-opacity-30 absolute " : "bg-blue-500 relative";

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");

    const menuBurger = () => {
        const currentActive = (menuActive == '') ? 'is-active' : '';
        setMenuActive(currentActive);
    }

    return (
        <header className="absolute hidden md:block w-full py-4">
            <nav className="container mx-auto px-4">
                <ul className="md:flex lg:text-2xl 2xl:text-3xl md:gap-x-10  justify-end hidden md:block ">
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Início</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Agenda</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Biografia</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Mídia</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Redes</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Contato</a></li>
                </ul>
            </nav>
            <div className="md:hidden" onClick={menuBurger}>
                <div className={"hamburger hamburger--squeeze " + menuActive}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}