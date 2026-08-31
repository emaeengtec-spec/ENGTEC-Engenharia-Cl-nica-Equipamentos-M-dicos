import { useState } from 'react'
import { Link } from 'react-router-dom'
import { carregarItens, salvarItens, novoId } from '../data/catalogoStore'
import { CATEGORIAS, STATUS } from '../data/catalogo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Admin.css'

const SENHA_HASH = '34c6b19f4cebaf13aea14edaa258144a5a0f30c716b2005ae0a43e763f060c61'

async function hashSenha(s) {
  const enc = new TextEncoder().encode(s)
  const buf = await crypto.subtle.digest('SHA-256', enc)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function ItemForm({ item, onChange, onRemove }) {
  const handleImg = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onChange({ ...item, imagem: reader.result })
    reader.readAsDataURL(file)
  }

  return (
    <div className="adm-item">
      <div className="adm-item__img">
        {item.imagem ? (
          <img src={item.imagem} alt={item.nome} />
        ) : (
          <span className="adm-item__placeholder">sem imagem</span>
        )}
        <label className="adm-item__upload">
          imagem
          <input type="file" accept="image/*" onChange={handleImg} />
        </label>
      </div>

      <div className="adm-item__fields">
        <input
          className="adm-input"
          placeholder="Nome"
          value={item.nome}
          onChange={(e) => onChange({ ...item, nome: e.target.value })}
        />
        <input
          className="adm-input"
          placeholder="Modelo"
          value={item.modelo}
          onChange={(e) => onChange({ ...item, modelo: e.target.value })}
        />
        <select
          className="adm-input"
          value={item.categoria}
          onChange={(e) => onChange({ ...item, categoria: e.target.value })}
        >
          <option value="">Categoria…</option>
          {CATEGORIAS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="adm-input"
          placeholder="Preço (ex.: Sob consulta, R$ 1.200)"
          value={item.preco}
          onChange={(e) => onChange({ ...item, preco: e.target.value })}
        />
        <textarea
          className="adm-input"
          placeholder="Especificações (separadas por vírgula)"
          value={(item.espec || []).join(', ')}
          onChange={(e) =>
            onChange({
              ...item,
              espec: e.target.value
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
        />
        <select
          className="adm-input"
          value={item.status}
          onChange={(e) => onChange({ ...item, status: e.target.value })}
        >
          {STATUS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button className="adm-btn adm-btn--danger" onClick={onRemove}>
        Remover
      </button>
    </div>
  )
}

export default function Admin() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('engtec_admin_auth') === '1'
  )
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const [itens, setItens] = useState(() => carregarItens())
  const [msg, setMsg] = useState('')
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState('')

  const login = async (e) => {
    e.preventDefault()
    const hash = await hashSenha(senha)
    if (hash === SENHA_HASH) {
      sessionStorage.setItem('engtec_admin_auth', '1')
      setAuthed(true)
      setErro('')
    } else {
      setErro('Senha incorreta.')
    }
  }

  const logout = () => {
    sessionStorage.removeItem('engtec_admin_auth')
    setAuthed(false)
    setSenha('')
  }

  const update = (id, novo) =>
    setItens((list) => list.map((it) => (it.id === id ? novo : it)))

  const remove = (id) => setItens((list) => list.filter((it) => it.id !== id))

  const add = () =>
    setItens((list) => [
      ...list,
      {
        id: novoId(),
        imagem: '',
        nome: '',
        categoria: '',
        modelo: '',
        espec: [],
        preco: 'Sob consulta',
        status: 'Disponível',
      },
    ])

  const save = () => {
    const ok = salvarItens(itens)
    setMsg(ok ? 'Catálogo salvo com sucesso.' : 'Erro ao salvar (imagem grande demais?).')
    if (ok) setTimeout(() => setMsg(''), 4000)
  }

  const reset = () => {
    if (!confirm('Restaurar o catálogo original (24 equipamentos)? Isso apaga edições.')) return
    localStorage.removeItem('engtec_catalogo_v1')
    setItens(carregarItens())
    setMsg('Catálogo restaurado para o padrão.')
  }

  if (!authed) {
    return (
      <>
        <Navbar />
        <main className="adm">
          <div className="container">
            <form className="adm-login" onSubmit={login}>
              <h1 className="adm__title">Acesso restrito</h1>
              <p className="adm__sub">Informe a senha para gerenciar o catálogo.</p>
              <input
                className="adm-input"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoFocus
              />
              {erro && <div className="adm-login__erro">{erro}</div>}
              <button className="adm-btn adm-btn--primary" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const visiveis = itens.filter((it) => {
    const f = busca.toLowerCase()
    const okBusca =
      !f || `${it.nome} ${it.modelo} ${it.categoria}`.toLowerCase().includes(f)
    const okStatus = !filtroStatus || it.status === filtroStatus
    return okBusca && okStatus
  })

  return (
    <>
      <Navbar />
      <main className="adm">
        <div className="container">
          <section className="adm__head">
            <div>
              <h1 className="adm__title">Administração do catálogo</h1>
              <p className="adm__sub">
                Edite, adicione equipamentos e marque como indisponível quando
                não estiverem mais à venda. As alterações aparecem na{' '}
                <Link to="/catalogo">página do cliente</Link>.
              </p>
            </div>
            <div className="adm__actions">
              <button className="adm-btn" onClick={add}>
                + Adicionar equipamento
              </button>
              <button className="adm-btn adm-btn--restore" onClick={reset}>
                Restaurar padrão
              </button>
              <button className="adm-btn adm-btn--primary" onClick={save}>
                Salvar alterações
              </button>
              <button className="adm-btn adm-btn--danger" onClick={logout}>
                Sair
              </button>
            </div>
          </section>

          <div className="adm__toolbar">
            <input
              className="adm-input adm__busca"
              type="search"
              placeholder="Buscar por nome, modelo ou categoria..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <select
              className="adm-input adm__filtro"
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="">Todos os status</option>
              {STATUS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {msg && <div className="adm__msg">{msg}</div>}

          <div className="adm__list">
            {visiveis.map((it) => (
              <ItemForm
                key={it.id}
                item={it}
                onChange={(novo) => update(it.id, novo)}
                onRemove={() => remove(it.id)}
              />
            ))}
            {visiveis.length === 0 && (
              <p className="catalogo__vazio">Nenhum item corresponde ao filtro.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
