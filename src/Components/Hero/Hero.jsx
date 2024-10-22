import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const titles = ["Software Engineer", "Full Stack Developer", "Java Developer"];

    useEffect(() => {
        const type = () => {
            if (charIndex < titles[index].length && !isDeleting) {
                setCurrentText(titles[index].substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (charIndex > 0 && isDeleting) {
                setCurrentText(titles[index].substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }

            if (charIndex === titles[index].length && !isDeleting) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((index + 1) % titles.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(type, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index, titles]);

    return (
        <div className="hero">
            <h1 className="hero-name">SRIJA BANDLAMUDI</h1>
            <h2 className="hero-title">
                {currentText}
                <span className="cursor">|</span>
            </h2>

            <div className="hero-action">
                <button className="hero-cv"><a href="#Experience">Resume</a></button>
                <button className="hero-contact"><a href="#Contact">Contact Me</a></button>
            </div>
        </div>
    );
};

export default Hero;
