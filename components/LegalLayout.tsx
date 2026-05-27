import React from 'react'

/**
 * Sdílený layout pro všechny tři právní stránky (OP, GDPR, Cookies).
 * Drží vizuál webu (Syne nadpisy, var(--ink) text), ale s typografií
 * uzpůsobenou pro delší dokumenty: užší sloupec, kotevní obsah, číslované oddíly.
 */
export default function LegalLayout({
  eyebrow,
  title,
  intro,
  effectiveFrom,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  intro: React.ReactNode
  effectiveFrom: string
  children: React.ReactNode
}) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-orb" />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>
            {eyebrow}
          </p>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-sub" style={{ maxWidth: 640 }}>
            {intro}
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          <article className="legal-doc">
            {children}
            <p className="legal-effective">Účinné od {effectiveFrom}.</p>
          </article>
        </div>
      </section>

      <style>{`
        .legal-doc {
          max-width: 760px;
          font-size: 1rem;
          line-height: 1.78;
          color: var(--ink-s);
        }
        .legal-doc h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.3rem, 2.2vw, 1.65rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 56px 0 20px;
          scroll-margin-top: 100px;
        }
        .legal-doc h2:first-child { margin-top: 0; }
        .legal-doc h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ink);
          margin: 36px 0 14px;
        }
        .legal-doc p { margin: 0 0 16px; }
        .legal-doc p.lead {
          font-size: 1.05rem;
          color: var(--ink);
        }
        .legal-doc ul {
          margin: 0 0 20px;
          padding-left: 22px;
        }
        .legal-doc li {
          margin: 0 0 8px;
        }
        .legal-doc a {
          color: var(--ink);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          text-decoration-color: var(--orchid);
        }
        .legal-doc a:hover { color: var(--orchid); }
        .legal-doc strong { color: var(--ink); font-weight: 600; }
        .legal-doc table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0 28px;
          font-size: 0.92rem;
        }
        .legal-doc th, .legal-doc td {
          text-align: left;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(28,28,30,.08);
          vertical-align: top;
        }
        .legal-doc th {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: var(--ink);
          background: rgba(28,28,30,.03);
        }
        .legal-doc .toc {
          background: rgba(28,28,30,.04);
          padding: 22px 26px;
          border-radius: 4px;
          margin: 0 0 48px;
        }
        .legal-doc .toc p {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--ink);
          margin: 0 0 12px;
        }
        .legal-doc .toc ol {
          margin: 0;
          padding-left: 22px;
          font-size: 0.92rem;
          line-height: 1.9;
        }
        .legal-doc .toc a {
          color: var(--ink-s);
          text-decoration: none;
        }
        .legal-doc .toc a:hover {
          color: var(--ink);
        }
        .legal-doc .clause-num {
          display: inline-block;
          min-width: 32px;
          font-variant-numeric: tabular-nums;
          color: var(--ink);
          font-weight: 500;
        }
        .legal-doc .clause {
          margin: 0 0 14px;
          padding-left: 0;
        }
        .legal-doc .annex {
          background: rgba(28,28,30,.04);
          padding: 24px 28px;
          border-radius: 4px;
          margin: 24px 0;
          font-size: 0.95rem;
        }
        .legal-doc .annex p { margin: 0 0 10px; }
        .legal-effective {
          margin-top: 64px !important;
          padding-top: 24px;
          border-top: 1px solid rgba(28,28,30,.08);
          font-size: 0.88rem;
          color: var(--ink-s);
          font-style: italic;
        }
        @media (max-width: 720px) {
          .legal-doc { font-size: 0.96rem; }
          .legal-doc table { font-size: 0.85rem; }
          .legal-doc th, .legal-doc td { padding: 8px; }
        }
      `}</style>
    </>
  )
}
