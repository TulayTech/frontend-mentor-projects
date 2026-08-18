import { ContactForm } from './components/ContactForm'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { SocialLinks } from './components/SocialLinks'
import { projects } from './data/projects'

const skills = [
  ['HTML', '4 Years Experience'],
  ['CSS', '4 Years Experience'],
  ['JavaScript', '4 Years Experience'],
  ['Accessibility', '4 Years Experience'],
  ['React', '3 Years Experience'],
  ['Sass', '3 Years Experience'],
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page" id="top">
        <Header />
        <main id="main-content">
          <section className="hero shell" aria-labelledby="hero-title">
            <picture className="hero__portrait">
              <source media="(max-width: 40rem)" srcSet="/assets/images/image-profile-mobile.webp" />
              <source media="(max-width: 64rem)" srcSet="/assets/images/image-profile-tablet.webp" />
              <img src="/assets/images/image-profile-desktop.webp" alt="Adam Keyes smiling" />
            </picture>
            <img className="hero__rings" src="/assets/images/pattern-rings.svg" alt="" />
            <img className="hero__circle" src="/assets/images/pattern-circle.svg" alt="" />
            <div className="hero__content">
              <h1 id="hero-title">Nice to meet you! I’m <span>Adam Keyes</span>.</h1>
              <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
              <a className="text-link" href="#contact">Contact me</a>
            </div>
          </section>

          <section className="skills shell" aria-label="Technical skills">
            {skills.map(([skill, experience]) => (
              <div className="skill" key={skill}>
                <h2>{skill}</h2>
                <p>{experience}</p>
              </div>
            ))}
          </section>

          <section className="projects shell" id="projects" aria-labelledby="projects-title">
            <div className="section-heading">
              <h2 id="projects-title">Projects</h2>
              <a className="text-link" href="#contact">Contact me</a>
            </div>
            <div className="projects__grid">
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </section>
        </main>
      </div>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <img className="contact__rings" src="/assets/images/pattern-rings.svg" alt="" />
        <div className="contact__inner shell">
          <div className="contact__copy">
            <h2 id="contact-title">Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
          </div>
          <ContactForm />
        </div>
        <footer className="site-footer shell">
          <a className="wordmark" href="#top" aria-label="Adam Keyes home">adamkeyes</a>
          <SocialLinks />
        </footer>
      </section>
    </>
  )
}
