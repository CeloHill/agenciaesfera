<template>
  <section class="portfolio-image-text" :class="{ 'dark-mode': darkMode }">
    <div class="container-fluid">
      <div class="row align-items-center gx-4 gx-lg-5">
        <div class="col-xl-7 col-lg-6 col-md-12">
          <div class="image-wrapper" v-if="image">
            <div class="image" :style="{ backgroundImage: `url(${image})` }"></div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-12">
          <div class="content-wrapper">
            <h2 v-if="title.length > 0" class="title">{{ title }}</h2>
            <div class="description" v-html="description"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.portfolio-image-text {
  padding: 120px 0;
  background-color: #F6F6F6;
}

.portfolio-image-text.dark-mode {
  background-color: #1D1D1B;
}

.container-fluid {
  padding: 0 var(--body-horizontal-padding);
  padding-left: 0;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 11;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.image-wrapper:hover .image {
  transform: scale(1.02);
}

.content-wrapper {
  padding-left: 20px
}

.label {
  font-size: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-yellow);
  margin-bottom: 20px;
  font-weight: var(--font-weight-semibold);
}

.title {
  font-size: 35px;
  color: var(--color-yellow);
  margin: 0;
  line-height: 1.2;
  font-family: 'Antonio';
  text-transform: uppercase;
  margin-bottom: 30px;
}

.description {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.8);
}

.portfolio-image-text.dark-mode .description {
  color: rgba(255, 255, 255, 0.8);
}

.description :deep(p) {
  margin-bottom: 20px;
}

.description :deep(p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .portfolio-image-text {
    padding: 80px 0;
  }

  .content-wrapper {
    padding-left: 0;
    margin-top: 40px;
  }
}

@media (max-width: 576px) {
  .portfolio-image-text {
    padding: 60px 0;
  }

  .description {
    font-size: 16px;
  }
}
</style>


