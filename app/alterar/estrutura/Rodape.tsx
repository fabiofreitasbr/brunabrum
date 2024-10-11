import RodapeRedesSociais from "../componentes/RodapeRedesSociais";

export default function Rodape() {
    return (
        <footer className="bg-azul-500 py-16">
            <div className="container mx-auto text-white px-4 ">
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-6xl font-bodoni my-3">
                            BRUNA BRUM
                        </p>
                        <p className="text-xl">
                            Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <div>
                            <RodapeRedesSociais />
                        </div>
                        <p className="text-lg pt-4 text-end">
                            Desenvolvido por <span className="font-bold">Agência KLS</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}