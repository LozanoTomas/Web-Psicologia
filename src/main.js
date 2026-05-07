import './style.css'
import heroInicioImage from './assets/hero-inicio.png'
import fotoSobreMi from './assets/foto-sobre-mi.jpg'
import bienvenidaImage from './assets/bienvenida-img.jpg'
import blogImageOne from './assets/blog-1.jpg'
import blogImageTwo from './assets/blog-2.jpg'
import blogImageThree from './assets/blog-3-cambio.jpg'

document.documentElement.classList.add('js')

const professional = {
  // EDITAR: reemplazar estos datos antes de publicar la versión final.
  name: 'Agustina de la Cereza',
  credential: 'Licenciada en Psicología',
  license: 'M.P. 2648',
  email: 'agusdelacereza@gmail.com',
  location: 'Argentina',
  hours: 'Lunes a viernes, horarios a coordinar',
  whatsappUrl: 'https://wa.me/5492604667090',
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Ir al inicio">
      <span class="brand__name">${professional.name}</span>
      <span class="brand__role">${professional.credential}</span>
    </a>

    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="sr-only">Abrir menú de navegación</span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

    <nav class="site-nav" id="site-nav" aria-label="Navegación principal">
      <a href="#inicio">Inicio</a>
      <a href="#bienvenida">Bienvenida</a>
      <a href="#espacio">Modalidad</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#blog">Blog</a>
      <a href="#contacto">Contacto</a>
      <a class="button button--small" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
        Solicitar consulta
      </a>
    </nav>
  </header>

  <main>
    <section class="hero-section reveal" id="inicio" aria-labelledby="hero-title">
      <div class="hero-section__content">
        <div class="hero-mark hero-mark--image" aria-hidden="true">
          <img src="${heroInicioImage}" alt="" />
        </div>
        <h1 id="hero-title">Hay malestares que no se resuelven evitando,<br />Poner en palabras algo de eso<br />produce un efecto.</h1>
        <p class="hero-section__kicker">Psicóloga Online para adultos<br />en Argentina.</p>
        <p class="hero-section__kicker">Atención a personas de<br />habla hispana</p>
        <div class="hero-section__actions" aria-label="Acciones principales">
          <a class="button" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
            Coordinar primera entrevista
          </a>
          <a class="button button--secondary" href="#bienvenida">
            Conocer el espacio
          </a>
        </div>
      </div>
    </section>

    <section class="section welcome-section reveal" id="bienvenida" aria-labelledby="welcome-title">
      <div class="floating-card welcome-card">
        <div class="editorial-image editorial-image--landscape" aria-label="Espacio reservado para imagen editorial">
          <img src="${bienvenidaImage}" alt="Escultura blanca minimalista en un espacio clínico y sereno" loading="lazy" />
        </div>
        <div class="content-stack">
          <p class="eyebrow">Bienvenida</p>
          <h2 id="welcome-title">Un espacio para escuchar lo que insiste</h2>
          <p>
            A veces lo que incomoda no es del todo claro.
          </p>
          <p>
            Puede aparecer como angustia, ansiedad, dificultades en las relaciones o situaciones que se repiten sin saber por qué.
          </p>
          <p>
            Este espacio de atención psicológica, está dirigido a adultos que quieran empezar a comprender qué les ocurre y encontrar otra manera de atravesarlo.
          </p>
          <a class="text-link" href="#sobre-mi">Conocer más</a>
        </div>
      </div>
    </section>

    <section class="section workspace-section reveal" id="espacio" aria-labelledby="workspace-title">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Modalidad</p>
        <h2 id="workspace-title">Modalidad de atención</h2>
        <p>
          Las consultas se realizan de manera online a través de videollamada (Zoom o Google Meet).
          Esta modalidad permite sostener la continuidad del trabajo desde distintos lugares, manteniendo un encuadre claro.
          La frecuencia y condiciones se establecen en las primeras entrevistas.
        </p>
      </div>

      <div class="service-grid">
        <article class="service-card reveal">
          <span class="service-icon service-icon--screen" aria-hidden="true"></span>
          <h3>Consulta psicológica online</h3>
          <p>
            Atención psicológica online para adultos en Argentina y personas de habla hispana.
          </p>
        </article>
        <article class="service-card reveal">
          <span class="service-icon service-icon--room" aria-hidden="true"></span>
          <h3>Encuadre de trabajo</h3>
          <p>
            Un espacio de trabajo clínico, confidencial y sostenido desde una orientación psicoanalítica.
          </p>
        </article>
        <article class="service-card reveal">
          <span class="service-icon service-icon--dialog" aria-hidden="true"></span>
          <h3>Primeras entrevistas</h3>
          <p>
            La frecuencia y condiciones se establecen en las primeras entrevistas.
          </p>
        </article>
      </div>
    </section>

    <section class="quote-section reveal" aria-labelledby="quote-title">
      <div class="quote-section__inner">
        <span aria-hidden="true">“</span>
        <h2 id="quote-title">La escucha clínica abre un tiempo para alojar aquello que no siempre encuentra lugar en la vida cotidiana.</h2>
      </div>
    </section>

    <section class="section meet-section reveal" id="sobre-mi" aria-labelledby="about-title">
      <div class="floating-card meet-card">
        <div class="content-stack">
          <p class="eyebrow">Sobre mí</p>
          <h2 id="about-title">Sobre mí</h2>
          <p>
            Soy Agustina de la Cereza, Licenciada en Psicología (M.P. 2648).
          </p>
          <p>
            Me dedico a la clínica desde una orientación psicoanalítica y cuento con más de 14 años de experiencia.
          </p>
          <p>
            Trabajo con adultos, especialmente adultos jóvenes, profesionales y personas que atraviesan procesos migratorios.
          </p>
          <p>
            También soy docente universitaria y realizo evaluaciones psicológicas en el ámbito judicial.
          </p>
          <a class="button button--secondary" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
            Coordinar primera entrevista
          </a>
        </div>
        <div class="meet-card__media">
          <div class="decorative-dot" aria-hidden="true"></div>
          <div class="editorial-image editorial-image--portrait editorial-image--photo">
            <img src="${fotoSobreMi}" alt="Retrato profesional de ${professional.name}" />
          </div>
        </div>
      </div>
    </section>

    <section class="section blog-section reveal" id="blog" aria-labelledby="blog-title">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Blog</p>
        <h2 id="blog-title">Artículos</h2>
        <p>
          Algunas lecturas que pueden servir como punto de partida para pensar lo que te está pasando
        </p>
      </div>

      <div class="blog-grid">
        <article class="blog-card reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <img src="${blogImageOne}" alt="Escultura abstracta de formas entrelazadas" loading="lazy" />
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>Artículo 1</h3>
          <p>Texto pendiente para el primer artículo.</p>
        </article>
        <article class="blog-card reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <img src="${blogImageTwo}" alt="Pasillo blanco con puertas en perspectiva" loading="lazy" />
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>Artículo 2</h3>
          <p>Texto pendiente para el segundo artículo.</p>
        </article>
        <article class="blog-card blog-card--portrait reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <img src="${blogImageThree}" alt="Sillón claro con libro blanco en una composición minimalista" loading="lazy" />
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>Artículo 3</h3>
          <p>Texto pendiente para un próximo artículo.</p>
        </article>
      </div>
      <div class="hero-section__actions" aria-label="Acciones del blog">
        <a class="button button--secondary" href="#blog">
          Ver todos los artículos
        </a>
      </div>
    </section>

    <section class="section faq-section reveal" id="preguntas-frecuentes" aria-labelledby="faq-title">
      <div class="section-heading section-heading--compact">
        <p class="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-title">Dudas habituales antes de iniciar terapia</h2>
      </div>

      <div class="faq-list">
        <details>
          <summary>¿Cuándo consultar con una psicóloga?</summary>
          <p>
            Puede ser útil consultar cuando aparece malestar sostenido, angustia, ansiedad, dificultades en
            vínculos, duelos, cambios vitales o preguntas personales que necesitan un espacio de elaboración.
          </p>
        </details>
        <details>
          <summary>¿La terapia puede ser online?</summary>
          <p>
            Sí. La terapia online puede sostener un espacio de atención psicológica cuando se cuenta con un
            lugar privado, conexión estable y un encuadre acordado.
          </p>
        </details>
        <details>
          <summary>¿Cómo se solicita una primera entrevista?</summary>
          <p>
            Podés escribir por WhatsApp o email para coordinar una primera entrevista. Allí se conversa el
            motivo de consulta, la modalidad y los horarios disponibles.
          </p>
        </details>
        <details>
          <summary>¿Cuánto dura una sesión?</summary>
          <p>
            La duración y frecuencia se acuerdan dentro del encuadre profesional. Como referencia editable,
            muchas entrevistas suelen tener una duración aproximada de 45 minutos.
          </p>
        </details>
        <details>
          <summary>¿El espacio es confidencial?</summary>
          <p>
            Sí. El trabajo terapéutico se desarrolla dentro de un marco de confidencialidad y responsabilidad
            profesional, respetando la ética de la práctica clínica.
          </p>
        </details>
      </div>
    </section>

    <section class="section contact-section reveal" id="contacto" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contacto</p>
        <h2 id="contact-title">Coordinar primera entrevista</h2>
        <p>
          Si estás pensando en comenzar o tenés alguna consulta, podés escribir para coordinar una primera entrevista.
        </p>
      </div>

      <address class="contact-card">
        <a class="button" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
          Coordinar primera entrevista
        </a>
        <a href="mailto:${professional.email}">${professional.email}</a>
        <span>${professional.location}</span>
        <span>${professional.hours}</span>
      </address>
    </section>
  </main>

  <footer class="site-footer">
    <div>
      <strong>${professional.name}</strong>
      <span>${professional.credential} | ${professional.license}</span>
    </div>
    <nav aria-label="Navegación secundaria">
      <a href="#inicio">Inicio</a>
      <a href="#bienvenida">Bienvenida</a>
      <a href="#espacio">Modalidad</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#blog">Blog</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <p>La información de este sitio no reemplaza una consulta profesional.</p>
  </footer>

  <a class="whatsapp-float" href="${professional.whatsappUrl}" target="_blank" rel="noopener" aria-label="Coordinar primera entrevista por WhatsApp">
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M16.02 3.2c-7.04 0-12.77 5.62-12.77 12.54 0 2.38.69 4.7 1.99 6.7L3.2 29l6.78-1.78a12.94 12.94 0 0 0 6.04 1.51c7.04 0 12.78-5.62 12.78-12.54S23.06 3.2 16.02 3.2Zm0 23.4c-1.9 0-3.76-.5-5.4-1.45l-.39-.23-4.02 1.06 1.07-3.85-.25-.4a10.55 10.55 0 0 1-1.64-5.63c0-5.75 4.77-10.43 10.63-10.43S26.66 10.35 26.66 16.1 21.89 26.6 16.02 26.6Zm5.83-7.82c-.32-.16-1.9-.93-2.19-1.03-.3-.1-.51-.16-.73.16-.21.31-.83 1.03-1.02 1.24-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.56-.95-.84-1.59-1.88-1.78-2.19-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.73-1-2.37-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.31-1.13 1.09-1.13 2.66 0 1.57 1.16 3.08 1.32 3.29.16.21 2.29 3.43 5.54 4.81.77.33 1.38.53 1.85.68.78.24 1.49.21 2.05.13.63-.09 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/>
    </svg>
  </a>
`

const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.querySelector('.site-nav')
const revealElements = document.querySelectorAll('.reveal')

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!isExpanded))
  siteNav.classList.toggle('is-open', !isExpanded)
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false')
    siteNav.classList.remove('is-open')
  })
})

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  revealElements.forEach((element) => revealObserver.observe(element))
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'))
}
