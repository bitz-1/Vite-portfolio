import "../../scss/navbar.scss";
import {motion} from "framer-motion";
import Siderbar from "../sidebar/Siderbar";
const Navbar = () =>{
    return (
        <div className="navbar">
            <Siderbar/>
            <div className="wrapper"> 
            <motion.span
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.5}}>
              BitzTech Dev
            </motion.span>
                <div className="social">
                <a href="#"><img src="/discord.png" alt="discord"/></a>
                <a href="#"><img src="/github-logo.png" alt="github"/></a>
                <a href="#"><img src="/linkedin-logo.png" alt="linkedin"/></a>
                <a href="#"><img src="/twitter.png" alt="twitter"/></a>
                </div>
            </div>
        </div>
    )
};
export default Navbar;