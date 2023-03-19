import { Footer } from "antd/es/layout/layout";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { useOpenCartStore } from "../../state/useOpenCartStore";
import styles from "./PagesFooter.module.css";
import SubscribeForm from "./SubscribeForm";
const PagesFooter = () => {
  const { openCart } = useOpenCartStore();

  return (
    <Footer
      id="contact"
      className={`${styles.footer} ${
        openCart ? styles.footerOpenCart : undefined
      }`}
    >
      <div className={styles.footerContent}>
        <div>
          <p className={styles.description}>Contact</p>
          <div className={styles.iconTextContainer}>
            <FaPhone className={styles.icon} />
            <p className={styles.text}>012 34567890</p>
          </div>
          <div className={styles.iconTextContainer}>
            <FaEnvelope className={styles.icon} />
            <p className={styles.text}>naturo@gmail.com</p>
          </div>
        </div>
        <div>
          <p className={styles.description}>Follow us!</p>
          <div className={styles.socialsContainer}>
            <FaInstagram className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </div>
        <SubscribeForm />
      </div>
    </Footer>
  );
};

export default PagesFooter;
