import { faFacebookSquare, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ContentLinks from "@/app/parts/dados/ContentLinks";

const redesLista = [
    {
        title: ContentLinks.instagramShow,
        icon: faInstagram,
        link: ContentLinks.instagram
    },
    {
        title: ContentLinks.facebookShow,
        icon: faFacebookSquare,
        link: ContentLinks.facebook
    },
    {
        title: ContentLinks.tiktokShow,
        icon: faTiktok,
        link: ContentLinks.tiktok
    },
    {
        title: ContentLinks.youtubeShow,
        icon: faYoutube,
        link: ContentLinks.youtube
    },
];
export default redesLista;