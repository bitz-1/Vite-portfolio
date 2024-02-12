import "../../scss/hero.scss";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
const textVariants = {
  initial : {
    x: -500,
    opacity: 0,
  },
  animate : {
    x:0,
    opacity:1,
    transition:{
      duration : 1 ,
      stagggerChildren : 0.1,
    },
  }, 
  scrollButton:{
    opacity:0,
    y:0,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}

const slidingVariants = {
  initial : {
    x: -500,
   
  },
  animate : {
    x:"-999%",
    transition:{
      repeat : Infinity ,
      repeatType:"mirror",
      duration:24,
    },
  }, 

}
const Hero = () => {
  return (
    
    <div className="hero">
        <div className="wrapper">
        <motion.div className="slidingTextContainer" variants={slidingVariants} initial="initial" animate="animate">
          Creative Planner Problem-Solver Collaborative Responsive 
        </motion.div> 
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>APURV NANDGAONKAR</motion.h2>
          <motion.h1 variants={textVariants}><span style={{color:'#5b6e74'}}>Software Engineer</span> | Full-Stack Web Developer \- </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <Link to="/Latest-work">
           <motion.button whileHover={{scale:1.1}} variants={textVariants}>See the Latest Work</motion.button>
           </Link>
            <a href="#Contact"><motion.button  whileHover={{scale:1.1}} variants={textVariants}>Contact Me</motion.button></a>
          </motion.div>
            <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png"/>
          </motion.div>
        </div>
        
        <div className="imageContainer">
          <img src="./hero.png" alt="hero"/>
        </div>
        
    </div>
  )
}

export default Hero;