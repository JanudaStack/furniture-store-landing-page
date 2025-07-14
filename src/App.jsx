import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
        </main>
    );
};

export default App;
