import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { RoofingPageHeader } from '../../components/roofing/RoofingPageHeader'
import { ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const visualOne = content.gallery.collections[2]
  const visualTwo = content.gallery.collections[5]

  return (
    <>
      <RoofingPageHeader
        actions={<ButtonLink to={routes.reservations}>Request inspection</ButtonLink>}
        description={content.about.intro}
        eyebrow="About"
        media={visualOne?.image}
        meta={['Inspection-led scope review', 'Property protection, scheduling, and closeout standards']}
        summaryItems={[
          'Built for homeowners who want clear answers before spending on major work',
          'Crew standards cover access, cleanup, communication, and handoff',
          'Roofing, roofline support, and drainage work handled as one exterior system',
        ]}
        summaryLabel="What kind of contractor this is"
        title="A roofing and exterior company built around clearer scope and tighter site standards"
      />

      <Reveal as="section" className="roof-block" variant="firm">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">How the company works</p>
          <h2 className="roof-block__title">Protection first, then scope, then execution</h2>
        </header>

        <div className="roof-story-board">
          <div className="roof-story-board__copy">
            {content.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="roof-story-board__visuals">
            {[visualOne, visualTwo].map((item) =>
              item ? (
                <figure className="roof-story-board__item" key={item.title}>
                  <img
                    alt={item.image.alt}
                    loading="lazy"
                    src={item.image.src}
                    style={item.image.position ? { objectPosition: item.image.position } : undefined}
                  />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ) : null,
            )}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Operating standards</p>
          <h2 className="roof-block__title">What Blackridge is meant to be known for</h2>
        </header>

        <div className="roof-decision-grid">
          {content.about.values.map((value, index) => (
            <Reveal
              as="article"
              className="roof-decision-card"
              delay={index * 55}
              key={value.title}
              variant="firm"
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Leadership</p>
          <h2 className="roof-block__title">Inspection, coordination, and site operations</h2>
        </header>

        <div className="roof-leadership-strip">
          {content.about.team.map((member, index) => (
            <Reveal
              as="article"
              className="roof-leadership-card"
              delay={index * 55}
              key={member.name}
              variant="firm"
            >
              <p className="roof-leadership-card__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  )
}
