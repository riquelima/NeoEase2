
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico e Estratégia",
    description: "Analisamos suas necessidades e processos atuais para desenhar uma solução de IA sob medida para seus desafios."
  },
  {
    number: "02",
    title: "Implementação e Integração",
    description: "Nossa equipe técnica implementa a solução e a integra perfeitamente com suas ferramentas existentes, como o WhatsApp."
  },
  {
    number: "03",
    title: "Treinamento e Otimização",
    description: "Treinamos a IA com seus dados e acompanhamos os resultados iniciais para otimizar a performance e garantir a máxima eficiência."
  },
  {
    number: "04",
    title: "Suporte e Evolução",
    description: "Oferecemos suporte contínuo e monitoramos a solução para garantir que ela evolua junto com o seu negócio."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 sm:py-32 bg-[#111A11]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-[1.2] text-[#E6FEEB]">Seu Sucesso em <span className="gradient-text">4 Passos Simples</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#A3D9B3]">Nosso processo é transparente e focado em entregar valor rapidamente.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#1F3325] -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00FF88]/10 to-[#00CC66]/10 border-2 border-[#1F3325]">
                    <span className="text-2xl font-bold text-[#00FF88]">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#E6FEEB] mb-2">{step.title}</h3>
                <p className="text-[#A3D9B3] text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
