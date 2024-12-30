import ContatoForm from "../componentes/ContatoForm"
import ContatoWhatsApp from "../componentes/ContatoWhatsApp"
import imgConvite from "@/public/img/convite.png"
import Image from "next/image"

export default function Contato() {
    return (
        <div className="bg-neutral-100 pt-10 lg:pt-12 xl:pt-16 overflow-y-hidden" id="contato">
            <div className="container mx-auto px-4 relative ">
                <h2 className="text-convite font-bodoni text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center mb-6">CONVITE</h2>
                <div className="md:grid md:grid-cols-2 md:items-center">
                    <div>
                        <Image src={imgConvite} width={520} height={699} alt="" className="absolute md:relative bottom-0 md:bottom-auto opacity-20 md:opacity-100 -right-[8%] md:right-0 w-96 md:w-full -mb-12  md:-mb-8 " />
                    </div>
                    <div className="relative text-blue-500 text-sm md:text-xl lg:text-2xl py-3 px-6">
                        <h1 className="pb-4">Deixe seus dados que entraremos em contato</h1>
                        <ContatoForm />
                        <div className="px-4 my-6 md:px-4 flex items-center md:my-8">
                            <hr className="w-full border-efeito opacity-1  md:opacity-100 md:border-neutral-300 border " />
                            <div className="text-blue-500 text-sm md:text-2xl px-4">
                                OU
                            </div>
                            <hr className="w-full border-efeito opacity-1 md:opacity-100  md:border-neutral-300 border" />
                        </div>
                        <ContatoWhatsApp />
                    </div>
                </div>
            </div>
        </div >
    )
}