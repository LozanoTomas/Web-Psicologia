import './style.css'

const professional = {
  // EDITAR: reemplazar estos datos antes de publicar la versión final.
  name: 'Nombre Profesional',
  credential: 'Psicóloga',
  license: 'Matrícula editable',
  email: 'EMAIL_EDITABLE@ejemplo.com',
  location: 'Argentina',
  hours: 'Lunes a viernes, horarios a coordinar',
  whatsappUrl: 'https://wa.me/549XXXXXXXXXX',
}

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="inicio">
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
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#espacio">Espacio de trabajo</a>
      <a href="#contacto">Contacto</a>
      <a class="button button--small" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
        Solicitar consulta
      </a>
    </nav>
  </header>

  <main>
    <section class="hero-section section" aria-labelledby="hero-title">
      <div class="hero-section__content">
        <p class="eyebrow">Psicoterapia de orientación psicoanalítica</p>
        <h1 id="hero-title">Psicóloga en Argentina | Atención psicológica online y presencial</h1>
        <p class="hero-section__lead">
          Un espacio de escucha clínica para acompañar procesos personales, dificultades emocionales
          y momentos de angustia, con ética profesional, confidencialidad y una mirada singular.
        </p>
        <div class="hero-section__actions" aria-label="Acciones principales">
          <a class="button" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
            Escribir por WhatsApp
          </a>
          <a class="button button--secondary" href="#sobre-mi">
            Conocer el espacio
          </a>
        </div>
      </div>

      <div class="hero-card" aria-label="Resumen del espacio terapéutico">
        <div class="hero-card__mark" aria-hidden="true"></div>
        <p>Atención psicológica para adolescentes y adultos.</p>
        <dl>
          <div>
            <dt>Modalidad</dt>
            <dd>Online y presencial</dd>
          </div>
          <div>
            <dt>Ubicación</dt>
            <dd>${professional.location}</dd>
          </div>
          <div>
            <dt>Primera entrevista</dt>
            <dd>A coordinar por WhatsApp</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section split-section" id="sobre-mi" aria-labelledby="about-title">
      <div>
        <p class="eyebrow">Sobre mí</p>
        <h2 id="about-title">Acompañamiento profesional desde una escucha clínica y cercana</h2>
      </div>
      <div class="content-stack">
        <p>
          Soy ${professional.name}, ${professional.credential.toLowerCase()} con formación clínica y orientación
          psicoanalítica. Mi trabajo parte de una escucha respetuosa, atenta a la historia y al momento
          particular de cada persona.
        </p>
        <p>
          Este sitio deja textos editables para sumar formación, experiencia, espacios de trabajo y datos
          institucionales reales. La idea es comunicar con claridad, sin tecnicismos innecesarios y sin
          prometer resultados garantizados.
        </p>
        <ul class="check-list">
          <li>Psicoterapia individual para procesos personales.</li>
          <li>Atención psicológica online y presencial.</li>
          <li>Marco profesional, confidencial y ético.</li>
        </ul>
      </div>
    </section>

    <section class="section workspace-section" id="espacio" aria-labelledby="workspace-title">
      <div class="section-heading">
        <p class="eyebrow">Espacio de trabajo</p>
        <h2 id="workspace-title">Un espacio terapéutico para poner en palabras lo que te atraviesa</h2>
        <p>
          La consulta puede abrirse por distintos motivos. En cada caso, el recorrido se construye de forma
          singular, cuidando los tiempos, la privacidad y la complejidad de cada experiencia.
        </p>
      </div>

      <div class="service-grid">
        <article class="service-card">
          <h3>Atención online</h3>
          <p>
            Terapia online para quienes buscan sostener un proceso de psicoterapia desde un espacio privado,
            accesible y acordado previamente.
          </p>
        </article>
        <article class="service-card">
          <h3>Atención presencial</h3>
          <p>
            Encuentros presenciales en ubicación general editable, con horarios coordinados para cada primera
            entrevista.
          </p>
        </article>
        <article class="service-card">
          <h3>Primera entrevista</h3>
          <p>
            Un primer encuentro permite conversar sobre el motivo de consulta, orientar el encuadre y definir
            si este espacio resulta adecuado.
          </p>
        </article>
      </div>

      <div class="reasons" aria-labelledby="reasons-title">
        <h3 id="reasons-title">Motivos frecuentes de consulta</h3>
        <ul>
          <li>Ansiedad</li>
          <li>Angustia</li>
          <li>Vínculos</li>
          <li>Duelos</li>
          <li>Crisis vitales</li>
          <li>Dificultades emocionales</li>
          <li>Procesos personales</li>
        </ul>
      </div>
    </section>

    <section class="section faq-section" id="preguntas-frecuentes" aria-labelledby="faq-title">
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

    <section class="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contacto</p>
        <h2 id="contact-title">Coordinar primera entrevista</h2>
        <p>
          Si querés iniciar una consulta o hacer una pregunta antes de coordinar, podés escribir para recibir
          orientación sobre disponibilidad, modalidad y próximos pasos.
        </p>
      </div>

      <address class="contact-card">
        <a class="button" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
          Solicitar consulta
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
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#espacio">Espacio de trabajo</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <p>La información de este sitio no reemplaza una consulta profesional.</p>
  </footer>

  <a class="whatsapp-float" href="${professional.whatsappUrl}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
    <span aria-hidden="true">WA</span>
  </a>
`

const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.querySelector('.site-nav')

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
