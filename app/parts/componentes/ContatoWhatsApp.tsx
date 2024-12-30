import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ContatoWhatsApp() {
    return (
        <a href="https://wa.me/5521998669272" target="_blank">
            <button className="rounded-lg text-contato text-xs sm:text-xl md:text-2xl md:py-3 px-4 md:px-6 lg:px-8 bg-blue-500 w-full">
                <div className="flex items-center py-4 gap-x-6">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 md:w-9 h-6 md:h-9 lg:w-16 lg:h-16" />
                    <div className="text-left">
                        <p className="uppercase pb-2 ">Contato para <span className="font-bold">agenda</span></p>
                        <p className="text-neutral-100 text-lg md:text-xl lg:text-2xl">(21) 99866-9272</p>
                    </div>
                </div>
            </button>
        </a>
    )
}