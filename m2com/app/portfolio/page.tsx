'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  // State to track active category filter
  const [activeFilter, setActiveFilter] = useState('todos');

  // Portfolio project data
  const projects = [
    {
      id: 1,
      title: 'Redesign de Site para Empresa de Software',
      category: 'web-design',
      tags: ['Web Design', 'UI/UX', 'Responsivo'],
      excerpt: 'Redesign completo do site da empresa com foco em melhorar a usabilidade e aumentar conversões.',
    },
    {
      id: 2,
      title: 'Campanha de Marketing Digital para E-commerce',
      category: 'marketing-digital',
      tags: ['Google Ads', 'Facebook Ads', 'Analytics'],
      excerpt: 'Estratégia completa de marketing digital que gerou um aumento de 150% nas vendas online.',
    },
    {
      id: 3,
      title: 'Gestão de Redes Sociais para Restaurante',
      category: 'midias-sociais',
      tags: ['Instagram', 'Facebook', 'Criação de Conteúdo'],
      excerpt: 'Planejamento e execução de estratégia de conteúdo que aumentou o engajamento em 200%.',
    },
    {
      id: 4,
      title: 'Identidade Visual para Startup de Tecnologia',
      category: 'design-grafico',
      tags: ['Branding', 'Logo', 'Identidade Visual'],
      excerpt: 'Desenvolvimento completo da identidade visual, desde o logo até os materiais de comunicação.',
    },
    {
      id: 5,
      title: 'Otimização de SEO para Loja Virtual',
      category: 'seo',
      tags: ['SEO On-page', 'SEO Técnico', 'Link Building'],
      excerpt: 'Estratégia de SEO que resultou em um aumento de 80% no tráfego orgânico em 3 meses.',
    },
    {
      id: 6,
      title: 'Campanhas de Google Ads para Clínica Médica',
      category: 'google-ads',
      tags: ['Google Ads', 'Remarketing', 'Conversões'],
      excerpt: 'Gestão de campanhas de Google Ads que reduziu o custo por aquisição em 40%.',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Categories for filter
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'marketing-digital', label: 'Marketing Digital' },
    { id: 'midias-sociais', label: 'Mídias Sociais' },
    { id: 'design-grafico', label: 'Design Gráfico' },
    { id: 'seo', label: 'SEO' },
    { id: 'google-ads', label: 'Google Ads' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-700/90 pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Nosso Portfólio</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com dedicação e resultados comprovados.
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Menu */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-indigo-700/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-indigo-500 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{project.excerpt}</p>
                  <Link href={`/portfolio/${project.id}`} className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                    Ver detalhes
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-gray-600">
              A opinião dos nossos clientes é o melhor testemunho da qualidade do nosso trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-8 bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "A equipe da M2COM transformou completamente nossa presença digital. Desde a implementação da estratégia de marketing, vimos um aumento significativo nas vendas."
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Paula</h4>
                    <p className="text-sm text-gray-600">E-commerce de Moda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-8 bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "O redesign do nosso site feito pela M2COM superou todas as nossas expectativas. A nova identidade visual e a usabilidade melhorada trouxeram excelentes resultados."
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Marcos Ribeiro</h4>
                    <p className="text-sm text-gray-600">Empresa de Software</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-8 bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "As campanhas de Google Ads gerenciadas pela M2COM transformaram nosso negócio. Conseguimos atingir um público muito mais qualificado e aumentar nossas vendas."
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Carla Mendes</h4>
                    <p className="text-sm text-gray-600">Clínica Estética</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos no seu próximo projeto</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Conte-nos sobre seu projeto e descubra como podemos ajudar a transformar suas ideias em resultados.
          </p>
          <Link href="/contato" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-lg font-medium text-lg shadow-lg inline-flex items-center transition-colors">
            Iniciar um projeto
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}