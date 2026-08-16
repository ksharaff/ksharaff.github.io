import { useMemo, useState } from 'react'
import showcases from '../data/showcases'

export function ShowcasesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(showcases.map((s) => s.category)))],
    []
  )

  return (
    <section className="snap-section showcases" id="showcases">
      <div className="showcase-container">
        <div className="showcase-head">
          <div className="section-title">Projects</div>
        </div>

        <div className="showcase-carousel">
          <div className="showcase-filters-wrap">
            <div className="showcase-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'active' : ''}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="showcase-grid">
            {showcases
              .filter((s) => selectedCategory === 'All' || s.category === selectedCategory)
              .map((item, index) => (
              <article className="showcase-card" key={item.title}>
                <div className="showcase-media">
                  <a
                    className="media-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title}`}
                  >
                    <img src={item.image} alt={item.title} />
                    {index === showcases.length - 1 && (
                      <div className="nav-arrow">›</div>
                    )}
                  </a>
                  <div className="tech-chips" aria-label="Tech stack">
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="showcase-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    className="pill-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


