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
                    <h2 class="header-subtitle">Paixão por fazer <div class="header-dot"></div></h2>
                    <h1 class="header-title">Portfolio</h1>
                  </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12">
                  <div class="header-filters">
                    <button class="filter-btn">tipo de projeto</button>
                    <button class="filter-btn">setor do cliente</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects Grid -->
          <section class="projects-grid-section">
            <div class="projects-grid">
              <div class="row">
                <!-- Project Card 1 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">Multilog Intermodal 2025</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>
                </div>

                <!-- Project Card 2 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">M&T Expo 2024</h3>
                      <p class="project-client">John Deere e Wingen Group</p>
                    </div>
                  </div>
                </div>

                <!-- Project Card 3 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">Intermodal South America 2024</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>
                </div>

                <!-- Project Card 4 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">Agrishow 2024</h3>
                      <p class="project-client">John Deere</p>
                    </div>
                  </div>
                </div>

                <!-- Project Card 5 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">M&T Expo 2024</h3>
                      <p class="project-client">John Deere e Wirtaen Group</p>
                    </div>
                  </div>
                </div>

                <!-- Project Card 6 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="project-card">
                    <div class="project-image">
                      <div class="image-placeholder"></div>
                    </div>
                    <div class="project-info">
                      <h3 class="project-title">Intermodal South America 2024</h3>
                      <p class="project-client">John Deere</p>
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
  min-height: 100vh;
  background-color: #F5F5F5;
}

/* Header Section */
.projects-header {
  background-color: #F5F5F5;
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
  color: #1D1D1B;
  margin: 0;
  padding-left: 6px;
}

.header-title {
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 1.1;
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
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
}

.filter-btn:hover {
  color: #000;
}

/* Projects Grid Section */
.projects-grid-section {
  background-color: #F5F5F5;
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
  border-radius: 12px;
  padding-top: 130%;
  background-color: #A9ACB5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  font-weight: 400;
}

.project-info {
  padding: 20px 0px 35px;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0 0 2px 0;
  line-height: 1.3;
}

.project-client {
  font-size: 16px;
  font-weight: 400;
  color: #A9ACB5;
  margin: 0;
}

/* Responsividade Bootstrap */
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
