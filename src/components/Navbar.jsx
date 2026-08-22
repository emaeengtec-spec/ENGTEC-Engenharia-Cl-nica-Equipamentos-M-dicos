import { useState, useEffect } from 'react'
import { IconMenu, IconClose, IconWhatsapp } from './Icons'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="brand" aria-label="ENGTEC">
          <span className="brand__mark">EN</span>
          <span className="brand__text">ENGTEC</span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
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
