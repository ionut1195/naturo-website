import { Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import InfoCard from "../../card/InfoCard";
import styles from "./About.module.css";
const whyNaturo = [
  {
    title: "Premium Quality Products",
    text: `Choose from our wide selection of organic, bio vegetables and fruits
        that are always harvested at peak ripeness.`,
    icon: "/quality.png",
  },
  {
    title: "Always Fresh",
    text: `Our products are always harvested when they are perfectly ripe, ensuring
        maximum freshness and flavor. `,
    icon: "/fresh.png",
  },
  {
    title: "Delivered Straight to Your Doorstep",
    text: `We deliver our products directly to your doorstep within hours of
        harvest, so you can enjoy them at their peak freshness and flavor.`,
    icon: "/shipping.png",
  },
];

const About = () => {
  const [arrowVisible, setArrowVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setArrowVisible(true);
        } else {
          setArrowVisible(false);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div className={styles.aboutSection} ref={ref} id="about">
      <Typography.Title level={2} className={styles.description}>
        Our goal
      </Typography.Title>
      <p className={styles.text}>
        Our mission natuRo was founded with a vision of providing everyone with
        access to healthy, organic food that is sourced directly from nature's
        bounty. We strive to make sure that everyone has access to the freshest
        produce available at an affordable price.
      </p>
      <Typography.Title className={styles.description} level={2}>
        Why choose <span className="firstPart">Natu</span>
        <span className="secondPart">Ro?</span>
      </Typography.Title>
      <div className={styles.cardsContainer}>
        {whyNaturo.map((reason, index) => (
          <InfoCard key={index} reason={reason} />
        ))}
      </div>
      <a
        className={`${styles.arrow} ${
          arrowVisible ? styles.visible : styles.notVisible
        }`}
        href="#header"
      >
        <FaArrowAltCircleUp />
      </a>
    </div>
  );
};

export default About;
