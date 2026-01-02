import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.name}</div>
      <div className={styles.price}>₹ {props.price}</div>
    </div>
  );
}

export default ProductCard;
