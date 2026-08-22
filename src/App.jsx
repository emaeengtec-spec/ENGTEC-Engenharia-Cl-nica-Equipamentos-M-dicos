import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Equipamentos from './components/Equipamentos'
import Servicos from './components/Servicos'
import Depoimentos from './components/Depoimentos'
import Faq from './components/Faq'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Equipamentos />
        <Servicos />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
