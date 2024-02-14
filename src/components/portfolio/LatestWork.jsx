import React, {  useRef,useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import "../../scss/latestWork.scss";
import ProjectList from './ProjectList';
import { featuredData, mobileData, webData, SaasData, businessData } from '../../data';
import DisplayComponentPage from './DisplayComponentPage';
import { Link } from 'react-router-dom';
const LatestWork = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const [selectedItemData, setSelectedItemData] = useState(null);
    const popDivRef = useRef(null);

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

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredData);
                break;
            case "web":
                setData(webData);
                break;
            case "mobile":
                setData(mobileData);
                break;
            case "business":
                setData(businessData);
                break;
            case "saas":
                setData(SaasData);
                break;
            default:
                setData(featuredData);
        }
    }, [selected]);

    const handleItemClick = (itemData) => {
        // Set the selected item's data
        setSelectedItemData(itemData);
        popDivRef.current.scrollIntoView({ top:document.body.scrollHeight , behavior: 'smooth' });
 };

    

   

    return (
        <div className='parentDiv'>
        <section >
        <div className='latestWork'>
                <Navbar />
            <div className='works'>
                <h1>PROJECTS</h1>
                <ul>
                    {list.map(item => (
                        <ProjectList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </ul>
                <div className="container">
                    {data.map((d) => (
                        <Link to={`#${d.id}`} key={d.id} onClick={() => handleItemClick(d)}>
                            <div className="item" key={d.id}>
                                <img src={d.img} alt="" />
                                <h3>{d.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div> 
            </div>
        </div>
      </section>
      <section>
                <div className="popDiv" ref={popDivRef}>
                <DisplayComponentPage  selectedItemData={selectedItemData} />
                </div>
      </section>
      </div>

    );
};



export default LatestWork;
