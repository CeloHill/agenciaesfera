<template>
  <div class="contact-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- Seção Superior - Informações e Formulário -->
          <section class="contact-section">
            <div class="contact-content">
              <div class="row">
                <!-- Informações de Contato -->
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="contact-info">
                    <div class="contact-header">
                      <h2 class="contact-title">Contato</h2>
                      <div class="contact-dot"></div>
                    </div>
                    <h1 class="contact-main-title">Let's talk</h1>
                    <p class="contact-subtitle">Estamos aqui, é só chamar!</p>
                    <p class="contact-description">Entre em contato e marque um café aqui na Esfera!</p>
                    
                    <div class="contact-details">
                      <div class="contact-detail">
                        <span class="contact-value">agenciaesfera@agenciaesfera.com.br</span>
                      </div>
                      <div class="contact-detail">
                        <span class="contact-value">(41) 3340-4300</span>
                      </div>
                    </div>
                    
                    <div class="social-links">
                      <a href="#" class="social-link">
                        <span class="social-icon">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.15625 18H0.523438V6.32031H4.15625V18ZM2.32031 4.75781C1.1875 4.75781 0.25 3.78125 0.25 2.60938C0.25 1.00781 1.96875 -0.0078125 3.375 0.8125C4.03906 1.16406 4.42969 1.86719 4.42969 2.60938C4.42969 3.78125 3.49219 4.75781 2.32031 4.75781ZM17.7109 18H14.1172V12.3359C14.1172 10.9688 14.0781 9.25 12.2031 9.25C10.3281 9.25 10.0547 10.6953 10.0547 12.2188V18H6.42188V6.32031H9.89844V7.92188H9.9375C10.4453 7.02344 11.6172 6.04688 13.375 6.04688C17.0469 6.04688 17.75 8.46875 17.75 11.5938V18H17.7109Z" fill="currentColor"/>
                          </svg>
                        </span>
                      </a>
                      <a href="#" class="social-link">
                        <span class="social-icon">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5.00781C11.4609 5.00781 13.4922 7.03906 13.4922 9.5C13.4922 12 11.4609 13.9922 9 13.9922C6.5 13.9922 4.50781 12 4.50781 9.5C4.50781 7.03906 6.5 5.00781 9 5.00781ZM9 12.4297C10.6016 12.4297 11.8906 11.1406 11.8906 9.5C11.8906 7.89844 10.6016 6.60938 9 6.60938C7.35938 6.60938 6.07031 7.89844 6.07031 9.5C6.07031 11.1406 7.39844 12.4297 9 12.4297ZM14.7031 4.85156C14.7031 4.26562 14.2344 3.79688 13.6484 3.79688C13.0625 3.79688 12.5938 4.26562 12.5938 4.85156C12.5938 5.4375 13.0625 5.90625 13.6484 5.90625C14.2344 5.90625 14.7031 5.4375 14.7031 4.85156ZM17.6719 5.90625C17.75 7.35156 17.75 11.6875 17.6719 13.1328C17.5938 14.5391 17.2812 15.75 16.2656 16.8047C15.25 17.8203 14 18.1328 12.5938 18.2109C11.1484 18.2891 6.8125 18.2891 5.36719 18.2109C3.96094 18.1328 2.75 17.8203 1.69531 16.8047C0.679688 15.75 0.367188 14.5391 0.289062 13.1328C0.210938 11.6875 0.210938 7.35156 0.289062 5.90625C0.367188 4.5 0.679688 3.25 1.69531 2.23438C2.75 1.21875 3.96094 0.90625 5.36719 0.828125C6.8125 0.75 11.1484 0.75 12.5938 0.828125C14 0.90625 15.25 1.21875 16.2656 2.23438C17.2812 3.25 17.5938 4.5 17.6719 5.90625ZM15.7969 14.6562C16.2656 13.5234 16.1484 10.7891 16.1484 9.5C16.1484 8.25 16.2656 5.51562 15.7969 4.34375C15.4844 3.60156 14.8984 2.97656 14.1562 2.70312C12.9844 2.23438 10.25 2.35156 9 2.35156C7.71094 2.35156 4.97656 2.23438 3.84375 2.70312C3.0625 3.01562 2.47656 3.60156 2.16406 4.34375C1.69531 5.51562 1.8125 8.25 1.8125 9.5C1.8125 10.7891 1.69531 13.5234 2.16406 14.6562C2.47656 15.4375 3.0625 16.0234 3.84375 16.3359C4.97656 16.8047 7.71094 16.6875 9 16.6875C10.25 16.6875 12.9844 16.8047 14.1562 16.3359C14.8984 16.0234 15.5234 15.4375 15.7969 14.6562Z" fill="currentColor"/>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <!-- Formulário de Contato -->
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="contact-form">
                    <form @submit.prevent="submitForm">
                      <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" v-model="form.nome" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="form.email" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" v-model="form.telefone">
                      </div>
                      
                      <div class="form-group">
                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" v-model="form.mensagem" rows="4" required></textarea>
                      </div>
                      
                      <button type="submit" class="submit-btn">enviar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Seção do Mapa - Fundo Escuro -->
          <section class="map-section">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1234567890!2d-49.234567890123!3d-25.456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI0LjQiUyA0OcKwMTQnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
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

// Form data
const form = ref({
  nome: '',
  email: '',
  telefone: '',
  mensagem: ''
})

// Submit form
const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Aqui você pode adicionar a lógica para enviar o formulário
  alert('Mensagem enviada com sucesso!')
  
  // Reset form
  form.value = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: #F5F5F5;
}

/* Seção Superior - Fundo Claro */
.contact-section {
  padding-bottom: 80px;
  min-height: 80vh;
  padding-top: 200px;
  min-height: 80vh;
}

.contact-content {
  width: 100%;
  padding: 0 var(--body-horizontal-padding);
}

.contact-content .row {
  align-items: start;
}

/* Informações de Contato */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-title {
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin: 0;
}

.contact-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-yellow);
  border-radius: 50%;
}

.contact-main-title {
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 1.1;
}

.contact-subtitle {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.contact-description {
  font-size: 23px;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.contact-detail {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-label {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 70px;
}

.social-link {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-medium-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-medium-gray);

  svg {
    color: var(--color-white);
  }
}

.social-icon {
  color: inherit;
  line-height: initial;
  font-size: initial;
  font-weight: initial;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-medium-gray);
  }
}

.social-link:hover .social-icon-image {
  filter: brightness(0) invert(1);
}

/* Formulário */
.contact-form {
  padding: 40px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  background-color: transparent;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-yellow);
  background-color: #FFFFFF;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: lowercase;
}

.submit-btn:hover {
  background-color: #000;
  color: #fff;
}

/* Seção do Mapa - Fundo Escuro */
.map-section {
  background-color: #1d1d1b;
  padding: 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.map-container {
  width: 100%;
  height: 400px;
  position: relative;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0;
}

/* Responsividade Bootstrap */
@media (max-width: 768px) {
  .contact-section {
    padding: 150px 0 60px 0;
  }
  
  .contact-form {
    padding: 30px 20px;
    margin-top: 40px;
  }
  
  .contact-main-title {
    font-size: 48px;
  }
  
  .contact-subtitle {
    font-size: 20px;
  }
  
  .contact-description {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .contact-main-title {
    font-size: 36px;
  }
  
  .contact-subtitle {
    font-size: 18px;
  }
  
  .contact-description {
    font-size: 14px;
  }
  
  .map-container {
    height: 300px;
  }
}
</style>
