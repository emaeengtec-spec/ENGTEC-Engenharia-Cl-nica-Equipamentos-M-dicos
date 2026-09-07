import { Link } from 'react-router-dom'
import { IconBolt, IconShield, IconTruck, IconWhatsapp, IconPhone } from './Icons'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroParticles />
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__logo-wrap" aria-hidden="true">
            <div className="hero__logo-ring hero__logo-ring--1" />
            <div className="hero__logo-ring hero__logo-ring--2" />
            <div className="hero__logo-ring hero__logo-ring--3" />
            <img
              className="hero__logo-img"
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="EMAE ENGTEC logo"
              draggable="false"
            />
          </div>
          <span className="badge">Equipamentos médicos seminovos + Engenharia clínica</span>
          <h1 className="hero__title">
            Tecnologia médica que <span className="accent">custa menos</span> e salva vidas
          </h1>
          <p className="hero__subtitle">
            Na ENGTEC você encontra equipamentos médicos seminovos revisados,
            com garantia e laudo de engenharia clínica, além de assistência
            técnica especializada para manter seu hospital ou clínica operando.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" to="/#equipamentos">
              Ver equipamentos
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/#servicos">
              Falar com o técnico
            </Link>
          </div>

          <div className="hero__contacts">
            <a className="chip" href="https://wa.me/5561994320037" target="_blank" rel="noreferrer">
              <IconWhatsapp className="icon" /> WhatsApp
            </a>
            <a className="chip" href="tel:+5561994320037">
              <IconPhone className="icon" /> (61) 99432-0037
            </a>
          </div>
        </div>

        <ul className="hero__stats">
          <li>
            <IconShield className="icon" />
            <strong>Garantia</strong>
            <span>de até 12 meses em equipamentos médicos</span>
          </li>
          <li>
            <IconTruck className="icon" />
            <strong>Entrega</strong>
            <span>e instalação em hospitais e clínicas</span>
          </li>
          <li>
            <IconBolt className="icon" />
            <strong>Atendimento</strong>
            <span>de engenharia clínica ágil</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
