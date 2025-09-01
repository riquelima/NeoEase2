
import React from 'react';

const services = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00FF88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: "Automação de WhatsApp com IA",
        description: "Atendimento 24/7, qualificação de leads e agendamentos automáticos, liberando sua equipe para focar no que realmente importa."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00FF88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636L4.222 4.222m15.556 0L18.364 4.222m0 15.556l1.414 1.414M4.222 19.778l1.414-1.414M12 12a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
        ),
        title: "Otimização de Processos",
        description: "Identificamos gargalos e implementamos IAs para automatizar tarefas repetitivas, aumentando a eficiência e reduzindo custos operacionais."
    },
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00FF88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
        title: "Análise de Dados Inteligente",
        description: "Transforme dados brutos em insights valiosos. Nossas IAs analisam padrões de comportamento do cliente para prever tendências e otimizar estratégias."
    }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-[#111A11]/95 border border-[#1F3325] rounded-xl p-8 transition-all duration-300 hover:border-[#00FF88] hover:shadow-2xl hover:shadow-[#00FF88]/10 transform hover:-translate-y-2">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl md:text-2xl font-semibold text-[#E6FEEB] mb-4">{title}</h3>
        <p className="text-[#A3D9B3] text-base leading-relaxed">{description}</p>
    </div>
);


const Services: React.FC = () => {
    return (
        <section id="solucoes" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-[1.2] text-[#E6FEEB]">Soluções de IA para <span className="gradient-text">Elevar seu Negócio</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-[#A3D9B3]">Integramos inteligência artificial de ponta para resolver problemas reais e gerar resultados mensuráveis.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
