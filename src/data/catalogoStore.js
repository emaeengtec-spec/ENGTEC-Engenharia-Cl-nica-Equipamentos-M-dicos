import { catalogoInicial } from './catalogo'

const KEY = 'engtec_catalogo_v1'

export function carregarItens() {
  try {
    const s = localStorage.getItem(KEY)
    if (s) {
      const list = JSON.parse(s)
      if (Array.isArray(list) && list.length) return list
    }
  } catch {
    /* ignore */
  }
  return catalogoInicial()
}

export function salvarItens(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
    return true
  } catch {
    return false
  }
}

export function novoId() {
  return 'eq-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}
