import React from 'react';
import imgDark from '../images/image-about-dark.jpg';
import imgLight from '../images/image-about-light.jpg';

const About = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3">
            <article>
                <img src={imgDark} alt="image-about-dark" className="w-full" />
            </article>

            <div className="p-8  lg:pt-12 lg:pb-0 ">
                <h2 className="font-bold text-2xl tracking-[.3rem] uppercase mb-5 lg:text-3xl">
                    About Our Furniture
                </h2>
                <p className="text-slate-600 opacity-75 font-medium">
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </div>
            <article>
                <img
                    src={imgLight}
                    alt="image-about-light"
                    className="w-full"
                />
            </article>
        </section>
    );
};

export default About;
