import BannerRedes from "@/app/parts/componentes/BannerRedes"
import imgBanner from "@/public/img/foto-banner-2.png"
import Image from "next/image"
import ContentLinks from "../dados/contentLinks"

export default function Banner() {
    return (
        <div className="bg-banner bg-cover bg-bottom w-full pt-14 -mb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2">
                    <div>
                        <Image src={imgBanner} className="w-5/6 mx-auto" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-azul-500 mb-14">
                            <h2 className="text-[5rem] 2xl:text-[6.5rem] text-azul-500 font-bodoni text-start grow uppercase">{ContentLinks.titleSite}</h2>
                            <h3 className="text-3xl text-start  text-amber-900 grow">{ContentLinks.instagramShow} </h3>
                        </div>
                        <div className="py-8">
                            <h2 className="text-4xl text-amber-900 text-center pb-8">Siga-me nas redes sociais</h2>
                            <BannerRedes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}