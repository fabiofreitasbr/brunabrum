"use client"
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Evento() {
    return (
        <div className="border-4 py-4 px-5 md:py-6 md:px-8">
            <h1 className="text-lg  md:text-xl text-convite" >QUARTA-FEIRA</h1>
            <p className="text-4xl md:text-5xl my-4 text-azul-500 font-semibold">29/08</p>
            <p className="xl md:text-3xl my-4 text-marrom-500">às 19:00</p>
            <hr className="w-full border my-6" />
            <p className="text-lg md:text-3xl text-icone uppercase pb-2">prisca</p>
            <p className="text-sm md:text-xl text-icone font-extrabold">Campos do Jordão</p>
        </div>
    )
}

export default function Agenda() {
    return (
        <div className="container mx-auto px-4 min-h-[20rem]" >
            <div className="text-center pt-12 pb-8 md:pt-20 md:pb-14">
                <h2 className="text-center font-bodoni text-3xl xl:text-5xl 2xl:text-6xl text-marrom-500 ">AGENDA</h2>
            </div>
            <div className="pb-12 md:pb-28 relative ">
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
