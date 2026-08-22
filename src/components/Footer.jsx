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
          <a href="https://wa.me/5561994320037" target="_blank" rel="noreferrer">
            <IconWhatsapp className="icon" /> (61) 99432-0037
          </a>
          <a href="mailto:emae.engtec@gmail.com">emae.engtec@gmail.com</a>
          <span>Q 308 CJ 16 LT 21 S/N — Brasília, DF</span>
        </div>

        <div className="footer__legal">
          <h4>Empresa</h4>
          <span>EMAE ENGTEC Manutenção e Acessórios e Equipamentos LTDA</span>
          <span>CNPJ: 41.190.616/0001-50</span>
          <span>Inscrição Municipal: 0804139400102</span>
          <span>Optante Simples Nacional — ME/EPP</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {ano} ENGTEC. Todos os direitos reservados.</span>
        <span>Feito com tecnologia e cuidado.</span>
      </div>
    </footer>
  )
}
