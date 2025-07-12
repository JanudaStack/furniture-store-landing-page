import React, { useState } from 'react';
import { imgSlider } from '../../constants';
import arrow from '../images/icon-arrow.svg';
import arrowLeft from '../images/icon-angle-left.svg';
import arrowRight from '../images/icon-angle-right.svg';

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {};
    const prevSlide = () => {};
    return (
        <section className="site-hero">
            {imgSlider.map((img, index) => (
                <article className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
                    <div className="relative">
                        <picture>
                            <source
                                media="(min-width:768px )"
                                srcset={img.desktopImg}
                            />
                            <img
                                src={img.mobileImg}
                                alt={img.title}
                                className="w-full"
                            />
                        </picture>
                        <div className="absolute bottom-0 right-0 flex lg:-right-31">
                            <button className="bg-black py-4 px-6 cursor-pointer hover:bg-neutral-700 transition-all duration-200">
                                <img src={arrowLeft} alt="" />
                            </button>
                            <button className="bg-black py-4 px-6 cursor-pointer hover:bg-neutral-700 transition-all duration-200">
                                <img src={arrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold">{img.title}</h1>
                        <p className="text-slate-600 opacity-75 font-medium">
                            {img.desc}
                        </p>
                        <button className="flex items-center gap-4 tracking-[.4rem] uppercase font-medium hover:text-neutral-500 transition duration-200 cursor-pointer">
                            Shop Now <img src={arrow} />
                        </button>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Hero;
