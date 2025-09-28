<template>
  <div class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <section class="team-section">
            <div class="team-content">
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
.page {
  padding: 50px 20px;
  text-align: center;
  min-height: 50vh;
  padding-top: 200px;
}

.team-section {
  padding: 50px 20px;
  text-align: center;
  width: 100%;
  padding-top: 60%;
  background-image: url('/images/about-esfera-team.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  .team-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.team-content {
  width: 100%;
}
</style>
