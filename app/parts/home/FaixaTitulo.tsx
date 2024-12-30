import ContentLinks from "../dados/ContentLinks"

function NomeFaixa() {
    return (
        <div className="flex-shrink-0">
            {ContentLinks.titleSite}
        </div>
    )
}

export default function FaixaTitulo() {
    return (
        <div className="bg-azul-500 py-2 md:py-4 overflow-x-hidden relative text-white font-bodoni">
            <div className="text-xl md:text-2xl flex justify-center gap-x-10 uppercase">
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
                <NomeFaixa />
            </div>
        </div>
    )
}