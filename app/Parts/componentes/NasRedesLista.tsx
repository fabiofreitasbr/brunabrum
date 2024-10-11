import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "@/app/parts/dados/contentRedes";

export default function NasRedesLista() {
    return (
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-marrom-500 text-4xl text-left font-bold mb-8 ">Siga-me nas redes sociais</h2>
            <nav className="text-2xl">
                <div className="flex flex-col gap-y-6 ">
                    {
                        redesLista.map((singleLista) => (
                            <div key={singleLista.title} className="text-convite bg-gray-100 px-10 py-6 text-4xl rounded-2xl transition ease-in-out hover:scale-105 hover:bg-blue-500 hover:text-white duration-300">
                                <a href={singleLista.link}>
                                    <div className="flex gap-x-4 justify-start items-center">
                                        <FontAwesomeIcon  className="w-12 h-12" icon={singleLista.icon} /> 
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

