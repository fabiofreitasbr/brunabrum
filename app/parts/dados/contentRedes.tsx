import { faFacebookSquare, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ContentLinks from "@/app/parts/dados/contentLinks";

const redesLista = [
    {
        title: ContentLinks.instagramShow,
        icon: faInstagram,
        link: ContentLinks.instagram
    },
    {
        title: ContentLinks.youtubeShow,
        icon: faYoutube,
        link: ContentLinks.youtube
    },
    {
        title: ContentLinks.tiktokShow,
        icon: faTiktok,
        link: ContentLinks.tiktok
    },
    {
        title: ContentLinks.facebookShow,
        icon: faFacebookSquare,
        link: ContentLinks.facebook
    },
];
export default redesLista;