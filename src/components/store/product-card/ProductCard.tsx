import { Button, Card, Image, InputNumber } from "antd";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from "../../../products/products";
import { useCartItemsStore } from "../../../state/cartITemsStore";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  product,
  isCartItem = false,
}: {
  product: ProductType;
  isCartItem?: boolean;
}) => {
  const { setItemsInCart, removeItemCategoryFromCart } = useCartItemsStore();

  const [number, setNumber] = useState(0);
  const toggleNumber = (type: "plus" | "minus") => {
    if (type === "minus") {
      if (isCartItem && product.qty > 0) {
        setItemsInCart({ ...product, qty: -1 });
      }
      if (number > 0) {
        setNumber((prev) => prev - 1);
      }
    } else if (type === "plus") {
      if (isCartItem) {
        setItemsInCart({ ...product, qty: 1 });
      }
      setNumber((prev) => prev + 1);
    } else return;
  };

  const onSubmit = () => {
    if (number > 0) {
      setItemsInCart({ ...product, qty: number });
      setNumber(0);
    }
  };

  return (
    <Card
      bodyStyle={{ width: "100%" }}
      hoverable={!isCartItem}
      className={styles.productCard}
    >
      <div
        className={
          isCartItem ? styles.cartCardBodyContainer : styles.cardBodyContainer
        }
      >
        <div
          className={
            isCartItem ? styles.cartImageContainer : styles.imageContainer
          }
        >
          <Image
            loading="lazy"
            className={isCartItem ? styles.cartImage : styles.image}
            preview={false}
            src={product.img}
          />
        </div>
        <div>
          <div
            className={`${styles.productInfo} ${
              !isCartItem ? styles.margin : undefined
            }`}
          >
            <div>
              <div className={styles.name}>{product.name}</div>
              <div>Quantity: {isCartItem ? product.qty : number}</div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.qtyPriceContainer}>
                <span>
                  {product.price}€ / {product.type}
                </span>
                <span>
                  Total {product.price * (isCartItem ? product.qty : number)}€
                </span>
              </div>
              {isCartItem ? (
                <AiOutlineDelete
                  onClick={() => removeItemCategoryFromCart(product)}
                  className={styles.removeItemFromCart}
                />
              ) : undefined}
            </div>
          </div>
          <InputNumber
            controls={false}
            onChange={(val) => val && setNumber(val)}
            className={isCartItem ? styles.cartInput : styles.input}
            addonBefore={
              <div
                className={styles.toggleNumberButton}
                onClick={() => toggleNumber("minus")}
              >
                -
              </div>
            }
            addonAfter={
              <div
                className={styles.toggleNumberButton}
                onClick={() => toggleNumber("plus")}
              >
                +
              </div>
            }
            value={isCartItem ? product.qty : number}
          />
          {!isCartItem ? (
            <div className={styles.addToCartContainer}>
              <Button
                className={styles.addToCart}
                type="primary"
                icon={<FaShoppingCart className={styles.cartIcon} />}
                onClick={onSubmit}
              >
                Add to cart
              </Button>
            </div>
          ) : undefined}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
