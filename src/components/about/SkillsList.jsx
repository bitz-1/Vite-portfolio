import React from 'react'
import "../../scss/skillList.scss"

export default function SkillsList ({title ,active ,setSelected,id}){
  return (
    <div className={active ? "skillItem active":"skillItem"}
     onClick={() => setSelected(id)}>
        {title}
    </div>
  )
}



{/* <div className="skillItems">
<div className="skillItem">FrontEnd Tech</div>
<div className="skillItem">BackEnd Tech</div>
<div className="skillItem">DevOps</div>
<div className="skillItem">DevSecops</div>
</div> */}