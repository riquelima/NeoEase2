
import React, { useState, useEffect } from 'react';

const NeoEaseLogo = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.62 31.42L0 17.8L13.62 4.18L19.44 10L11.52 17.8L19.44 25.6L13.62 31.42Z" fill="#00FF88"/>
        <path d="M22.34 31.42V4.18L39.86 17.8L22.34 31.42ZM28.16 23.44L31.7 17.8L28.16 12.16V23.44Z" fill="#00CC66"/>
        <text x="48" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#E6FEEB">
            NeoEase
        </text>
    </svg>
);


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Soluções', href: '#solucoes' },
        { name: 'Como Funciona', href: '#como-funciona' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0F0A]/95 backdrop-blur-sm border-b border-[#1F3325]' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center">
                    <NeoEaseLogo />
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-[#A3D9B3] hover:text-[#00FF88] transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <a href="#contato" className="hidden md:inline-block bg-[#00FF88] hover:bg-[#00CC66] text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Começar Projeto
                </a>
                <div className="md:hidden">
                    <button className="text-[#E6FEEB]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
