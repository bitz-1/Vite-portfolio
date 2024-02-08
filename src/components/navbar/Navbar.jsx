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
                <motion.a whileHover={{scale:1.1}}href="https://discord.com/users/bitztechdev"><img src="/discord.png" alt="discord"/></motion.a>
                <motion.a whileHover={{scale:1.1}} href="https://github.com/bitz-1"><img src="/github-logo.png" alt="github"/></motion.a>
                <motion.a whileHover={{scale:1.1}}href="https://www.linkedin.com/in/bitztechdev/"><img src="/linkedin-logo.png" alt="linkedin"/></motion.a>
                <motion.a whileHover={{scale:1.1}} href="https://twitter.com/ApurvMod007"><img src="/twitter.png" alt="twitter"/></motion.a>
                </div>
            </div>
        </div>
    )
};
export default Navbar;