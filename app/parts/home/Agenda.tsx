"use client"
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const listEventos = [
    {
        data: '11/01',
        hora: '19:00',
        dia: 'Sábado',
        nome: 'Culto de Jovens',
        local: 'Igreja Apascentar - Queimados'
    },
    {
        data: '11/01',
        hora: '19:00',
        dia: 'Sábado',
        nome: 'Culto de Jovens',
        local: 'Igreja Apascentar - Queimados'
    },
    {
        data: '11/01',
        hora: '19:00',
        dia: 'Sábado',
        nome: 'Culto de Jovens',
        local: 'Igreja Apascentar - Queimados'
    },
    {
        data: '11/01',
        hora: '19:00',
        dia: 'Sábado',
        nome: 'Culto de Jovens',
        local: 'Igreja Apascentar - Queimados'
    },
];
function Evento(props:any) {
    return (
        <div className="border-4 py-4 px-5 md:py-6 md:px-8">
            <h1 className="text-sm md:text-xl text-convite float-right" >{props.dados.dia}</h1>
            <p className="text-3xl md:text-4xl xl:text-5xl mb-4 text-blue-500 font-semibold">{props.dados.data}</p>
            <p className="xl md:text-3xl my-4 text-marrom-500">{props.dados.hora}</p>
            <hr className="w-full border my-6" />
            <p className="text-base md:text-lg text-icone uppercase pb-2">{props.dados.nome}</p>
            <p className="text-xs md:text-sm text-icone font-extrabold">{props.dados.local}</p>
        </div>
    )
}

export default function Agenda() {
    return (
        <div className="container mx-auto px-4 min-h-[20rem] py-10 lg:py-12 xl:py-16" id="agenda">
            <div className="text-center mb-8 md:mb-14">
                <h2 className="text-center font-bodoni text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-5 md:pb-10 relative ">
                <Splide
                    className="w-full"
                    options={{
                        perPage: 4,
                        breakpoints:{
                            640: {
                                perPage: 1.5
                            },
                            768: {
                                perPage: 2
                            },
                            1024: {
                                perPage: 3
                            },
                            1280: {
                                perPage: 4
                            },
                        },
                        perMove: 1,
                        type: 'loop',
                        gap: '1rem',
                        autoplay: true,
                    }}
                    aria-label="My Favorite Images">
                    {listEventos.map((evento, index) => (
                        <SplideSlide key={index}>
                            <Evento dados={evento} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}
