import Image from "next/image";
import NasRedesLista from "../componentes/NasRedesLista";
import imgNasRedes from "@/public/img/redesocial.png";

export default function NasRedes() {
    return (
        <div className="bg-white py-8 sm:py-10 lg:py-20" id="redes">
            <div className="container mx-auto px-4 relative  ">
                <h2 className="text-marrom-500 font-bodoni text-3xl xl:text-5xl 2xl:text-6xl text-center mt-2 mb-2 sm:mb-8 md:mb-14">REDES SOCIAIS</h2>
                <div className=" md:grid md:grid-cols-2 ">
                    <NasRedesLista />
                    <div>
                        <Image src={imgNasRedes} className="absolute md:relative bottom-0 -left-20 w-60 md:bottom-auto md:left-auto md:w-full -mb-8 sm:-mb-10 lg:-mb-20" width={648} height={875} alt="Foto - Bruna Brum" />
                    </div>
                </div>

            </div>
        </div>
    )
}