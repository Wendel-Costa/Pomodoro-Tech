import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
   const [theme, setTheme] = useState<AvailableThemes>('dark');

   function handleTheme(
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
   ) {
      event.preventDefault();

      setTheme(prevTheme => {
         const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
         return nextTheme;
      });
   }

   return (
      <nav className={styles.menu}>
         <h1>{theme}</h1>
         <a
            className={styles.menuLink}
            href='#'
            aria-label='Ir para a Home'
            title='Ir para a Home'
         >
            <HouseIcon />
         </a>

         <a
            className={styles.menuLink}
            href='#'
            aria-label='Ir para o Histórico'
            title='Ir para o Histórico'
         >
            <HistoryIcon />
         </a>

         <a
            className={styles.menuLink}
            href='#'
            aria-label='Ir para as Configurações'
            title='Ir para as Configurações'
         >
            <SettingsIcon />
         </a>

         <a
            className={styles.menuLink}
            href='#'
            aria-label='Mudar Tema'
            title='Mudar Tema'
            onClick={handleTheme}
         >
            <SunIcon />
         </a>
      </nav>
   );
}
