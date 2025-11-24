<template>
  <footer class="footer-second">
    <div class="footer-top">
      <nav class="footer-nav">
        <NuxtLink to="/sobre" class="nav-link">SOBRE</NuxtLink>
        <NuxtLink to="/sobre#services-list" class="nav-link">SERVIÇOS</NuxtLink>
        <NuxtLink to="/projetos" class="nav-link">PORTFÓLIO</NuxtLink>
        <NuxtLink to="/contatos" class="nav-link">CONTATO</NuxtLink>
      </nav>
      <div class="footer-right">
        <a href="mailto:agenciaesfera@agenciaesfera.com.br" class="email-link">
          agenciaesfera@agenciaesfera.com.br
        </a>
        <NuxtLink to="/" class="logo-link">
          <img src="/images/logos/icon-dark.png" alt="Agência Esfera" class="logo">
        </NuxtLink>
      </div>
    </div>

    <div class="footer-phone">
      (41) 3340-4300
    </div>

    <div class="footer-bottom">
      <div class="footer-left">
        <div class="social-icons">
          <a href="https://www.linkedin.com/company/agencia-esfera" class="social-icon" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.15625 18H0.523438V6.32031H4.15625V18ZM2.32031 4.75781C1.1875 4.75781 0.25 3.78125 0.25 2.60938C0.25 1.00781 1.96875 -0.0078125 3.375 0.8125C4.03906 1.16406 4.42969 1.86719 4.42969 2.60938C4.42969 3.78125 3.49219 4.75781 2.32031 4.75781ZM17.7109 18H14.1172V12.3359C14.1172 10.9688 14.0781 9.25 12.2031 9.25C10.3281 9.25 10.0547 10.6953 10.0547 12.2188V18H6.42188V6.32031H9.89844V7.92188H9.9375C10.4453 7.02344 11.6172 6.04688 13.375 6.04688C17.0469 6.04688 17.75 8.46875 17.75 11.5938V18H17.7109Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/AgenciaEsfera/" class="social-icon" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 22V12.75H17l.5-3.75h-4V6.6c0-1.085.301-1.824 1.86-1.824h1.34V1.427C16.7 1.384 15.488 1.29 14.09 1.29c-2.96 0-4.99 1.807-4.99 5.129V9H6v3.75h3.1V22h4.4Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/agencia_esfera/" class="social-icon" aria-label="Instagram">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5.00781C11.4609 5.00781 13.4922 7.03906 13.4922 9.5C13.4922 12 11.4609 13.9922 9 13.9922C6.5 13.9922 4.50781 12 4.50781 9.5C4.50781 7.03906 6.5 5.00781 9 5.00781ZM9 12.4297C10.6016 12.4297 11.8906 11.1406 11.8906 9.5C11.8906 7.89844 10.6016 6.60938 9 6.60938C7.35938 6.60938 6.07031 7.89844 6.07031 9.5C6.07031 11.1406 7.39844 12.4297 9 12.4297ZM14.7031 4.85156C14.7031 4.26562 14.2344 3.79688 13.6484 3.79688C13.0625 3.79688 12.5938 4.26562 12.5938 4.85156C12.5938 5.4375 13.0625 5.90625 13.6484 5.90625C14.2344 5.90625 14.7031 5.4375 14.7031 4.85156ZM17.6719 5.90625C17.75 7.35156 17.75 11.6875 17.6719 13.1328C17.5938 14.5391 17.2812 15.75 16.2656 16.8047C15.25 17.8203 14 18.1328 12.5938 18.2109C11.1484 18.2891 6.8125 18.2891 5.36719 18.2109C3.96094 18.1328 2.75 17.8203 1.69531 16.8047C0.679688 15.75 0.367188 14.5391 0.289062 13.1328C0.210938 11.6875 0.210938 7.35156 0.289062 5.90625C0.367188 4.5 0.679688 3.25 1.69531 2.23438C2.75 1.21875 3.96094 0.90625 5.36719 0.828125C6.8125 0.75 11.1484 0.75 12.5938 0.828125C14 0.90625 15.25 1.21875 16.2656 2.23438C17.2812 3.25 17.5938 4.5 17.6719 5.90625ZM15.7969 14.6562C16.2656 13.5234 16.1484 10.7891 16.1484 9.5C16.1484 8.25 16.2656 5.51562 15.7969 4.34375C15.4844 3.60156 14.8984 2.97656 14.1562 2.70312C12.9844 2.23438 10.25 2.35156 9 2.35156C7.71094 2.35156 4.97656 2.23438 3.84375 2.70312C3.0625 3.01562 2.47656 3.60156 2.16406 4.34375C1.69531 5.51562 1.8125 8.25 1.8125 9.5C1.8125 10.7891 1.69531 13.5234 2.16406 14.6562C2.47656 15.4375 3.0625 16.0234 3.84375 16.3359C4.97656 16.8047 7.71094 16.6875 9 16.6875C10.25 16.6875 12.9844 16.8047 14.1562 16.3359C14.8984 16.0234 15.5234 15.4375 15.7969 14.6562Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <div class="copyright">
          Agência Esfera © 2025<br>
          Todos os direitos reservados
        </div>
      </div>

      <div class="footer-right-bottom">
        <div class="address">
          <div class="address-line strong">Av. Rep. Argentina, 1228</div>
          <div class="address-line">Água Verde, Curitiba - PR, 80610-260</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-second {
  background-color: var(--color-white);
  padding: 40px var(--body-horizontal-padding) 30px;
  font-family: var(--font-family);
  padding-bottom: 60px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
}

.footer-nav {
  display: flex;
  gap: 30px;
  font-family: Antonio;
}

.nav-link {
  font-size: 34px;
  font-weight: normal;
  color: var(--color-black);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-gray);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.email-link {
  font-size: clamp(14px, 1.5vw, 24px);
  color: var(--color-black);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-black);
  }
}

.email-link:hover {
  color: var(--color-gray);
}

.logo {
  height: 55px;
  width: auto;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer-left {
  display: flex;
  align-items: flex-end;
  gap: 30px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 50px;
  height: 50px;
  border: 1px solid var(--color-medium-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-medium-gray);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--color-medium-gray);
  color: var(--color-white);
}

.copyright {
  font-size: 12px;
  font-weight: var(--font-weight-regular);
  color: var(--color-medium-gray);
  line-height: 1.6;
}

.footer-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.phone {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--color-medium-gray);
}

.footer-right-bottom {
  display: flex;
  justify-content: flex-end;
}

.address {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  color: var(--color-black);
  text-align: right;
  line-height: 1.6;
}

.address-line {
  margin-bottom: 2px;
  &.strong {
    font-weight: bold;
  }
}

.footer-phone {
  font-size: 18px;
  font-weight: normal;
  color: var(--color-medium-gray);
  text-align: right;
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
  .footer-nav {
    gap: 25px;
  }

  .footer-right {
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .footer-top {
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 40px;
  }

  .footer-nav {
    gap: 15px;
  }

  .footer-right {
    justify-content: space-between;
  }

  .footer-bottom {
    align-items: flex-start;
    gap: 25px;
  }

  .footer-left {
    width: 100%;
    align-items: flex-start;
    gap: 20px;
  }

  .footer-center {
    width: 100%;
    justify-content: flex-start;
  }

  .footer-right-bottom {
    width: 100%;
  }

  .address {
    text-align: left;
  }

  .nav-link {
    font-size: 25px;
  }

  .logo {
    height: 38px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .address {
    font-size: 12px;
  }

  .footer-second {
    padding-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .footer-top {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .footer-second {
    padding: 30px 20px 20px;
  }

  .logo {
    height: 28px;
  }

  .nav-link {
    font-size: 20px;
  }

  .email-link {
    font-size: 13px;
  }

  .phone {
    font-size: 14px;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .footer-left {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .footer-phone {
    text-align: center;
  }

  .footer-right-bottom {
    justify-content: initial;
  }

  .copyright {
    text-align: center;
    width: 100%;
  }

  .footer-nav {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .address {
    text-align: center;
    width: 100%;
  }
}
</style>

