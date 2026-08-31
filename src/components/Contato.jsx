import { useState } from 'react'
import { IconPhone, IconMail, IconMapPin, IconWhatsapp } from './Icons'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [touched, setTouched] = useState({})

  const infoRef = useScrollReveal()
  const formRef = useScrollReveal()

  const validate = () => {
    const e = {}
    if (!form.nome.trim()) e.nome = 'Informe seu nome.'
    if (!form.email.trim()) e.email = 'Informe seu e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido.'
    if (!form.mensagem.trim()) e.mensagem = 'Informe sua mensagem.'
    return e
  }

  const handle = (e) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      setEnviado(true)
    }
  }

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (touched[k]) {
      const newForm = { ...form, [k]: e.target.value }
      const newErrors = {}
      if (k === 'email' && newForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newForm.email)) {
        newErrors.email = 'E-mail inválido.'
      }
      setErrors((prev) => ({ ...prev, ...newErrors, [k]: undefined }))
    }
  }

  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    const validation = validate()
    setErrors(validation)
  }

  const fieldClass = (k) => `field ${errors[k] && touched[k] ? 'field--error' : ''}`

  return (
    <section className="section contato" id="contato">
      <div className="container contato__inner">
        <div className="contato__info reveal-left" ref={infoRef}>
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

        <form className="contato__form reveal-right" ref={formRef} onSubmit={handle} noValidate>
          {enviado ? (
            <div className="contato__success">
              <h3>Mensagem enviada!</h3>
              <p>Obrigado, {form.nome || 'cliente'}. Entraremos em contato em breve.</p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setEnviado(false)
                  setForm({ nome: '', email: '', telefone: '', mensagem: '' })
                  setErrors({})
                  setTouched({})
                }}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <>
              <div className={fieldClass('nome')}>
                <label htmlFor="nome">Nome *</label>
                <input
                  id="nome"
                  value={form.nome}
                  onChange={update('nome')}
                  onBlur={blur('nome')}
                  placeholder="Seu nome"
                />
                {errors.nome && touched.nome && <span className="field__error">{errors.nome}</span>}
              </div>
              <div className={fieldClass('email')}>
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  onBlur={blur('email')}
                  placeholder="contato@emaeengtec.com.br"
                />
                {errors.email && touched.email && <span className="field__error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input id="telefone" value={form.telefone} onChange={update('telefone')} placeholder="(00) 00000-0000" />
              </div>
              <div className={fieldClass('mensagem')}>
                <label htmlFor="mensagem">O que você precisa? *</label>
                <textarea
                  id="mensagem"
                  rows="4"
                  value={form.mensagem}
                  onChange={update('mensagem')}
                  onBlur={blur('mensagem')}
                  placeholder="Equipamento médico, manutenção ou laudo"
                />
                {errors.mensagem && touched.mensagem && <span className="field__error">{errors.mensagem}</span>}
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
