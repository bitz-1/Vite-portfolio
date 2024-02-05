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
  return (
    <div className="parentServices">
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
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
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Odio dolores optio, facere corporis autem rerum 
                    dignissimos natus, modi placeat quam voluptate voluptatum sint earum, 
                    at quo recusandae libero eum? Illo!
                </p>
                <button> Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}} >
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Odio dolores optio, facere corporis autem rerum 
                    dignissimos natus, modi placeat quam voluptate voluptatum sint earum, 
                    at quo recusandae libero eum? Illo!
                </p>
                <button> Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Odio dolores optio, facere corporis autem rerum 
                    dignissimos natus, modi placeat quam voluptate voluptatum sint earum, 
                    at quo recusandae libero eum? Illo!
                </p>
                <button> Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Odio dolores optio, facere corporis autem rerum 
                    dignissimos natus, modi placeat quam voluptate voluptatum sint earum, 
                    at quo recusandae libero eum? Illo!
                </p>
                <button> Go</button>
            </motion.div>
        </motion.div>

    
    </motion.div>
    </div>
    
  )
}

export default Services