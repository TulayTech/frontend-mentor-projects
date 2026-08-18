import { Link } from 'react-router-dom'

type LogoProps = {
  linked?: boolean
}

export function Logo({ linked = true }: LogoProps) {
  const mark = <img className="logo" src="/images/logo.svg" alt="Dine" width="103" height="40" />

  if (!linked) {
    return mark
  }

  return (
    <Link className="logo-link" to="/" aria-label="Dine home">
      {mark}
    </Link>
  )
}
