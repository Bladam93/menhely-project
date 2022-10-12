import './Adoption.css'
import adoptions from './AdoptList'


const Adoption = () => {
  return (
    <div className='adoption'>


   {adoptions.map(adoption =>(
    <div className="card-wrap" key={adoption.id}>
    <div className="card-header">
    <img src={adoption.img} width="125px" alt="dog"/>
    </div>
    <div className="card-content">
      <h1 className="card-title">{adoption.name}</h1>
      <p className="card-text">{adoption.description}</p>
      <button className="card-btn">Nevelném</button>
   </div>
  </div>
   ))}     
    


</div> 
  )
}

export default Adoption