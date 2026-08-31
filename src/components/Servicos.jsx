import { IconWrench, IconTools, IconShield, IconBolt } from './Icons'
import useScrollReveal from '../hooks/useScrollReveal'

const servicos = [
  {
    icon: IconWrench,
    titulo: 'Manutenção preventiva',
    desc: 'Inspeção, calibração e substituição programada para evitar falhas em equipamentos críticos.',
  },
  {
    icon: IconTools,
    titulo: 'Manutenção corretiva',
    desc: 'Diagnóstico rápido e reparo no local ou em nossa oficina técnica, com peças e garantia.',
  },
  {
    icon: IconBolt,
    titulo: 'Instalação e desinstalação',
    desc: 'Montagem, configuração, testes de aceite e remoção de equipamentos (ex.: foco cirúrgico).',
  },
  {
    icon: IconShield,
    titulo: 'Laudo e calibração',
    desc: 'Documentação técnica, calibração rastreada e laudo de engenharia clínica.',
  },
]

export default function Servicos() {
  const headRef = useScrollReveal()

  return (
    <section className="section servicos" id="servicos">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="eyebrow">Serviço técnico</span>
          <h2 className="section__title">Da manutenção ao laudo clínico</h2>
          <p className="section__lead">
            Engenheiros e técnicos experientes atendem na oficina ou in loco,
            com peças, calibração e garantia de serviço.
          </p>
        </div>

        <div className="grid grid--3">
          {servicos.map((s, i) => {
            const Icon = s.icon
            return (
              <ServicoCard key={s.titulo} icon={Icon} titulo={s.titulo} desc={s.desc} delay={i * 0.08} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicoCard({ icon: Icon, titulo, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <article
      className="card servico reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="servico__icon">
        <Icon className="icon" />
      </span>
      <h3 className="card__title">{titulo}</h3>
      <p className="card__desc">{desc}</p>
    </article>
  )
}
