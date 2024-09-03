
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faFacebookSquare, faTiktok, faWhatsapp, faThreads } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import BrunaBrum from "@/public/img/brunabrum.jpg"
import ContentLinks from '../Parts/dados/contentLinks'

export default function Index() {
    return (
        <div className="bg-zinc-100 flex justify-center items-start pt-12 md:pt-0 md:items-center min-h-screen">
            <div className="container max-w-sm px-4 ">
                <div className="mb-4 text-center">
                    <Image width={150} height={150} src={BrunaBrum} className="rounded-full border-2 md:border-4 border-white mx-auto w-24 md:w-36" alt="" />
                </div>
                <div className="font-medium text-base lg:text-lg">
                    
                    <Link href={ContentLinks.whatsapp} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faWhatsapp} /></div>
                            <div className="px-2"> Contato para agendas </div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.instagram} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faInstagram} /></div>
                            <div className="px-2"> Siga-me no insta</div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.facebook} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faFacebookSquare} /></div>
                            <div className="px-2"> {ContentLinks.facebookShow}</div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.tiktok} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faTiktok} /></div>
                            <div className="px-2"> {ContentLinks.tiktokShow}</div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.youtube} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faYoutube} /></div>
                            <div className="px-2"> Se inscreva no canal</div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.site}>
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faLink} /></div>
                            <div className="px-2"> Entre no site</div>
                        </div>
                    </Link>
                    <Link href={ContentLinks.threads} target="_blank">
                        <div className="my-2 px-3 py-2 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faThreads} /></div>
                            <div className="px-2"> {ContentLinks.threadsShow}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
