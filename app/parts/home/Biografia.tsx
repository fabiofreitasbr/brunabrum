import Image from "next/image";
import imgBiografia from "@/public/img/biografia2.png"

export default function Biografia() {
    return (
        <div className="bg-neutral-100 bg-no-repeat">
            <div className="container mx-auto px-4">
                <h2 className="text-azul-500 font-bodoni text-xl xl:text-5xl 2xl:text-6xl text-center pt-4 pb-2  xl:pt-[77px] xl:pb-[19px]">BIOGRAFIA</h2>
                <div className="flex-row-2  md:flex md:aling-end md:items-start ">
                    <div className="  text-base md:text-xs xl:text-xl 2xl:text-2xl xl:py-[60px] text-textBio ">
                        <p className="pb-6 xl:pb-8"><span className="font-bold">Bruna Brum</span> é uma jovem cantora gospel de 19 anos, residente <br/> em Queimados, RJ. </p>
                        <p className="pb-6 xl:pb-8">Desde a infância, Bruna tem <span className="font-bold">dedicado sua vida à música e ao</span> <br />
                            <span className="font-bold">ministério</span>, usando seu talento como contralto para tocar<br />
                            corações e <span className="font-bold">levar a mensagem de Deus através do louvor.</span></p>
                        <p className="pb-6 xl:pb-8">Ela congrega na Igreja Assembleia de Deus Vida na Palavra<br />
                            (Advip), onde é muito ativa na <span className="font-bold">parte musical da igreja.</span> Noiva de<br />
                            <span className="font-bold">Marcos Vinicius</span>, Bruna continua a crescer em sua jornada de <span className="font-bold">fé</span><br />
                            <span className="font-bold">cristã e na sua carreira musical</span> ao lado do seu noivo que é<br />
                            músico.</p>
                        <p><span className="font-bold">Você pode acompanhá-la nas redes sociais</span>  através do<br />
                            Instagram, onde ela compartilha louvores e seu dia a dia em <br />
                        <span className="font-bold">@brunabrumoficial.</span></p>
                    </div>
                    <div className="relative flex justify-center  md:justify-start  w-1/2 mx-auto">
                        <Image src={imgBiografia} className="w-3/4 " width={800} height={834}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}