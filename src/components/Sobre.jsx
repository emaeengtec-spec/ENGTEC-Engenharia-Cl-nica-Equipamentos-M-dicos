import { IconCheck, IconTools } from './Icons'

const diferenciais = [
  'Equipamentos médicos seminovos selecionados e recondicionados',
  'Laudo de engenharia clínica e testes de segurança antes da entrega',
  'Garantia e suporte pós-venda com plantão técnico',
  'Calibração e manutenção preventiva sob demanda',
]

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container sobre__inner">
        <div className="sobre__media" aria-hidden="true">
          <div className="sobre__card">
            <IconTools className="icon" />
            <h3>Engenharia clínica</h3>
            <p>
              Uma equipe multidisciplinar que entende de tecnologia médica,
              segurança de pacientes e normas da ANVISA.
            </p>
          </div>
        </div>

        <div className="sobre__text">
          <span className="eyebrow">Quem somos</span>
          <h2 className="section__title">
            A ENGTEC cuida da tecnologia que cuida de vidas
          </h2>
          <p className="section__lead">
            Somos especialistas em equipamentos médicos seminovos e engenharia
            clínica. Ajudamos hospitais, clínicas e consultórios a reduzir custos
            de capital sem abrir mão de segurança e confiabilidade, revendo,
            calibrando e dando suporte a cada equipamento que passa por nós.
          </p>

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
