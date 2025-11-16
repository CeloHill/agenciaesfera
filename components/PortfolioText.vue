<template>
  <section
    ref="sectionRef"
    class="portfolio-text"
    :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }"
    :style="{ paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px` }"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-12">
          <div class="portfolio-text-label" :class="{ 'label-top': labelTop }">{{ label }}</div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="portfolio-text-content">
            <h2 v-if="title" class="portfolio-text-title">{{ title }}</h2>
            <div class="portfolio-text-description" v-html="description"></div>
            <PortfolioLinks
              v-if="links && links.length"
              :title="linksTitle"
              :links="links"
              :description="linksDescription"
              :dark-mode="darkMode"
              class="portfolio-text-links"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioLinks from './PortfolioLinks.vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  darkMode: {
    type: Boolean,
    default: false
  },
  labelTop: {
    type: Boolean,
    default: false
  },
  links: {
    type: Array,
    default: null
  },
  linksTitle: {
    type: String,
    default: ''
  },
  linksDescription: {
    type: String,
    default: null
  },
  paddingTop: {
    type: Number,
    default: 100
  },
  paddingBottom: {
    type: Number,
    default: 100
  }
})

const sectionRef = ref(null)
</script>

<style scoped>
.portfolio-text {
  background-color: #FFF;
}

.portfolio-text.dark-mode {
  background-color: #1D1D1B;
}

.portfolio-text.light-mode {
  background-color: #FFF;
}

.portfolio-text .container-fluid {
  padding: 0 var(--body-horizontal-padding);
}

.portfolio-text-label {
  font-size: 35px;
  color: var(--color-yellow);
  margin: 0;
  line-height: 1.2;
  font-family: 'Antonio';
  text-transform: uppercase;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.portfolio-text-label.label-top {
  align-items: flex-start;
  text-align: center;
}

.portfolio-text-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.portfolio-text-title {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 1.2;
  font-family: var(--font-family);
  margin-bottom: 10px;
}

.portfolio-text.dark-mode .portfolio-text-title {
  color: #FFF;
}

.portfolio-text-description {
  font-size: 18px;
  line-height: 1.8;
  color: #000;
  font-weight: var(--font-weight-regular);
}

.portfolio-text.dark-mode .portfolio-text-description {
  color: rgba(255, 255, 255, 0.8);
}

.portfolio-text-description :deep(p) {
  margin-bottom: 20px;
}

@media (max-width: 992px) {
  .portfolio-text-label {
    height: initial;
    margin-bottom: 5vh;
  }

  .clean-area.light-mode {
    padding-top: 50% !important;
  }
}

@media (max-width: 576px) {
  .portfolio-text-description {
    font-size: 16px;
  }
}
</style>

