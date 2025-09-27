import styles from './styles.module.css';

export function Footer() {
   return (
      <footer className={styles.footer}>
         <a href='https://github.com/Wendel-Costa' target='__blank'>
            PomoTech &copy; {new Date().getFullYear()} - Feito por Wendel Costa
         </a>
      </footer>
   );
}
