import React, { useEffect, useState } from 'react';
import "../../scss/about.scss";
import SkillsList from './SkillsList';
import { FrontendData } from '../../data';

const About = () => {
    const [selected,setSelected] = useState(null);
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
        }
    ]

    useEffect(() => {
        switch(selected) {
            case "frontend":
               setData(FrontendData);
        }
    },[selected]);

  return (
    <div className='aboutSkill'>
      <div className='about'>
        <h1>About</h1>
        <br />
        <img src="./profile.jpg" alt="Profile" />
        <p>Proficient in both front-end and back-end technologies, I specialize
          in translating creative designs into functional code. I wield a
          versatile toolkit to create robust and responsive applications. My
          expertise spans the entire development lifecycle. Whether it's
          architecting databases for efficiency, implementing intuitive user
          interfaces, or optimizing server-side performance, I ensure every
          facet of the project is meticulously crafted.
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
            />
          ))}
          <div className='listContainer'>
            {data.map((d) => (
              <ul className='item' >
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
