import About from "./parts/home/Biografia";
import NasRedes from "./parts/home/NasRedes";
import Banner from "./parts/home/Banner";
import Midia from "./parts/home/Midia";
import Agenda from "./parts/home/Agenda";
import Contato from "./parts/home/Contato";
import Rodape from "./parts/estrutura/Rodape"
import FaixaTitulo from "./parts/home/FaixaTitulo";
import Menu from "./parts/estrutura/Menu";

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
