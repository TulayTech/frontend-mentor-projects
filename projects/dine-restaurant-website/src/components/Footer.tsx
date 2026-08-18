import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Logo />
        <address className="site-footer__address">
          Marthwaite, Sedbergh
          <br />
          Cumbria
          <br />
          <a href="tel:+00441234567">+00 44 123 4567</a>
        </address>
        <div className="site-footer__hours">
          <p>Open Times</p>
          <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </footer>
  )
}
