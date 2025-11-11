<template>
  <section class="portfolio-links" :class="{ 'dark-mode': darkMode }">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="links-content">
            <h2 v-if="title" class="links-title">{{ title }}</h2>
            <p v-if="description" class="links-description">{{ description }}</p>
            <div class="links-list">
              <a 
                v-for="(link, index) in links" 
                :key="index"
                :href="link.url"
                class="link-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="link-text">{{ link.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: null
  },
  links: {
    type: Array,
    required: true
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.portfolio-links {
  background-color: #FFF;
  color: #000;
}

.portfolio-links .container-fluid {
  padding: 0;
}

.links-content {
  max-width: 1000px;
  margin: 0 auto;
}

.links-title {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 700;
  color: #000;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.links-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 40px 0;
}

.links-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.link-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.link-item:hover {
  color: var(--color-yellow);
  padding-left: 20px;
}

.link-text {
  font-size: inherit;
  font-weight: inherit;
}

@media (max-width: 768px) {
  .portfolio-links {
    padding: 40px 0 0;
  }
  
  .link-item {
    padding: 24px 0;
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .links-description {
    font-size: 16px;
  }
  
  .link-item {
    font-size: 18px;
  }

  .link-item:hover {
    padding-left: 10px;
  }
}

.portfolio-links.dark-mode {
  background-color: transparent;
  color: #FFF;
}

.portfolio-links.dark-mode .links-title {
  color: #FFF;
}

.portfolio-links.dark-mode .links-description {
  color: rgba(255, 255, 255, 0.8);
}

.portfolio-links.dark-mode .links-list {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.portfolio-links.dark-mode .link-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFF;
}

.portfolio-links.dark-mode .link-item:hover {
  color: var(--color-yellow);
}
</style>


