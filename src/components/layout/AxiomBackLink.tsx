const AXIOM_WORK_URL = 'https://getaxiom.ca/work'

export function AxiomBackLink() {
  return (
    <a
      aria-label="Back to Axiom Web work page"
      className="axiom-back-link"
      href={AXIOM_WORK_URL}
    >
      ← Back to Axiom Web
    </a>
  )
}
