import Image from "next/image";
import midia1 from "@/public/img/midia/midia1.jpg"
import midia2 from "@/public/img/midia/midia2.jpg"
import midia3 from "@/public/img/midia/midia3.jpg"
import midia4 from "@/public/img/midia/midia4.jpg"
import midia5 from "@/public/img/midia/midia5.jpg"
import midia6 from "@/public/img/midia/midia6.jpg"
import midia7 from "@/public/img/midia/midia7.jpg"
import midia8 from "@/public/img/midia/midia8.jpg"
import Link from "next/link";

const listMidia = [
    { img: midia8, link: "https://www.instagram.com/reel/DD9t7Oxxsc4/" },
    { img: midia7, link: "https://www.instagram.com/reel/DC1rmfkAwxv/" },
    { img: midia6, link: "https://www.instagram.com/reel/C_a0j5_AFlo/" },

    { img: midia1, link: "https://www.instagram.com/reel/C_Jba7RvBXW/" },
    { img: midia2, link: "https://www.instagram.com/reel/C8PblQsgYXj/" },
    { img: midia3, link: "https://www.instagram.com/reel/C0mKQ7EgHWp/" },
    { img: midia4, link: "https://www.instagram.com/reel/Cvuo4mfgfYy/" },


    { img: midia5, link: "https://www.instagram.com/reel/CvfcujHAsOh/" },
]

export default function Midia() {
    return (
        <div className="bg-blue-500  py-10 lg:py-12 xl:py-16" id="midia">
            <div className="container mx-auto px-4">
                <p className="text-midia font-bodoni mb-6 sm:mb-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center">BRUNA NA MÍDIA</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
                    {
                        listMidia.map((singleMidia, index) => (
                            <div key={index} className="relative">
                                <Link href={singleMidia.link} target="_blank"><Image src={singleMidia.img} width={294} height={317} className="full transition duration-300 ease-in-out hover:scale-105" alt="Midia" /></Link>
                            </div>
                        ))
                            
                    }
                </div>
            </div>
        </div>
    )
}