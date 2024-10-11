"use client"
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Evento() {
    return (
        <div className="border-4 py-6 px-8">
            <h1 className="text-xl text-convite" >QUART-FEIRA</h1>
            <p className="text-5xl my-4 text-azul-500 font-semibold">29/08</p>
            <p className="text-3xl my-4 text-marrom-500">às 19:00</p>
            <hr className="w-full border my-6" />
            <p className="text-3xl text-icone uppercase pb-2">prisca</p>
            <p className="text-xl text-icone font-extrabold">Campos do Jordão</p>
        </div>
    )
}

export default function Agenda() {
    return (
        <div className="container mx-auto px-4" >
            <div className="text-center pt-[77px] pb-[59px]">
                <h2 className="text-center font-bodoni xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-[117px] relative ">
                <Splide
                    className="w-full"
                    options={{
                        perPage: 4,
                        perMove: 1,
                        type: 'loop',
                        gap: '1rem',
                        autoplay: true,
                    }}
                    aria-label="My Favorite Images">
                    <SplideSlide>
                        <Evento />
                    </SplideSlide>
                    <SplideSlide>
                        <Evento />
                    </SplideSlide>
                    <SplideSlide>
                        <Evento />
                    </SplideSlide>
                    <SplideSlide>
                        <Evento />
                    </SplideSlide>
                    <SplideSlide>
                        <Evento />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}
