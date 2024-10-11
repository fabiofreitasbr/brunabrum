
import Menu from "@/app/parts/estrutura/Menu";
import Banner from "./alterar/home/Banner";
import FaixaTitulo from "./alterar/home/FaixaTitulo";
import Agenda from "./alterar/home/Agenda";
import Biografia from "./alterar/home/Biografia";
import Midia from "./alterar/home/Midia";
import NasRedes from "./alterar/home/NasRedes";
import Contato from "./alterar/home/Contato";
import Rodape from "./alterar/estrutura/Rodape";

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
