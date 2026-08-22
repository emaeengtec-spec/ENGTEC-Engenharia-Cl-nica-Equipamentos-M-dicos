import { IconWrench, IconTools, IconShield, IconBolt, IconTruck } from './Icons'

const servicos = [
  {
    icon: IconWrench,
    titulo: 'Manutenção preventiva',
    desc: 'Planos de inspeção e calibração para evitar falhas em equipamentos críticos.',
  },
  {
    icon: IconTools,
    titulo: 'Manutenção corretiva',
    desc: 'Diagnóstico rápido e reparo no local ou em nossa oficina técnica.',
  },
  {
    icon: IconBolt,
    titulo: 'Instalação e comissionamento',
    desc: 'Montagem, configuração e testes de aceite conforme normas vigentes.',
  },
  {
    icon: IconShield,
    titulo: 'Laudo de engenharia clínica',
    desc: 'Documentação técnica, calibração rastreada e laudo de segurança.',
  },
  {
    icon: IconTruck,
    titulo: 'Gestão de equipamentos',
    desc: 'Inventário, rastreabilidade e gestão do ciclo de vida do parque médico.',
  },
]

export default function Servicos() {
  return (
    <section className="section servicos" id="servicos">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Serviço técnico</span>
          <h2 className="section__title">Da manutenção ao laudo clínico</h2>
          <p className="section__lead">
            Engenheiros e técnicos experientes atendem na oficina ou in loco,
            com peças, calibração e garantia de serviço.
          </p>
        </div>

        <div className="grid grid--3">
          {servicos.map((s) => {
            const Icon = s.icon
            return (
              <article key={s.titulo} className="card servico">
                <span className="servico__icon">
                  <Icon className="icon" />
                </span>
                <h3 className="card__title">{s.titulo}</h3>
                <p className="card__desc">{s.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
