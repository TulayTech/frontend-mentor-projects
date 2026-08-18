import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { PageMeta } from '../components/PageMeta'
import { ReservationForm } from '../components/ReservationForm'

export function BookingPage() {
  return (
    <>
      <PageMeta
        title="Reservations | Dine"
        description="Request a table at Dine for seasonal farmhouse dining in beautiful country surroundings."
      />
      <main id="main-content" className="booking-page">
        <section className="booking-hero" aria-labelledby="booking-title">
          <div className="container booking-hero__inner">
            <Logo />
            <div className="booking-hero__copy">
              <h1 id="booking-title">Reservations</h1>
              <p>
                We can’t wait to host you. If you have any special requirements please feel free to
                call on the phone number below. We’ll be happy to accommodate you.
              </p>
            </div>
          </div>
        </section>
        <section className="booking-form-section" aria-label="Request a reservation">
          <div className="container booking-form-section__inner">
            <ReservationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
