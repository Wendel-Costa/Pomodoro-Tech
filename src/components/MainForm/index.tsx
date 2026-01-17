//import styles from 'styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function MainForm() {
   const { state, setState } = useTaskContext();
   const taskNameInput = useRef<HTMLInputElement>(null);

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (taskNameInput.current === null) return;

      const taskName = taskNameInput.current.value.trim();

      if (!taskName) {
         alert('Escreva a tarefa');
         return;
      }

      const newTask: TaskModel = {
         id: Date.now().toString(),
         name: taskName,
         startDate: Date.now(),
         completeDate: null,
         interruptDate: null,
         duration: 1,
         type: nextCycleType,
      };

      const secondsRemaining = newTask.duration * 60;

      setState(prevState => {
         return {
            ...prevState,
            config: { ...prevState.config },
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining: secondsRemaining,
            formattedSecondsRemaining: '00:00', // ver
            tasks: [...prevState.tasks, newTask],
         };
      });
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
