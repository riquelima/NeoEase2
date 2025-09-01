
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (name && company && email && message) {
            console.log({ name, company, email, message });
            setStatus('success');
            setName('');
            setCompany('');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };
    
    return (
        <section id="contato" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-[1.2] text-[#E6FEEB]">
                            Pronto para <span className="gradient-text">transformar</span> seu negócio?
                        </h2>
                        <p className="mt-4 text-lg text-[#A3D9B3]">
                            Deixe-nos saber sobre seu desafio. Preencha o formulário e um de nossos especialistas entrará em contato para agendar uma demonstração gratuita e sem compromisso.
                        </p>
                         <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00FF88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span className="text-[#A3D9B3]">contato@neoease.com</span>
                            </div>
                         </div>
                    </div>
                    <div className="bg-[#111A11]/95 border border-[#1F3325] rounded-xl p-8 shadow-2xl shadow-[#00FF88]/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#A3D9B3]">Nome Completo</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full bg-[#0A0F0A] border border-[#1F3325] rounded-md py-3 px-4 text-[#E6FEEB] focus:ring-[#00FF88] focus:border-[#00FF88] transition" required />
                            </div>
                             <div>
                                <label htmlFor="company" className="block text-sm font-medium text-[#A3D9B3]">Empresa</label>
                                <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} className="mt-1 block w-full bg-[#0A0F0A] border border-[#1F3325] rounded-md py-3 px-4 text-[#E6FEEB] focus:ring-[#00FF88] focus:border-[#00FF88] transition" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#A3D9B3]">Seu Melhor E-mail</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full bg-[#0A0F0A] border border-[#1F3325] rounded-md py-3 px-4 text-[#E6FEEB] focus:ring-[#00FF88] focus:border-[#00FF88] transition" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#A3D9B3]">Sua Mensagem</label>
                                <textarea id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full bg-[#0A0F0A] border border-[#1F3325] rounded-md py-3 px-4 text-[#E6FEEB] focus:ring-[#00FF88] focus:border-[#00FF88] transition" required></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#00FF88] hover:bg-[#00CC66] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </div>
                             {status === 'success' && <p className="text-center text-[#00FF88]">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
                             {status === 'error' && <p className="text-center text-[#FFD166]">Ocorreu um erro. Por favor, tente novamente.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
