<template>
  <div class="project-detail-page">
    <section class="project-hero" :style="{ backgroundImage: `url(${project.heroImage})` }">
      <div class="project-hero-overlay">
        <div class="project-hero-content-main">
          <div class="project-badge">PORTFOLIO</div>
          <h1 class="project-hero-title">{{ project.title }}</h1>
          <p class="project-hero-subtitle">{{ project.subtitle }}</p>
        </div>
        
        <div class="project-hero-content-description">
          <p>{{ project.heroDescription }}</p>
        </div>
        
        <div class="project-hero-content-data">
          <div class="data-item">
            <div class="data-label">Cliente</div>
            <div class="data-value">{{ project.client }}</div>
          </div>
          <div class="data-item">
            <div class="data-label">Ano</div>
            <div class="data-value">{{ project.year }}</div>
          </div>
          <div class="data-item">
            <div class="data-label">Setor</div>
            <div class="data-value">{{ project.sector }}</div>
          </div>
        </div>
      </div>
    </section>

    <PortfolioText 
      label="Introdução"
      :title="project.introTitle"
      :description="project.introDescription"
    />

    <PortfolioVideo :video-src="project.introVideo" />

    <PortfolioImages :images="project.galleryImages" />

    <PortfolioText 
      label="Especial"
      :title="project.detailsTitle"
      :description="project.detailsDescription"
      :dark-mode="true"
      padding-bottom="0"
    />

    <PortfolioImage 
      :image="project.specialImage"
      :dark-mode="true"
    />

    <section class="project-final-dark">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="final-content">
              <div class="final-content-title">Próximo Projeto</div>
              <div class="final-content-title-image">
                <NuxtLink to="/projeto2" class="final-title">{{ project.nextProjectTitle }}</NuxtLink>
                <NuxtLink to="/projeto2" class="final-image">
                  <div class="final-image-overlay" :style="{ backgroundImage: `url(${project.nextProjectImage})` }"></div>
                </NuxtLink>
              </div>
              <div class="final-content-button">
                <NuxtLink to="/projetos" class="back-button">ver todos</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="project-lets-talk">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="lets-talk-content">
              <NuxtLink to="/contatos" class="lets-talk-title">Let's talk</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const project = ref({
  title: 'Multilog',
  subtitle: 'Intermodal 25',
  sector: 'Automotivo e Industrial',
  year: '2025',
  client: 'Multilog',
  heroImage: '/images/projects/sample/cover4.jpg',
  heroDescription: 'Imagine um lugar onde as mentes mais brilhantes e as empresas mais inovadoras da logística na América Latina se reúnem. Esse lugar é a Intermodal South America!',
  
  introTitle: 'Multilog Intermodal onde a logística da América Latina se encontra',
  introDescription: '<p>Na participação da <b>Multilog no Intermodal South America 2025</b>, o foco recai sobre a excelência e inovação em soluções logísticas. Com um estande projetado para representar o melhor da marca, a empresa apresentou suas capacidades tecnológicas avançadas em automação e eficiência logística, que abriram portas para novas conexões no setor.</p><p>Destacou-se pelo ambiente impactante, atrações experienciais, atendimento personalizado e projeção da Multilog como Polo de experiência e inovação tecnológica.</p>',
  introVideo: '/images/projects/sample/video.mp4',
  
  challengeTitle: 'socioeducativo',
  challengeDescription: '<p>Em sua essência, o Agrinho é um projeto de interesse público, sem fins comerciais, que busca impactar positivamente estudantes, famílias e educadores da rede básica. Por meio de atividades como redações, desenhos e projetos educativos, o programa estimula a conscientização sobre a importância do agronegócio e valoriza práticas agrícolas sustentáveis, a preservação ambiental e o empreendedorismo social.</p><p>Em 2024, a edição trouxe como tema “Do campo à cidade, colhendo oportunidades”, convidando os participantes a refletirem sobre inovação, sustentabilidade e novas formas de empreender. Os pilares trabalhados foram:</p>',
  challengeLinks: [
    { text: 'Estímulo à inovação e criatividade', url: 'https://www.google.com' },
    { text: 'Fomento ao espírito empreendedor', url: 'https://www.google.com' },
    { text: 'Conscientização sobre sustentabilidade', url: 'https://www.google.com' },
    { text: 'Incentivo ao empreendedorismo social', url: 'https://www.google.com' }
  ],
  
  galleryImages: [
    '/images/case-folder-01.jpg',
    '/images/case-folder-02.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg',
    '/images/case-folder-03.jpg'
  ],
  
  detailsTitle: 'Gastronomia e Hospitalidade no Estande',
  detailsDescription: '<p>Além do design e da experiência visual, o estande da Multilog na Intermodal South America 2025 contou com uma seleção especial de comidas e bebidas. A proposta foi oferecer momentos de acolhimento e bem-estar, criando um ambiente mais descontraído para networking e conversas de negócios. </p><p> Drinks, cafés e petiscos cuidadosamente escolhidos ajudaram a valorizar a experiência dos visitantes, reforçando a hospitalidade da marca e tornando o estande um ponto de encontro agradável e memorável durante todo o evento.</p>',
  detailsImages: [
    '/images/case-folder-01.jpg',
    '/images/case-folder-02.jpg',
    '/images/case-folder-03.jpg'
  ],

  eventTitle: 'Mais que um evento',
  eventDescription: 'O Agrinho 2024 mostrou, mais uma vez, que quando se unem educação, criatividade e propósito social, é possível cultivar oportunidades que ultrapassam os limites de um único evento. Cada estudante envolvido leva consigo aprendizados que inspiram não apenas sua própria trajetória, mas também a transformação de toda a comunidade em que vive.',
  eventImage: '/images/projects/sample/02.jpg',

  specialImage: '/images/projects/sample/01.jpg',
  impactTitle: 'Mover o mundo, conectar pessoas',
  impactDescription: 'Cada projeto da Multilog carrega a missão de integrar tecnologia e eficiência ao cotidiano da cadeia logística. Com sistemas de automação avançados, conectividade inovadora e um portfólio robusto de soluções, a empresa se consolida como uma referência indispensável no segmento logístico da América Latina.',
  impactImage: '/images/cases-background-02.jpg',
  
  nextProjectTitle: 'Agrinho 2024',
  nextProjectImage: '/images/projects/sample/cover5.jpg',
  nextProjectLink: '/projeto2',
  
  featureCards: [
    {
      image: '/images/case-folder-01.jpg',
      title: 'Ligue os Pontos',
      description: 'Dois grandes murais conectavam, de forma literal e simbólica, o campo e a cidade. Os fios coloridos criados pelas crianças formavam uma instalação visual coletiva e impactante.',
      links: [
        { text: 'Ver mais', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-02.jpg',
      title: 'Game Pac-Man Sustentável',
      description: 'Em uma versão personalizada do clássico jogo, os participantes coletavam moedas e aprendiam conceitos de sustentabilidade financeira.',
      links: [
        { text: 'Saiba mais', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-03.jpg',
      title: 'Túnel do Desafio',
      description: 'A entrada da plenária se transformou em um percurso com obstáculos divertidos, com cordas e espumas, transmitindo a mensagem de autonomia e superação.',
      links: [
        { text: 'Explorar', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-01.jpg',
      title: 'Workshop de Robótica',
      description: 'Espaço interativo onde estudantes puderam programar e controlar robôs, desenvolvendo habilidades técnicas e criativas em um ambiente lúdico e educativo.',
      links: [
        { text: 'Ver detalhes', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-02.jpg',
      title: 'Feira de Ciências',
      description: 'Exposição de projetos científicos desenvolvidos por alunos, mostrando inovação e aplicação prática dos conhecimentos adquiridos em sala de aula.',
      links: [
        { text: 'Conhecer projetos', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-03.jpg',
      title: 'Palco de Apresentações',
      description: 'Espaço dedicado para apresentações artísticas e culturais, onde estudantes compartilharam talentos e expressaram criatividade através de música, dança e teatro.',
      links: [
        { text: 'Assistir', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-01.jpg',
      title: 'Área de Networking',
      description: 'Ambiente descontraído para troca de experiências entre educadores, estudantes e profissionais do agronegócio, promovendo conexões e parcerias.',
      links: [
        { text: 'Participar', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-02.jpg',
      title: 'Exposição de Tecnologia',
      description: 'Mostra de equipamentos e soluções tecnológicas aplicadas ao campo, demonstrando como a inovação transforma a agricultura moderna.',
      links: [
        { text: 'Explorar tecnologia', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-03.jpg',
      title: 'Espaço de Leitura',
      description: 'Cantinho acolhedor com livros e materiais educativos sobre sustentabilidade e agronegócio, incentivando o hábito da leitura e o aprendizado contínuo.',
      links: [
        { text: 'Ver acervo', url: 'https://www.google.com' }
      ]
    },
    {
      image: '/images/case-folder-01.jpg',
      title: 'Atividades Práticas',
      description: 'Oficinas hands-on onde participantes puderam colocar a mão na massa, plantando, colhendo e aprendendo sobre práticas agrícolas sustentáveis.',
      links: [
        { text: 'Inscrever-se', url: 'https://www.google.com' }
      ]
    }
  ]
})
</script>

<style scoped>
.project-detail-page {
  background-color: transparent;
}

.project-hero {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 var(--body-horizontal-padding);
  padding-bottom: 80px;
}

.project-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 var(--body-horizontal-padding);
  padding-top: 180px;
  padding-bottom: 80px;
}

.project-hero-content-main {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.project-hero-content-description {
  position: relative;
  z-index: 2;
  max-width: 30%;
  
  p {
    font-size: 18px;
    line-height: 1.6;
    color: #FFF;
    margin: 0;
    font-weight: var(--font-weight-regular);
  }
}

.project-hero-content-data {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 80px;
  margin-bottom: 5%;
}

.data-item {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.data-label {
  font-size: 17px;
  font-weight: var(--font-weight-regular);
  color: #FFFFFF;
  font-weight: 700;
}

.data-value {
  font-size: 20px;
  color: #FFFFFF;
}

.project-badge {
  font-size: 20px;
  font-weight: var(--font-weight-medium);
  color: var(--color-yellow);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  border-radius: 20px;
  font-family: 'Antonio';
}

.project-hero-title {
  font-size: clamp(50px, 8vw, 90px);
  font-weight: 700;
  color: #FFF;
  margin: 0 0 10px 0;
  line-height: 1.1;
}

.project-hero-subtitle {
  font-size: clamp(20px, 3vw, 40px);
  font-weight: 300;
  color: #FFF;
  margin: 0;
  line-height: 1.2;
  opacity: 0.7;
}


.project-impact {
  background-color: #FFF;
  height: 500px;
}

.impact-image {
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
}

.impact-content {
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
}

.impact-title {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 700;
  color: #000;
  margin: 0 0 30px 0;
  line-height: 1.2;
}

.impact-description {
  font-size: 18px;
  line-height: 1.8;
  color: #000;
}

.project-final-dark {
  background-color: #1D1D1B;
  padding: 100px 0;
  padding-bottom: 0;
}

.project-lets-talk {
  background-color: #1D1D1B;
  text-align: center;
  color: #FFF;
  font-family: 'Antonio';
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: -45px;

  h2,
  .lets-talk-title {
    font-size: 19vw;
    font-weight: 700;
    color: #FFF;
    line-height: 1.2;
    margin: 0;
    opacity: 0.1;
    transition: all 0.6s ease;
    text-decoration: none;
    display: block;

    &:hover {
      opacity: 1;
      transform: translate(10px, -10px);
    }
  }
}

.project-final-dark .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.final-content {
  text-align: center;

  &:hover {
    .final-image-overlay {
      bottom: 0;
    }

    .final-title {
      font-size: 90px;
      opacity: 0.5;
      transform: translateY(-40px);
    }
  }
}

.final-content-title {
  font-size: 20px;
  font-weight: 300;
  color: #FFF;
  margin: 0 0 20px 0;
  line-height: 1.2;
  margin-bottom: 60px;
}

.final-content-title-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  position: relative;
}

.final-title {
  font-size: 60px;
  font-weight: 700;
  color: #FFF;
  line-height: 1.2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: all 0.5s ease;
  text-decoration: none;
}

.final-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  text-decoration: none;
}

.final-image-overlay {
  left: 0;
  width: 500px;
  padding-top: 20%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease;
  bottom: -170px;
}

.final-content-button {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  border-top: 1px solid #363B46;
}

.back-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: transparent;
  color: #FFF;
  text-decoration: none;
  border: 1px solid #FFF;
  border-radius: 30px;
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: var(--color-yellow);
  border-color: var(--color-yellow);
  color: #000;
}

@media (max-width: 1200px) {
  .project-hero-content-description {
    max-width: 40%;
  }
}

@media (max-width: 992px) {
  .project-hero-content-description {
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .project-hero {
    height: 70vh;
    padding-bottom: 60px;
  }

  .project-hero-overlay {
    padding-bottom: 60px;
    padding-top: 140px;
    gap: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .project-hero-content-description {
    max-width: 80%;
  }
  
  .project-hero-content-data {
    gap: 40px;
  }
  
  .project-impact {
    padding: 60px 0;
  }
  
  .project-final-dark {
    padding: 60px 0;
  }
}

@media (max-width: 576px) {
  .project-hero {
    min-height: 80vh;
    padding-bottom: 40px;
  }
  
  .project-hero-overlay {
    padding-bottom: 40px;
    padding-top: 120px;
    gap: 40px;
  }
  
  .project-hero-content-description {
    max-width: 100%;
    
    p {
      font-size: 16px;
    }
  }
  
  .project-hero-content-data {
    flex-direction: column;
    gap: 25px;
  }
  
  .project-badge {
    font-size: 16px;
  }
}
</style>
