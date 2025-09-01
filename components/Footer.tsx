
import React from 'react';

const NeoEaseLogo = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.62 31.42L0 17.8L13.62 4.18L19.44 10L11.52 17.8L19.44 25.6L13.62 31.42Z" fill="#00FF88"/>
        <path d="M22.34 31.42V4.18L39.86 17.8L22.34 31.42ZM28.16 23.44L31.7 17.8L28.16 12.16V23.44Z" fill="#00CC66"/>
        <text x="48" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#E6FEEB">
            NeoEase
        </text>
    </svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111A11]/50 border-t border-[#1F3325]">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
                    <div>
                        <a href="#" className="inline-block mb-4">
                            <NeoEaseLogo />
                        </a>
                        <p className="max-w-xs text-[#A3D9B3]">Menos esforço, mais resultado. Com IA, tudo é possível.</p>
                    </div>

                    <div className="text-[#A3D9B3]">
                        <p>&copy; {new Date().getFullYear()} NeoEase. Todos os direitos reservados.</p>
                        <p className="text-sm">Inovação e tecnologia para o seu sucesso.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
