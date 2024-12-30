export default function ContatoForm() {
    return (
        <form className="w-full mb-6">
            <div className="flex flex-col gap-y-5 mb-4 ">
                <input type="text" className=" bg-white text-sm md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400 " placeholder="Nome:" />
                <input type="number" className=" bg-white text-sm md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400" placeholder="Telefone:" />
                <input type="text" className="bg-white md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400" placeholder="E-mail:" />
            </div>
            <div>
                <button type="submit" className="text-white text-xs px-8 sm:px-10 md:text-xl py-2 md:px-12 bg-marrom-500 p-2 rounded-md uppercase ">
                    Enviar
                </button>
            </div>
        </form>
    )
}