import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "../dados/contentRedes";
import Link from "next/link";

export default function RodapeRedesSociais() {
    return (
        <div className="flex flex-row space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 justify-center">
            {
                redesLista.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className="w-6 md:w-8 xl:w-10 h-6 md:h-8 xl:h-10" />
                        </Link>
                    </div >
                ))
            }
        </div>
    )
}