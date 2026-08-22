import { IconWhatsapp } from './Icons'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <span className="brand__mark">EN</span>
            <span className="brand__text">ENGTEC</span>
          </a>
          <p>Equipamentos médicos seminovos e engenharia clínica com garantia e laudo.</p>
        </div>

        <nav className="footer__nav">
          <h4>Navegação</h4>
          <a href="#sobre">Sobre</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#servicos">Serviços</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="footer__contact">
          <h4>Contato</h4>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            <IconWhatsapp className="icon" /> WhatsApp
          </a>
          <a href="mailto:contato@engtec.com.br">contato@engtec.com.br</a>
          <span>Cidade/UF — Brasil</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {ano} ENGTEC. Todos os direitos reservados.</span>
        <span>Feito com tecnologia e cuidado.</span>
      </div>
    </footer>
  )
}
