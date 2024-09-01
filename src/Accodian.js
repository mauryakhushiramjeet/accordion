import { useState } from "react"
import "./Accordion.css"
const Accodian = ({title,content}) => {

const[isActive,setisActive]=useState(false)
  return (
    <section className='accor-card'>
        <div className="header" onClick={()=>setisActive(!isActive)}>
            <div>{title}</div>
            <p className="icon">{isActive?"-":"+"}</p>
        </div>
<div className="content">
    {isActive && <p className='card-info'>{content}</p>}
</div>
    </section>
  )
}

export default Accodian
