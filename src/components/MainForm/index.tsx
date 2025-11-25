//import styles from 'styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
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
            <p>Próximo intervalo é de {state.config.workTime}</p>
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
