import RodapeRedesSociais from "@/app/parts/componentes/RodapeRedesSociais"
import FooterCredits from "@/app/parts/estrutura/FooterCredits"
export default function Rodape() {
    return (
        <footer className="bg-azul-500 py-8 md:py-16">
            <div className="container mx-auto text-white px-4 ">
                <div className="md:grid md:grid-cols-2">
                    <div>
                        <p className=" pt-2 text-center md:text-left text-5xl  md:text-6xl font-bodoni my-1 md:my-3">
                            BRUNA BRUM
                        </p>
                        <p className="text-center md:text-left text-sm md:text-xl">
                            Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="pt-14 md:flex md:flex-col md:items-end md:justify-center">
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