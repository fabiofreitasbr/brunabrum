import About from "./parts/Home/Biografia";
import NasRedes from "./parts/Home/NasRedes";
import Banner from "./parts/Home/Banner";
import Midia from "./parts/Home/Midia";
import Agenda from "./parts/Home/Agenda";
import Contato from "./parts/Home/Contato";
import Rodape from "./parts/estrutura/Footer"
import FaixaTitulo from "./parts/Home/FaixaTitulo";
import Menu from "./parts/estrutura/menu";

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
