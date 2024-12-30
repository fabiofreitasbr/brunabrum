import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ContatoWhatsApp() {
    return (
        <a href="https://wa.me/5521998669272" target="_blank">
            <button className="rounded-lg text-contato text-xs px-6 md:text-2xl md:py-3 md:px-8 bg-blue-500 w-full">
                <div className="flex items-center py-4 gap-x-6">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-9 h-9 md:w-16 md:h-16" />
                    <div className="text-left">
                        <p className="uppercase pb-2 ">Contato para <span className="font-bold">agenda</span></p>
                        <p className="text-neutral-100 text-2xl">(21) 99866-9272</p>
                    </div>
                </div>
            </button>
        </a>
    )
}