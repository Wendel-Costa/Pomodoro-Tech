//import styles from 'styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
   return (
      <form className='form' action=''>
         <div className='formRow'>
            <DefaultInput
               id='meuInput'
               type='text'
               labelText='chama'
               placeholder='Digite algo'
            />
         </div>

         <div className='formRow'>
            <p>Próximo intervalo é de 35 min</p>
         </div>

         <div className='formRow'>
            <Cycles />
         </div>

         <div className='formRow'>
            <DefaultButton>
               <PlayCircleIcon />
            </DefaultButton>
         </div>
      </form>
   );
}
