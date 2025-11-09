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

    <section class="project-intro">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="project-intro-title">Introdução</div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="project-intro-text">
                <h2 class="project-section-title">{{ project.introTitle }}</h2>
                <p v-for="(paragraph, index) in project.introDescription" :key="index" v-html="paragraph"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project-video">
      <div class="project-video-content">
        <video :src="project.introVideo" autoplay loop muted playsinline></video>
      </div>
    </section>

    <section class="project-gallery">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-lg-6 col-md-12" v-for="(image, index) in project.galleryImages.slice(0, 2)" :key="index">
            <div class="gallery-image" :style="{ backgroundImage: `url(${image})` }"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="project-details-dark">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="project-intro-title">Especial</div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="details-content">
              <h2 class="details-title">{{ project.detailsTitle }}</h2>
              <p class="details-description" v-html="project.detailsDescription"></p>
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="details-image" :style="{ backgroundImage: `url(${project.specialImage})` }"></div>
        </div>
      </div>
    </section>

    <section class="project-impact">
    </section>

    <section class="project-final-dark">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="final-content">
              <div class="final-content-title">Próximo Projeto</div>
              <div class="final-content-title-image">
                <h2 class="final-title">{{ project.nextProjectTitle }}</h2>
                <div class="final-image">
                  <div class="final-image-overlay" :style="{ backgroundImage: `url(${project.nextProjectImage})` }"></div>
                </div>
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
              <h2 class="lets-talk-title">Let's talk</h2>
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
  heroImage: '/images/cases-background-01.jpg',
  heroDescription: 'Imagine um lugar onde as mentes mais brilhantes e as empresas mais inovadoras da logística na América Latina se reúnem. Esse lugar é a Intermodal South America!',
  
  introTitle: 'Multilog Intermodal onde a logística da América Latina se encontra',
  introDescription: [
    'Na participação da <b>Multilog no Intermodal South America 2025</b>, o foco recai sobre a excelência e inovação em soluções logísticas. Com um estande projetado para representar o melhor da marca, a empresa apresentou suas capacidades tecnológicas avançadas em automação e eficiência logística, que abriram portas para novas conexões no setor.',
    'Destacou-se pelo ambiente impactante, atrações experienciais, atendimento personalizado e projeção da Multilog como Polo de experiência e inovação tecnológica.'
  ],
  introVideo: '/images/projects/sample/video.mp4',
  
  galleryImages: [
    '/images/case-folder-01.jpg',
    '/images/case-folder-02.jpg'
  ],
  
  detailsTitle: 'Gastronomia e Hospitalidade no Estande',
  detailsDescription: '<p>Além do design e da experiência visual, o estande da Multilog na Intermodal South America 2025 contou com uma seleção especial de comidas e bebidas. A proposta foi oferecer momentos de acolhimento e bem-estar, criando um ambiente mais descontraído para networking e conversas de negócios. </p><p> Drinks, cafés e petiscos cuidadosamente escolhidos ajudaram a valorizar a experiência dos visitantes, reforçando a hospitalidade da marca e tornando o estande um ponto de encontro agradável e memorável durante todo o evento.</p>',
  detailsImages: [
    '/images/case-folder-01.jpg',
    '/images/case-folder-02.jpg',
    '/images/case-folder-03.jpg'
  ],

  specialImage: '/images/projects/sample/01.jpg',
  impactTitle: 'Mover o mundo, conectar pessoas',
  impactDescription: 'Cada projeto da Multilog carrega a missão de integrar tecnologia e eficiência ao cotidiano da cadeia logística. Com sistemas de automação avançados, conectividade inovadora e um portfólio robusto de soluções, a empresa se consolida como uma referência indispensável no segmento logístico da América Latina.',
  impactImage: '/images/cases-background-02.jpg',
  
  nextProjectTitle: 'Bosch Service 2025',
  nextProjectImage: '/images/cases-background-03.jpg'
})
</script>

<style scoped>
.project-video {
  position: relative;
  padding-top: 40%;
  width: 100%;
  overflow: hidden;
  background-color: #FFF;
}

.project-video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.project-video-content video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-detail-page {
  background-color: transparent;
}

.project-intro-title {
  font-size: 35px;
  color: var(--color-yellow);
  margin: 0;
  line-height: 1.2;
  font-family: 'Antonio';
  text-transform: uppercase;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
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
  margin-bottom: 13%;
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

.project-intro {
  background-color: #FFF;
  padding: 100px 0;
}

.project-intro .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.project-section-title {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 1.2;
  font-family: var(--font-family);
  margin-bottom: 30px;
}

.project-intro-text {
  color: #000;
  font-size: 18px;
  line-height: 1.8;
  font-weight: var(--font-weight-regular);
}

.project-intro-text p {
  margin-bottom: 20px;
}

.project-gallery {
  background-color: #FFF;
  padding-bottom: 30px;
  padding-top: 30px;
}

.gallery-image {
  padding-top: 70%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: 30px
}

.project-details-dark {
  background-color: #1D1D1B;
  padding: 100px 0;
  padding-bottom: 0;
  margin-bottom: -40px;
}

.project-details-dark .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.details-content {
  margin-bottom: 60px;
}

.details-badge {
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  color: var(--color-yellow);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.details-title {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 700;
  color: #FFF;
  margin: 0 0 20px 0;
  line-height: 1.2;
  max-width: 800px;
}

.details-description {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0;
}

.details-image {
  width: 100%;
  padding-top: 14%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
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

  h2 {
    font-size: 19vw;
    font-weight: 700;
    color: #FFF;
    line-height: 1.2;
    margin: 0;
    opacity: 0.1;
    transition: all 0.6s ease;

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

@media (max-width: 768px) {
  .project-hero {
    height: 70vh;
    padding-bottom: 60px;
  }
  
  .project-hero-overlay {
    padding-bottom: 60px;
    padding-top: 140px;
    gap: 30px;
  }
  
  .project-hero-content-description {
    max-width: 50%;
  }
  
  .project-hero-content-data {
    gap: 40px;
  }
  
  .project-intro {
    padding: 60px 0;
  }
  
  .project-details-dark {
    padding: 60px 0;
  }
  
  .project-impact {
    padding: 60px 0;
  }
  
  .impact-content {
    padding: 40px 30px;
    min-height: auto;
  }
  
  .project-final-dark {
    padding: 60px 0;
  }
  
  .final-image {
    padding-top: 80%;
  }
  
  .gallery-image {
    padding-top: 100%;
  }
  
  .details-image {
    padding-top: 120%;
  }
}

@media (max-width: 576px) {
  .project-hero {
    height: auto;
    min-height: 100vh;
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
  
  .project-intro-text {
    font-size: 16px;
  }
  
  .details-description {
    font-size: 16px;
  }
  
  .impact-description {
    font-size: 16px;
  }
}
</style>
