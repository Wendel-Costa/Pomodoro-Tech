import styles from './styles.module.css';

type DefaultButtonProps = {
   children: React.ReactNode;
   color?: 'blue' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
   children,
   color = 'blue',
   ...props
}: DefaultButtonProps) {
   return (
      <>
         <button className={`${styles.button} ${styles[color]}`} {...props}>
            {children}
         </button>
      </>
   );
}
