// Catálogo de equipamentos — dados e parsing automático a partir dos nomes dos arquivos.
// Mantido local; as imagens ficam em /public/catalogo-imagens.

export const arquivos = [
  'BOMBA FRESENIUS TIVA AGILIA.jpeg',
  'BOMBA SERINGA CONTEC SP950.jpeg',
  'CARDIOVERSOR CARDIOMAX SÉRIE 8.jpeg',
  'CARDIOVERSOR CARDIOMAX SÉRIE 8_2.jpeg',
  'CARDIOVERSOR LIFEPAK 12.jpeg',
  'CARDIOVERSOR MINDRAY D30 - COMPLETO.jpeg',
  'DEA CMOS DRAKE LIFE 400 FUTURA.jpeg',
  'DEA CMOS DRAKE LIFE 400 FUTURA_bolsapreta.jpeg',
  'DEA CMOS DRAKE LIFE 400 FUTURA_sembolsa.jpeg',
  'MONITOR DE TRANSPORTE GE DASH 3000.jpeg',
  'MONITOR DE TRANSPORTE MINDRAY PM-8000 EXPRESS.jpeg',
  'MONITOR DIXTAL DX 2022 COM CAPINOGRAFIA.jpeg',
  'MONITOR DIXTAL DX2023.jpeg',
  'MONITOR PROLIFE P12.jpeg',
  'NEBULIZADOR G-TECH COMPACT DC1.jpeg',
  'NEBULIZADOR OMRON COMP AIR NE-C28.jpeg',
  'NEBULIZADOR ROSSMAX COMPACTO NB60.jpeg',
  'NEBULIZADOR ROSSMAX SUPER MINI DOG.jpeg',
  'OXIMETROS DE PULSO PALM.jpeg',
  'VAPORIZADOR CALIBRADO HB DE SEVOFLURANE.jpeg',
  'VAPORIZADOR CALIBRADO MINDRAY V60 DE ISOFLURANE.jpeg',
  'VAPORIZADO_novitech.jpeg',
  'VENTILADOR DE TRANSPORTE DRAGER OXYLOG 3000 PLUS.jpeg',
  'VENTILADOR DE TRANSPORTE MICROTAK TOTAL ANO 2021.jpeg',
]

const categorias = [
  ['BOMBA SERINGA', 'Bomba de seringa'],
  ['BOMBA', 'Bomba de infusão'],
  ['CARDIOVERSOR', 'Cardioversor'],
  ['DEA', 'DEA'],
  ['MONITOR DE TRANSPORTE', 'Monitor de transporte'],
  ['MONITOR', 'Monitor'],
  ['NEBULIZADOR', 'Nebulizador'],
  ['OXIMETROS', 'Oximetro de pulso'],
  ['VAPORIZADOR', 'Vaporizador'],
  ['VAPORIZADO', 'Vaporizador'],
  ['VENTILADOR DE TRANSPORTE', 'Ventilador de transporte'],
  ['VENTILADOR', 'Ventilador'],
]

const especMap = [
  ['COMPLETO', 'Conjunto completo'],
  ['COM CAPINOGRAFIA', 'Com capnografia'],
  ['SÉRIE 8', 'Série 8'],
  ['ANO 2021', 'Ano 2021'],
  ['DE SEVOFLURANE', 'Para sevoflurano'],
  ['DE ISOFLURANE', 'Para isoflurano'],
  ['BOLSAPRETA', 'Com bolsa preta'],
  ['SEMBOLSA', 'Sem bolsa'],
]

export function parseNome(nomeArquivo) {
  const base = nomeArquivo.replace(/\.jpeg$/i, '').replace(/_/g, ' ').trim()
  const u = base.toUpperCase()

  let categoria = 'Equipamento'
  for (const [k, v] of categorias) {
    if (u.startsWith(k)) {
      categoria = v
      break
    }
  }

  const especificacoes = []
  for (const [k, v] of especMap) {
    if (u.includes(k)) especificacoes.push(v)
  }

  let resto = base
  for (const [k] of categorias) {
    if (u.startsWith(k)) {
      resto = base.slice(k.length).trim()
      break
    }
  }
  resto = resto
    .replace(/COMPLETO|- COMPLETO|COM CAPINOGRAFIA|SÉRIE 8|SÉRIE 8 2|ANO 2021|DE SEVOFLURANE|DE ISOFLURANE|BOLSAPRETA|SEMBOLSA/gi, ' ')
    .replace(/\b(CALIBRADO|DE PULSO|DE)\b/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/ 2$/i, ' (2)')
    .trim()

  return { categoria, modelo: resto || '—', especificacoes }
}

export const itens = arquivos.map((f) => {
  const { categoria, modelo, especificacoes } = parseNome(f)
  return {
    imagem: '/catalogo-imagens/' + f,
    nome: f.replace(/\.jpeg$/i, '').replace(/_/g, ' '),
    categoria,
    modelo,
    espec: especificacoes,
    disp: 'Disponível',
    preco: 'Sob consulta',
  }
})

// Itens iniciais com campos explícitos (usados pelo store administrável)
export function catalogoInicial() {
  return arquivos.map((f, i) => {
    const { categoria, modelo, especificacoes } = parseNome(f)
    return {
      id: 'eq-' + i,
      imagem: '/catalogo-imagens/' + f,
      nome: f.replace(/\.jpeg$/i, '').replace(/_/g, ' '),
      categoria,
      modelo,
      espec: especificacoes,
      preco: 'Sob consulta',
      status: 'Disponível',
    }
  })
}

export const CATEGORIAS = [
  'Bomba de infusão',
  'Bomba de seringa',
  'Cardioversor',
  'DEA',
  'Monitor de transporte',
  'Monitor',
  'Nebulizador',
  'Oximetro de pulso',
  'Vaporizador',
  'Ventilador de transporte',
  'Ventilador',
  'Outro',
]

export const STATUS = ['Disponível', 'Sob consulta', 'Indisponível']
