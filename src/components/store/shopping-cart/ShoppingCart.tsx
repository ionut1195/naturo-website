import { Button, Divider, Typography, message } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useCartItemsStore } from "../../../state/cartITemsStore";
import ProductCard from "../product-card/ProductCard";

import styles from "./ShoppingCart.module.css";
type ShoppingCartPropsType = {
  open: boolean;
  closeCart: () => void;
};

const ShoppingCart = ({ open, closeCart }: ShoppingCartPropsType) => {
  const { itemsInCart, emptyCart } = useCartItemsStore();
  const [messageApi, contextHolder] = message.useMessage();

  const onPlaceOrder = () => {
    messageApi.open({
      type: "success",
      content: "You have placed your order!",
    });
    emptyCart();
    closeCart();
  };
  return (
    <div className={`${styles.cart} ${open ? styles.visible : undefined}`}>
      {contextHolder}
      {open ? (
        <AiOutlineClose className={styles.closeIcon} onClick={closeCart} />
      ) : undefined}
      <Typography.Title style={{ textAlign: "center" }} level={2}>
        Shopping cart
      </Typography.Title>
      <div className={styles.itemsContainer}>
        {itemsInCart.map((item) => (
          <ProductCard isCartItem={true} product={item} />
        ))}
      </div>
      <Divider />
      <div className={styles.confirmOrderContainer}>
        <div className={styles.total}>
          Total amount:{" "}
          {itemsInCart
            .map((it) => it.qty * it.price)
            .reduce((acc, curr) => acc + curr, 0)}
          €
        </div>
        <Button
          onClick={onPlaceOrder}
          className={styles.confirmOrderButton}
          type="primary"
        >
          Confirm order
        </Button>
      </div>
    </div>
  );
};
export default ShoppingCart;
