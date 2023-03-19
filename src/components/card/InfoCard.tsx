import { Card, Image, Typography } from "antd";
import styles from "./InfoCard.module.css";

type InfoCardPropsType = {
  title: string;
  text: string;
  icon: string;
};
const InfoCard = ({ reason }: { reason: InfoCardPropsType }) => {
  return (
    <Card className={styles.card}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          style={{ maxWidth: "100px" }}
          preview={false}
          src={reason.icon}
        />
      </div>
      <Typography.Title className={styles.title} level={3}>
        {reason.title}
      </Typography.Title>
      <Typography.Text>{reason.text}</Typography.Text>
    </Card>
  );
};
export default InfoCard;
