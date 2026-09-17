import { useEffect, useState } from 'react'
import '../css/App.css'
import SnowFall from 'react-snowfall'
import profileImage from '../assets/profile.webp'
import { ShowcasesSection } from './Showcases'


type SocialName = 'linkedin' | 'github' | 'mail'

const socials: { label: string; href: string; icon: SocialName }[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khaled-sharafeddin', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/ksharaff', icon: 'github' },
  { label: 'Email', href: 'mailto:khaled.sharafeddin@outlook.com', icon: 'mail' },
]

const SocialIcon = ({ name }: { name: SocialName }) => {
  switch (name) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M5.2 8.6H2.5v12.8h2.7zM3.8 3.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM12.9 13c0-1.1.6-1.9 1.7-1.9.9 0 1.3.6 1.5 1.2.1.2.1.5.1.7v8.4h2.7v-8.9c0-2.4-1.3-3.6-3.1-3.6-1.5 0-2.2.8-2.6 1.4v-1.1h-2.7v12.2h2.7z" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M12 2.4a9.6 9.6 0 0 0-3 18.7c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.8-.6 0-.6 0-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.3-2.2-.3-4.6-1.1-4.6-5a3.8 3.8 0 0 1 1-2.6 3.4 3.4 0 0 1 .1-2.6s.8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.4 3.4 0 0 1 .1 2.6 3.8 3.8 0 0 1 1 2.6c0 3.9-2.4 4.7-4.6 5 .3.2.7.8.7 1.7v2.5c0 .3.2.6.7.5A9.6 9.6 0 0 0 12 2.4z" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M4 6.2h16c.6 0 1 .5 1 1v9.6c0 .5-.4 1-1 1H4c-.6 0-1-.5-1-1V7.2c0-.5.4-1 1-1zm0 2.1v7.5h16V8.3l-7.4 4.3a1.8 1.8 0 0 1-1.7 0z" />
        </svg>
      )
    default:
      return null
  }
}

// Data and components are now in separate files for code-splitting

function App() {
  const [activeSection, setActiveSection] = useState<'profile' | 'showcases'>('profile')
  const [snowCount, setSnowCount] = useState(200)

  // Update active nav link based on visible section
  useEffect(() => {
    const profile = document.getElementById('profile')
    const showcases = document.getElementById('showcases')
    if (!profile || !showcases) return

    const visibility = new Map<string, number>([
      ['profile', 0],
      ['showcases', 0],
    ])

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        const profileRatio = visibility.get('profile') ?? 0
        const showcasesRatio = visibility.get('showcases') ?? 0
        setActiveSection(showcasesRatio > profileRatio ? 'showcases' : 'profile')
      },
      {
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.7],
        rootMargin: '-18% 0px -30% 0px',
      }
    )

    observer.observe(profile)
    observer.observe(showcases)

    return () => observer.disconnect()
  }, [])

  // Adaptive snowfall for mobile and reduced motion
  useEffect(() => {
    const updateSnow = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const w = window.innerWidth
      const isSmall = w < 768
      setSnowCount(prefersReducedMotion ? 0 : isSmall ? 50 : 100)
    }
    updateSnow()
    window.addEventListener('resize', updateSnow)
    return () => window.removeEventListener('resize', updateSnow)
  }, [])

  return (
    <div className="page">
      {snowCount > 0 && (
        <SnowFall
          color="white"
          snowflakeCount={snowCount}
          style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1 }}
        />
      )}
      <div className="page-content">
      <header className="top-bar">
        <div className="brand">
          <div>Khaled</div>
          <div>Sharafeddin.</div>
        </div>
        <nav className="nav">
          <a className={activeSection === 'profile' ? 'active' : ''} href="#profile">
            Profile
          </a>
          <a className={activeSection === 'showcases' ? 'active' : ''} href="#showcases">
            Projects
          </a>
        </nav>
      </header>
      <main className="snap-section hero" id="profile">
        <div className="parallax-bg" aria-hidden />
        <div className="left-rail" aria-hidden>
          <span />
          <span />
          <span />
          <span />
        </div>

        <section className="intro">
          <p className="eyebrow">Hello,</p>
          <h1>
            My name is <span className="highlight">Khaled</span>
          </h1>
          <p className="body-text">
            My interests include Data Analysis & Engineering, Cybersecurity, and creating digital infrastructure.
          </p>
      
          <a
            className="resume"
            href={encodeURI('/SE Resume- Khaled Sharafeddin.pdf')}
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>

          
        </section>

        <section className="portrait" aria-label="Profile photo">
          <div className="photo-frame">
            <img
              src={profileImage}
              alt="Khaled Sharafeddin"
              width={800}
              height={1422}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="photo-shadow" />
          <div className="portrait-socials" aria-label="Social links">
            {socials.map((item) => (
              <a
                key={item.label}
                className="social-chip"
                href={item.href}
                aria-label={item.label}
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </section>

        <div className="scroll-cue" aria-hidden>
          <span>Scroll Down</span>
          <div className="cue-line" />
        </div>
      </main>

      <ShowcasesSection />

      {/* Contact section removed as requested */}
      </div>
    </div>
  )
}

export default App
