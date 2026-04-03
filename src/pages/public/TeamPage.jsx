import React from 'react';
import { Linkedin, Github, Mail, GraduationCap, Code } from 'lucide-react';
import './TeamPage.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Arthur Jhonathas',
      role: 'Desenvolvedor Full Stack & Gestor de Arquitetura',
      bio: 'Foco no ecossistema de dados em nuvem, integração IoT e experiência em interfaces sensíveis ao contexto.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Arthur&backgroundColor=00f0ff',
      tag: 'Tech Lead'
    },
    {
      name: 'Anwar Quirino',
      role: 'Engenheiro de IoT & Hardware',
      bio: 'Especialista em hardware e IoT. Responsável pela parte de hardware do projeto.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Anwar&backgroundColor=00f0ff',
      tag: 'Hardware'
    },
    {
      name: 'Maycon Vinicius',
      role: 'Engenheiro de IoT & Hardware',
      bio: 'Especialista em firmware embarcado (ESP32) e protocolos de sensoriamento remoto estuarino.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Maycon&backgroundColor=ffaa00',
      tag: 'Hardware'
    },
    {
      name: 'Luiz Henrique',
      role: 'Pesquisador em Dados e Calibração',
      bio: 'Responsável matemático pela filtragem de ruídos do sensor de ph e mapeamento de turbidez profunda.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Luiz&backgroundColor=ff3b3b',
      tag: 'Data Science'
    },
    {
      name: 'Marcos Paulo',
      role: 'Engenheiro Mecatrônico de Campo',
      bio: 'Projeção estrutural das bóias flutuantes para resistir ao tráfego de canoas e maré do sistema.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Marcos&backgroundColor=00ff88',
      tag: 'Infraestrutura'
    },
    {
      name: 'Pedro Henrique',
      role: 'DevOps & Testes de Redundância',
      bio: 'Análise contínua das falhas MQTT e estruturação da persistência gráfica InfluxDB.',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Pedro&backgroundColor=8800ff',
      tag: 'Segurança'
    }

  ];

  return (
    <div className="public-page-container">
      <div className="team-header text-center mb-5">
        <h1 className="gradient-text mb-3">Pesquisadores do Projeto</h1>
        <p className="subtitle mx-auto" style={{ maxWidth: '700px' }}>
          Corpo acadêmico da <strong>Engenharia da Computação da UMJ</strong>. Uma equipe multidisciplinar unindo hardware, software e preservação ambiental.
        </p>
      </div>

      <div className="team-grid mt-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card glass animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="card-top-accent"></div>
            <div className="member-avatar">
               <img src={member.image} alt={member.name} />
            </div>
            
            <span className="member-tag">{member.tag}</span>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role text-primary mb-3">
              <Code size={14} className="mr-1"/> {member.role}
            </p>
            <p className="member-bio text-muted">{member.bio}</p>
            
            <div className="member-socials mt-4">
               <a href="#" className="social-btn"><Linkedin size={18}/></a>
               <a href="#" className="social-btn"><Github size={18}/></a>
               <a href="#" className="social-btn"><Mail size={18}/></a>
            </div>
          </div>
        ))}
      </div>

      <div className="umj-banner glass mt-5 text-center animate-fade-in">
        <GraduationCap size={48} color="var(--primary)" className="mb-3" />
        <h2>Um projeto nascido na Academia</h2>
        <p className="text-muted mt-2">
          Orgulhosamente desenvolvido pelos laboratórios do Centro Universitário Mário Pontes Jucá (UMJ). 
          Nosso compromisso é devolver o progresso tecnológico para nossa comunidade riberinha local.
        </p>
      </div>
    </div>
  );
};

export default TeamPage;
