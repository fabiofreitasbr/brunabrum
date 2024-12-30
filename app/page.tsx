import About from "@/app/parts/Home/Biografia";
import NasRedes from "@/app/parts/Home/NasRedes";
import Banner from "@/app/parts/Home/Banner";
import Midia from "@/app/parts/Home/Midia";
import Agenda from "@/app/parts/Home/Agenda";
import Contato from "@/app/parts/Home/Contato";
import Rodape from "@/app/parts/estrutura/Footer"
import FaixaTitulo from "@/app/parts/Home/FaixaTitulo";
import Menu from "@/app/parts/estrutura/menu";

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
