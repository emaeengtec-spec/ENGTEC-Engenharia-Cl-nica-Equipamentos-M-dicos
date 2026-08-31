import { useState } from 'react'
import { carregarItens } from '../data/catalogoStore'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IconDownload } from '../components/Icons'
import './Catalogo.css'

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default function Catalogo() {
  const [busca, setBusca] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [itens] = useState(() => carregarItens())

  const disponiveis = itens.filter((it) => it.status !== 'Indisponível')

  const filtrados = disponiveis.filter((it) => {
    const f = busca.toLowerCase()
    const okBusca = !f || `${it.nome} ${it.modelo} ${it.categoria}`.toLowerCase().includes(f)
    const okCat = !filtroCategoria || it.categoria === filtroCategoria
    return okBusca && okCat
  })

  const categoriasEncontradas = [...new Set(disponiveis.map((it) => it.categoria))].filter(Boolean)

  const exportPDF = () => {
    const printWindow = window.open('', '_blank')
    const items = filtrados.length ? filtrados : disponiveis

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Catálogo EMAE ENGTEC</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; padding: 32px; }
          h1 { font-size: 22px; color: #0a0e1a; margin-bottom: 4px; }
          .sub { color: #64748b; font-size: 13px; margin-bottom: 24px; }
          .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .card { border: 1px solid #d4e6e3; border-radius: 10px; padding: 14px; page-break-inside: avoid; }
          .card h3 { font-size: 14px; margin-bottom: 4px; }
          .card p { font-size: 12px; color: #64748b; margin-bottom: 2px; }
          .tag { display: inline-block; font-size: 10px; font-weight: 700; color: #0891b2; background: #e0f7fa; padding: 2px 8px; border-radius: 99px; text-transform: uppercase; }
          .status { font-size: 11px; font-weight: 700; color: #0891b2; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <h1>EMAE ENGTEC — Catálogo de Equipamentos</h1>
        <p class="sub">Tecnologia que cuida, inovação que transforma. | CNPJ: 41.190.616/0001-50</p>
        <div class="grid">
          ${items.map((it) => `
            <div class="card">
              <span class="tag">${esc(it.categoria || 'Equipamento')}</span>
              <h3>${esc(it.nome)}</h3>
              <p><b>Modelo:</b> ${esc(it.modelo || '—')}</p>
              <p><b>Especificações:</b> ${esc((it.espec || []).join(' · ') || '—')}</p>
              <p><b>Preço:</b> ${esc(it.preco || 'Sob consulta')}</p>
              <p class="status">${esc(it.status)}</p>
            </div>
          `).join('')}
        </div>
        <script>window.onload = function() { window.print(); }</script>
      </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <>
      <Navbar />
      <main className="catalogo">
        <div className="container">
          <section className="catalogo__hero">
            <span className="eyebrow">Catálogo de equipamentos</span>
            <h1 className="catalogo__title">Equipamentos médicos seminovos</h1>
            <p className="catalogo__lead">
              Com garantia, laudo de engenharia clínica e preço acessível.
            </p>
          </section>

          <div className="catalogo__toolbar">
            <input
              className="catalogo__search"
              type="search"
              placeholder="Buscar equipamento, marca ou modelo..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <select
              className="catalogo__filter"
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
            >
              <option value="">Todas as categorias</option>
              {categoriasEncontradas.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button className="catalogo__pdf" onClick={exportPDF} title="Exportar como PDF">
              <IconDownload className="icon" /> PDF
            </button>
          </div>

          <p className="catalogo__count">
            {filtrados.length} {filtrados.length === 1 ? 'equipamento' : 'equipamentos'} encontrado{filtrados.length !== 1 && 's'}
          </p>

          <div className="catalogo__grid">
            {filtrados.map((it) => (
              <article key={it.id} className="cat-card">
                <img
                  className="cat-card__img"
                  src={it.imagem}
                  alt={it.nome}
                  loading="lazy"
                />
                <div className="cat-card__body">
                  <span className="cat-tag">{it.categoria}</span>
                  <h3 className="cat-card__nome">{it.nome}</h3>
                  <p className="spec">
                    <b>Modelo:</b> {it.modelo || '—'}
                  </p>
                  <p className="spec">
                    <b>Especificações:</b>{' '}
                    {it.espec && it.espec.length ? it.espec.join(' · ') : '—'}
                  </p>
                  <div className="cat-card__foot">
                    <span className={`disp disp--${it.status.replace(/\s+/g, '').toLowerCase()}`}>
                      {it.status}
                    </span>
                    <span className="price">{it.preco || 'Sob consulta'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="catalogo__vazio">Nenhum equipamento encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
