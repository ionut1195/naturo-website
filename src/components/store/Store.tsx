import { AutoComplete, Checkbox } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useReducer } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { PRODUCTS, ProductType } from "../../products/products";
import { useCartItemsStore } from "../../state/cartITemsStore";
import { useOpenCartStore } from "../../state/useOpenCartStore";
import ProductCard from "./product-card/ProductCard";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import styles from "./Store.module.css";

type StateType = {
  legumesChecked: boolean;
  fruitsChecked: boolean;
  options: { value: string; category: string }[];
  selectedOption?: { value: string; category: string };
  filteredProducts: ProductType[];
};
const initialState: StateType = {
  legumesChecked: true,
  fruitsChecked: true,
  options: PRODUCTS.map((product) => ({
    value: product.name,
    category: product.category,
  })),
  selectedOption: { value: "", category: "" },
  filteredProducts: PRODUCTS,
};

type ActionType =
  | { type: "toggle-legumes-checkbox" }
  | { type: "toggle-fruits-checkbox" }
  | {
      type: "set-selected-option";
      payload: { selectedOption: { value: string } | undefined };
    }
  | {
      type: "set-filtered-products";
      payload: { filteredProducts: ProductType[] };
    }
  | { type: "set-no-fruits-options" }
  | { type: "set-no-legumes-options" }
  | { type: "set-legumes-options" }
  | { type: "set-fruits-options" };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "toggle-fruits-checkbox":
      return { ...state, fruitsChecked: !state.fruitsChecked };
    case "toggle-legumes-checkbox":
      return { ...state, legumesChecked: !state.legumesChecked };
    case "set-filtered-products":
      return { ...state, filteredProducts: action.payload.filteredProducts };
    case "set-no-fruits-options":
      return {
        ...state,
        options: state.options.filter((option) => option.category !== "fruit"),
      };
    case "set-no-legumes-options":
      return {
        ...state,
        options: state.options.filter((option) => option.category !== "legume"),
      };
    case "set-legumes-options":
      return {
        ...state,
        options: state.options.concat(
          PRODUCTS.filter((option) => option.category === "legume").map(
            (op) => ({ value: op.name, category: op.category })
          )
        ),
      };
    case "set-fruits-options":
      return {
        ...state,
        options: state.options.concat(
          PRODUCTS.filter((option) => option.category === "fruit").map(
            (op) => ({ value: op.name, category: op.category })
          )
        ),
      };

    default:
      return state;
  }
};
const Store = () => {
  const { itemsInCart } = useCartItemsStore();
  const { openCart, setOpenCart } = useOpenCartStore();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => setOpenCart(false);
    //eslint-disable-next-line
  }, []);

  const toggleCheckbox = (type: "fruits" | "legumes") => {
    if (type === "fruits") {
      dispatch({ type: "toggle-fruits-checkbox" });
      if (state.fruitsChecked) {
        dispatch({ type: "set-no-fruits-options" });
        dispatch({
          type: "set-filtered-products",
          payload: {
            filteredProducts: state.legumesChecked
              ? PRODUCTS.filter((product) => product.category !== "fruit")
              : [],
          },
        });
      } else {
        dispatch({ type: "set-fruits-options" });
        dispatch({
          type: "set-filtered-products",
          payload: {
            filteredProducts: state.filteredProducts.concat(
              PRODUCTS.filter((product) => product.category === "fruit")
            ),
          },
        });
      }
    } else if (type === "legumes") {
      dispatch({ type: "toggle-legumes-checkbox" });
      if (state.legumesChecked) {
        dispatch({ type: "set-no-legumes-options" });

        dispatch({
          type: "set-filtered-products",
          payload: {
            filteredProducts: state.fruitsChecked
              ? PRODUCTS.filter((product) => product.category !== "legume")
              : [],
          },
        });
      } else {
        dispatch({ type: "set-legumes-options" });
        dispatch({
          type: "set-filtered-products",
          payload: {
            filteredProducts: state.filteredProducts.concat(
              PRODUCTS.filter((product) => product.category === "legume")
            ),
          },
        });
      }
    }
  };

  const onSelectOption = (_: any, option: { value: string }) => {
    dispatch({
      type: "set-filtered-products",
      payload: {
        filteredProducts: state.filteredProducts.filter(
          (itm) => itm.name === option.value
        ),
      },
    });
  };
  return (
    <Content
      className={`${styles.content} ${
        openCart ? styles.contentOpenCart : undefined
      }`}
    >
      <div className={styles.filtersContainer}>
        <div className={styles.checkboxes}>
          <div className={styles.checkboxContainer}>
            <span>Fruits</span>
            <Checkbox
              className={styles.checkbox}
              onChange={() => toggleCheckbox("fruits")}
              checked={state.fruitsChecked}
            />
          </div>
          <div className={styles.checkboxContainer}>
            <span>Legumes</span>
            <Checkbox
              className={styles.checkbox}
              onChange={() => toggleCheckbox("legumes")}
              checked={state.legumesChecked}
            />
          </div>
        </div>
        <div>
          <div>Search</div>
          <AutoComplete
            allowClear
            onSelect={onSelectOption}
            onClear={() => {
              dispatch({
                type: "set-filtered-products",
                payload: { filteredProducts: PRODUCTS },
              });
            }}
            style={{ width: "100%" }}
            options={state.options}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
      </div>
      <div
        className={`${styles.productsContainer} ${
          openCart ? styles.productsContainerOpenCart : undefined
        }`}
      >
        {state.filteredProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
      {!state.fruitsChecked && !state.legumesChecked ? (
        <div>No matches</div>
      ) : undefined}
      <div className={styles.basketContainer}>
        <div
          onClick={() => setOpenCart(true)}
          className={styles.relativeContainer}
        >
          <FaShoppingBasket className={styles.basket} />
          <span className={styles.nrItems}>
            {itemsInCart.reduce((acc, item) => acc + item?.qty, 0)}
          </span>
        </div>
      </div>
      <ShoppingCart open={openCart} closeCart={() => setOpenCart(false)} />
    </Content>
  );
};

export default Store;
