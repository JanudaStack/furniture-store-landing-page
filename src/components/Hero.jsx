import React, { useState } from 'react';
import { imgSlider } from '../../constants';
import arrow from '../images/icon-arrow.svg';
import arrowLeft from '../images/icon-angle-left.svg';
import arrowRight from '../images/icon-angle-right.svg';

import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('#title', { type: 'chars, words' });
        const paraSplit = new SplitText('#title-desc', { type: 'lines' });

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.03,
        });

        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: 1,
        });

        gsap.fromTo(
            '#shop-btn',
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                opacity: 1,
                duration: 1,
                ease: 'power1.in',
                delay: 1.1,
            }
        );
    });

    const [data] = useState(imgSlider);
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === data.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(data.length);
        }
    };

    return (
        <section className="site-hero">
            {imgSlider.map((img, index) => (
                <article
                    key={img.id}
                    className={
                        slideIndex === index + 1
                            ? 'grid grid-cols-1 lg:grid-cols-2 lg:place-items-center'
                            : 'hidden'
                    }
                >
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
                            <button
                                onClick={prevSlide}
                                className="bg-black py-4 px-6 cursor-pointer hover:bg-neutral-700 transition-all duration-200"
                            >
                                <img src={arrowLeft} alt="arrow-left" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-black py-4 px-6 cursor-pointer hover:bg-neutral-700 transition-all duration-200"
                            >
                                <img src={arrowRight} alt="arrow-right" />
                            </button>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold" id="title">
                            {img.title}
                        </h1>
                        <p
                            className="text-slate-600 opacity-75 font-medium"
                            id="title-desc"
                        >
                            {img.desc}
                        </p>
                        <button
                            id="shop-btn"
                            className="flex items-center gap-4 tracking-[.4rem] uppercase font-medium hover:text-neutral-500 transition duration-200 cursor-pointer"
                        >
                            Shop Now <img src={arrow} />
                        </button>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Hero;
