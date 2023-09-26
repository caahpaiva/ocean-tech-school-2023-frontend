import "./Card.css"

export default function Card(props) {
    const item = props.item;

    return <div className="card">
    <h2>{item.nome}</h2>

    <div className="tags">
      <div className="tag"> Status: {item.status}</div>
      <div className="tag"> Especíe: {item.especie} </div>
      <div className="tag"> Origem: {item.origem} </div>
    
    </div>
    <img src={item.imagemUrl} />
    <p></p>
   
  </div>
}