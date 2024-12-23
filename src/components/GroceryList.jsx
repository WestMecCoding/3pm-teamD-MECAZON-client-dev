import styles from "../styles/GroceryList.module.css";
import Star from "./Star";
export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((i) => {
        const image = new URL(i.product_img, import.meta.url).href;
        return (
          <div key={i.id} className={styles.item}>
            <h2>{i.item}</h2>
            <p>Category: {i.category}</p>
            <p>DETAILS: {i.details}</p>
            <p>Price: ${i.price_in_usd}</p>
            <img src={image} alt="new img" />
          </div>
        );
      })}
    </div>
  );
}

