import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "../dados/contentRedes";

export default function NasRedesLista() {
    return (
        <div className="h-full pl-16 sm:pl-32 md:pl-0 relative z-20">
            <h2 className="text-marrom-500 text-xs sm:text-base md:text-2xl lg:text-4xl text-left font-bold mb-8 ">Siga-me nas redes sociais</h2>
            <nav className="text-2xl">
                <div className="grid gap-y-4 md:gap-y-6 ">
                    {
                        redesLista.map((singleLista) => (
                            <div key={singleLista.title} className="text-convite bg-gray-100 px-4 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6 text-base md:text-2xl lg:text-4xl rounded-lg md:rounded-xl xl:rounded-2xl transition ease-in-out hover:scale-105 hover:bg-blue-500 hover:text-white duration-300">
                                <a href={singleLista.link} target="_blank">
                                    <div className="flex gap-x-4 justify-start items-center  ">
                                        <FontAwesomeIcon className="w-6 h-6 md:w-12 md:h-12" icon={singleLista.icon} />
                                        <div>{singleLista.title}</div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </nav>
        </div>
    )
}

