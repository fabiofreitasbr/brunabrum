import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "@/app/parts/dados/contentRedes";
import Link from "next/link";

export default function RodapeRedesSociais() {
    return (
        <div className="flex flex-row space-x-10 justify-center pl-16">
            {
                redesLista.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className="w-10 h-10" />
                        </Link>
                    </div >
                ))
            }
        </div>
    )
}