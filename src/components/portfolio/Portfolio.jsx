import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic cum dolorem ea architecto ad, sit accusantium, sapiente id quibusdam laudantium et eligendi debitis blanditiis necessitatibus? Neque fuga quod et.",
  },
  {
    id: 2,
    title: "Music App",
    img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic cum dolorem ea architecto ad, sit accusantium, sapiente id quibusdam laudantium et eligendi debitis blanditiis necessitatibus? Neque fuga quod et.",
  },
  {
    id: 3,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/16743789/pexels-photo-16743789/free-photo-of-delicious-cake-with-fruits.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic cum dolorem ea architecto ad, sit accusantium, sapiente id quibusdam laudantium et eligendi debitis blanditiis necessitatibus? Neque fuga quod et.",
  },
  {
    id: 4,
    title: "Vanila JS App",
    img: "https://images.pexels.com/photos/19165527/pexels-photo-19165527/free-photo-of-a-cup-of-coffee-and-books-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic cum dolorem ea architecto ad, sit accusantium, sapiente id quibusdam laudantium et eligendi debitis blanditiis necessitatibus? Neque fuga quod et.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Fetured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
