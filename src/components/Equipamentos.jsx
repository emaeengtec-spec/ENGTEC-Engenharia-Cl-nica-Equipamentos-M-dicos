import useScrollReveal from '../hooks/useScrollReveal'
import { IconActivity, IconHeart, IconStethoscope, IconWrench, IconBolt, IconShield, IconTools } from './Icons'

const equipamentos = [
  {
    nome: 'Ventilador pulmonar',
    desc: 'Adulto e pediátrico, revisado e com teste de vazamento.',
    tag: 'Estoque rotativo',
    Icon: IconActivity,
  },
  {
    nome: 'Bomba de infusão',
    desc: 'Fluxo e alarmes testados, pronta para uso clínico.',
    tag: 'Recondicionado',
    Icon: IconHeart,
  },
  {
    nome: 'Bomba de seringa',
    desc: 'Taxa e precisão verificadas, com laudo de calibração.',
    tag: 'Com laudo',
    Icon: IconStethoscope,
  },
  {
    nome: 'Mesa cirúrgica',
    desc: 'Mecânica ou hidráulica, revisada e estabilizada.',
    tag: 'Garantia',
    Icon: IconWrench,
  },
  {
    nome: 'Monitor multiparamétrico',
    desc: 'Sinais vitais, SpO₂ e ECG calibrados e homologados.',
    tag: 'Revisado',
    Icon: IconBolt,
  },
  {
    nome: 'Foco cirúrgico',
    desc: 'Instalação e desinstalação realizadas pela nossa equipe técnica.',
    tag: 'Instalação',
    Icon: IconShield,
  },
  {
    nome: 'Bisturi',
    desc: 'Eletrocirúrgico revisado, com potência e segurança testadas.',
    tag: 'Sob consulta',
    Icon: IconTools,
  },
]

export default function Equipamentos() {
  const headRef = useScrollReveal()

  return (
    <section className="section equipamentos" id="equipamentos">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="eyebrow">Catálogo</span>
          <h2 className="section__title">Equipamentos médicos seminovos disponíveis</h2>
          <p className="section__lead">
            Trabalhamos com os principais equipamentos hospitalares seminovos,
            revisados, com garantia e laudo.
          </p>
        </div>

        <div className="grid grid--3">
          {equipamentos.map((e, i) => (
            <EquipCard key={e.nome} item={e} delay={i * 0.08} />
          ))}
        </div>

        <div className="cta-band reveal-scale" ref={useScrollReveal()}>
          <p>
            Caso necessite de algum equipamento, consulte-nos. Passamos orçamento
            sem compromisso de equipamentos seminovos, com garantia e preço
            acessível.
          </p>
          <a className="btn btn--primary" href="#contato">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

function EquipCard({ item, delay }) {
  const ref = useScrollReveal()
  const { Icon } = item
  return (
    <article
      className="card equipamento reveal-scale"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="equipamento__top">
        <Icon className="equipamento__icon" />
        <span className="tag">{item.tag}</span>
      </div>
      <h3 className="card__title">{item.nome}</h3>
      <p className="card__desc">{item.desc}</p>
      <a className="link" href="#contato">
        Solicitar orçamento →
      </a>
    </article>
  )
}
