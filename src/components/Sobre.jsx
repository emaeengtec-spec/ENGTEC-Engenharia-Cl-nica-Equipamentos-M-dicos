import { IconCheck, IconTools } from './Icons'
import useScrollReveal from '../hooks/useScrollReveal'

const diferenciais = [
  'Equipamentos médicos seminovos revisados e recondicionados',
  'Laudo de engenharia clínica, calibração rastreada e testes de segurança elétrica',
  'Garantia com suporte pós-venda e plantão técnico dedicado',
  'Equipe com expertise técnica e ex-colaboradores de multinacionais do setor',
  'Manutenção preventiva e corretiva em conformidade com as normas da ANVISA',
]

export default function Sobre() {
  const mediaRef = useScrollReveal()
  const textRef = useScrollReveal()

  return (
    <section className="section sobre" id="sobre">
      <div className="container sobre__inner">
        <div className="sobre__media reveal-left" ref={mediaRef} aria-hidden="true">
          <div className="sobre__card">
            <IconTools className="icon" />
            <h3>Engenharia clínica</h3>
            <p>
              Uma equipe multidisciplinar que entende de tecnologia médica,
              segurança de pacientes e normas da ANVISA.
            </p>
          </div>
        </div>

        <div className="sobre__text reveal-right" ref={textRef}>
          <span className="eyebrow">Quem somos</span>
          <h2 className="section__title">
            A ENGTEC cuida da tecnologia que cuida de vidas
          </h2>
          <p className="section__lead">
            No mercado desde 2021, somos especializados em equipamentos médicos seminovos,
            manutenção preventiva, corretiva e recondicionamento avançado de placas eletrônicas.
            Ajudamos hospitais, clínicas e consultórios a reduzirem custos sem abrir mão da
            segurança do paciente.
          </p>

          <p className="sobre__slogan">Tecnologia que cuida, inovação que transforma.</p>

          <ul className="checklist">
            {diferenciais.map((d) => (
              <li key={d}>
                <IconCheck className="icon" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
