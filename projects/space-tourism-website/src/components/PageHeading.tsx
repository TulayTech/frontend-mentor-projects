export function PageHeading({ number, children }: { number: string; children: string }) {
  return <h1 className="page-heading"><span aria-hidden="true">{number}</span>{children}</h1>
}
