import { EarlyAccessForm } from './components/EarlyAccessForm'
import { SocialIcon } from './components/SocialIcon'

const features = [
  {
    icon: '/images/icon-access-anywhere.svg',
    title: 'Access your files, anywhere',
    text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: '/images/icon-security.svg',
    title: 'Security you can trust',
    text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: '/images/icon-collaboration.svg',
    title: 'Real-time collaboration',
    text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: '/images/icon-any-file.svg',
    title: 'Store any type of file',
    text: 'Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.',
  },
]

const testimonials = [
  { name: 'Satish Patel', image: '/images/profile-1.jpg' },
  { name: 'Bruce McKenzie', image: '/images/profile-2.jpg' },
  { name: 'Iva Boyd', image: '/images/profile-3.jpg' },
]

const footerGroups = [
  [
    ['About Us', '#features'],
    ['Jobs', '#early-access'],
    ['Press', '#team'],
    ['Blog', '#main-content'],
  ],
  [
    ['Contact Us', 'mailto:example@fylo.com'],
    ['Terms', '#early-access'],
    ['Privacy', '#early-access'],
  ],
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a href="#main-content" aria-label="Fylo home">
          <img src="/images/logo.svg" alt="" width="176" height="52" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#early-access">Sign In</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero__image"
            src="/images/illustration-intro.png"
            alt="People organizing documents in a secure digital folder"
          />
          <div className="hero__copy">
            <h1 id="hero-title">All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores all your most important files in one secure location. Access them wherever
              you need, share and collaborate with friends family, and co-workers.
            </p>
            <a className="button" href="#early-access">
              Get Started
            </a>
          </div>
        </section>

        <section className="features" id="features" aria-label="Fylo features">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <div className="feature__icon">
                <img src={feature.icon} alt="" />
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="productive" aria-labelledby="productive-title">
          <img
            className="productive__image"
            src="/images/illustration-stay-productive.png"
            alt="A team collaborating through shared messages"
          />
          <div className="productive__copy">
            <h2 id="productive-title">Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has you covered for all
              of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and colleagues for live
              collaboration. No email attachments required.
            </p>
            <a className="productive__link" href="#features">
              See how Fylo works <img src="/images/icon-arrow.svg" alt="" />
            </a>
          </div>
        </section>

        <section className="testimonials" id="team" aria-label="Customer testimonials">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.name}>
              <blockquote>
                Fylo has improved our team productivity by an order of magnitude. Since making the
                switch our team has become a well-oiled collaboration machine.
              </blockquote>
              <figcaption>
                <img src={testimonial.image} alt="" />
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>Founder &amp; CEO, Huddle</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="early-access" id="early-access" aria-labelledby="early-access-title">
          <h2 id="early-access-title">Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is extremely generous. If you
            have any questions, our support team would be happy to help you.
          </p>
          <EarlyAccessForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <img className="site-footer__logo" src="/images/logo.svg" alt="Fylo" />
          <div className="site-footer__grid">
            <p className="contact contact--location">
              <img src="/images/icon-location.svg" alt="" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </span>
            </p>
            <div className="contact-list">
              <a className="contact" href="tel:+15431234567">
                <img src="/images/icon-phone.svg" alt="" />
                <span>+1-543-123-4567</span>
              </a>
              <a className="contact" href="mailto:example@fylo.com">
                <img src="/images/icon-email.svg" alt="" />
                <span>example@fylo.com</span>
              </a>
            </div>
            {footerGroups.map((group, index) => (
              <nav key={index} aria-label={`Footer navigation ${index + 1}`}>
                {group.map(([label, href]) => (
                  <a key={label} href={href}>
                    {label}
                  </a>
                ))}
              </nav>
            ))}
            <div className="socials" aria-label="Social media links">
              <SocialIcon label="Facebook" href="https://www.facebook.com/">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
              </SocialIcon>
              <SocialIcon label="X" href="https://x.com/">
                <path d="M18.3 4H21l-5.9 6.7L22 20h-5.4l-4.2-5.5L7.6 20H4.9l6.2-7.1L4.5 4H10l3.8 5 4.5-5Zm-.9 14h1.5L9.2 5.9H7.6L17.4 18Z" />
              </SocialIcon>
              <SocialIcon label="Instagram" href="https://www.instagram.com/">
                <path d="M12 7.8A4.2 4.2 0 1 0 12 16a4.2 4.2 0 0 0 0-8.3Zm0 6.8a2.6 2.6 0 1 1 0-5.3 2.6 2.6 0 0 1 0 5.3Zm5.5-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.3 8c-.1-1.3-.4-2.4-1.3-3.3-.9-.9-2-1.2-3.3-1.3-1.4-.1-5.5-.1-6.9 0C7.4 3.5 6.4 3.8 5.5 4.7c-.9.9-1.2 2-1.3 3.3-.1 1.4-.1 5.5 0 6.9.1 1.3.4 2.4 1.3 3.3.9.9 2 1.2 3.3 1.3 1.4.1 5.5.1 6.9 0 1.3-.1 2.4-.4 3.3-1.3.9-.9 1.2-2 1.3-3.3.1-1.4.1-5.5 0-6.9Zm-2 8.4c-.3.8-.9 1.4-1.7 1.7-1.1.4-3.9.3-4.6.3s-3.5.1-4.6-.3A2.8 2.8 0 0 1 5.7 16c-.4-1.1-.3-3.9-.3-4.6s-.1-3.5.3-4.6c.3-.8.9-1.4 1.7-1.7 1.1-.4 3.9-.3 4.6-.3s3.5-.1 4.6.3c.8.3 1.4.9 1.7 1.7.4 1.1.3 3.9.3 4.6s.1 3.5-.3 4.6Z" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
