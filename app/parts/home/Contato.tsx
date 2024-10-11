
import imgConvite from "@/public/img/convite.png"
import Image from "next/image"
import ContatoForm from "../componentes/ContatoForm"
import ContatoWhatsApp from "../componentes/ContatoWhatsApp"

export default function Contato() {
    return (
        <div className="bg-neutral-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-convite font-bodoni text-6xl text-center ">CONVITE</h2>
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <Image src={imgConvite} width={520} height={699} alt="" className="w-5/6 -mb-12" />
                    </div>
                    <div className="text-azul-500 text-2xl px-6">
                        <h1 className="pb-4">Deixe seus dados que entraremos em contato</h1>
                        <ContatoForm />
                        <div className="px-4 flex items-center my-8">
                            <hr className="w-full border-neutral-300 border " />
                            <div className="text-azul-500 text-2xl px-4">
                                OU
                            </div>
                            <hr className="w-full border-neutral-300 border" />
                        </div>
                        <ContatoWhatsApp />
                    </div>
                </div>
            </div>
        </div >
    )
}