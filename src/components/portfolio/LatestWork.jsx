import{ useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import "../../scss/latestWork.scss"
import ProjectList from './ProjectList';
import { featuredData,mobileData,webData,SaasData,businessData } from '../../data';
const LatestWork = () => {
    const [selected , setSelected] = useState("featured");
    const [data , setData] = useState([]);

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "business",
          title: "Business",
        },
        {
          id: "saas",
          title: "SaaS",
        },
      ];

useEffect(()=> {
    switch(selected){
                case "featured":
                setData(featuredData);
                break;
                case "web":
                setData(webData);
                break;   case "mobile":
                setData(mobileData);
                break;   case "business":
                setData(businessData);
                break;   case "saas":
                setData(SaasData);
                break;
                default:
                setData(featuredData);
    }

},[selected])

  return (
    <div className='latestWork'> 
        <Navbar/>
            <div className='works'>
                <h1>PROJECTS</h1>
                <ul>
                    {list.map(item=>(
                      <ProjectList title={item.title} 
                      active={selected === item.id} 
                      setSelected={setSelected}
                      id={item.id}
                      />
                      ))}
                  
                </ul>
                <div className="container">
                    {data.map((d)=>(
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>
                    ))}
                   
                </div>
                
            </div>

       
    </div>
  )
}

export default LatestWork;