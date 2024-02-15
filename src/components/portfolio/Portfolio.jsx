import { useRef } from "react";
import "../../scss/portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ERS",
    img: "./ers.jpg",
    desc: " This is a full-stack web application called Employee Review System (ERS). Built using Node.js, Express.js, MongoDB, Passport.js, and Passport-local for authentication The application follows the MVC structure.Password for new Admin - ghostAplha",
    href:"https://git-bitz-ers.onrender.com/",
  },
  {
    id: 2,
    title: "IssueTracker",
    img: "./issue.png",
    desc: "Issue Tracker web application built using Node.js. The application allows users to track and manage issues or tasks within a project. The application follows the MVC structure.",
    href:"https://github-bitz-issuetracker.onrender.com/"
  },
  {
    id: 3,
    title: "CineFlex",
    img: "./cineflex.gif",
    desc: "Cine-Flex Web application built using Node.js. The application allows users to search movies Through rest API from movie db.",
    href:"https://bitz-1.github.io/movieAppCineflex/"
  },
  {
    id: 4,
    title: "AutoID",
    img: "./AutoID.png",
    desc: "AUTOID is a full-stack Decentralized supply-chain web application using local blockchain network with deployed smart contract . Built using Node.js , PHP, Mysql,Web3.js,Solidity,Qrious,Ganache,Metamask for wallet transactions. The Application list products with unique barcode with location and update as it pass it on to next chain .",
    href:"https://github.com/bitz-1/DAPP"
  },
  {
    id: 5,
    title: "Krimfy",
    img: "./music.jpg",
    desc: "Music App - comming soon",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
   
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}><button>See Demo</button></a> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="barProgress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;