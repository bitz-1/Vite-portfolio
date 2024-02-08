
import "../../scss/parallax.scss"
import {motion , useScroll,useTransform} from "framer-motion";
import {useRef} from "react";
const Parallax = ({type}) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref ,
    offset:["start start", "end start "]
  });

  const yAxisBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
  const yText = useTransform(scrollYProgress,[0,1],["0%","500%"]);
  
  return (
    <div className="parallax"
    ref={ref}
    style={{
        background:
            type==="services" 
            ? "linear-gradient(180deg, #FFFFFF,#a3a6a87a)"
            :"linear-gradient(180deg, #a3a6a87a,#FFFFFF)",
            }}
    >
     <motion.h1 style={{y :yText}}>{type==="services" ? "What i Do ?" :  "What i Did ?"}</motion.h1>
     <motion.div  className="coffee"></motion.div>  
     <motion.div  style={{x :yAxisBg}}className="macbook"></motion.div>
    </div>
  )
}

export default Parallax