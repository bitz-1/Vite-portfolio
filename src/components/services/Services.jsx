import { useRef } from "react";
import "../../scss/services.scss";
import {motion , useInView} from "framer-motion";
const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"})
  return (
    <div className="parentServices">
    <motion.div className="services" variants={variants} initial="initial"
    //  whileInView="animate" 
    ref={ref}
    animate={'animate'}>
        <motion.div className="textContainer"variants={variants}>
       
         <p>Focus on helping your brand <br/> grow and move forward </p>
         <hr/>
        
            
            
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="./services.jpg" alt="" />
                <h1>
                    <motion.b whileHover={{color:"#5b6e74"}}>Unique</motion.b> Ideas
                </h1> 
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"#5b6e74"}}>For Your</motion.b> Business.
                </h1>
                <button> What I DO ?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>Web Development</h2>
                <p>
                As a Full-stack web developer, I'am proficient in both front-end and back-end development. 
                I can create responsive and user-friendly websites , web and Mobile applications  using technologies like HTML, CSS, 
                JavaScript, React.js , React Native for the front end, and Django, Node.js for the back end.
                </p>
                <a href="#Contact">
                    <button>Go</button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}} >
                <h2>Database Management</h2>
                <p>
                Being a Full-stack developer i'am  capable of designing and managing databases. That can work with both SQL
                (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB, Firebase) databases and design database schemas, write queries, and
                ensure efficient data storage and retrieval.
                </p>
                <a href="#Contact">
                    <button>Go</button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>API Development</h2>
                <p>
                Creating APIs (Application Programming Interfaces) for communication between the front
                end and back end of web applications. I design RESTful or GraphQL APIs, define endpoints, handle authentication and authorization,
                and ensure secure data exchange between the client-side and server-side of the application.
                </p>
                <a href="#Contact">
                    <button>Go</button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>Deployment and DevOps</h2>
                <p>
                Being a Full-stack developer i often responsible for deploying applications to production environments.
                and configure servers, manage hosting services (e.g., AWS, Azure, Google Cloud), set up continuous integration
                and continuous deployment (CI/CD) pipelines,
                monitor application performance, and ensure scalability and reliability of the deployed applications.
                </p>
                <a href="#Contact">
                    <button>Go</button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>Cyber Security Analyts</h2>
                <p>
                As a Cybersecurity Analyst, I specialize in identifying and mitigating security vulnerabilities to protect digital assets
                using tools like OWASP ZAP and Burp Suite. Skilled in VAPT, API testing, and secure coding, I ensure applications are resilient
                against cyber threats.
                </p>
                <a href="#Contact">
                    <button>Go</button>
                </a>
            </motion.div>
        </motion.div>

    
    </motion.div>
    </div>
    
  )
}

export default Services