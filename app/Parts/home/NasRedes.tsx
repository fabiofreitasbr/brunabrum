import Image from "next/image"
import NasRedesLista from "@/app/parts/componentes/NasRedesLista"
import imgNasRedes from "@/public/img/redesocial.png"

export default function NasRedes() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-marrom-500 font-bodoni xl:text-5xl 2xl:text-6xl text-center mb-14">REDES SOCIAIS</h2>
                <div className="grid grid-cols-2">
                    <NasRedesLista />
                    <div>
                        <Image src={imgNasRedes} className="-mb-20" width={648} height={875} alt="Foto - Bruna Brum" />
                    </div>
                </div>
            </div>
        </div>
    )
}