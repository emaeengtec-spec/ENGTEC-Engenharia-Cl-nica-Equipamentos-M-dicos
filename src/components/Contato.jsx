import { useState } from 'react'
import { IconPhone, IconMail, IconMapPin, IconWhatsapp } from './Icons'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handle = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section className="section contato" id="contato">
      <div className="container contato__inner">
        <div className="contato__info">
          <span className="eyebrow">Fale com a gente</span>
          <h2 className="section__title">Peça um orçamento sem compromisso</h2>
          <p className="section__lead">
            Conte o que precisa: equipamento médico, manutenção ou laudo de
            engenharia clínica. Respondemos rápido por WhatsApp ou e-mail.
          </p>

          <ul className="contato__links">
            <li>
              <IconWhatsapp className="icon" />
              <a href="https://wa.me/5561994320037" target="_blank" rel="noreferrer">
                (61) 99432-0037
              </a>
            </li>
            <li>
              <IconPhone className="icon" />
              <a href="tel:+5561994320037">(61) 99432-0037</a>
            </li>
            <li>
              <IconMail className="icon" />
              <a href="mailto:emae.engtec@gmail.com">emae.engtec@gmail.com</a>
            </li>
            <li>
              <IconMapPin className="icon" />
              <span>Q 308 CJ 16 LT 21 S/N — Brasília, DF</span>
            </li>
          </ul>
        </div>

        <form className="contato__form" onSubmit={handle}>
          {enviado ? (
            <div className="contato__success">
              <h3>Mensagem enviada! 🎉</h3>
              <p>Obrigado, {form.nome || 'cliente'}. Entraremos em contato em breve.</p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setEnviado(false)
                  setForm({ nome: '', email: '', telefone: '', mensagem: '' })
                }}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <>
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" required value={form.nome} onChange={update('nome')} placeholder="Seu nome" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="voce@empresa.com" />
              </div>
              <div className="field">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input id="telefone" value={form.telefone} onChange={update('telefone')} placeholder="(00) 00000-0000" />
              </div>
              <div className="field">
                <label htmlFor="mensagem">O que você precisa?</label>
                <textarea id="mensagem" rows="4" required value={form.mensagem} onChange={update('mensagem')} placeholder="Equipamento médico, manutenção ou laudo" />
              </div>
              <button className="btn btn--primary btn--block" type="submit">
                Enviar mensagem
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
