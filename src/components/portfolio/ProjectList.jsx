import React from 'react'
import "../../scss/projectList.scss"

export default function ProjectList ({title , active , setSelected,id }) {
  return (
    <li className={active ? "projectlist active" : "projectlist"}
     onClick={() => setSelected(id)}>

        {title}

    </li>
  )
}


{/* <li className='active'>Featured</li>
<li>Web App</li>
<li>Mobile App </li>
<li>API</li>
<li>Bussiness</li>
<li>SaaS</li> */}