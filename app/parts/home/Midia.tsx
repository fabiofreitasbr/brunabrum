import Image from "next/image";
import midia1 from "@/public/img/midia3.png"
import midia2 from "@/public/img/midia4.png"
import midia3 from "@/public/img/midia5.png"
import midia4 from "@/public/img/midia6.png"

export default function Midia() {
    return (
        <div className="bg-azul-500 pt-4 pb-10   md:pt-20 md:pb-24">
            <div className="container mx-auto px-4">
                <p className="text-midia font-bodoni  mb-6 sm:mb-10 text-3xl xl:text-5xl 2xl:text-6xl text-center">BRUNA NA MÍDIA</p>
                <div className="grid grid-cols-2 mx-6 md:mx-0 gap-4 md:grid-cols-4 gap-6 ">
                    <div>
                        <Image src={midia1} width={294} height={317} className="full transition duration-300 ease-in-out hover:scale-105" alt="Louvor" />
                    </div>
                    <div>
                        <Image src={midia2} width={294} height={317} className="full transition duration-300 ease-in-out hover:scale-105" alt="Louvor" />
                    </div>
                    <div>
                        <Image src={midia3} width={294} height={317} className="full transition duration-300 ease-in-out hover:scale-105" alt="Louvor" />
                    </div>
                    <div>
                        <Image src={midia4} width={294} height={317} className=" full transition duration-300 ease-in-out hover:scale-105" alt="Louvor" />
                    </div>
                </div>
            </div>
        </div>
    )
}