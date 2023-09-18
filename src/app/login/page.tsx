import * as styles from './page.css';

export default function page() {
  return (
    <div className={styles.loginContainer}>
      <p className={styles.title}>Sign in</p>
      <p className={styles.subTitle}>Need an account?</p>
      <form className={styles.formType}>
        <input className={styles.inputType} type="email" />
        <input className={styles.inputType} type="password" />
        <button className={styles.submitButton} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
