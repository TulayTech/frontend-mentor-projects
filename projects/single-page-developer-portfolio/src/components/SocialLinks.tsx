const links = [
  ['GitHub', 'https://github.com/', 'icon-github.svg'],
  ['Frontend Mentor', 'https://www.frontendmentor.io/', 'icon-frontend-mentor.svg'],
  ['LinkedIn', 'https://www.linkedin.com/', 'icon-linkedin.svg'],
  ['X', 'https://x.com/', 'icon-twitter.svg'],
]

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social links">
      {links.map(([label, href, icon]) => (
        <a key={label} href={href} aria-label={label}>
          <img src={`/assets/images/${icon}`} alt="" />
        </a>
      ))}
    </nav>
  )
}
