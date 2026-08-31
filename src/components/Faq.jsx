import { useState, useRef } from 'react'
import { IconChevron } from './Icons'
import useScrollReveal from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Os equipamentos médicos seminovos têm garantia?',
    a: 'Sim! Todos os nossos equipamentos seminovos acompanham garantia padrão de 90 dias, com possibilidade de extensão para até 12 meses, dependendo do modelo e contrato de adesão.',
  },
  {
    q: 'Qual é o processo de revisão e segurança dos equipamentos?',
    a: 'Todos os equipamentos passam por rigorosos testes de funcionamento, processo completo de calibração com emissão de laudo de engenharia clínica e ensaios de segurança elétrica antes da entrega.',
  },
  {
    q: 'Vocês também trabalham com equipamentos novos?',
    a: 'Sim! Comercializamos equipamentos novos. Entre em contato conosco para consultar a disponibilidade e a solução ideal para a sua necessidade.',
  },
  {
    q: 'Vocês fornecem peças de reposição e acessórios?',
    a: 'Sim. Vendemos peças de reposição, acessórios médicos e kits completos para manutenção preventiva programada.',
  },
  {
    q: 'Vocês realizam a instalação e desinstalação de foco cirúrgico?',
    a: 'Sim. Executamos a instalação técnica e a desinstalação segura do seu foco cirúrgico, realizando o embalamento e acondicionamento adequados para transporte ou armazenamento posterior.',
  },
  {
    q: 'Como funciona o atendimento e a calibração de engenharia clínica?',
    a: 'Realizamos atendimento na nossa oficina técnica ou in loco (no próprio hospital ou clínica). Emitimos documentação técnica com calibração rastreada e laudos em conformidade com as normas da ANVISA.',
  },
]

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const ref = useScrollReveal()

  return (
    <div
      className={`faq__item ${open ? 'faq__item--open' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <button className="faq__question" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <IconChevron className="icon faq__chevron" />
      </button>
      <div className="faq__answer-wrap" ref={contentRef}>
        <div className="faq__answer">{a}</div>
      </div>
    </div>
  )
}

export default function Faq() {
  const headRef = useScrollReveal()

  return (
    <section className="section faq" id="faq">
      <div className="container container--narrow">
        <div className="section__head reveal" ref={headRef}>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section__title">Dúvidas comuns</h2>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
