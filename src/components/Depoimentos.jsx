import useScrollReveal from '../hooks/useScrollReveal'

const depoimentos = [
  {
    nome: 'Dra. Helena Castro',
    cargo: 'Diretora Clínica, Hospital Santa Maria',
    texto:
      'Adquirimos monitores multiparâmetro seminovos com laudo de engenharia clínica. Funcionam como novos e o custo foi metade do mercado. Atendimento excelente.',
    estrelas: 5,
  },
  {
    nome: 'Dr. Marcos Lima',
    cargo: 'Gerente de Manutenção, Clínica Vita',
    texto:
      'A ENGTEC evitou uma parada crítica no nosso centro cirúrgico com manutenção rápida. Diagnóstico preciso e peça na hora. Recomendo.',
    estrelas: 5,
  },
  {
    nome: 'Enf. Patrícia Souza',
    cargo: 'Coordenadora de Esterilização, Hospital Dia+',
    texto:
      'Comprei autoclaves recondicionadas com laudo de eficácia e ganhei calibração preventiva. Transparência total do início ao fim.',
    estrelas: 5,
  },
]

export default function Depoimentos() {
  const headRef = useScrollReveal()

  return (
    <section className="section depoimentos" id="depoimentos">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section__title">Quem já comprou, confia</h2>
        </div>

        <div className="grid grid--3">
          {depoimentos.map((d, i) => (
            <DepoCard key={d.nome} item={d} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DepoCard({ item, delay }) {
  const ref = useScrollReveal()
  return (
    <article
      className="card depoimento reveal-scale"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="depoimento__stars" aria-label={`${item.estrelas} de 5`}>
        {'★'.repeat(item.estrelas)}
      </div>
      <p className="depoimento__texto">"{item.texto}"</p>
      <footer className="depoimento__autor">
        <span className="depoimento__avatar">{item.nome.charAt(0)}</span>
        <div>
          <strong>{item.nome}</strong>
          <span>{item.cargo}</span>
        </div>
      </footer>
    </article>
  )
}
