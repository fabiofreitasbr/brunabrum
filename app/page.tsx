
import Menu from "./parts/estrutura/Menu";
import Banner from "./parts/home/Banner";
import FaixaTitulo from "./parts/home/FaixaTitulo";
import Agenda from "./parts/home/Agenda";
import Biografia from "./parts/home/Biografia";
import Midia from "./parts/home/Midia";
import NasRedes from "./parts/home/NasRedes";
import Contato from "./parts/home/Contato";
import Rodape from "./parts/estrutura/Rodape";

export default function Home() {
    return (
        <div>
            <Menu />
            <Banner />
            <FaixaTitulo />
            <Agenda />
            <Biografia />
            <Midia />
            <NasRedes />
            <Contato />
            <Rodape />
        </div>
    );
}
