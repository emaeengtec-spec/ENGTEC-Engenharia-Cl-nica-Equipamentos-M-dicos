import { IconBolt, IconShield, IconTruck, IconWhatsapp, IconPhone } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
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
            <a className="btn btn--primary btn--lg" href="#equipamentos">
              Ver equipamentos
            </a>
            <a className="btn btn--ghost btn--lg" href="#servicos">
              Falar com o técnico
            </a>
          </div>

          <div className="hero__contacts">
            <a className="chip" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              <IconWhatsapp className="icon" /> WhatsApp
            </a>
            <a className="chip" href="tel:+550000000000">
              <IconPhone className="icon" /> (00) 00000-0000
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
