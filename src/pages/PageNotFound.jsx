
import styles from "./PageNotFound.module.css"

function PageNotFound () {
  return (
    <div className={styles.pageNotFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oops! The page you are looking for does not exist.</p>

    </div>
  );
}

export default PageNotFound;







// export default function PageNotFound() {
//   return (
//     <div>
//       <h1>Page not found 😢</h1>
//     </div>
//   );
// }
