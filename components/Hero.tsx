
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://picsum.photos/1920/1080"
      >
        <source src="https://cdn.pixabay.com/video/2022/12/13/142815-780943566_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0A]/90 via-[#0A0F0A]/50 to-[#0A0F0A]/90" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2300FF88%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>


      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-[3.5rem] leading-[1.1] md:text-6xl font-bold text-[#E6FEEB] mb-6">
          <span className="gradient-text">Menos esforço</span>, mais resultado.
        </h1>
        <p className="text-xl md:text-2xl text-[#A3D9B3] mb-8 max-w-3xl">
          Transforme suas operações com Inteligência Artificial. Automatize o atendimento e impulsione o crescimento do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contato" className="bg-[#00FF88] hover:bg-[#00CC66] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Quero automatizar agora
          </a>
          <a href="#solucoes" className="border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Ver soluções
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
