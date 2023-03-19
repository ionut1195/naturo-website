import { Image } from "antd";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroText}>
          Discover the freshest, tastiest and most affordable organic vegetables
          & fruits with <span className="firstPart">Natu</span>
          <span className="secondPart">RO</span>. Get healthier and happier with
          just one click!
        </div>
        <Image className={styles.heroImage} preview={false} src="/basket.jpg" />
      </div>
    </div>
  );
};

export default Hero;
