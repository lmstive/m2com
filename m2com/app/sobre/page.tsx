'use client';
import React from 'react';
import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-700/90 pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Sobre Nós</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Conheça a M2COM e nossa paixão por transformar negócios através do marketing digital.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                A M2COM nasceu da paixão por comunicação e marketing digital. Fundada em Cascavel - PR, 
                nossa agência tem como objetivo principal ajudar empresas a alcançarem seu potencial máximo no ambiente digital.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Desde nossa fundação, temos trabalhado com empresas de diversos segmentos, 
                entregando soluções personalizadas que geram resultados reais e mensuráveis.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe é formada por profissionais apaixonados por marketing digital, cada um especializado 
                em uma área estratégica, o que nos permite oferecer um serviço completo e de excelência.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 h-80 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-r from-indigo-500/10 to-indigo-700/10 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-indigo-500 opacity-70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-block bg-indigo-100 p-3 rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossa Missão</h3>
              <p className="text-lg text-gray-600">
                Transformar negócios através de estratégias digitais inovadoras, gerando resultados concretos e construindo relacionamentos de longo prazo com nossos clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-block bg-indigo-100 p-3 rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossa Visão</h3>
              <p className="text-lg text-gray-600">
                Ser reconhecida como a agência de marketing digital mais inovadora e eficiente da região, estabelecendo novos padrões de qualidade e resultados no mercado.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-block bg-indigo-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Qualidade</h4>
                <p className="text-gray-600">
                  Buscamos excelência em tudo o que fazemos, desde o atendimento até a entrega dos projetos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-block bg-indigo-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Inovação</h4>
                <p className="text-gray-600">
                  Estamos sempre à frente das tendências, buscando soluções criativas e inovadoras.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-block bg-indigo-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Parceria</h4>
                <p className="text-gray-600">
                  Trabalhamos em conjunto com nossos clientes, construindo relações de confiança.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-block bg-indigo-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Resultados</h4>
                <p className="text-gray-600">
                  Nosso foco principal é gerar resultados concretos e mensuráveis para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossa Equipe</h2>
            <p className="text-lg text-gray-600">
              Conheça os profissionais dedicados que fazem a diferença em cada projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-r from-indigo-400/20 to-indigo-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">João Silva</h3>
                <p className="text-indigo-600 mb-4">CEO & Estrategista Digital</p>
                <p className="text-gray-600">
                  Especialista em estratégias de marketing digital com mais de 10 anos de experiência no mercado.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-r from-indigo-400/20 to-indigo-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Maria Oliveira</h3>
                <p className="text-indigo-600 mb-4">Diretora de Design</p>
                <p className="text-gray-600">
                  Designer talentosa com olhar aguçado para estética e experiência do usuário.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-r from-indigo-400/20 to-indigo-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Carlos Santos</h3>
                <p className="text-indigo-600 mb-4">Especialista em SEO & Ads</p>
                <p className="text-gray-600">
                  Especialista em otimização para mecanismos de busca e campanhas de anúncios eficientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos construir algo incrível juntos</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Estamos prontos para ajudar a transformar seu negócio através do marketing digital. Entre em contato hoje mesmo.
          </p>
          <Link href="/contato" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-lg font-medium text-lg shadow-lg inline-flex items-center transition-colors">
            Entre em contato
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}