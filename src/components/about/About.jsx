import React, { useEffect, useState } from 'react';
import "../../scss/about.scss";
import SkillsList from './SkillsList';
import { FrontendData, BackendData , DevOpsData, DevSecOpsData , VAPT} from '../../data';

const About = () => {
    const [selected,setSelected] = useState(localStorage.getItem("selected") || "frontend");
    const [data , setData] = useState([]);

    const skillList =[
        {
            id:"frontend",
            title:"FrontEnd Tech"
        },
        {
            id:"backend",
            title:"BackEnd Tech"
        },
        {
            id:"devops",
            title:"DevOps Tech"
        },
        {
            id:"devsecops",
            title:"DevSecOps"
        },
        {
          id:"vapt",
          title:"VAPT"
      }
    ]

    

    useEffect(() => {
        switch(selected) {
            case "frontend":
               setData(FrontendData);
               break;
               case "backend":
                setData(BackendData);
                break;
                case "devops":
                  setData(DevOpsData);
                  break;
                case "devsecops":
                  setData(DevSecOpsData);
                  break;
                case "vapt":
                  setData(VAPT);
                  break;
              default: 
              setData(FrontendData);

        }
    },[selected]);

    useEffect(() => {
                  localStorage.setItem('selected', selected);
              }, [selected]);
              

  return (
    <div className='aboutSkill'>
      <div className='about'>
        <h1>About</h1>
        <br />
        <img src="./profile.jpg" alt="Profile" />
        <p>Skilled Developer and Application Tester with expertise in Node.js, Django, and full-stack development. Experienced
            in building scalable applications, managing databases, and ensuring seamless integration and deployment.
            Proficient in Vulnerability Assessment and Penetration Testing (VAPT) to identify and mitigate security risks,
            with strong knowledge of secure coding and compliance standards. Adept at delivering high-performance, secure,
            and responsive solutions.
        </p>
      </div>
      <div className='skill'>
        <h1>Skills</h1>
        <h2>My Expertise</h2>
        <div className="skillItems">
          {skillList.map(skill => (
            <SkillsList
               title={skill.title}
               active={selected === skill.id}
               setSelected = {setSelected}
               id = {skill.id}
               key ={skill.id}
            />
          ))}
          <div className='listContainer'>
            {data.map((d) => (
              <ul className='item' key={d.id} >
                <h6><img src={d.img}/>{d.title}</h6>
              </ul>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
