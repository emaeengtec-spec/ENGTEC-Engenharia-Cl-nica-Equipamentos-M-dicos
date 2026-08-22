const equipamentos = [
  {
    nome: 'Ventiladores pulmonares',
    desc: 'Adulto e pediátrico, revisados e com teste de vazamento.',
    tag: 'Estoque rotativo',
  },
  {
    nome: 'Monitores multiparâmetro',
    desc: 'Sinais vitais, SpO₂ e ECG, calibrados e homologados.',
    tag: 'Recondicionado',
  },
  {
    nome: 'Autoclaves e esterilização',
    desc: 'Mesa e vertical, com laudo de eficácia de ciclo.',
    tag: 'Com laudo',
  },
  {
    nome: 'Bombas de infusão',
    desc: 'Infusão e seringa, com alarmes e fluxo testados.',
    tag: 'Garantia',
  },
  {
    nome: 'Defibriladores',
    desc: 'DEA e desfibriladores, carga e energia verificadas.',
    tag: 'Revisado',
  },
  {
    nome: 'Equipamentos de imagem',
    desc: 'Ultrassom e raios-X seminovos selecionados.',
    tag: 'Sob consulta',
  },
]

export default function Equipamentos() {
  return (
    <section className="section equipamentos" id="equipamentos">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Catálogo</span>
          <h2 className="section__title">Equipamentos médicos seminovos disponíveis</h2>
          <p className="section__lead">
            Estoque atualizado semanalmente. Não encontrou o que procura?
            Fale com a gente e buscamos para o seu hospital ou clínica.
          </p>
        </div>

        <div className="grid grid--3">
          {equipamentos.map((e) => (
            <article key={e.nome} className="card equipamento">
              <div className="equipamento__top">
                <span className="tag">{e.tag}</span>
              </div>
              <h3 className="card__title">{e.nome}</h3>
              <p className="card__desc">{e.desc}</p>
              <a className="link" href="#contato">
                Solicitar orçamento →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
