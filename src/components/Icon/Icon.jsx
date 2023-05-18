import "./icon.scss"
const Icon = ({Imcon, title, desc, lime})=>{
  return(
    <div className="icon-container">
    <div>
      {Imcon}
      {lime && <img src={lime} alt="profile"/>}
    </div>
      <div className="text">
        {title && <h4>{title}</h4>}
        {desc && <p>{desc}</p>}
      </div>
    </div>
  )
}


export default Icon