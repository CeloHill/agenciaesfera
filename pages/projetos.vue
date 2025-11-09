<template>
  <div class="projects-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- Header Section -->
          <section class="projects-header">
            <div class="header-content">
              <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-12">
                  <div class="header-left">
                    <h1 class="header-title">Portfolio <span class="header-subtitle">Paixão por fazer</span></h1>
                  </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12">
                  <div class="header-filters">
                    <button class="filter-btn active">Tudo</button>
                    <button class="filter-btn">Portfólio <span class="filter-btn-count">15</span></button>
                    <button class="filter-btn">Cases <span class="filter-btn-count">8</span></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects Grid -->
          <section class="projects-grid-section">
            <div class="projects-grid">
              <div class="row">
                <div class="col-12">
                  <!-- Project Card 1 -->
                  <div class="project-card" style="background-image: url('/images/cases-background-01.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">Multilog Intermodal 2025</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>

                <!-- Project Card 2 -->
                  <div class="project-card" style="background-image: url('/images/cases-background-02.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">M&T Expo 2024</h3>
                      <p class="project-client">John Deere e Wingen Group</p>
                    </div>
                  </div>

                <!-- Project Card 3 -->
                  <div class="project-card" style="background-image: url('/images/cases-background-03.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">Intermodal South America 2024</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>

                <!-- Project Card 4 -->
                <div class="col-12">
                  <div class="project-card" style="background-image: url('/images/cases-background-01.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">Agrishow 2024</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>

                <!-- Project Card 5 -->
                  <div class="project-card" style="background-image: url('/images/cases-background-02.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">M&T Expo 2024</h3>
                      <p class="project-client">John Deere e Wirtaen Group</p>
                    </div>
                  </div>

                <!-- Project Card 6 -->
                  <div class="project-card" style="background-image: url('/images/cases-background-03.jpg');">
                    <div class="project-info">
                      <h3 class="project-title">Intermodal South America 2024</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.projects-page {
  min-height: 80vh;
  background-color: transparent;
}

/* Header Section */
.projects-header {
  background-color: transparent;
  padding: 200px 0 50px 0;
  width: 100%;
}

.header-content {
  width: 100%;
  padding: 0 var(--body-horizontal-padding);
}

.header-content .row {
  align-items: flex-end;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-yellow);
  border-radius: 50%;
  display: inline-block;
  transform: translate(-2px, -8px);
}

.header-subtitle {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-yellow);
  margin: 0;
  padding-left: 6px;
  font-family: var(--font-family);
  text-transform:initial;
}

.header-title {
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 700;
  color: #FFF;
  margin: 0;
  line-height: 1.1;
  font-family: 'Antonio';
  text-transform: uppercase;
}

.header-filters {
  display: flex;
  gap: 30px;
  justify-content: flex-end;
}

.filter-btn {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  
  &.active {
    color: var(--color-yellow);

    &::before {
      content: '';
      position: absolute;
      bottom: -5px;
      left: -10px;
      width: calc(100% + 20px);
      height: 1px;
      background-color: var(--color-yellow);
    }
  }
}

.filter-btn:hover {
  color: #FFF;
}

.filter-btn-count {
  font-size: 11px;
  color: var(--color-yellow);
  margin-left: 5px;
  padding-bottom: 0;
  float: right;
  margin-top: -3px;
}

.filter-btn:hover .filter-btn-count {
  color: #999;
}

/* Projects Grid Section */
.projects-grid-section {
  background-color: transparent;
  padding-bottom: 80px;
}

.projects-grid {
  width: 100%;
  padding: 0 var(--body-horizontal-padding);
}

/* .projects-grid .row {
  margin: 0;
}

.projects-grid .row > [class*="col-"] {
  padding: 0;
} */

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 33%;
  float: left;
  background-color: #A9ACB5;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  padding-top: 28%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  padding-top: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  font-weight: 400;
}

.project-info {
  padding: 20px 25px 25px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  color: #FFF;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.project-client {
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  opacity: 0.7;
  margin: 0;
}

@media (max-width: 992px) {
  .project-card {
    width: 50%;
    padding-top: 40%;
  }
}

@media (max-width: 768px) {
  .projects-header {
    padding: 150px 0 60px 0;
  }
  
  .header-content .row {
    align-items: flex-start;
  }
  
  .header-filters {
    justify-content: flex-start;
    gap: 20px;
    margin-top: 30px;
  }
  
  .projects-grid .row > [class*="col-"] {
    padding: 10px;
  }
  
  .project-title {
    font-size: 18px;
  }
  
  .project-client {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .project-card {
    width: 100%;
    padding-top: 70%;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 36px;
  }
  
  .header-subtitle {
    font-size: 16px;
  }
  
  .filter-btn {
    font-size: 14px;
  }
  
  .project-title {
    font-size: 16px;
  }
  
  .project-client {
    font-size: 13px;
  }
}
</style>
