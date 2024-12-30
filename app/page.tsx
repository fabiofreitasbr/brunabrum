import About from "@/app/parts/home/Biografia";
import NasRedes from "@/app/parts/home/Redes";
import Banner from "@/app/parts/home/Banner";
import Midia from "@/app/parts/home/Midia";
import Agenda from "@/app/parts/home/Agenda";
import Contato from "@/app/parts/home/Contato";
import Rodape from "@/app/parts/estrutura/Footer"
import FaixaTitulo from "@/app/parts/home/FaixaTitulo";
import Menu from "@/app/parts/estrutura/Menu";

export default function Home() {
    return (
        <div>
            <Menu />
            <Banner />
            <FaixaTitulo />
            <Agenda />
            <About />
            <Midia />
            <NasRedes />
            <Contato />
            <Rodape />
        </div>
    );
}
