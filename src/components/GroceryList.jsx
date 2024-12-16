import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <h2>{i.item}</h2>
          <p>Category: {i.category}</p>
          <p>DETAILS: {i.details}</p>
          <p>Price: ${i.price_in_usd}</p>
          <p>IMG: {i.product_img}</p>
        </div>
      ))}
    </div>
  );
}
