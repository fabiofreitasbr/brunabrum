import Image from "next/image";
import imgBiografia from "@/public/img/biografia2.png"
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

export default function Biografia() {
    return (
        <div className="bg-neutral-100 bg-no-repeat pt-10 lg:pt-12 xl:pt-16" id="biografia">
            <div className="container mx-auto px-4">
                <h2 className="text-blue-500 font-bodoni text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center mb-8 md:mb-14">BIOGRAFIA</h2>
                <div className="md:flex-row-2 md:flex md:aling-end md:items-start">
                    <div className="text-xs xl:text-xl 2xl:text-2xl xl:py-[60px] md:w-1/2 text-center md:text-justify text-textBio">
                        <p className="pb-6 xl:pb-8"><span className="font-bold">Bruna Brum</span> é uma jovem cantora gospel de 19 anos, residente em Queimados, RJ. </p>
                        <p className="pb-6 xl:pb-8">Desde a infância, Bruna tem <span className="font-bold">dedicado sua vida à música e ao</span> <span className="font-bold">ministério</span>, usando seu talento como contralto para tocar corações e <span className="font-bold">levar a mensagem de Deus através do louvor.</span></p>
                        <p className="pb-6 xl:pb-8">Ela congrega na Igreja Assembleia de Deus Vida na Palavra (Advip), onde é muito ativa na  <span className="font-bold">parte musical da igreja.</span> Noiva de <span className="font-bold">Marcos Vinicius</span>, Bruna continua a crescer em sua jornada de <span className="font-bold">fé</span> <span className="font-bold">cristã e na sua carreira musical</span> ao lado do seu noivo que é músico.</p>
                        <p><span className="font-bold">Você pode acompanhá-la nas redes sociais</span>  através do Instagram, onde ela compartilha louvores e seu dia a dia em <span className="font-bold text-blue-500 hover:text-blue-600"><Link target="_blank" href={ContentLinks.instagram}>@brunabrumoficial</Link>.</span></p>
                    </div>
                    <div className="relative flex justify-center md:justify-start md:w-1/2 mx-auto">
                        <Image src={imgBiografia} className="w-3/4 " width={800} height={834}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}