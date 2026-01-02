import styles from "./EmployeeCard.module.css";

function EmployeeCard({ user }) {
  return (
    <div className={styles.card}>
      <img className={styles.cover} src={user.coverPic} alt="cover" />

      <div className={styles.profileSection}>
        <img
          className={styles.profilePic}
          src={user.profilePic}
          alt={user.name}
        />
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.email}>{user.email}</p>
      </div>

      <div className={styles.meta}>
        <span>{user.age} yrs</span>
        <span>
          {user.city}, {user.country}
        </span>
      </div>

      <p className={user.status === "active" ? styles.active : styles.inactive}>
        {user.status.toUpperCase()}
      </p>

      <div className={styles.skills}>
        {user.skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <p className={styles.hobby}>🎯 Hobby: {user.hobby}</p>

      <div className={styles.foodSection}>
        <img
          className={styles.foodPic}
          src={user.favoriteFoodPic}
          alt="favorite food"
        />
        <span>Favorite Food</span>
      </div>
    </div>
  );
}

export default EmployeeCard;
