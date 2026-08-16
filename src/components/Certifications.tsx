import certifications from '../data/certifications'

export function CertificationsSection() {
  return (
    <section className="snap-section showcases certifications" id="certifications">
      <div className="showcase-container">
        <div className="showcase-head">
          <div className="section-title">Certifications</div>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <a
              className="cert-link"
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
            >
              <article className="cert-card">
                <div className="showcase-body" style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                  {cert.logo && (
                    <div className="cert-logo-wrap">
                      <img src={cert.logo} alt={`${cert.title} logo`} className="cert-logo" />
                    </div>
                  )}
                  <div>
                    <h3>{cert.title}</h3>
                    <p className="muted">{cert.issuer} • {cert.date}</p>
                    <span className="pill-link">View Certificate</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
