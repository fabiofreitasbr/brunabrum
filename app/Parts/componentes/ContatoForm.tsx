export default function ContatoForm() {
    return (
        <form className="w-full mb-4">
            <div className="flex flex-col gap-y-5 mb-4">
                <input type="text" className=" bg-white text-lg p-4 rounded-md block w-full placeholder-neutral-400 " placeholder="Nome:" />
                <input type="number" className=" bg-white text-lg p-4 rounded-md block w-full placeholder-neutral-400" placeholder="Telefone:" />
                <input type="text" className="bg-white text-lg p-4 rounded-md block w-full placeholder-neutral-400" placeholder="E-mail:" />
            </div>
            <div>
                <button type="submit" className="text-white text-xl py-2 px-12 bg-marrom-500 p-2 rounded-md uppercase ">
                    Enviar
                </button>
            </div>
        </form>
    )
}