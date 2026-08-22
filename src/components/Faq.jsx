import { useState } from 'react'
import { IconChevron } from './Icons'

const faqs = [
  {
    q: 'Os equipamentos médicos seminovos têm garantia?',
    a: 'Sim. Todos os equipamentos revisados pela ENGTEC possuem garantia de até 12 meses, com laudo de engenharia clínica e testes de segurança antes da entrega.',
  },
  {
    q: 'Vocês atendem outras cidades ou estados?',
    a: 'Atendemos hospitais e clínicas em todo o Brasil, com instalação, comissionamento e manutenção in loco quando necessário.',
  },
  {
    q: 'Como funciona a engenharia clínica e calibração?',
    a: 'Realizamos manutenção preventiva e corretiva, calibração rastreada, laudos técnicos e gestão do ciclo de vida dos equipamentos.',
  },
  {
    q: 'Posso vender ou dar consignação do meu equipamento usado?',
    a: 'Sim. Avaliamos equipamentos médicos seminovos para compra ou consignação. Fale com a gente para uma avaliação.',
  },
  {
    q: 'Trabalham com nota fiscal e pregão/licitação?',
    a: 'Sim. Emitimos nota fiscal e atendemos compras governamentais, pregões e licitações. Consulte nossos consultores.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <IconChevron className="icon faq__chevron" />
      </button>
      {open && <div className="faq__answer">{a}</div>}
    </div>
  )
}

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container container--narrow">
        <div className="section__head">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section__title">Dúvidas comuns</h2>
        </div>

        <div className="faq__list">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
