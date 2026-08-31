import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconMenu, IconClose, IconWhatsapp } from './Icons'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/admin', label: 'Admin', admin: true },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isAdmin =
    typeof window !== 'undefined' &&
    sessionStorage.getItem('engtec_admin_auth') === '1'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="brand brand--text" aria-label="EMAE ENGTEC" onClick={() => setOpen(false)}>
          <span className="brand__name">EMAE <strong>ENGTEC</strong></span>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links
            .filter((l) => !l.admin || isAdmin)
            .map((l) =>
              l.to ? (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.href}
                  to={'/' + l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            )}
          <a
            className="btn btn--primary nav__cta"
            href="https://wa.me/5561994320037"
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsapp className="icon" /> Orçamento
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <IconClose className="icon" /> : <IconMenu className="icon" />}
        </button>
      </div>
    </header>
  )
}
