//import styles from 'styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';

export function MainForm() {
   const taskNameInput = useRef<HTMLInputElement>(null);

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      alert('ook');
   }

   return (
      <form onSubmit={handleSubmit} className='form' action=''>
         <div className='formRow'>
            <DefaultInput
               id='meuInput'
               type='text'
               labelText='chama'
               placeholder='Digite algo'
               ref={taskNameInput}
            />
         </div>

         <div className='formRow'>
            <p>Próximo intervalo é de 35</p>
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
