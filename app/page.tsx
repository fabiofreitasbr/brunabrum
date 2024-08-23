import Image from "next/image";
import BrunaBrum from "@/public/img/brunabrum.jpg"

export default function Home() {
    return (
        <div className="z-20 fixed flex w-full mx-auto p-4 h-screen items-center justify-center flex-col">
            <h1 className="text-3xl font-bold underline">
                <Image width={150} height={150} src={BrunaBrum} className="rounded-full border-2 md:border-4 border-white mx-auto w-24 md:w-36" alt="" />
            </h1>
            <div className="my-6 text-center">
                <div className="text-md my-4 font-bold uppercase text-blue-900">Estamos trabalhando na repaginação do  nosso Site, visando proporcionar aos nossos clientes uma experiência única e agradável</div>
                <div className="text-md my-4 font-normal uppercase text-gray-500">Aguardem nossa notificação, assim que tudo estiver pronto para entrarmos no ar</div>
            </div>
            <div className="my-4 w-full flex justify-center gap-x-2 md:gap-x-4">
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-orange-700 rounded-md">0</div>
                    <div className="bg-blue-900 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-white">DIAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-orange-700 rounded-md">0</div>
                    <div className="bg-blue-900 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-white">HORAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-orange-700 rounded-md">0</div>
                    <div className="bg-blue-900 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-white">MINUTOS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-orange-700 rounded-md">0</div>
                    <div className="bg-blue-900 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-white">SEGUNDOS</div>
                </div>
            </div>

            <div className="my-4 flex gap-x-4 border-2 bg-white border-orange-700 rounded-xl p-2 md:p-6">
                <form action="" method="post">
                    <div className="flex justify-center flex-col md:flex-row">
                        <input type="text" placeholder="E-MAIL" className="bg-gray-200 rounded-full py-1 md:py-2 my-2 px-6 text-lg mx-4" />
                            <button className="bg-blue-900 rounded-full py-1 md:py-2 my-2 px-6 text-lg text-white mx-4 uppercase">Enviar</button>
                    </div>
                </form>
            </div>

            <div className="my-4 flex md:flex-row flex-col gap-x-4 rounded-xl p-2">
                <a href="mailto:jonas@persevere.com.br" target="_blank">
                    <div className="my-2 md:my-4 flex text-base font-medium text-blue-900 justify-center items-center">
                        <i className="fa-regular fa-envelope text-orange-700 text-xl mx-2"></i>
                        <div className="mx-2">jonas@persevere.com.br</div>
                    </div>
                </a>
                <a href="tel:+5521964646334" target="_blank">
                    <div className="my-4 flex base-xl font-medium text-blue-900 justify-center items-center">
                        <i className="fa-solid fa-phone text-orange-700 text-xl mx-2"></i>
                        <div className="mx-2">(21) 96464-6334</div>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5521992260747" target="_blank">
                    <div className="my-2 md:my-4 flex text-base font-medium text-blue-900 justify-center items-center">
                        <i className="fa-brands fa-whatsapp text-orange-700 text-xl mx-2"></i>
                        <div className="mx-2">(21) 99226-0747</div>
                    </div>
                </a>
            </div>
        </div>
    );
}
