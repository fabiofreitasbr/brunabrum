import RodapeRedesSociais from "@/app/parts/componentes/RodapeRedesSociais"
import FooterCredits from "@/app/parts/estrutura/FooterCredits"
export default function Rodape() {
    return (
        <footer className="bg-blue-500 py-8 md:py-16">
            <div className="container mx-auto text-white px-4 ">
                <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                    <div>
                        <p className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bodoni mb-1 md:mb-3">
                            BRUNA BRUM
                        </p>
                        <p className="text-center md:text-left text-xs md:text-base lg:text-lg xl:text-xl">
                            Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="md:flex md:flex-col md:items-end md:justify-center">
                        <div>
                            <RodapeRedesSociais />
                        </div>
                        <FooterCredits />
                    </div>
                </div>
            </div>
        </footer>
    )
}