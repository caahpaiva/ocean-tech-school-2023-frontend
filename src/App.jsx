import './App.css'
import Card from './components/Card/Card'



function App() {
  const item1 = {
    nome: 'Rick Sanchez', 
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' ,
    status: 'Vivo',
    especie: 'Humano',
    origem: 'Terra C-137'
  }

  const item2 = {
    nome: 'Morty Smith', 
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' ,
    status: 'Vivo',
    especie: 'Humano',
    origem: 'Terra C-137'
  }

    const itens = [item1, item2]
    
    return (
    <>
      {itens.map(function (item) {
        return <Card item={item}/>
      } )}
    </>
  )
}

export default App
