import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "@/app/parts/dados/contentRedes";
import Link from "next/link";

export default function BannerRedes() {
    return (
        <div className="flex flex-row gap-x-12 justify-center items-center ">
            {
                redesLista.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className="w-10 text-neutral-600" />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}