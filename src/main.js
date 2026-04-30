import './style.css'
import heroInicioImage from './assets/hero-inicio.png'
import fotoSobreMi from './assets/foto-sobre-mi.jpg'

document.documentElement.classList.add('js')

const professional = {
  // EDITAR: reemplazar estos datos antes de publicar la versión final.
  name: 'Agustina de la Cereza',
  credential: 'Psicóloga-Psicoanalista',
  license: 'Matrícula editable',
  email: 'EMAIL_EDITABLE@ejemplo.com',
  location: 'Argentina',
  hours: 'Lunes a viernes, horarios a coordinar',
  whatsappUrl: 'https://wa.me/549XXXXXXXXXX',
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
        <h1 id="hero-title">No todo mal estar necesita ser eliminado. Algunos requieren ser leídos.</h1>
        <p class="hero-section__kicker">Psicoterapia de orientación psicoanalítica</p>
        <p class="hero-section__lead">
          Un espacio de escucha clínica para acompañar procesos personales, dificultades emocionales
          y momentos de angustia, con ética profesional, confidencialidad y una mirada singular.
        </p>
        <div class="hero-section__actions" aria-label="Acciones principales">
          <a class="button" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
            Escribir por WhatsApp
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
          <span>Imagen editorial</span>
        </div>
        <div class="content-stack">
          <p class="eyebrow">Bienvenida</p>
          <h2 id="welcome-title">Un espacio para escuchar lo que insiste</h2>
          <p>
            La terapia ofrece un tiempo distinto: un lugar para poner en palabras aquello que aparece como
            malestar, pregunta o repetición, sin apuro por responder de inmediato.
          </p>
          <p>
            Cada proceso se construye de manera singular, cuidando la confidencialidad, el encuadre clínico
            y los tiempos subjetivos de quien consulta.
          </p>
          <a class="text-link" href="#sobre-mi">Conocer más</a>
        </div>
      </div>
    </section>

    <section class="section workspace-section reveal" id="espacio" aria-labelledby="workspace-title">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Modalidad</p>
        <h2 id="workspace-title">Formas de acompañamiento</h2>
        <p>
          La consulta puede abrirse por distintos motivos. En cada caso, el recorrido se orienta desde una
          escucha clínica, respetuosa y situada.
        </p>
      </div>

      <div class="service-grid">
        <article class="service-card reveal">
          <span class="service-icon service-icon--screen" aria-hidden="true"></span>
          <h3>Atención online</h3>
          <p>
            Terapia online para quienes buscan sostener un proceso de psicoterapia desde un espacio privado,
            accesible y acordado previamente.
          </p>
        </article>
        <article class="service-card reveal">
          <span class="service-icon service-icon--room" aria-hidden="true"></span>
          <h3>Atención presencial</h3>
          <p>
            Encuentros presenciales en ubicación general editable, con horarios coordinados para cada primera
            entrevista.
          </p>
        </article>
        <article class="service-card reveal">
          <span class="service-icon service-icon--dialog" aria-hidden="true"></span>
          <h3>Primera entrevista</h3>
          <p>
            Un primer encuentro permite conversar sobre el motivo de consulta, orientar el encuadre y definir
            si este espacio resulta adecuado.
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
          <h2 id="about-title">Una práctica orientada por la singularidad de cada consulta</h2>
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
          <a class="button button--secondary" href="${professional.whatsappUrl}" target="_blank" rel="noopener">
            Solicitar entrevista
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
        <h2 id="blog-title">Lecturas y notas clínicas</h2>
        <p>
          Un espacio reservado para publicar textos breves, preguntas frecuentes ampliadas o recursos sobre procesos terapéuticos.
        </p>
      </div>

      <div class="blog-grid">
        <article class="blog-card reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <span>Artículo</span>
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>Ansiedad y tiempos subjetivos</h3>
          <p>Una nota futura para pensar el malestar sin reducirlo a una urgencia por eliminar.</p>
        </article>
        <article class="blog-card reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <span>Artículo</span>
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>El inicio de una consulta</h3>
          <p>Un espacio para explicar cómo se orienta una primera entrevista y qué puede esperarse.</p>
        </article>
        <article class="blog-card reveal">
          <div class="blog-card__image" aria-label="Imagen editorial para artículo">
            <span>Artículo</span>
          </div>
          <p class="blog-card__meta">Lectura editable</p>
          <h3>Vínculos, duelos y preguntas</h3>
          <p>Un futuro artículo sobre motivos frecuentes de consulta y recorridos posibles.</p>
        </article>
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
      <a href="#bienvenida">Bienvenida</a>
      <a href="#espacio">Modalidad</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#blog">Blog</a>
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
