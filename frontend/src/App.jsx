import { useEffect, useState } from 'react'
import './App.css'

const LOGO_SRC = '/assets/logo.png'
const TEST_EMAIL = 'faculty@gordoncollege.edu.ph'
const TEST_PASSWORD = 'Test123!'

function Icon({ name }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' }
  switch (name) {
    case 'dashboard':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 4h7v7H4V4Zm9 0h7v4h-7V4ZM13 10h7v11h-7V10ZM4 13h7v8H4v-8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'history':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M7 7h10M7 12h10M7 17h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'profile':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 21a8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bell':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10 19a2 2 0 0 0 4 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M7 3v3M17 3v3M4 8h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'logout':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M10 7V6a2 2 0 0 1 2-2h7v16h-7a2 2 0 0 1-2-2v-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M13 12H3m0 0 3-3M3 12l3 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'notification':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10 19a2 2 0 0 0 4 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function LoadingScreen() {
  return (
    <div className="app">
      <div className="screen loading-screen">
        <div className="screen-inner">
          <div className="loading-panel">
            <div className="logo-round">
              <img src={LOGO_SRC} alt="Gordon College logo" />
            </div>
            <div className="loading-title">Gordon College</div>
            <div className="loading-subtitle">Olongapo City</div>

            <div className="loading-meta">Faculty Administration Portal</div>

            <div className="loading-bar-wrapper">
              <div className="loading-bar" />
            </div>
            <div className="loading-percent">Loading portal data… 37%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoginScreen({ onSubmit, onFirstLogin, error }) {
  return (
    <div className="app">
      <div className="screen auth-screen">
        <div className="screen-inner">
          <div className="auth-shell">
            <section className="auth-left">
              <div className="college-brand">
                <div className="logo-round">
                  <img src={LOGO_SRC} alt="Gordon College logo" />
                </div>
                <div>
                  <div className="college-text-title">Gordon College</div>
                  <div className="college-text-sub">Olongapo City</div>
                </div>
              </div>

              <div>
                <div className="section-heading-sm">Vision</div>
                <div className="section-divider" />
                <p className="section-body">
                  A globally recognized local institution committed to innovative academic excellence,
                  holistic and sustainable development, inclusivity, and community engagement.
                </p>

                <div className="section-heading-sm">Mission</div>
                <div className="section-divider" />
                <p className="section-body">
                  Produce empowered global citizens who create sustainable impact, uphold values of
                  character, excellence, and service, and contribute to academic and societal
                  development.
                </p>

                <div className="section-heading-sm">Core Values</div>
                <div className="section-divider" />
                <ul className="values-list">
                  <li>Character — integrity, responsibility, and lifelong learning</li>
                  <li>Excellence — intellectual curiosity, innovation, and academic rigor</li>
                  <li>Service — community impact and social responsibility</li>
                </ul>
              </div>
            </section>

            <section className="auth-right">
              <div className="auth-right-inner">
                <div className="auth-right-header">
                  <div className="logo-round">
                    <img src={LOGO_SRC} alt="Gordon College seal" />
                  </div>
                  <div className="auth-badge-title">Gordon College</div>
                  <div className="auth-portal-title">Faculty Ranking Portal</div>

                  <div className="auth-main-title">Sign In</div>
                  <div className="auth-main-sub">To access the portal</div>
                </div>

                <form
                  className="auth-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.currentTarget)
                    onSubmit({
                      email: data.get('email')?.toString() ?? '',
                      password: data.get('password')?.toString() ?? '',
                    })
                  }}
                >
                  <label className="field-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="field-input"
                    placeholder="Enter your email address"
                    required
                  />

                  <label className="field-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="field-input"
                    placeholder="••••••••"
                    required
                  />

                  <div style={{ textAlign: 'right' }}>
                    <button type="button" className="link-inline" onClick={onFirstLogin}>
                      First login? Set new password
                    </button>
                  </div>

                  <div style={{ marginTop: 8, fontSize: 11, color: '#7a8572' }}>
                    Test login: <strong>{TEST_EMAIL}</strong> / <strong>{TEST_PASSWORD}</strong>
                  </div>

                  {error && (
                    <div style={{ marginTop: 8, fontSize: 11, color: '#b91c1c' }}>{error}</div>
                  )}

                  <div style={{ textAlign: 'right', marginTop: 8 }}>
                    <button type="button" className="link-inline">
                      Forgot Password?
                    </button>
                  </div>

                  <button type="submit" className="primary-btn">
                    Login
                  </button>
                </form>

                <div className="auth-footer">© 2026 Gordon College. All rights reserved.</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalShell({ onLogout }) {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [showLogout, setShowLogout] = useState(false)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  let pageTitle = 'Dashboard'
  if (activeNav === 'history') pageTitle = 'History & Logs'
  if (activeNav === 'profile') pageTitle = 'Profile'
  if (activeNav === 'notifications') pageTitle = 'Notifications'

  const formattedDate = now.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <>
      <div className="portal-root">
        <aside className="portal-sidebar">
          <div className="portal-sidebar-brand">
            <div className="portal-sidebar-logo">
              <img src={LOGO_SRC} alt="Gordon College logo" />
            </div>
            <div>
              <div className="portal-sidebar-title">Gordon College</div>
              <div className="portal-sidebar-sub">Faculty Ranking Portal</div>
            </div>
          </div>

          <nav className="portal-nav">
            <button
              className={`portal-nav-item ${
                activeNav === 'dashboard' ? 'portal-nav-item-active' : ''
              }`}
              onClick={() => setActiveNav('dashboard')}
            >
              <span className="portal-nav-icon">
                <Icon name="dashboard" />
              </span>
              Dashboard
            </button>
            <button
              className={`portal-nav-item ${
                activeNav === 'history' ? 'portal-nav-item-active' : ''
              }`}
              onClick={() => setActiveNav('history')}
            >
              <span className="portal-nav-icon">
                <Icon name="history" />
              </span>
              History
            </button>
            <button
              className={`portal-nav-item ${
                activeNav === 'profile' ? 'portal-nav-item-active' : ''
              }`}
              onClick={() => setActiveNav('profile')}
            >
              <span className="portal-nav-icon">
                <Icon name="profile" />
              </span>
              Profile
            </button>
            <button
              className={`portal-nav-item ${
                activeNav === 'notifications' ? 'portal-nav-item-active' : ''
              }`}
              onClick={() => setActiveNav('notifications')}
            >
              <span className="portal-nav-icon">
                <Icon name="notification" />
              </span>
              Notification
            </button>
          </nav>

          <div className="portal-sidebar-footer">
            <button
              type="button"
              className="portal-logout-btn"
              onClick={() => setShowLogout(true)}
            >
              <span className="portal-nav-icon">
                <Icon name="logout" />
              </span>
              Logout
            </button>
          </div>
        </aside>

        <main className="portal-main">
          <header className="portal-topbar">
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{pageTitle}</div>
              <div style={{ fontSize: 11, color: '#6b7280' }}>Faculty Member Portal</div>
            </div>
            <div className="portal-date">
              <div className="portal-date" style={{ gap: 8 }}>
                <span style={{ color: '#6b7280', display: 'inline-flex' }}>
                  <Icon name="calendar" />
                </span>
                <div>{formattedDate}</div>
              </div>
              <div
                className="portal-badge"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                aria-hidden="true"
              >
                <span style={{ color: '#6b7280', display: 'inline-flex' }}>
                  <Icon name="bell" />
                </span>
              </div>
              <div className="portal-badge" style={{ position: 'relative' }} aria-hidden="true">
                <span
                  className="portal-notification-dot"
                  style={{ position: 'absolute', top: 7, right: 6 }}
                />
              </div>
            </div>
          </header>

          <section className="portal-content">
            {activeNav === 'dashboard' && (
              <div className="portal-page">
                <div className="portal-hero">
                  <div className="portal-hero-grid">
                    <div>
                      <div className="portal-pill">1st Semester AY 2026–2027 · Open Cycle</div>
                      <div className="portal-hero-name">David Bryan B. Candido</div>
                      <div className="portal-pill-row">
                        <div className="portal-pill">Instructor I</div>
                        <div className="portal-pill">Instructor II</div>
                        <div className="portal-pill">Draft</div>
                      </div>
                      <div className="portal-hero-sub">Department of Computer Studies</div>
                    </div>
                    <div className="portal-hero-right">
                      <div className="days-left">
                        15
                        <small>days left</small>
                      </div>
                      <div className="portal-hero-deadline">
                        Submission Deadline
                        <br />
                        <strong>March 15, 2026</strong>
                      </div>
                    </div>
                  </div>

                  <div className="portal-action-bar">
                    <div>
                      <div className="portal-action-title">Ready to submit your application?</div>
                      <div className="portal-action-sub">
                        Complete all 10 areas then submit for HR &amp; VPAA review.
                      </div>
                    </div>
                    <div className="portal-action-spacer" />
                    <div className="portal-action-progress">
                      <div style={{ fontSize: 11, color: '#6b7280' }}>Overall progress</div>
                      <div className="portal-action-progress-bar">
                        <div />
                      </div>
                      <div style={{ fontWeight: 700 }}>7 / 10 areas</div>
                      <button type="button" className="portal-action-btn">
                        Submit Application
                      </button>
                    </div>
                  </div>
                </div>

                <div className="portal-dashboard-grid">
                  <div className="score-card">
                    <div className="score-card-title">Score Breakdown</div>
                    <div style={{ marginTop: 4, fontSize: 11, color: '#6b7280' }}>
                      200 point ranking system
                    </div>

                    <div className="score-total">
                      <div style={{ fontSize: 11, opacity: 0.9 }}>Your score</div>
                      <div className="score-total-value">86 / 200</div>
                      <div className="score-total-sub">Ranked as Retained (43%)</div>
                    </div>

                    <div className="score-areas">
                      {[
                        ['Educational Qualifications', 48],
                        ['Honors &amp; Awards', 17],
                        ['Teaching Experience', 15],
                        ['Performance Evaluation', 8],
                        ['Training &amp; Seminars', 4],
                        ['Expert Services Rendered', 4],
                        ['Professional Organizations', 2],
                        ['Awards of Distinction', 0],
                        ['Community Outreach', 2],
                        ['Professional Translation', 0],
                      ].map(([name, pts]) => (
                        <div className="score-area" key={name}>
                          <div>
                            <div className="score-area-name">{name}</div>
                            <div style={{ marginTop: 2, fontSize: 11, color: '#6b7280' }}>
                              {pts.toFixed ? pts.toFixed(2) : pts} pts
                            </div>
                          </div>
                          <div className="score-area-bar" aria-hidden="true">
                            <div style={{ width: `${Math.min(100, (Number(pts) / 50) * 100)}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="areas-board">
                    <div className="areas-board-header">
                      <div className="areas-chip areas-chip-active">All</div>
                      <div className="areas-chip">Submitted</div>
                      <div className="areas-chip">HR</div>
                      <div className="areas-chip">VPAA</div>
                      <div className="areas-chip">Pending</div>
                    </div>

                    <div className="area-card">
                      <div className="area-card-top">
                        <div className="area-code">AREA I</div>
                        <div className="areas-chip" style={{ background: '#fff1cd', color: '#916200' }}>
                          Draft
                        </div>
                      </div>
                      <div className="area-title">Educational Qualifications</div>
                      <div className="area-sub">
                        Upload scanned academic records and supporting documents for your degrees.
                      </div>
                      <div className="area-actions">
                        <button type="button" className="area-btn">
                          View
                        </button>
                        <button type="button" className="area-btn area-btn-primary">
                          Submit Area
                        </button>
                      </div>
                    </div>

                    <div className="area-card">
                      <div className="area-card-top">
                        <div className="area-code">AREA II</div>
                        <div className="areas-chip" style={{ background: '#e5f6e9', color: '#1a7a44' }}>
                          Submitted
                        </div>
                      </div>
                      <div className="area-title">Honors &amp; Awards</div>
                      <div className="area-sub">
                        Provide certificates for awards and recognitions that contribute to your score.
                      </div>
                      <div className="area-actions">
                        <button type="button" className="area-btn">
                          View
                        </button>
                        <button type="button" className="area-btn area-btn-primary">
                          Submit Area
                        </button>
                      </div>
                    </div>

                    <div className="area-card">
                      <div className="area-card-top">
                        <div className="area-code">AREA III</div>
                        <div className="areas-chip" style={{ background: '#e5e7eb', color: '#4b5563' }}>
                          Pending
                        </div>
                      </div>
                      <div className="area-title">Teaching Experience</div>
                      <div className="area-sub">
                        Add your teaching years and attach proof of appointment or service records.
                      </div>
                      <div className="area-actions">
                        <button type="button" className="area-btn">
                          View
                        </button>
                        <button type="button" className="area-btn area-btn-primary">
                          Submit Area
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeNav === 'history' && (
              <>
                <div className="portal-panel">
                  <h3 style={{ margin: 0, fontSize: 16 }}>Ranking Cycle History</h3>
                  <p style={{ marginTop: 4, fontSize: 12 }}>
                    All cycles you have participated in or that are currently open.
                  </p>

                  <div className="portal-history-grid" style={{ marginTop: 16 }}>
                    <div className="portal-history-card">
                      <div style={{ fontSize: 13, fontWeight: 600 }}>
                        1st Semester AY 2026–2027
                      </div>
                      <div style={{ marginTop: 2, fontSize: 11 }}>Current cycle · Open</div>
                      <div style={{ marginTop: 8 }}>
                        <span className="portal-tag portal-tag-green">In Progress</span>
                      </div>
                    </div>
                    <div className="portal-history-card">
                      <div style={{ fontSize: 13, fontWeight: 600 }}>
                        2nd Semester AY 2025–2026
                      </div>
                      <div style={{ marginTop: 2, fontSize: 11 }}>Completed · 86 / 200</div>
                      <div style={{ marginTop: 8 }}>
                        <span className="portal-tag portal-tag-amber">Published</span>
                      </div>
                    </div>
                    <div className="portal-history-card">
                      <div style={{ fontSize: 13, fontWeight: 600 }}>
                        1st Semester AY 2025–2026
                      </div>
                      <div style={{ marginTop: 2, fontSize: 11 }}>Completed · 74 / 200</div>
                      <div style={{ marginTop: 8 }}>
                        <span className="portal-tag portal-tag-grey">Retained</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portal-panel" style={{ marginTop: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 16 }}>Submission & Review Log</h3>
                  <p style={{ marginTop: 4, fontSize: 12 }}>
                    Full activity trail across all ranking cycles.
                  </p>
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Date &amp; Time</th>
                        <th>Cycle</th>
                        <th>Area / Description</th>
                        <th>Change By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Feb 28, 2026 · 7:45 PM</td>
                        <td>1st Sem AY 2026–27</td>
                        <td>File Upload</td>
                        <td>D. Candido</td>
                      </tr>
                      <tr>
                        <td>Feb 27, 2026 · 3:10 PM</td>
                        <td>1st Sem AY 2026–27</td>
                        <td>Submitted application</td>
                        <td>D. Candido</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeNav === 'profile' && (
              <div className="portal-page">
                <div className="profile-hero">
                  <div className="profile-hero-top">
                    <div className="profile-hero-left">
                      <div className="profile-avatar">DB</div>
                      <div>
                        <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.85 }}>
                          Faculty Profile · Read-only · Managed by HR
                        </div>
                        <div className="profile-hero-name">David Bryan B. Candido</div>
                        <div className="profile-chips">
                          <span className="profile-chip">Instructor I</span>
                          <span className="profile-chip">Department of Computer Studies</span>
                          <span className="profile-chip">202011090@gordoncollege.edu.ph</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: 11, opacity: 0.95 }}>
                      <div style={{ fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        Account Status
                      </div>
                      <div style={{ marginTop: 6 }}>
                        <strong>Active</strong>
                      </div>
                      <div style={{ marginTop: 10, opacity: 0.9 }}>
                        Member since
                        <br />
                        <strong>June 12, 2020</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-grid">
                  <div className="profile-card" style={{ gridColumn: 'span 2' }}>
                    <h3>Personal Information</h3>
                    <div className="profile-kv">
                      <div>
                        <label>Last Name</label>
                        Candido
                      </div>
                      <div>
                        <label>First Name</label>
                        David Bryan
                      </div>
                      <div>
                        <label>Middle Name</label>
                        B.
                      </div>
                      <div>
                        <label>Domain Email</label>
                        202011090@gordoncollege.edu.ph
                      </div>
                      <div>
                        <label>Department</label>
                        Computer Studies
                      </div>
                    </div>
                  </div>

                  <div className="profile-card">
                    <h3>Experience</h3>
                    <div className="profile-kv" style={{ gridTemplateColumns: '1fr' }}>
                      <div>
                        <label>Teaching Experience</label>6 years
                      </div>
                      <div>
                        <label>Nature of Appointment</label>3 years
                      </div>
                    </div>
                  </div>

                  <div className="profile-card profile-wide">
                    <h3>Rank &amp; Employment</h3>
                    <div className="profile-kv">
                      <div>
                        <label>Present Faculty Rank</label>Instructor I
                      </div>
                      <div>
                        <label>Nature of Appointment</label>Full-time Permanent
                      </div>
                      <div>
                        <label>Current Salary</label>₱ 32,053.00
                      </div>
                      <div>
                        <label>Date of Last Promotion</label>June 12, 2020
                      </div>
                      <div>
                        <label>Applying For (Current Cycle)</label>Instructor II
                      </div>
                    </div>
                  </div>

                  <div className="profile-card" style={{ gridColumn: 'span 2' }}>
                    <h3>Educational Attainment</h3>
                    <div style={{ marginTop: 12, fontSize: 12, color: '#111827' }}>
                      <div style={{ marginBottom: 10 }}>
                        <strong>Bachelor of Science in Computer Science</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Gordon College · 2014</div>
                      </div>
                      <div style={{ marginBottom: 10 }}>
                        <strong>Master of Science in Information Technology</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Pamantasan ng Lungsod ng Maynila · 2019</div>
                      </div>
                      <div>
                        <strong>Doctorate</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Not yet obtained</div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-card">
                    <h3>Eligibility &amp; Licensure Examinations</h3>
                    <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 12, color: '#111827' }}>
                      <li>Civil Service Professional (CSC) — Passed 2014</li>
                      <li>Electronics Engineer (ECE Board) — Passed 2015</li>
                    </ul>
                  </div>

                  <div className="profile-card" style={{ gridColumn: 'span 3' }}>
                    <h3>Faculty Performance Rating</h3>
                    <div className="profile-kv">
                      <div>
                        <label>Overall Ratings</label>
                        <strong>4.52</strong>
                      </div>
                      <div>
                        <label>Rating Description</label>
                        <span style={{ padding: '6px 10px', borderRadius: 999, background: '#e5f6e9', color: '#1a7a44', fontSize: 12 }}>
                          Outstanding
                        </span>
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <label>Source</label>
                        Auto-populated from student evaluation CSV · AY 2025–2026, 1st Semester
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeNav === 'notifications' && (
              <div className="portal-panel">
                <h3 style={{ margin: 0, fontSize: 16 }}>Notifications</h3>
                <p style={{ marginTop: 4, fontSize: 12 }}>
                  All alerts, reminders, and system updates.
                </p>

                <div className="portal-notif-list">
                  <div className="portal-notif-item">
                    <div className="portal-notif-icon" />
                    <div>
                      <div className="portal-notif-title">
                        Deadline Reminder — 15 days remaining
                      </div>
                      <div className="portal-notif-meta">
                        You have 3 areas pending submission. Complete your application before March
                        15, 2026.
                      </div>
                    </div>
                  </div>
                  <div className="portal-notif-item">
                    <div className="portal-notif-icon" />
                    <div>
                      <div className="portal-notif-title">
                        Ranking Cycle Now Open — 1st Semester AY 2026–2027
                      </div>
                      <div className="portal-notif-meta">
                        The HR Department has opened the ranking cycle. Upload documents for all 10
                        areas.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>

      {showLogout && (
        <div className="portal-modal-backdrop">
          <div className="portal-modal">
            <div className="portal-badge" style={{ margin: '0 auto' }} />
            <div className="portal-modal-title">Log Out?</div>
            <div className="portal-modal-body">
              You will be returned to the login page. Any unsaved progress will remain as is.
            </div>
            <div className="portal-modal-actions">
              <button
                type="button"
                className="portal-btn-secondary"
                onClick={() => setShowLogout(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="portal-btn-danger"
                onClick={() => {
                  setShowLogout(false)
                  onLogout()
                }}
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function PasswordScreen() {
  return (
    <div className="app">
      <div className="screen auth-screen">
        <div className="screen-inner">
          <div className="auth-shell">
            <section className="auth-left">
              <div className="college-brand">
                <div className="logo-round">
                  <img src={LOGO_SRC} alt="Gordon College logo" />
                </div>
                <div>
                  <div className="college-text-title">Gordon College</div>
                  <div className="college-text-sub">Olongapo City</div>
                </div>
              </div>

              <div className="password-banner">
                <div className="password-banner-title">Security First</div>
                <div className="password-banner-body">
                  You are currently using a temporary password assigned by the HR office. For the
                  security of your account and the faculty portal, you must create a new personal
                  password before proceeding.
                </div>
              </div>

              <div className="requirements-title">Password Requirements</div>
              <ul className="requirements-list">
                <li>At least 8 characters long</li>
                <li>Contains an uppercase letter (A–Z)</li>
                <li>Contains a lowercase letter (a–z)</li>
                <li>Contains a number (0–9)</li>
                <li>Contains a special character (!@#$%^&amp;*)</li>
                <li>New password and confirmation match</li>
              </ul>
            </section>

            <section className="auth-right">
              <div className="auth-right-header" style={{ alignItems: 'flex-start' }}>
                <div className="logo-round">
                  <img src={LOGO_SRC} alt="Gordon College seal" />
                </div>
                <div className="auth-badge-title">Gordon College</div>
                <div className="auth-portal-title">Faculty Ranking Portal</div>

                <div style={{ marginTop: 24 }}>
                  <span className="status-pill">First login — action required</span>
                </div>

                <div className="auth-main-title" style={{ alignSelf: 'flex-start' }}>
                  Set New Password
                </div>
                <div className="auth-main-sub" style={{ alignSelf: 'flex-start' }}>
                  Replace your temporary password to activate your account.
                </div>
              </div>

              <div className="user-chip">
                <div className="user-avatar" />
                <div>
                  <div className="user-chip-main">David Bryan B. Candido</div>
                  <div className="user-chip-sub">202011090@gordoncollege.edu.ph</div>
                </div>
              </div>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <label className="field-label" htmlFor="tempPassword">
                  Temporary Password
                </label>
                <input
                  id="tempPassword"
                  type="password"
                  className="field-input"
                  placeholder="Enter your temporary password"
                  required
                />

                <label className="field-label" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  className="field-input"
                  placeholder="Create a strong password"
                  required
                />

                <label className="field-label" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="field-input"
                  placeholder="Re-enter your new password"
                  required
                />

                <button type="submit" className="primary-btn">
                  Update Password
                </button>
              </form>

              <div className="auth-footer">© 2026 Gordon College. All rights reserved.</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('loading')
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (screen !== 'loading') return
    const id = setTimeout(() => setScreen('login'), 2500)
    return () => clearTimeout(id)
  }, [screen])

  if (screen === 'loading') {
    return <LoadingScreen />
  }

  if (screen === 'password') {
    return <PasswordScreen />
  }

  if (screen === 'portal') {
    return <PortalShell onLogout={() => setScreen('login')} />
  }

  return (
    <LoginScreen
      onSubmit={({ email, password }) => {
        if (email === TEST_EMAIL && password === TEST_PASSWORD) {
          setLoginError('')
          setScreen('portal')
        } else {
          setLoginError('Invalid test credentials. Use the sample provided above.')
        }
      }}
      onFirstLogin={() => setScreen('password')}
      error={loginError}
    />
  )
}

export default App
