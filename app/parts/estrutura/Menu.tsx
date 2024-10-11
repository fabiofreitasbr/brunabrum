
export default function Menu() {
    return (
        <header className="absolute w-full py-4">
            <nav className="container mx-auto px-4">
                <ul className="flex lg:text-2xl 2xl:text-3xl gap-x-10  justify-end ">
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Início</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Agenda</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Biografia</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Mídia</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Redes</a></li>
                    <li className="text-amber-900 hover:text-azul-500"><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}



