import BannerRedes from "@/app/parts/componentes/BannerRedes"
import imgBanner from "@/public/img/foto-banner-2.png"
import Image from "next/image"
import ContentLinks from "../dados/contentLinks"

export default function Banner() {
    return (
        <div className="bg-banner bg-cover bg-bottom w-full pt-14 -mb-10 min-h-[20rem]" id="inicio">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2">
                    <div className="-mb-4 md:mb-0">
                        <Image src={imgBanner} className="w-5/6 mx-auto" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-blue-500 md:mb-14">
                            <h2 className="text-center md:text-left text-[2rem] md:text-[2.5rem] lg:text-[5rem] text-blue-500 font-bodoni grow uppercase">{ContentLinks.titleSite}</h2>
                            <h3 className="text-center md:text-left text-3xl  text-amber-900 grow">{ContentLinks.instagramShow} </h3>
                        </div>
                        <div className="py-8 mb-14 md:mb-0">
                            <h2 className="text-xl md:text-3xl lg:text-4xl text-amber-900 text-center pb-6 md:pb-8">Siga-me nas redes sociais</h2>
                            <BannerRedes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}